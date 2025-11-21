import { useState } from "react";
import { toast } from "react-hot-toast";
import { createUser } from "~/services/users";

interface AddUsersProps {
  onComplete: (users: { id: string; username: string }[]) => void;
}

export default function AddUsers({ onComplete }: AddUsersProps) {
  const [players, setPlayers] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);

  function updateName(index: number, value: string) {
    const updated = [...players];
    updated[index] = value;
    setPlayers(updated);
  }

  async function handleSubmit() {
    if (players.some((p) => p.trim() === "")) {
      toast.error("Todos los jugadores deben tener un nombre");
      return;
    }

    setLoading(true);
    toast.loading("Registrando jugadores...");

    try {
      const userResults: { id: string; username: string }[] = [];

      for (const name of players) {
        const user = await createUser(name);
        userResults.push(user);
      }

      toast.dismiss();
      toast.success("Jugadores registrados ✔");

      onComplete(userResults);
    } catch (err) {
      toast.dismiss();
      toast.error("Error al registrar jugadores");
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div className="bg-white text-black/90 rounded-xl p-8 shadow-xl w-full max-w-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        Registrar Jugadores
      </h2>

      <div className="flex flex-col gap-4">
        {players.map((player, index) => (
          <input
            key={index}
            type="text"
            value={player}
            onChange={(e) => updateName(index, e.target.value)}
            placeholder={`Jugador ${index + 1}`}
            className="p-3 rounded-lg bg-gray-100 border border-gray-300 text-black"
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-6 w-full py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-150 hover:shadow-lg active:translate-y-0.5 disabled:opacity-50"
        style={{ background: "var(--color-secundario)" }}
      >
        {loading ? "Guardando..." : "Continuar"}
      </button>
    </div>
  );
}
