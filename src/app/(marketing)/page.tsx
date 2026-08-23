import ThemeToggle from "@/components/ThemeToggle";
import Hero from "./_components/Hero";
import IconExamples from "./_components/IconExamples";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Hero />
        <IconExamples />
      </main>
    </div>
  );
}
