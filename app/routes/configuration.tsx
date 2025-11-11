import { useEffect } from "react";
import type { Route } from "./+types/configuration";
import ConnectionCard from "../components/connectionCard";
import Navbar from "~/components/navbar";
import { useNavbar } from "~/context/NavbarTitleContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Configuración" },
    { name: "description", content: "Bienvenido a la página de configuración de trivia digital!" },
  ];
}

export default function Configuration() {
  const { setTitle } = useNavbar();

  useEffect(() => {
    setTitle(document.title);
  }, [setTitle]);

  return (
    <>
      <Navbar />
      <main className="flex h-screen items-center justify-center text-white">
        <ConnectionCard />
      </main>
    </>
  );
}