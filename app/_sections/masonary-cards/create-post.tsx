"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import React, { useRef, useState } from "react";

const CreatePostCard = () => {
  const [showActions, setShowActions] = useState(false);
  const [tab, setTab] = useState("post");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFocus = () => setShowActions(true);
  const handleCancel = () => {
    setShowActions(false);
    if (textareaRef.current) textareaRef.current.value = "";
  };

  return (
    <Card className="break-inside-avoid">
      <Tabs
        defaultValue="post"
        value={tab}
        onValueChange={setTab}
        className="w-full"
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SquarePen className="w-5 h-5" />
            Write something
          </CardTitle>
          <CardDescription>
            Share an update, ask a question, or give a shoutout!
          </CardDescription>
          <CardAction>
            <TabsList>
              <TabsTrigger value="post">Post</TabsTrigger>
              <TabsTrigger value="shoutout">Shoutout</TabsTrigger>
            </TabsList>
          </CardAction>
        </CardHeader>

        <CardContent className="relative">
          <TabsContent value="post">
            <Textarea
              ref={textareaRef}
              placeholder="What's on your mind? Share your thoughts, ideas, or updates with the office..."
              onFocus={handleFocus}
            />
          </TabsContent>
          <TabsContent value="shoutout">
            <Textarea
              ref={textareaRef}
              placeholder="Give a shoutout! Celebrate a teammate's achievement or express your appreciation..."
              onFocus={handleFocus}
            />
          </TabsContent>
          {showActions && (
            <div className="flex gap-2 pt-3 justify-end">
              <Button size="sm" variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
              <Button size="sm">Post</Button>
            </div>
          )}
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default CreatePostCard;
