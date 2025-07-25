import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  href: string;
  author: string;
  avatar: string;
}

const posts: Post[] = [
  {
    id: 1,
    title:
      "Discover the hidden beaches of Spain that locals visit in the summer",
    date: "4 days ago",
    imageUrl: "https://placecats.com/neo/300/200",
    href: "#",
    author: "Sofia M.",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    title: "What You Need to Know Before Going Backpacking Across the Alps",
    date: "2 months ago",
    imageUrl: "https://placecats.com/millie/300/200",
    href: "#",
    author: "Luca D.",
    avatar: "https://github.com/leerob.png",
  },
  {
    id: 3,
    title:
      "Top 10 reasons you should visit Japan during the magical winter season",
    date: "6 months ago",
    imageUrl: "https://placecats.com/bella/300/200",
    href: "#",
    author: "Maya K.",
    avatar: "https://github.com/shinjith-dev.png",
  },
];

export default function Blogs() {
  return (
    <section className="py-16 lg:py-32">
      <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl/tight font-semibold tracking-tight sm:text-4xl/tight">
            Blogs &amp; Stories
          </h2>
          <p className="text-muted-foreground mt-2 text-base/7 sm:text-lg/8">
            Explore travel tips, inspiring journeys, and personal stories from
            our community. Find your next adventure or share your own!
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {posts.map((post: Post) => (
            <Card key={post.id}>
              <CardHeader className="relative h-48 mx-5">
                <Image
                  fill
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full rounded-lg object-cover object-center"
                />
              </CardHeader>
              <CardContent className="flex-1">
                <a
                  href={post.href}
                  className="text-lg font-semibold tracking-tight hover:underline"
                >
                  {post.title}
                </a>
              </CardContent>
              <CardFooter className="justify-between text-sm/6">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={post.avatar} alt={post.author} />
                    <AvatarFallback>
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="text-muted-foreground">{post.date}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
