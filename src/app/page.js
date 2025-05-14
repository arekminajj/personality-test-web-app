import Image from "next/image";
import Question from "../app/ui/MBTIquestion.jsx"
import TestQuestions from "../../data/TestQuestions.js";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header> test </header>
      <main className="flex flex-col gap-10">
        {TestQuestions.map((questionObj, index) => (
          <Question key={index} questionData={questionObj} />
        ))}
      </main>
    </div>
  );
}
