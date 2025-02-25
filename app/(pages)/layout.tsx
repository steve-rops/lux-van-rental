import { Button } from "@/components/ui/button";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-10 pt-12">
      <nav className="flex justify-between items-center">
        <h2 className="text-4xl font-bold hover:cursor-pointer">VANRA</h2>
        <ul className="flex lg:text-lg gap-2 items-center">
          <li className="hover:cursor-pointer">Cars</li>
          <li className="hover:cursor-pointer">Features</li>
          <li className="hover:cursor-pointer">Help</li>
          <li>
            <Button>Find the best!</Button>
          </li>
        </ul>
      </nav>

      <div className="pt-24">{children}</div>
    </div>
  );
}
