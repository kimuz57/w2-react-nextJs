import Link from "next/link";
import Input from "@/components/Greeting"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Input name="kit" />
        <Link
          className="text-red-700 underline text-5xl text-center" 
          href="https:yuuna.tcmg.me">กดเลย</Link>

      </main>
    </div>
  );
}
