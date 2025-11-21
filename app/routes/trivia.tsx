import { useState, useEffect } from "react";
import { ProgressBar } from "../components/trivia/progressBar";
import { QuestionCard } from "../components/trivia/questionCard";
import { CardButtons } from "../components/trivia/cardButtons";
import { useNavbar } from "~/context/NavbarTitleContext";
import Navbar from "~/components/navbar";

export default function TriviaExample() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 10;
  const { setTitle } = useNavbar();

  useEffect(() => {
    setTitle("Trivia Example");
  }, [setTitle]);

  const [data, setData] = useState({
    points: 100,
    difficulty: "Fácil",
    question: "¿Qué planeta es conocido como el planeta rojo?",
    options: [
      { id: "A", text: "Júpiter" },
      { id: "B", text: "Tierra" },
      { id: "C", text: "Marte" },
      { id: "D", text: "Venus" },
    ],
    correct: "C",
  });

  function handleSelect(id: string) {
    console.log("Respuesta seleccionada:", id);
    // Aquí puedes validar respuesta y cargar siguiente pregunta
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-4 text-white">
        <div className="w-full max-w-4xl flex flex-col items-center gap-8">
          <ProgressBar current={currentQuestion} total={totalQuestions} />
          <QuestionCard
            points={data.points}
            difficulty={data.difficulty}
            question={data.question}
          />
          <CardButtons options={data.options} onSelect={handleSelect} />
        </div>
      </div>
    </>
  );
}
