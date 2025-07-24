import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Member, team } from "./_utils/data";

const statusColor: Record<Member["status"], string> = {
  "In Office": "bg-primary/10 text-primary",
  "On Leave": "bg-chart-4/10 text-chart-4",
  "Work From Home": "bg-chart-3/10 text-chart-3",
};

export default function TeamPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold">Your Team</h1>
      <p className="text-muted-foreground mt-1 mb-5">
        Meet your teammates and see their current work status.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {team.map((member) => (
          <Card key={member.name} className="p-0 shadow-none">
            <CardContent className="flex items-center gap-4 p-4">
              <Avatar>
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-semibold">{member.name}</div>
                <div className="text-xs text-muted-foreground">
                  {member.role}
                </div>
                <div className="text-xs mt-2">
                  <span className="font-medium text-muted-foreground">
                    Projects:
                  </span>{" "}
                  {member.projects.join(", ")}
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  statusColor[member.status]
                }`}
              >
                {member.status}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
