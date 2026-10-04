import ProjectGrid from "@/app/ui/projects";

export default function ProjectsPage() {
  return (
    <main
      id="projects"
      className="max-w-page border-foreground/10 mx-auto w-full border-b p-8 pb-12"
    >
      <div>
        <h2 className="group m-0 mt-8 flex w-fit items-center text-xl font-bold">
          <span className="group-hover:text-muted transition-colors duration-200">
            Selected Projects
          </span>{" "}
        </h2>
        <p className="text-foreground/60 text-sm">
          A space for the work that best shows how I think and build...
        </p>
      </div>
      <ProjectGrid />
    </main>
  );
}
