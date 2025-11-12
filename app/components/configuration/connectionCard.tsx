import { useState } from "react";
import image from "~/assets/mando.png";
import ConnectionModal from "./connectionModal";

export default function ConnectionCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="connection-card bg-[#F0F0F0] backdrop-blur-md rounded-lg p-8 flex flex-col gap-y-9 items-center shadow-lg">
      <h2 className="text-2xl font-bold text-black/90">
        ¡Inicia conexión con el mando!
      </h2>

      <img src={image} alt="Connection Image" className="w-44 h-36" />

      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-2 hover:opacity-90 text-xl w-full text-white rounded-lg shadow-md hover:shadow-lg active:translate-y-0.5 transition-all duration-150"
        style={{ background: "var(--color-secundario)" }}
      >
        Conectar
      </button>

      {isModalOpen && <ConnectionModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
