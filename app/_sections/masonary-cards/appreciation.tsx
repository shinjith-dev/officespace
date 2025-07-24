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
import { Medal, MessageSquareShare, PartyPopper } from "lucide-react";
import React from "react";

type Shoutout = {
  name: string;
  avatar: string;
  description: string;
  reactions: { name: string; avatar: string; fallback: string }[];
};

const shoutouts: Shoutout[] = [
  {
    name: "Sebastian Ansalam",
    avatar: "https://github.com/shinjith-dev.png",
    description:
      "Went above and beyond to help the team meet a tight deadline. Thank you for your dedication!",
    reactions: [
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
    name: "Priya Patel",
    avatar: "https://ui-avatars.com/api/?name=Priya+Patel",
    description:
      "Organized a fantastic team-building event last Friday. Everyone had a great time!",
    reactions: [
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
  {
    name: "John Smith",
    avatar: "https://ui-avatars.com/api/?name=John+Smith",
    description:
      "Received excellent client feedback for the recent project delivery. Keep up the great work!",
    reactions: [
      {
        name: "leerob",
        avatar: "https://github.com/leerob.png",
        fallback: "LR",
      },
      {
        name: "shadcn",
        avatar: "https://github.com/shadcn.png",
        fallback: "CN",
      },
    ],
  },
  {
    name: "Aisha Khan",
    avatar: "https://ui-avatars.com/api/?name=Aisha+Khan",
    description: "Helped onboard new team members and made them feel welcome.",
    reactions: [
      {
        name: "shinjith-dev",
        avatar: "https://github.com/shinjith-dev.png",
        fallback: "SD",
      },
    ],
  },
];

const AppreciationCard = () => {
  return (
    <Card className="gap-3">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Medal className="w-5 h-5" />
          Wall of Appreciation
        </CardTitle>
        <CardDescription>
          Celebrate your colleagues&apos; achievements, teamwork, and positive
          impact.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {shoutouts.map((project) => (
            <div
              key={project.name}
              className="shadow-none border-none bg-chart-2/5 p-3 rounded-lg space-y-2"
            >
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={project.avatar} alt={`@${project.name}`} />
                  <AvatarFallback>
                    {project.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <h5 className="font-medium">{project.name}</h5>
              </div>
              <p className="text-xs text-card-foreground">
                {project.description}
              </p>
              <div className="flex gap-2 items-center justify-end">
                <Button
                  title="Celebrate"
                  size="icon"
                  variant="outline"
                  className="rounded-full bg-transparent"
                >
                  <PartyPopper />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full bg-transparent"
                >
                  <MessageSquareShare />
                  Message
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Want to appreciate someone? Give them a shoutout and spread
          positivity!
        </p>
      </CardFooter>
    </Card>
  );
};

export default AppreciationCard;
