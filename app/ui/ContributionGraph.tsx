import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const QUERY = `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays { date contributionCount contributionLevel }
          }
        }
      }
    }
  }
`;

const LEVEL_CLASS: Record<string, string> = {
  NONE: "bg-contrib-0",
  FIRST_QUARTILE: "bg-contrib-1",
  SECOND_QUARTILE: "bg-contrib-2",
  THIRD_QUARTILE: "bg-contrib-3",
  FOURTH_QUARTILE: "bg-contrib-4",
};

const LEVELS = [
  "bg-contrib-0",
  "bg-contrib-1",
  "bg-contrib-2",
  "bg-contrib-3",
  "bg-contrib-4",
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WEEKDAYS = ["", "Mon", "", "Wed", "", "Fri", ""];

type Day = {
  date: string;
  contributionCount: number;
  contributionLevel: string;
};

type Week = { contributionDays: Day[] };

type Calendar = { totalContributions: number; weeks: Week[] };

const CELL = "size-[var(--cell)]";
const CELL_W = "w-[var(--cell)]";
const GAP = "gap-[var(--gap)]";

async function getContributions(login: string) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: QUERY, variables: { login } }),
    next: { revalidate: 3600 }, // refresh at most once an hour
  });

  if (!res.ok) return null;
  const json = await res.json();
  return (json.data?.user?.contributionsCollection?.contributionCalendar ??
    null) as Calendar | null;
}

function monthLabels(weeks: Week[]) {
  return weeks.map((week, index) => {
    const first = week.contributionDays[0]?.date;
    if (!first) return null;
    const month = new Date(`${first}T00:00:00Z`).getUTCMonth();
    const previous = weeks[index - 1]?.contributionDays[0]?.date;
    const isNewMonth =
      !!previous && new Date(`${previous}T00:00:00Z`).getUTCMonth() !== month;
    // skip labels that would clip against the right edge
    if (!isNewMonth || index > weeks.length - 4) return null;
    return MONTHS[month];
  });
}

export default async function ContributionGraph({
  login = "Ekomjah",
}: {
  login?: string;
}) {
  const calendar = await getContributions(login);
  if (!calendar) return null; // fail quietly instead of breaking the page

  const { weeks, totalContributions } = calendar;
  const days: Day[] = weeks.flatMap((week) => week.contributionDays);
  const labels = monthLabels(weeks);

  return (
    <section className="border-foreground/[0.07] bg-foreground/[0.03] rounded-[30px] border p-5">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p className="text-foreground/50 text-base">
          {totalContributions.toLocaleString("en-US")} contributions in the last
          12 months
        </p>
      </div>

      <div
        tabIndex={0}
        role="group"
        aria-label="Daily contributions calendar, scrolls sideways"
        className="contrib-frame focus-visible:outline-foreground rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <div className="contrib-scroll p-4 [&::-webkit-scrollbar]:hidden">
          <div aria-hidden="true" className="contrib flex w-max">
            <div className={`flex flex-col ${GAP} pt-[20px] pr-2`}>
              {WEEKDAYS.map((weekday, index) => (
                <div
                  key={index}
                  className={`${CELL} text-foreground/35 flex items-center font-mono text-[9px] leading-none tracking-[0.06em]`}
                >
                  {weekday}
                </div>
              ))}
            </div>

            <div>
              <div className={`grid grid-flow-col grid-rows-1 ${GAP} mb-[7px]`}>
                {labels.map((label, index) => (
                  <div key={index} className={`${CELL_W} relative h-[13px]`}>
                    {label && (
                      <span className="absolute bottom-0 left-0 font-mono text-[11px] leading-none tracking-[0.06em] whitespace-nowrap text-neutral-500">
                        {label}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className={`grid grid-flow-col grid-rows-7 ${GAP}`}>
                {days.map((day) => (
                  <span
                    key={day.date}
                    title={`${day.contributionCount} contributions on ${day.date}`}
                    className={`${CELL} rounded-[2px] ${LEVEL_CLASS[day.contributionLevel] ?? LEVEL_CLASS.NONE}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
