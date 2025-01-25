import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

export const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10"
      onClick={toggleSidebar}
    >
      <Menu className="h-6 w-6" />
      <span className="sr-only">Abrir menú</span>
    </Button>
  );
};