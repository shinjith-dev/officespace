import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Megaphone } from "lucide-react";
import Link from "next/link";
import React from "react";

type Announcement = {
  name: string;
  description: string;
};

const announcements: Announcement[] = [
  {
    name: "Quarterly Townhall",
    description:
      "Join us for the company-wide townhall on Friday at 4 PM. Updates, Q&A, and team recognitions.",
  },
  {
    name: "New Health Insurance Policy",
    description:
      "We&apos;ve upgraded our health insurance coverage. Check your email for details and enrollment steps.",
  },
  {
    name: "Office Renovation",
    description:
      "Renovation work will begin next week. Some workspaces will be temporarily relocated.",
  },
];

const AnnouncementsCard = () => {
  return (
    <Card className="gap-3">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Megaphone className="w-5 h-5" />
          Announcements
        </CardTitle>
        <CardDescription>
          Important updates, events, and news happening in your office.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div
              key={announcement.name}
              className="shadow-none border-none bg-chart-3/5 p-3 rounded-lg space-y-2"
            >
              <h5 className="font-medium">{announcement.name}</h5>
              <p className="text-xs text-card-foreground">
                {announcement.description}
              </p>
              <Link
                href={"/announcements"}
                className="text-sm text-chart-3 underline"
              >
                More info
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Have an announcement to share? Contact HR or your admin team.
        </p>
      </CardFooter>
    </Card>
  );
};

export default AnnouncementsCard;
