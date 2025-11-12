import { useEffect } from "react";
import type { Route } from "./+types/configuration";
import Navbar from "~/components/navbar";
import { useNavbar } from "~/context/NavbarTitleContext";
import OptionCard from "~/components/gameOptions/optionCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Opciones del Juego" },
    {
      name: "description",
      content: "Bienvenido a la página de Opciones del juego!",
    },
  ];
}

export default function GameOptions() {
  const { setTitle } = useNavbar();

  useEffect(() => {
    setTitle(document.title);
  }, [setTitle]);

  return (
    <>
      <Navbar />
      <main className="flex h-screen items-center justify-center text-white">
        <OptionCard />
      </main>
    </>
  );
}
