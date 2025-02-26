import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-10">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h2 className="text-4xl font-bold hover:cursor-pointer">VANRA</h2>
        </Link>
      </nav>

      <div className="pt-6">{children}</div>
    </div>
  );
}
