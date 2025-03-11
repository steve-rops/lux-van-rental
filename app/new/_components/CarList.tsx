import { Button } from "@/components/ui/button";
import { Image as VanImage, Van } from "@prisma/client";
import { MapIcon, PersonStanding } from "lucide-react";
import Image from "next/image";

type VanWithIMages = Van & { images: VanImage[] };

export default async function CarList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cars`);
  const cars = await res.json();
  return (
    <div>
      {cars.map((car: VanWithIMages) => (
        <div key={car.id} className="border-[0.5px] p-2 w-fit ">
          <Image
            src={car.images[0].url}
            width={200}
            height={200}
            alt="car image"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg">{car.name}</h3>
            <p className="text-foreground text-sm`">
              ${car.pricePerDay} per day
            </p>
            <div className="text-sm text-primary/65 flex items-center gap-2">
              <MapIcon size={18} />
              <span>{car.location}</span>
            </div>
            <div className="text-sm text-primary/65 flex items-center gap-2">
              <PersonStanding size={18} />
              <span>{car.capacity} persons</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="w-full text-sm">Book</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
