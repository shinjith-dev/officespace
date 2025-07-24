import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, FolderKanban } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

type Task = {
  id: string;
  title: string;
  status: "To Do" | "In Progress" | "Review" | "Done";
  assignee: { name: string; avatar: string; fallback: string };
  project: string;
  due: string;
};

type ProjectKanbanProps = {
  project: string;
  projectTasks: Task[];
};

const statuses: Task["status"][] = ["To Do", "In Progress", "Review", "Done"];

const ProjectKanban: React.FC<ProjectKanbanProps> = ({
  project,
  projectTasks,
}) => (
  <Card className="mb-6">
    <CardHeader>
      <div className="flex justify-between">
        <CardTitle className="flex gap-2 items-center">
          <FolderKanban className="w-5 h-5 text-primary" />
          {project}
        </CardTitle>
        <CardDescription>
          {projectTasks.length} task
          {projectTasks.length !== 1 && "s"}
        </CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {statuses.map((status) => (
          <div key={status}>
            <div className="font-semibold mb-2 text-sm">{status}</div>
            <div className="space-y-3">
              {projectTasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <div
                    key={task.id}
                    className="flex gap-3 bg-chart-2/10 p-3 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="font-medium">{task.title}</div>
                      <div className="text-xs text-muted-foreground mb-2">
                        Due: {task.due}
                      </div>
                      <Avatar>
                        <AvatarImage
                          src={task.assignee.avatar}
                          alt={task.assignee.name}
                        />
                        <AvatarFallback>
                          {task.assignee.fallback}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full mb-2"
                      >
                        <ExternalLink />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default ProjectKanban;
