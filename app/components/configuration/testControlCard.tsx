import ArcadeButton from "./arcadeButton";

export default function TestControlCard() {
  return (
    <div className="connection-card bg-white backdrop-blur-md rounded-lg p-8 pl-15 pr-15 flex flex-col gap-y-9 items-center shadow-lg">
      <h2 className="text-2xl font-bold text-black/90">
        ¡Prueba que el mando funcione!
      </h2>

      <section className="flex justify-center gap-8">
        <div className="flex flex-col gap-6">
          <ArcadeButton label="" color="#E61414" />
          <ArcadeButton label="" color="#3B2EB3" />
        </div>
        <div className="flex flex-col gap-6">
          <ArcadeButton label="" color="#C9C914" />
          <ArcadeButton label="" color="#3EC914" />
        </div>
      </section>

      <button
        type="submit"
        className="px-6 py-2 text-1xl w-full text-white rounded-lg shadow-md hover:shadow-lg active:shadow-sm active:translate-y-1 transition-all duration-100"
        style={{ background: "var(--color-secundario)" }}
      >
        Continuar
      </button>
    </div>
  );
}
