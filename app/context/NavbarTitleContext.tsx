import { createContext, useContext, useState, type ReactNode } from "react";

interface NavbarContextType {
  title: string;
  setTitle: (title: string) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState("Inicio");

  return (
    <NavbarContext.Provider value={{ title, setTitle }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar debe usarse dentro de un NavbarProvider");
  }
  return context;
}
