import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-20">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg text-text-muted">
        This page could not be found.
      </p>
      <div className="mt-8">
        <Button href="/">Back Home</Button>
      </div>
    </div>
  );
}
