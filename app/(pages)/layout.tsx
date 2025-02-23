import { Button } from "@/components/ui/button";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <nav className="flex justify-between items-center p-4">
        <h2 className="text-xl font-bold hover:cursor-pointer">VANRA</h2>
        <ul className="flex gap-2 items-center">
          <li className="hover:cursor-pointer">Cars</li>
          <li className="hover:cursor-pointer">Features</li>
          <li className="hover:cursor-pointer">Help</li>
          <li>
            <Button size="sm">Find the best!</Button>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
}
