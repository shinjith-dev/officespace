import React from "react";
import GlanceCard from "./glance";
import TodayCard from "./today";
import LeaveCard from "./leave";
import CreatePostCard from "./create-post";
import ProjectsCard from "./projects";
import AppreciationCard from "./appreciation";
import AnnouncementsCard from "./announcements";
import EventsCard from "./events";
import MessagesCard from "./messages";

export default function MasonryCards() {
  return (
    <div className="flex max-w-7xl mx-auto gap-5 items-start px-5 md:flex-row flex-col-reverse">
      <div className="flex-1 lg:basis-1/3 flex flex-col gap-5">
        <GlanceCard />
        <TodayCard />
        <LeaveCard />
        <EventsCard />
      </div>
      <div className="flex-1 lg:basis-2/3 space-y-5 w-full">
        <CreatePostCard />
        <div className="flex gap-5 items-start md:flex-row flex-col">
          <div className="flex-1 w-full md:basis-1/2 flex flex-col gap-5">
            <ProjectsCard />
            <AnnouncementsCard />
          </div>
          <div className="flex-1 w-full md:basis-1/2 flex flex-col gap-5">
            <AppreciationCard />
            <MessagesCard />
          </div>
        </div>
      </div>
    </div>
  );
}
