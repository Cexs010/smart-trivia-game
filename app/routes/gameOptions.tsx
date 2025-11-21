import { useEffect, useState } from "react";
import type { Route } from "./+types/configuration";
import Navbar from "~/components/navbar";
import { useNavbar } from "~/context/NavbarTitleContext";
import OptionCard from "~/components/gameOptions/optionCard";
import AddUsers from "~/components/gameOptions/addUsers";

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
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    setTitle(document.title);
  }, [setTitle]);

  return (
    <>
      <Navbar />

      <main className="flex h-screen items-center justify-center text-white p-4">
        {!users.length ? (
          <AddUsers onComplete={(u) => setUsers(u)} />
        ) : (
          <OptionCard users={users} />
        )}
      </main>
    </>
  );
}
