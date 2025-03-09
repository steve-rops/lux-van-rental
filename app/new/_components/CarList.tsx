import { Van } from "@prisma/client";

export default async function CarList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cars`);
  const cars = await res.json();
  console.log(cars);
  return (
    <div>
      {cars.map((car: Van) => (
        <div key={car.id} className="border-[0.5px] ">
          <h3>{car.name}</h3>
        </div>
      ))}
    </div>
  );
}
