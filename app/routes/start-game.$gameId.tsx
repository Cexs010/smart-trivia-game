import { useParams, useNavigate } from "react-router";
import Navbar from "~/components/navbar";
import toast from "react-hot-toast";
import api from "~/services/api";
import StartGame from "~/components/startGame/startGame";

export default function StartGameRoute() {
  const { gameId } = useParams();
  const navigate = useNavigate();

  if (!gameId) return <p>Error: falta gameId</p>;

  async function handleStart() {
    try {
      await api.post(`/games/${gameId}/start`);
      toast.success("¡Juego iniciado!");
      navigate(`/trivia/${gameId}`);
    } catch (err) {
      console.error(err);
      toast.error("No se pudo iniciar el juego");
    }
  }

  return (
    <>
      <Navbar />
      <StartGame gameId={gameId} onStart={handleStart} />
    </>
  );
}
