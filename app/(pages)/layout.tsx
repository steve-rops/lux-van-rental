import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-10 pt-12">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h2 className="text-4xl font-bold hover:cursor-pointer">VANRA</h2>
        </Link>
        <ul className="flex lg:text-lg gap-4 items-center">
          <li className="hover:cursor-pointer">Cars</li>
          <li className="hover:cursor-pointer">Features</li>
          <li className="hover:cursor-pointer">Help</li>
          <Link href="/new">
            <li>
              <Button size="sm">log in</Button>
            </li>
          </Link>
        </ul>
      </nav>

      <div className="pt-24">{children}</div>
    </div>
  );
}
