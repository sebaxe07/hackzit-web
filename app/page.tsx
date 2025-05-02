export default function Home() {
  return (
    <div className="bg-primary grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left text-primary-foreground ">
          Visualize Your
        </h1>
        <p className="text-lg text-center sm:text-left text-muted-foreground max-w-[700px]">
          This is a simple example of a Next.js 13.4 app using the new app
          directory and Tailwind CSS.
        </p>
      </main>
    </div>
  );
}
