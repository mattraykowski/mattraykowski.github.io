export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        <span className="font-mono text-xl text-accent-green md:text-2xl">
          {"//"}{" "}
        </span>
        {title}
      </h2>
      <div className="mt-3 h-0.5 w-16 bg-highlight" />
    </div>
  );
}
