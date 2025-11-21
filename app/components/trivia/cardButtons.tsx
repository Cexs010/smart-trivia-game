import { useState } from "react";

export function CardButtons({
  options = [],
  onSelect,
}: {
  options: { id: string; text: string }[];
  onSelect: (id: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleClick(id: string) {
    setSelected(id);
    onSelect(id);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
      {options.map((opt) => {
        const isSelected = selected === opt.id;

        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => handleClick(opt.id)}
            className={`flex items-center text-center gap-4 p-4 w-full font-semibold rounded-xl shadow-md transition-all duration-150
              ${
                isSelected
                  ? "text-white shadow-lg scale-[1.02]"
                  : "text-black bg-white hover:shadow-lg active:translate-y-0.5"
              }`}
            style={isSelected ? { background: "var(--color-secundario)" } : {}}
          >

            <span
              className={`
                w-10 h-10 flex items-center justify-center rounded-full font-bold leading-none
                ${isSelected ? "bg-purple-600 text-white" : "bg-purple-500 text-white"}
              `}
            >
              {opt.id}
            </span>

            <span className="text-lg font-bold leading-none">{opt.text}</span>
          </button>
        );
      })}
    </div>
  );
}
