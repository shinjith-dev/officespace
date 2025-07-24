import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, CalendarPlus } from "lucide-react";
import Link from "next/link";
import React from "react";

type Event = {
  name: string;
  date: string;
  description: string;
  link?: string;
};

const events: Event[] = [
  {
    name: "Quarterly Townhall",
    date: "Friday, Aug 1, 4:00 PM",
    description: "Company-wide updates, Q&A, and team recognitions.",
    link: "#",
  },
  {
    name: "Diwali Celebration",
    date: "Thursday, Oct 23, 6:00 PM",
    description: "Potluck, games, and prizes for best dressed.",
    link: "#",
  },
  {
    name: "Learning Week",
    date: "Sept 15 - Sept 19",
    description: "Workshops and webinars to upskill. Earn certificates.",
    link: "#",
  },
  {
    name: "Team Outing",
    date: "Saturday, Sept 27",
    description: "Outdoor activities and team bonding.",
    link: "#",
  },
];

const EventsCard = () => {
  return (
    <Card className="gap-3">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-chart-2" />
          Upcoming Events
        </CardTitle>
        <CardDescription>
          Don&apos;t miss out on these office events and activities.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.name}
              className="shadow-none border-none bg-chart-2/10 p-3 rounded-lg space-y-2"
            >
              <div className="flex justify-between">
                <div>
                  <h5 className="font-medium">{event.name}</h5>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </div>
                <Button
                  variant="outline"
                  className="rounded-full bg-transparent"
                  size="icon"
                >
                  <CalendarPlus />
                </Button>
              </div>
              <p className="text-sm text-card-foreground">
                {event.description}
              </p>
              {event.link && (
                <Link
                  href={event.link}
                  className="text-sm text-primary underline"
                >
                  More info
                </Link>
              )}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Want to add an event? Contact HR or your admin team.
        </p>
      </CardFooter>
    </Card>
  );
};

export default EventsCard;
