import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Landing Page Trivia Digital" },
    { name: "description", content: "Bienvenido a la página de trivia digital!" },
  ];
}

export default function Home() {
  return <h1>¡Hola, Mundo!</h1>;
}
