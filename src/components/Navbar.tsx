import { Menu } from "lucide-react";
import { useSidebar } from "./ui/sidebar";

export const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
      </div>
      <div
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 p-2 cursor-pointer text-white hover:text-primary transition-colors"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Abrir menú</span>
      </div>
    </>
  );
};