import api from "./api";

/* Crear un solo usuario */
export async function createUser(username: string) {
  const res = await api.post("/users/", { username });
  return res.data; // { id, username }
}

/* Obtener usuario por nombre (opcional) */
export async function getUser(username: string) {
  const res = await api.get(`/users/username/${username}`);
  return res.data;
}

/* Obtener todos (ranking - opcional) */
export async function getUsers() {
  const res = await api.get("/users/");
  return res.data;
}
