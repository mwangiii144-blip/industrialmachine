import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SewMachine | Nairobi Sewing Machine Shop" },
      {
        name: "description",
        content:
          "Call, WhatsApp, email or visit our Uhuru Market, Jogoo Road showroom in Nairobi for sewing machine sales, spare parts and repairs. Open Monday to Saturday.",
      },
      { property: "og:title", content: "Contact SewMachine | Nairobi Sewing Machine Shop" },
      {
        property: "og:description",
        content: "Phone, WhatsApp, email, business hours and directions to our Nairobi showroom.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [topic, setTopic] = useState("Buying a machine");

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Us About Your Machine"
        description="Call, WhatsApp or send a message. We reply to every enquiry within business hours, and you can always walk into our Nairobi showroom."
      >
        <Button asChild variant="hero" size="lg">
          <a href={site.phoneHref}>
            <Phone className="size-4" /> {site.phone}
          </a>
        </Button>
        <Button asChild variant="onDark" size="lg">
          <a
            href={whatsappLink(`Hello ${site.name}, I have an enquiry.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </a>
        </Button>
      </PageHero>

      <section className="shell py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
          <div className="space-y-5">
            <Reveal>
              <ul className="card-surface divide-y divide-border">
                <ContactRow icon={<Phone className="size-5" />} label="Phone" value={site.phone} href={site.phoneHref} />
                <ContactRow
                  icon={<MessageCircle className="size-5" />}
                  label="WhatsApp"
                  value={site.phone}
                  href={whatsappLink(`Hello ${site.name}, I have an enquiry.`)}
                />
                <ContactRow
                  icon={<Mail className="size-5" />}
                  label="Email"
                  value={site.email}
                  href={`mailto:${site.email}`}
                />
                <ContactRow icon={<MapPin className="size-5" />} label="Address" value={site.address} />
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <div className="card-surface p-6">
                <h2 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
                  <Clock className="size-5 text-primary" /> Business Hours
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {site.hours.map((entry) => (
                    <li key={entry.day} className="flex justify-between gap-4">
                      <span className="text-muted-foreground">{entry.day}</span>
                      <span className="text-right font-medium text-foreground">{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="card-surface overflow-hidden">
                <iframe
                  title="SewMachine location on Google Maps"
                  src={site.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <form
              className="card-surface grid gap-5 p-6 sm:p-8"
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                toast.success("Message sent", {
                  description: "Our team will get back to you within business hours.",
                });
                form.reset();
                setTopic("Buying a machine");
              }}
            >
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">Send a message</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tell us what you sew and your budget and we will recommend a machine.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full name">
                  <Input id="name" name="name" required placeholder="Jane Wanjiku" />
                </Field>
                <Field id="phone" label="Phone / WhatsApp">
                  <Input id="phone" name="phone" required placeholder="07xx xxx xxx" />
                </Field>
              </div>

              <Field id="email" label="Email">
                <Input id="email" name="email" type="email" required placeholder="you@example.com" />
              </Field>

              <Field id="topic" label="What is this about?">
                <Select value={topic} onValueChange={setTopic}>
                  <SelectTrigger id="topic">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {["Buying a machine", "Repair or service", "Spare parts", "Training", "Something else"].map(
                      (option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </Field>

              <Field id="message" label="Message">
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="I sew school uniforms and need a machine that can handle 50 pieces a day…"
                />
              </Field>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="size-4" /> Send Message
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <span className="flex items-center gap-4 p-5">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-primary">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs tracking-wide text-muted-foreground uppercase">{label}</span>
        <span className="block font-medium text-foreground">{value}</span>
      </span>
    </span>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="block transition-colors hover:bg-accent/50"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
