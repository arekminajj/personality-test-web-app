import Image from "next/image";
import Question from "../app/ui/MBTIquestion.jsx"

const sampleQuestion = {
  question: "Jaki jest największy ocean na świecie?",
  answers: [
    "Ocean Atlantycki",
    "Ocean Spokojny",
    "Ocean Indyjski",
    "Ocean Arktyczny"
  ]
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header> test </header>
      <main>
        <Question questionData={sampleQuestion} />
      </main>
      
    </div>
  );
}
