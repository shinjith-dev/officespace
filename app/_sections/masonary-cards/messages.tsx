import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail } from "lucide-react";
import React from "react";

const messages = [
  {
    from: "Priya Patel",
    avatar: "https://ui-avatars.com/api/?name=Priya+Patel",
    subject: "Leave Request Approved",
    preview: "Your leave for next week has been appro...",
    time: "09:15 AM",
  },
  {
    from: "John Smith",
    avatar: "https://ui-avatars.com/api/?name=John+Smith",
    subject: "Project Update",
    preview: "The client meeting is rescheduled to Frida...",
    time: "Yesterday",
  },
  {
    from: "Aisha Khan",
    avatar: "https://ui-avatars.com/api/?name=Aisha+Khan",
    subject: "Welcome!",
    preview: "Glad to have you on the team. Let's ca...",
    time: "2 days ago",
  },
];

const MessagesCard = () => (
  <Card className="gap-3">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Mail className="w-5 h-5" />
        Unread Messages
      </CardTitle>
      <CardDescription>
        Here are your latest unread messages and notifications.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4 w-full">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-primary/5 p-3 rounded-lg w-full"
          >
            <Avatar>
              <AvatarImage src={msg.avatar} alt={msg.from} />
              <AvatarFallback>
                {msg.from
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">{msg.subject}</div>
              <div className="text-xs text-muted-foreground truncate">
                {msg.preview}
              </div>
            </div>
            <div className="text-xs text-muted-foreground shrink-0">
              {msg.time}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default MessagesCard;
