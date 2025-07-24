import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, FolderClock } from "lucide-react";
import Link from "next/link";
import React from "react";

type Project = {
  name: string;
  pendingTasks: number;
  progress: number;
  toatlPending: number;
  members: { name: string; avatar: string; fallback: string }[];
};

const projects: Project[] = [
  {
    name: "Project X",
    pendingTasks: 4,
    progress: 33,
    toatlPending: 17,
    members: [
      {
        name: "shadcn",
        avatar: "https://github.com/shadcn.png",
        fallback: "CN",
      },
      {
        name: "leerob",
        avatar: "https://github.com/leerob.png",
        fallback: "LR",
      },
      {
        name: "shinjith-dev",
        avatar: "https://github.com/shinjith-dev.png",
        fallback: "SD",
      },
    ],
  },
  {
    name: "Website Redesign",
    pendingTasks: 2,
    progress: 80,
    toatlPending: 5,
    members: [
      {
        name: "leerob",
        avatar: "https://github.com/leerob.png",
        fallback: "LR",
      },
      {
        name: "shinjith-dev",
        avatar: "https://github.com/shinjith-dev.png",
        fallback: "SD",
      },
    ],
  },
  {
    name: "Mobile App Launch",
    pendingTasks: 7,
    progress: 45,
    toatlPending: 12,
    members: [
      {
        name: "shadcn",
        avatar: "https://github.com/shadcn.png",
        fallback: "CN",
      },
      {
        name: "shinjith-dev",
        avatar: "https://github.com/shinjith-dev.png",
        fallback: "SD",
      },
    ],
  },
];

const ProjectsCard = () => {
  return (
    <Card className="gap-3 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FolderClock className="w-5 h-5 text-primary" />
          Your Projects
        </CardTitle>
        <CardDescription>
          Quick view of your projects and team progress.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="shadow-none border-none bg-primary/10 p-3 rounded-lg space-y-2"
            >
              <div className="flex justify-between gap-3">
                <div>
                  <h5 className="font-medium">{project.name}</h5>
                  <p className="text-xs text-card-foreground">
                    {project.pendingTasks} pending task
                    {project.pendingTasks !== 1 && "s"} from you
                  </p>
                </div>
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="rounded-full bg-transparent"
                >
                  <Link href="/tasks">
                    <ChevronRight />
                  </Link>
                </Button>
              </div>
              <div className="flex gap-3 items-center justify-between">
                <div className="grow">
                  <Progress value={project.progress} />
                  <p className="text-xs mt-1">
                    {project.progress}% Completed, {project.toatlPending}{" "}
                    pending task{project.pendingTasks !== 1 && "s"}
                  </p>
                </div>
                <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                  {project.members.map((member) => (
                    <Avatar key={member.name}>
                      <AvatarImage
                        src={member.avatar}
                        alt={`@${member.name}`}
                      />
                      <AvatarFallback>{member.fallback}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Need help? Reach out to your project manager or team lead.
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProjectsCard;
