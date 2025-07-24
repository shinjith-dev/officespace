import HeaderRibbon from "@/components/common/header/ribbon";
import StatSection from "./_sections/stats";
import Blogs from "./_sections/blogs";
import MasonryCards from "./_sections/masonary-cards";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
      <HeaderRibbon />
      <MasonryCards />
      <Blogs />
      <StatSection />
    </div>
  );
}
