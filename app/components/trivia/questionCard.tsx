export function QuestionCard({
  points,
  difficulty,
  question,
}: {
  points: number;
  difficulty: string;
  question: string;
}) {
  return (
    <div className="w-full max-w-4xl bg-white text-black rounded-xl p-6 shadow-xl min-h-48 flex flex-col">
      
      {/* TOP: puntos + dificultad */}
      <div className="flex justify-between items-center text-sm font-semibold">
        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full">
          {points} puntos
        </span>
        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full">
          {difficulty}
        </span>
      </div>

      {/* QUESTION: centrada vertical y horizontal */}
      <div className="flex flex-1 items-center justify-center">
        <h2 className="text-center text-xl font-bold leading-snug">
          {question}
        </h2>
      </div>
    </div>
  );
}

