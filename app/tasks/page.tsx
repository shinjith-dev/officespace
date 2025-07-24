import React from "react";
import ProjectCard from "./_components/project";
import { Task, tasks } from "./_utils/data";

const TasksPage = () => {
  const grouped = tasks.reduce<Record<string, Task[]>>((acc, task) => {
    acc[task.project] = acc[task.project] || [];
    acc[task.project].push(task);
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto py-8 space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Tasks & Projects</h1>
        <p className="text-muted-foreground mt-1">
          View and manage all your project tasks in one place. Follow the link
          for more details on the task.
        </p>
      </div>
      {Object.entries(grouped).map(([project, projectTasks]) => (
        <ProjectCard
          key={project}
          project={project}
          projectTasks={projectTasks}
        />
      ))}
    </div>
  );
};

export default TasksPage;
