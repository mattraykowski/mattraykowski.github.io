import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8">
        <SocialLinks />
        <p className="font-mono text-xs text-text-muted">
          <span className="text-accent-green">$</span> echo &quot;Built with
          Next.js &amp; Tailwind CSS&quot;
        </p>
      </div>
    </footer>
  );
}
