"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function InvoicePage() {
  const { listingId } = useParams();
  const getListing = async () => {
    const response = await fetch(
      "https://garage-backend.onrender.com/getListing",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: listingId }),
      }
    );

    const result = await response.json();
    console.log(result);
  };
  useEffect(() => {
    getListing();
  });

  return (
    <div>
      <h1>Invoice for Listing: {listingId}</h1>
      <p>
        <strong>placeholder:</strong>
      </p>
    </div>
  );
}
