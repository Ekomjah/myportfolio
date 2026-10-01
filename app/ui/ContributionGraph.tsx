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

const CELL = "size-[12px] max-[600px]:size-[10px]";
const CELL_W = "w-[12px] max-[600px]:w-[10px]";
const GAP = "gap-[3px] max-[600px]:gap-[2px]";

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
    <section className="rounded-[30px] border border-foreground/[0.07] bg-foreground/[0.03] p-5">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h2 className="m-0 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/45">
          GitHub activity
        </h2>
        <div
          aria-hidden="true"
          className="flex items-center gap-[6px] font-mono text-[11px] text-foreground/40"
        >
          <span>less</span>
          {LEVELS.map((level) => (
            <span key={level} className={`${CELL} rounded-[2px] ${level}`} />
          ))}
          <span>more</span>
        </div>
      </div>

      <p className="mt-3 mb-4 flex items-baseline gap-2">
        <span className="font-mono text-[2rem] leading-none tracking-tight tabular-nums">
          {totalContributions.toLocaleString("en-US")}
        </span>
        <span className="text-[13px] text-foreground/50">
          contributions in the last 12 months
        </span>
      </p>

      <div
        tabIndex={0}
        role="group"
        aria-label="Daily contributions calendar, scrolls sideways"
        className="p-4 rounded-2xl overflow-x-auto [&::-webkit-scrollbar]:hidden max-[1100px]:mask-[linear-gradient(to_right,#000_calc(100%-32px),transparent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
      >
        <div aria-hidden="true" className="flex w-max">
          <div className={`flex flex-col ${GAP} pt-[20px] pr-2`}>
            {WEEKDAYS.map((weekday, index) => (
              <div
                key={index}
                className={`${CELL} flex items-center font-mono text-[9px] leading-none tracking-[0.06em] text-foreground/35 max-[600px]:text-[8px]`}
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
                    <span className="absolute bottom-0 left-0 font-mono text-[11px] leading-none tracking-[0.06em] whitespace-nowrap text-neutral-500 max-[600px]:text-[10px]">
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

      <Link
        href={`https://github.com/${login}`}
        target="_blank"
        className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] tracking-[0.08em] text-foreground/45 transition-colors duration-200 motion-reduce:transition-none hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      >
        github.com/{login}
        <ArrowUpRight />
      </Link>
    </section>
  );
}
