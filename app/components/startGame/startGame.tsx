import { useEffect, useState } from "react";
import api from "~/services/api";
import toast from "react-hot-toast";

interface StartGameProps {
  gameId: string;
  onStart: () => void;
}

interface GameData {
  id: string;
  topicId: number;
  topicName: string;
  status: string;
  participants: {
    userId: string;
    username: string;
    finalScore: number;
    isWinner: boolean;
  }[];
}

export default function StartGame({ gameId, onStart }: StartGameProps) {
  const [game, setGame] = useState<GameData | null>(null);

  useEffect(() => {
    async function loadGame() {
      try {
        const res = await api.get(`/games/${gameId}`);
        setGame(res.data);
      } catch (err) {
        console.error(err);
        toast.error("No se pudo cargar la información del juego");
      }
    }

    loadGame();
  }, [gameId]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white p-6 gap-8">
      <h1 className="text-3xl font-bold">Juego listo</h1>

      {!game ? (
        <p className="opacity-70">Cargando datos del juego...</p>
      ) : (
        <div className="bg-white/10 p-6 rounded-xl w-full max-w-lg text-center">
          
          <h2 className="text-xl font-semibold mb-4">
            Categoría: {game.topicName}
          </h2>

          <h3 className="text-lg opacity-80 mb-3">Jugadores</h3>

          <ul className="space-y-2 text-lg">
            {game.participants.map((p) => (
              <li key={p.userId} className="bg-white/20 p-2 rounded-lg">
                {p.username}
              </li>
            ))}
          </ul>

        </div>
      )}

      <button
        onClick={onStart}
        className="px-10 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
        style={{ background: "var(--color-secundario)" }}
      >
        Iniciar Juego
      </button>
    </main>
  );
}
