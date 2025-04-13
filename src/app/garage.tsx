"use client";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { findListingId } from "./services/listing";
const GarageForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  async function onSubmit(formData: FormData) {
    const url = formData.get("listing-url");

    const id = findListingId(url as string);
    if (!id) {
      setErrorMessage("Not a valid url");
      return;
    }
    router.push(`/invoice/${id}`);
  }
  return (
    <Form className="flex flex-col gap-4 items-center" action={onSubmit}>
      <div>
        <ol className="list-decimal">
          <li>
            Copy the url of the firetruck listing that you want an invoice for.
          </li>
          <li>Place the url in the text box below to generate your invoice.</li>
          <li>
            After clicking submit, you can add more information and choose
            whether to send it to your email or print it.
          </li>
        </ol>
      </div>
      <input
        name="listing-url"
        className="w-full font-black bg-gray-50 flex items-center shadow border border-gray-300 rounded-md overflow-hidden"
        type="text"
      ></input>
      <div>
        <button
          className="relative px-2 text-gray-700 shadow bg-white border border-gray-100 rounded-lg"
          type="submit"
        >
          Create invoice
        </button>
        {errorMessage && (
          <span className="mt-4 block text-sm border-error-500 text-red-500">
            {errorMessage}
          </span>
        )}
      </div>
    </Form>
  );
};

export default GarageForm;
