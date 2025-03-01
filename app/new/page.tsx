import { Location } from "@/types/searchParams";
import Search from "../(pages)/_components/Search";
import { DEFAULT_CHECK_IN_CHECK_OUT_DIFF } from "@/constants";
import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function NewBooking({ searchParams }: Props) {
  const { loc, persons, checkin, checkout } = await searchParams;

  if (!persons)
    redirect(
      `/new?loc=airport&persons=1&checkin=${new Date().toISOString()}&checkout=${new Date(
        new Date().getTime() + DEFAULT_CHECK_IN_CHECK_OUT_DIFF
      ).toISOString()}`
    );

  const location: Location | undefined = Object.values(Location).includes(
    loc as Location
  )
    ? (loc as Location)
    : undefined;

  const checkinDate: Date = checkin ? new Date(checkin) : new Date();
  const checkoutDate: Date = checkout
    ? new Date(checkout)
    : new Date(new Date().getTime() + DEFAULT_CHECK_IN_CHECK_OUT_DIFF);

  return (
    <div>
      <Search
        location={location}
        persons={persons}
        checkIn={checkinDate}
        checkOut={checkoutDate}
      />
    </div>
  );
}
