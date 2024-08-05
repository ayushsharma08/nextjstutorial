import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white text-bold text-3xl">
      <h2>Not Found ⛔</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-blue-500">
        Return Home
      </Link>
    </div>
  );
}
