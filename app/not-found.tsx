import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background text-foreground min-h-[70vh] flex flex-col gap-3 justify-center items-center">
      <h2 className="text-5xl font-semibold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Button asChild variant="link">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
