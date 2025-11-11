import type { Route } from "./+types/home";
import { useNavigate } from "react-router-dom";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Landing Page Trivia Digital" },
    { name: "description", content: "Bienvenido a la página de trivia digital!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex h-screen bg-(--color-primario) text-white">
      <div className="w-1/2 bg-[url('./assets/Landing-Image.jpg')] bg-cover bg-center rounded-tr-3xl rounded-br-3xl"></div>
      <div className="w-1/2 flex flex-col gap-y-10 items-center justify-center text-center font-semibold">
        <span className="text-5xl tracking-[0.3rem]">¡Bienvenido al juego <br /> de trivia más divertido!</span>
        <button
          type="submit"
          onClick={() => navigate("/configuration")}
          className="px-6 w-lg py-3 text-4xl text-white rounded-lg shadow-md hover:shadow-lg active:shadow-sm active:translate-y-1 transition-all duration-100"
          style={{ background: "var(--color-secundario)" }}
        >
          Comenzar
        </button>
      </div>
    </main>
  );
}
