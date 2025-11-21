import { useState } from "react";
import { useESP } from "~/context/ESPContext";
import toast from "react-hot-toast";

interface ConnectionModalProps {
  onClose: () => void; // función para cerrar el modal
}

export default function ConnectionModal({ onClose }: ConnectionModalProps) {
  const [ipAddress, setIpAddress] = useState("");
  const [status, setStatus] = useState("");
  const { setIp } = useESP();
  async function connectToESP32() {
    if (!ipAddress) {
      setStatus("Ingresa una dirección IP.");
      return;
    }

    try {
      setStatus("Verificando conexión...");
      const response = await fetch(`http://${ipAddress}/status`);
      if (response.ok) {
        setStatus("Conectado correctamente a la ESP32.");
        toast.success("Conexión exitosa a la ESP32!");
        setIp(ipAddress);
      } else {
        setStatus("Error al conectar con la ESP32.");
      }
    } catch (error) {
      setStatus("No se pudo conectar. Verifica la IP o la red Wi-Fi.");
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl p-6 shadow-xl w-80 text-center relative">
        <h3 className="text-lg text-black font-semibold mb-4">Conexión a ESP32</h3>

        <input
          type="text"
          placeholder="Ej: 192.168.4.1"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          className="border border-gray-300 rounded-md text-black p-2 w-full mb-4 text-center"
        />

        <div className="flex justify-between">
          <button
            onClick={connectToESP32}
            className="px-4 py-2 text-white rounded-lg hover:opacity-90 shadow-md hover:shadow-lg active:translate-y-0.5 transition-all duration-150"
            style={{ background: "var(--color-secundario)" }}
          >
            Conectar
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
          >
            Salir
          </button>
        </div>

        {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
      </div>
    </div>
  );
}
