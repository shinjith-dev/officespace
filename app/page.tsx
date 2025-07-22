import Header from "@/components/common/header";
import HeaderRibbon from "@/components/common/header/ribbon";
import StatSection from "./_sections/stats";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
      <HeaderRibbon />
      <StatSection />
    </div>
  );
}
