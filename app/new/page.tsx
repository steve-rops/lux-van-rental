import { Location } from "@/types/searchParams";
import Search from "../(pages)/_components/Search";
import { DEFAULT_CHECK_IN_CHECK_OUT_DIFF } from "@/constants";
import { redirect } from "next/navigation";
import Filters from "./_components/Filters";
import CarList from "./_components/CarList";
import { Suspense } from "react";
import Loading from "@/components/ui/loading";

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function NewBooking({ searchParams }: Props) {
  const { loc, persons, checkin, checkout } = await searchParams;

  if (!persons) redirect("/");

  const location: Location | undefined = Object.values(Location).includes(
    loc as Location
  )
    ? (loc as Location)
    : undefined;

  const checkinDate: Date = checkin ? new Date(checkin) : new Date();
  const checkoutDate: Date = checkout
    ? new Date(checkout)
    : new Date(new Date().getTime() + DEFAULT_CHECK_IN_CHECK_OUT_DIFF);

  // const url: string = `/new?loc=${loc}&persons=${persons}&checkin=${new Date(
  //   checkinDate
  // ).toISOString()}&checkout=${new Date(checkoutDate).toISOString()}`;

  return (
    <div className="space-y-4">
      <Search
        location={location}
        persons={persons}
        checkIn={checkinDate}
        checkOut={checkoutDate}
      />

      <Filters />

      <Suspense fallback={<Loading />}>
        <CarList />
      </Suspense>
    </div>
  );
}
