import { useState } from "react";

export default function ConnectionCard() {
  const categories = [
    "Ciencia y tecnología",
    "Matemáticas Básicas",
    "Programación",
    "Cultura General",
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

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
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 w-full font-medium rounded-lg shadow-md transition-all duration-150 ${
              selectedCategory === category
                ? "text-white shadow-lg scale-[1.02]"
                : "text-black bg-white hover:shadow-lg active:translate-y-0.5"
            }`}
            style={
              selectedCategory === category
                ? { background: "var(--color-secundario)" }
                : {}
            }
          >
            {category}
          </button>
        ))}
      </div>

      <button
        type="submit"
        disabled={!selectedCategory}
        className={`mt-4 px-6 py-2 w-full text-white font-semibold rounded-lg shadow-md transition-all duration-150 ${
          selectedCategory
            ? "hover:shadow-lg active:shadow-sm active:translate-y-0.5"
            : "opacity-50 cursor-not-allowed"
        }`}
        style={{
          background: "var(--color-secundario)",
        }}
      >
        Continuar
      </button>
    </div>
  );
}
