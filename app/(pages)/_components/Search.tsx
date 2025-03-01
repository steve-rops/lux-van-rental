"use client";

import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { CalendarIcon, MapPin, User2Icon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { Location } from "@/types/searchParams";
import { DEFAULT_CHECK_IN_CHECK_OUT_DIFF } from "@/constants";

interface FormInputs {
  location?: Location | undefined;
  persons?: string;
  checkIn?: Date;
  checkOut?: Date;
}

export default function Search({
  persons,
  location,
  checkIn,
  checkOut,
}: FormInputs) {
  const {
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      checkIn: checkIn || new Date(),
      checkOut:
        checkOut ||
        new Date(new Date().getTime() + DEFAULT_CHECK_IN_CHECK_OUT_DIFF),
      persons: persons || "1",
      location: location || undefined,
    },
  });

  const router = useRouter();

  const checkInDate = watch("checkIn");
  const checkOutDate = watch("checkOut");

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // console.log(data);
    const checkinISO = data.checkIn
      ? new Date(data.checkIn).toISOString()
      : undefined;
    const checkoutISO = data.checkOut
      ? new Date(data.checkOut).toISOString()
      : undefined;

    router.push(
      `/new?loc=${data.location}&persons=${data.persons}&checkin=${checkinISO}&checkout=${checkoutISO}`
    );
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4 border-[0.5px] border-muted bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Trip Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[12%,12%,25%,25%,1fr] gap-4">
          {/* Place of pickup */}
          <div className="relative w-fit">
            <label className="block text-sm font-medium mb-1">From</label>
            <Controller
              name="location"
              rules={{ required: "Location is required" }}
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className={`w-fit ${
                      errors.location ? "border-destructive" : ""
                    }`}
                  >
                    <MapPin className="mr-2 text-foreground h-4 w-4" />
                    <SelectValue
                      placeholder="location"
                      defaultValue={location}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="airport">Airport</SelectItem>
                    <SelectItem value="city">City</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Persons */}
          <div>
            <label className="block text-sm font-medium mb-1">Persons</label>
            <Controller
              defaultValue="1"
              name="persons"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value?.toString() || ""}
                >
                  <SelectTrigger className="w-fit">
                    <User2Icon className="mr-2 text-foreground h-4 w-4 " />
                    <SelectValue placeholder="Persons" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* check-in */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">
              Pick-up Date
            </label>
            <Controller
              name="checkIn"
              control={control}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a pick-up date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date);
                        if (date)
                          setValue(
                            "checkOut",
                            new Date(
                              date.getTime() + DEFAULT_CHECK_IN_CHECK_OUT_DIFF
                            )
                          );
                        if (!date) {
                          setValue("checkIn", new Date());
                          setValue(
                            "checkOut",
                            new Date(
                              new Date().getTime() +
                                DEFAULT_CHECK_IN_CHECK_OUT_DIFF
                            )
                          );
                        }
                      }}
                      disabled={{ before: new Date() }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
          </div>

          {/* checkout */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">
              Drop-off Date
            </label>
            <Controller
              name="checkOut"
              control={control}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a check-out date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      defaultMonth={checkOutDate}
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={{
                        before: checkInDate
                          ? new Date(
                              new Date(checkInDate).getTime() +
                                1000 * 60 * 60 * 24
                            )
                          : new Date(),
                      }}
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
          </div>

          {/* button */}
          <div className="self-end ">
            <Button className="w-full" type="submit">
              SEARCH
            </Button>
          </div>
        </div>
        {errors.location && (
          <p className="text-destructive text-[10px]">
            {errors.location.message}
          </p>
        )}
      </div>
    </form>
  );
}
