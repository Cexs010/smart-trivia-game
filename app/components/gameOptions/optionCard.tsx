import { useState } from "react";
import { useNavigate } from "react-router";
import api from "~/services/api";
import toast from "react-hot-toast";

interface OptionCardProps {
  users: { id: string; username: string }[];
}

export default function OptionCard({ users }: OptionCardProps) {
  const categories = [
    { label: "Historia", id: 1 },
    { label: "Matemáticas Básicas", id: 2 },
    { label: "Programación", id: 3 },
    { label: "Cultura General", id: 4 },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleContinue() {
    if (!selectedCategory) return;

    setLoading(true);

    try {
      const topic = categories.find((c) => c.label === selectedCategory);
      if (!topic) {
        toast.error("Error: categoría no encontrada");
        return;
      }

      const hostId = users[0].id;

      const gameRes = await api.post("/games/", {
        topic_id: topic.id,
        difficulty: "easy",
        user_id: hostId,
      });

      const gameId = gameRes.data.id;
      console.log("GAME CREATED:", gameId);

      for (let i = 1; i < users.length; i++) {
        await api.post(`/games/${gameId}/join`, {
          game_id: gameId,
          user_id: users[i].id,
        });
      }

      toast.success("Jugadores unidos al juego!");

      navigate(`/start-game/${gameId}`);
    } catch (err: any) {
      console.error("ERROR:", err.response?.data || err);
      toast.error("Ocurrió un error al crear/entrar al juego");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="connection-card bg-white backdrop-blur-md rounded-lg px-10 py-8 flex flex-col gap-6 items-center shadow-lg">
      <h2 className="text-2xl font-bold text-black/90 text-center">
        Selecciona el nicho de la trivia
      </h2>

      <div className="flex flex-col w-full gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.label)}
            className={`px-6 py-2 w-full font-medium rounded-lg shadow-md transition-all duration-150 ${
              selectedCategory === category.label
                ? "text-white shadow-lg scale-[1.02]"
                : "text-black bg-white hover:shadow-lg active:translate-y-0.5"
            }`}
            style={
              selectedCategory === category.label
                ? { background: "var(--color-secundario)" }
                : {}
            }
          >
            {category.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        disabled={!selectedCategory || loading}
        onClick={handleContinue}
        className={`mt-4 px-6 py-2 w-full text-white font-semibold rounded-lg shadow-md transition-all duration-150 ${
          selectedCategory
            ? "hover:shadow-lg active:shadow-sm active:translate-y-0.5"
            : "opacity-50 cursor-not-allowed"
        }`}
        style={{ background: "var(--color-secundario)" }}
      >
        {loading ? "Creando juego..." : "Continuar"}
      </button>
    </div>
  );
}
