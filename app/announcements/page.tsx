import React from "react";
import { announcements } from "./_utils/data";

export default function AnnouncementsPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold">Announcements</h1>
      <p className="text-muted-foreground mt-1 mb-5">
        Stay up to date with the latest office news, events, and important
        updates.
      </p>
      <div className="space-y-5">
        {announcements.map((announcement, idx) => (
          <div key={idx} className="bg-chart-3/5 rounded-lg p-5 border">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg">{announcement.name}</h2>
              <span className="text-xs text-muted-foreground">
                {announcement.date}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {announcement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
