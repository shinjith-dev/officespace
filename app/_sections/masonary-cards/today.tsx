"use client";

import React, { useCallback } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Gift,
  PartyPopper,
  UserPlus,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Calendar1,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

const todaySpecials = [
  {
    icon: <PartyPopper className="w-5 h-5 text-pink-500" />,
    title: "Birthday",
    description:
      "🎉 It's Jane Doe's birthday today! Wish her a wonderful year ahead.",
  },
  {
    icon: <Briefcase className="w-5 h-5 text-blue-500" />,
    title: "Work Anniversary",
    description:
      "👏 John Smith celebrates 5 years with us today. Congratulate him!",
  },
  {
    icon: <UserPlus className="w-5 h-5 text-green-500" />,
    title: "New Joinee",
    description: "👋 Welcome Priya Patel to the team! Say hello and connect.",
  },
  {
    icon: <Gift className="w-5 h-5 text-yellow-500" />,
    title: "Milestone",
    description:
      "🎯 Sales team crossed 1M in revenue this quarter. Kudos to all!",
  },
];

export default function TodayCard() {
  const [api, setApi] = React.useState<CarouselApi>();

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  return (
    <Card className="relative overflow-hidden bg-chart-2/5 w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar1 className="w-5 h-5 text-chart-2" />
          Today
        </CardTitle>
        <CardDescription>
          Here&apos;s what&apos;s special in your office today.
        </CardDescription>
        <CardAction className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="rounded-full bg-transparent"
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="rounded-full bg-transparent"
          >
            <ChevronRight />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {todaySpecials.map((item, idx) => (
              <CarouselItem key={idx} className="w-[70%] mx-auto">
                <div className="flex flex-col items-center justify-center gap-2 py-6">
                  <div>{item.icon}</div>
                  <div className="font-semibold w-fit">{item.title}</div>
                  {/* <div className="text-center text-sm text-muted-foreground">
                    {item.description}
                  </div> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </Card>
  );
}
