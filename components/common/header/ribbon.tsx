import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/shine-border";
import React from "react";

type Props = {};

const HeaderRibbon = (props: Props) => {
  return (
    <div className="p-3 max-w-5xl mx-auto">
      <div className="w-full relative py-3 px-4 flex items-center justify-between bg-card rounded-md shadow mb-4">
        <ShineBorder
          shineColor={[
            "var(--chart-1)",
            "var(--chart-2)",
            "var(--chart-3)",
            "var(--chart-4)",
          ]}
        />
        <div>
          <span className="font-semibold text-lg text-card-foreground">
            🎉 It's Jane Doe's birthday today!
          </span>
          <span className="block text-sm text-popover-foreground mt-1">
            Send your wishes and make their day special. A simple message can go
            a long way, take a moment to brighten Jane's day!
          </span>
        </div>
        <Button variant="outline">Wish Jane</Button>
      </div>
    </div>
  );
};

export default HeaderRibbon;
