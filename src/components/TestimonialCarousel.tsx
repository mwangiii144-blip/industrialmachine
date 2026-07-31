import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/site";

export function TestimonialCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="mt-12">
      <CarouselContent className="-ml-4">
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <figure className="card-surface flex h-full flex-col p-6 hover-lift">
              <Quote className="size-8 text-secondary/60" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{testimonial.quote}”
              </blockquote>
              <div className="mt-5 flex items-center gap-1 text-secondary">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-brand font-display font-bold text-primary-foreground">
                  {testimonial.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-display font-semibold text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {testimonial.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
