import { Menu, Globe } from "lucide-react";
import { useSidebar } from "./ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useState } from "react";

export const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  const [currentLanguage, setCurrentLanguage] = useState("es");

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
    // Aquí se puede agregar la lógica para cambiar el idioma de la aplicación
    console.log(`Cambiando idioma a: ${lang}`);
  };

  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
      </div>
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Cambiar idioma</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem 
              onClick={() => handleLanguageChange("es")}
              className={currentLanguage === "es" ? "bg-accent" : ""}
            >
              Español
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => handleLanguageChange("en")}
              className={currentLanguage === "en" ? "bg-accent" : ""}
            >
              English
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div
          onClick={toggleSidebar}
          className="p-2 cursor-pointer text-white hover:text-primary transition-colors"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </div>
      </div>
    </>
  );
};