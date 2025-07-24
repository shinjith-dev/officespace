"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CalendarDays, PlaneTakeoff } from "lucide-react";

const leaveBalances = [
  {
    type: "Casual Leave",
    used: 4,
    total: 12,
    color: "text-primary",
  },
  {
    type: "Sick Leave",
    used: 2,
    total: 8,
    color: "text-chart-2",
  },
  {
    type: "Earned Leave",
    used: 6,
    total: 15,
    color: "text-chart-3",
  },
];

const holidays = [
  {
    date: "2025-08-15",
    name: "Independence Day",
    description: "National holiday across India.",
  },
  {
    date: "2025-09-02",
    name: "Ganesh Chaturthi",
    description: "Celebration of Lord Ganesha's birthday.",
  },
  {
    date: "2025-10-02",
    name: "Gandhi Jayanti",
    description: "Birthday of Mahatma Gandhi.",
  },
  {
    date: "2025-10-23",
    name: "Diwali",
    description: "Festival of Lights.",
  },
];

function formatHolidayDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function LeaveCard() {
  return (
    <Card className="break-inside-avoid relative overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PlaneTakeoff className="w-5 h-5" />
          Leave & Holidays
        </CardTitle>
        <CardDescription>
          Track your leave balance and upcoming holidays. Plan ahead!
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Leave Balances Section */}
        <div className="flex flex-col items-center gap-4 mb-4">
          <div className="flex justify-around w-full">
            {leaveBalances.map((leave) => (
              <div key={leave.type} className="flex flex-col items-center">
                <p className="text-xs">
                  <span className={`text-2xl font-medium ${leave.color}`}>
                    {leave.used}
                  </span>
                  /{leave.total}
                </p>
                <span className="text-xs text-muted-foreground text-center">
                  {leave.type}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-muted my-4" />
        {/* Holidays Carousel Section */}
        <Carousel>
          <CarouselContent>
            {holidays.map((holiday, idx) => (
              <CarouselItem key={idx}>
                <div className="flex flex-col items-center gap-2 py-6">
                  <CalendarDays className="w-8 h-8 text-chart-2 mb-2" />
                  <div className="font-semibold text-base">{holiday.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {holiday.description}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {formatHolidayDate(holiday.date)}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="translate-x-10" />
          <CarouselNext className="-translate-x-10" />
        </Carousel>
      </CardContent>
    </Card>
  );
}
