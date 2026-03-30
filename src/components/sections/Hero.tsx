import { SITE } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-4 font-mono text-sm text-accent-green">
          <span className="text-text-muted">$</span> whoami
        </p>
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          {SITE.name}
          <span className="animate-blink ml-1 text-highlight">_</span>
        </h1>
        <p className="mt-4 font-mono text-xl text-accent-purple md:text-2xl">
          {SITE.title}
        </p>
        <p className="mt-6 max-w-xl text-text-muted">{SITE.description}</p>
        <div className="mt-8 flex gap-4">
          <Button href="/resume">View Resume</Button>
          <Button href="#projects" variant="secondary">
            View Projects
          </Button>
          <Button href="#contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
