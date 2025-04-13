export default function Home() {
  return (
    <div className="items-center justify-items-center h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Instructions for preparing your Garage invoice:</h1>
        <form className="flex flex-col gap-4 items-center">
          <div>
            <ol className="list-decimal">
              <li>
                Copy the url of the firetruck listing that you want an invoice
                for.
              </li>
              <li>
                Place the url in the text box below to generate your invoice.
              </li>
              <li>
                After clicking submit, you can choose whether to send it to your
                email or print it.
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
          </div>
        </form>
      </main>
    </div>
  );
}
