import {
  BadgeCheck,
  Cog,
  GraduationCap,
  HeartHandshake,
  Headset,
  PlugZap,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Truck,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  BadgeCheck,
  Cog,
  GraduationCap,
  HeartHandshake,
  Headset,
  PlugZap,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Truck,
  Users,
  Wrench,
  Zap,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = icons[name] ?? BadgeCheck;
  return <Component className={className} />;
}
