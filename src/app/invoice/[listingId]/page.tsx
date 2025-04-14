"use client";
import { flattenListingData } from "@/app/services/listing";
import { Listing } from "@/app/types/listing";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function InvoicePage() {
  const { listingId } = useParams();
  const [listing, setListing] = useState<Listing | null>(null);
  const [quantity, setQuantity] = useState(1);

  const getListing = useCallback(async () => {
    const response = await fetch(
      "https://garage-backend.onrender.com/getListing",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: listingId }),
      }
    );
    const result = await response.json();
    setListing(flattenListingData(result));
  }, [listingId]);

  useEffect(() => {
    if (listingId) getListing();
  }, [listingId, getListing]);

  const handleSend = async () => {
    const email = prompt("Please enter an email");

    // Replace with your email-sending logic (API call, etc.)
    console.log("Sending invoice to:", email);
    alert(`Invoice sent to ${email}`);
  };

  return listing ? (
    <div className="pb-8">
      <h1>Invoice for Listing: {listing?.name}</h1>
      <div className="w-full overflow-hidden">
        <ul className="flex gap-4 overflow-x-scroll scrollbar-hide">
          {listing?.images?.map((url) => (
            <li key={url} className="flex-shrink-0">
              <img
                className="h-48 w-auto rounded object-cover"
                alt={`invoice_img_${url}`}
                src={url}
              />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="bg-white border text-black p-6 mt-6 rounded shadow print:block pb-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 pb-4">
              <Image
                src="/garage-image.svg"
                alt="Garage Logo"
                width={200}
                height={100}
              />
              <div>
                <p>
                  Invoice number: INV-
                  <input type="text" />
                </p>
                <p>
                  Date billed:{" "}
                  <input
                    type="date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                  />
                </p>
                <p>
                  Date due: <input type="date" />
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-between px-8 gap-4">
              <div className="flex flex-col w-full">
                <h2 className="text-2xl font-bold mb-2">Bill to</h2>
                <textarea rows={3} placeholder="Enter buyer information here" />
              </div>
              <div className="flex flex-col w-full">
                <h2 className="text-2xl font-bold mb-2">Invoice</h2>
                <p>
                  {listing.seller.name}{" "}
                  <input type="text" placeholder="enter name here" />
                </p>
                <p>{listing.seller.email}</p>
                <p>
                  <input type="text" placeholder="enter address here" />
                </p>
              </div>
            </div>
            <div>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2 border-b">Item Name</th>
                    <th className="text-left px-4 py-2 border-b">
                      Item Description
                    </th>
                    <th className="text-left px-4 py-2 border-b">Quantity</th>
                    <th className="text-left px-4 py-2 border-b">Unit Price</th>
                    <th className="text-left px-4 py-2 border-b">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b">{listing.name}</td>
                    <td className="px-4 py-2 border-b text-sm">
                      {listing.description}
                    </td>
                    <td className="px-4 py-2 border-b">
                      <input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(parseInt(e.target.value) || 1)
                        }
                        className="w-16 border border-gray-300 rounded px-2"
                      />
                    </td>
                    <td className="px-4 py-2 border-b">
                      ${listing.price.toLocaleString()}
                    </td>
                    <td className="px-4 py-2 border-b">
                      ${(parseFloat(listing.price) * quantity).toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-end mt-4">
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    Total: $
                    {(parseFloat(listing.price) * quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => {}}
          className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500"
        >
          Download pdf
        </button>
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send via email
        </button>
      </div>
    </div>
  ) : (
    <div>Something went wrong, please try again.</div>
  );
}
