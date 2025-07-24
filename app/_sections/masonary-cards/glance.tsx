import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Sun, Mail, ListTodo, Bell } from "lucide-react";

const user = {
  name: "Jon Doe",
  unreadMessages: 5,
  pendingTasks: 3,
  unreadEmail: 2,
  notifications: 4,
};

function formatDateTime() {
  const now = new Date();
  return now.toLocaleString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function GlanceCard() {
  return (
    <Card className="break-inside-avoid relative overflow-hidden bg-yellow-500/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sun className="w-5 h-5 text-yellow-500" />
          Good morning, {user.name}
        </CardTitle>
        <CardDescription>{formatDateTime()}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>
            <span className="font-medium">{user.unreadMessages}</span> unread
            message{user.unreadMessages !== 1 && "s"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ListTodo className="w-4 h-4" />
          <span>
            <span className="font-medium">{user.pendingTasks}</span> pending
            task
            {user.pendingTasks !== 1 && "s"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4" />
          <span>
            <span className="font-medium">{user.notifications}</span>{" "}
            notification
            {user.notifications !== 1 && "s"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
