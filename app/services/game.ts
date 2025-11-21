import api from "./api";

/* Crear juego con el jugador host */
export async function createGame(topicId: number, difficulty: string, userId: string) {
  const res = await api.post("/games/", {
    topic_id: topicId,
    difficulty,
    user_id: userId,
  });
  return res.data; // { id, ... }
}

/* Unir otro jugador */
export async function joinGame(gameId: string, userId: string) {
  const res = await api.post(`/games/${gameId}/join`, {
    game_id: gameId,
    user_id: userId,
  });
  return res.data;
}

/* Iniciar juego */
export async function startGame(gameId: string) {
  const res = await api.post(`/games/${gameId}/start`);
  return res.data;
}
