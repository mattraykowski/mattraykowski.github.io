import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinks from "@/components/ui/SocialLinks";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeading title="Get in Touch" />
        <p className="mx-auto max-w-md text-text-muted">
          I&apos;m always open to interesting conversations and opportunities.
          Whether you have a question or just want to say hello, feel free to
          reach out.
        </p>
        <div className="mt-8">
          <Button href="mailto:matt.raykowski@gmail.com">Say Hello</Button>
        </div>
        <SocialLinks className="mt-8 justify-center" />
      </div>
    </section>
  );
}
