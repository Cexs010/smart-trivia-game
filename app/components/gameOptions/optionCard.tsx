export default function ConnectionCard() {
  const categories = [
    "Ciencia y tecnología",
    "Matemáticas Básicas",
    "Programación",
    "Cultura General",
  ];

  return (
    <div className="connection-card bg-[#F0F0F0] backdrop-blur-md rounded-lg px-10 py-8 flex flex-col gap-6 items-center shadow-lg">
      <h2 className="text-2xl font-bold text-black/90 text-center">
        Selecciona el nicho de la trivia
      </h2>

      <div className="flex flex-col w-full gap-4">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="px-6 py-2 w-full text-black font-medium rounded-lg bg-white shadow-md hover:shadow-lg active:translate-y-0.5 transition-all duration-150"
          >
            {category}
          </button>
        ))}
      </div>

      <button
        type="submit"
        className="mt-4 px-6 py-2 w-full text-white font-semibold rounded-lg shadow-md hover:shadow-lg active:shadow-sm active:translate-y-0.5 transition-all duration-150"
        style={{ background: "var(--color-secundario)" }}
      >
        Continuar
      </button>
    </div>
  );
}
