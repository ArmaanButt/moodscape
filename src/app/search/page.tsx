"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Search() {
  const [searchText, setSearchText] = useState("");

  const search = () => {
    console.log("Searching..." + searchText);
  };

  return (
    <div className="md:container md:mx-auto p-4">
      <h1 className="text-4xl font-extrabold">Search</h1>
      <div className="flex gap-4 items-center">
        <Textarea
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button onClick={search}>Search</Button>
      </div>
    </div>
  );
}
