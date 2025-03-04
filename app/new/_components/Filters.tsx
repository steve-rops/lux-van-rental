"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Filters() {
  const params = useSearchParams();
  const router = useRouter();
  const [category, setCategory] = useState(params.get("category") || "");

  useEffect(() => {
    setCategory(params.get("category") || "");
  }, [params]);

  const handleChange = (value: string) => {
    setCategory(value);
    const newParams = new URLSearchParams(params);

    if (!value) {
      newParams.delete("category");
    } else {
      newParams.set("category", value);
    }

    router.push(`?${newParams.toString()}`);
  };

  return (
    <Select value={category} onValueChange={handleChange}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="vans">Vans</SelectItem>
        <SelectItem value="suvs">Suvs</SelectItem>
      </SelectContent>
    </Select>
  );
}
