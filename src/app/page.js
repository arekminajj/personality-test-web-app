"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/quiz");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="max-w-2xl space-y-6 text-left">
        <h1 className="text-4xl font-bold">Test na typ osobowości</h1>
        <h2 className="text-xl font-semibold text-gray-300">
          Oparte na pracy Myers, Briggs i Junga
        </h2>
        <p className="text-gray-400 text-lg">
          Ten darmowy test osobowości umożliwi Ci określenie swojego czteroliterowego kodu typu osobowości zgodnie z typologią Junga,
          według opracowania Myers, Briggs, von Franz’a i van der Hoop’a.
          Nasz test jest jedną z wielu metod określenia ilościowego interpretacji typologii Junga, 
          podobny, ale nie identyczny do testu Myers-Briggs (Myers-Briggs Type Indicator<sup>®</sup> MBTI),
          testu Junga (Jung Type Indicator) i innych tego typu instrumentów.
        </p>

        <button
          onClick={handleStart}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Rozpocznij test
        </button>
      </div>
    </main>
  );
}
