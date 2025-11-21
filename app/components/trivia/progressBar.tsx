export function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const percent = (current / total) * 100;

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="flex justify-between text-sm font-medium">
        <span>
          Pregunta {current} de {total}
        </span>
        <span>{percent.toFixed(0)}% Completado</span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-white/20 rounded-full">
        <div
          className="h-full bg-purple-500 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
