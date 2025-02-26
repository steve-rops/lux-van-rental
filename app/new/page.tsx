import { Location } from "@/types/searchParams";
import Search from "../(pages)/_components/Search";

export default function NewBooking({
  searchParams,
}: {
  searchParams: Record<string, string> | URLSearchParams;
}) {
  let params: Record<string, string | null> = {};

  // Convert URLSearchParams to an object
  if (searchParams instanceof URLSearchParams) {
    params = Object.fromEntries(searchParams.entries());
  } else {
    params = searchParams;
  }

  // Extract and cast values
  const loc: Location | null | undefined = params.loc as
    | Location
    | null
    | undefined;
  const persons = params.persons;
  const checkin = params.checkin ? new Date(params.checkin) : undefined;
  const checkout = params.checkout ? new Date(params.checkout) : undefined;

  console.log(persons, loc, checkin, checkout);

  return (
    <div>
      <Search
        paramsPersons={persons}
        loc={loc}
        paramsCheckin={checkin}
        paramsCheckout={checkout}
      />
    </div>
  );
}
