import { Montserrat } from "next/font/google";
import Image from "next/image";
import Search from "./_components/Search";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Features from "./_components/Features";
import Link from "next/link";

const montserrat = Montserrat({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <div className="space-y-20">
      <div className=" grid grid-cols-2 items-center">
        <div className="LEFT PART space-y-6">
          <Badge className="text-[10px]">#1 Luxury Van Provider</Badge>
          <div>
            <h1
              className={`text-6xl my-2 font-bold antialiased ${montserrat.className}`}
            >
              Let us drive you there!
            </h1>
            <p className="text-sm max-w-[300px]">
              Fast and easy. Get on with us and our well trained stuff will take
              care of you.
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <Link href="/cars">
              <Button className="flex gap-2 items-center">
                <span>Check Our Fleet</span>
                <ArrowRightCircle />
              </Button>
            </Link>
            <Button variant="outline">Vans</Button>
          </div>
        </div>

        <div className="RIGHT PART justify-self-center ">
          <div className="w-[300px] h-[300px] relative grid place-items-center shadow-lg">
            <Image
              fill
              className="absolute rounded-3xl "
              alt="bg-image"
              src="/image 2.png"
            />
            <Image
              className="z-10 absolute "
              width={300}
              height={200}
              alt="car-image"
              src="/pngwing.com.png"
            />
          </div>
        </div>
      </div>

      <Search />

      <Features />
    </div>
  );
}
