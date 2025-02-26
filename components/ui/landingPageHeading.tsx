import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
});

export default function LandingPapeHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`text-center text-3xl font-semibold ${montserrat.className}`}
    >
      {children}
    </div>
  );
}
