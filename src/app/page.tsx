import GarageForm from "./garage";

export default function Home() {
  return (
    <div className="items-center justify-items-center h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Instructions for preparing your Garage invoice:</h1>
        <GarageForm />
      </main>
    </div>
  );
}
