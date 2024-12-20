import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "Find out more about us",
};

function Page() {
  return (
    <div className="flex justify-center flex-col max-w-[400px] my-20 mx-auto text-center">
      <h1 className="text-3xl">This is about our page</h1>
      <button className="bg-black text-white p-3 rounded-md">
        <Link href={"/about/history"}>Click! to read our story</Link>
      </button>
    </div>
  );
}

export default Page;
