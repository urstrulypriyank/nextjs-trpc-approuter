import Image from "next/image";
import { api } from "@/utils/client";
export default async function Home() {
  const data = await api.sayHi.query();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Message From the API</h2>
      <p>{data}</p>
    </main>
  );
}
