import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LandingPapeHeading from "@/components/ui/landingPageHeading";

const features = [
  {
    title: "Well Experienced Drivers",
    badge: "safety",
    description:
      "With countless hours of driving experience, these skilled drivers are always ready and willing to lend a helping hand.",
    icon: "🚗",
    highlight: true,
  },
  {
    title: "Luxurious Interiors",
    badge: "comfort",
    description:
      "Spacious seating with premium materials for a first-class experience.",
    icon: "🛋️",
    highlight: false,
  },
  {
    title: "State-of-the-Art Technology",
    badge: "tech",
    description:
      "Equipped with high-end audio systems, Wi-Fi, and GPS navigation.",
    icon: "📡",
    highlight: true,
  },
  {
    title: "Flexible Rental Options",
    badge: "convenience",
    description:
      "Customizable packages for any occasion, from road trips to events.",
    icon: "📅",
    highlight: true,
  },
];

export default function Features() {
  return (
    <div className="p-10 bg-muted rounded-md space-y-10 shadow-md">
      <div>
        <LandingPapeHeading>Features</LandingPapeHeading>
        <p className="text-center text-muted-foreground">
          “Experience the Perfect Blend of Comfort, Safety, and Innovation”
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 w-[75%] mx-auto">
        {features.map((item, index) => (
          <div
            key={item.description}
            className={`${
              index === 0 || index === 3 ? "col-span-2" : ""
            } border-[0.5px] border-muted-foreground/50 rounded-md p-4 space-y-2`}
          >
            <Badge className="text-[10px]">{item.badge}</Badge>
            <div className="text-xl">{item.title}</div>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="grid place-items-center">
        <Button size="sm">See More</Button>
      </div>
    </div>
  );
}
