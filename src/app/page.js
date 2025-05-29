"use client";
import Visualization from "@/components/Visualization2";
import BarVisualization from "@/components/BarVisualization";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
        {/* SR-only wrapper keeps the status semantics */}
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-24 h-24 text-gray-400 animate-spin fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const reasonsPie = [
    { answerText: "Poznanie siebie", percent: 35 },
    { answerText: "Ciekawość", percent: 20 },
    { answerText: "Problemy w relacjach", percent: 18 },
    { answerText: "Rozwój kariery", percent: 17 },
    { answerText: "Sugestia od znajomego/coacha", percent: 10 },
  ];

  const expectationsBar = [
    { name: "Lepsze relacje", value: 25 },
    { name: "Wskazówki zawodowe", value: 23 },
    { name: "Potwierdzenie cech", value: 20 },
    { name: "Zrozumienie reakcji", value: 18 },
    { name: "Radzenie sobie ze stresem", value: 14 },
  ];

  const problemsPie = [
    { answerText: "Trudności z decyzjami", percent: 28 },
    { answerText: "Problemy w relacjach", percent: 24 },
    { answerText: "Brak motywacji", percent: 18 },
    { answerText: "Stres zawodowy", percent: 17 },
    { answerText: "Niepewność kariery", percent: 13 },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-8">
      <div className="flex flex-col lg:flex-row max-w-8xl mx-auto gap-10 px-4 sm:px-6">
        <section className="flex-1 lg:max-w-[54%] w-full">
          <section className="max-w-3xl mx-auto px-4 sm:px-6 py-1 text-white text-justify">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-blue-600">
              O teście MBTI
            </h2>
            <p className="mb-4">
              Test MBTI (Myers-Briggs Type Indicator) to jedno z najczęściej
              stosowanych narzędzi psychometrycznych służących do określania
              typu osobowości. Zyskał popularność dzięki swojej prostocie i
              trafności w opisie codziennych zachowań ludzi. Pomaga zrozumieć,
              jak postrzegamy świat, jak podejmujemy decyzje oraz w jaki sposób
              nawiązujemy relacje i wchodzimy w interakcje.
            </p>
            <p className="mb-6">
              Oparty na teoriach Carla Gustava Junga, test MBTI dzieli osobowość
              na cztery główne wymiary:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 mb-8 marker:text-blue-400">
              <li>
                <strong>Ekstrawersja (E)</strong> vs{" "}
                <strong>Introwersja (I)</strong>
              </li>
              <li>
                <strong>Intuicja (N)</strong> vs <strong>Sensing (S)</strong>
              </li>
              <li>
                <strong>Myślenie (T)</strong> vs <strong>Czucie (F)</strong>
              </li>
              <li>
                <strong>Ocenianie (J)</strong> vs <strong>Percepcja (P)</strong>
              </li>
            </ul>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500">
              Dlaczego ludzie robią ten test?
            </h3>
            <ul className="list-disc list-outside pl-5 space-y-2 mb-8 marker:text-blue-400">
              <li>Poznanie swoich mocnych stron i preferencji</li>
              <li>Poprawa relacji międzyludzkich i komunikacji</li>
              <li>Wsparcie przy wyborze ścieżki kariery</li>
              <li>Zwiększenie samoświadomości i rozwoju osobistego</li>
              <li>
                Zrozumienie powtarzających się schematów zachowań i reakcji
              </li>
            </ul>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500">
              Kto stworzył test?
            </h3>
            <p className="mb-8">
              Test MBTI został opracowany w XX wieku przez Katharine Cook Briggs
              oraz jej córkę Isabel Briggs Myers, które zainspirowały się
              koncepcjami Carla Gustava Junga. Ich celem było stworzenie
              praktycznego narzędzia, które pomoże ludziom lepiej zrozumieć
              siebie i innych. Z czasem test zyskał popularność na całym
              świecie, znajdując zastosowanie w wielu dizedzinach.
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500">
              W czym może Ci pomóc?
            </h3>
            <ul className="list-disc list-outside pl-5 space-y-2 mb-8 marker:text-blue-400">
              <li>Lepsze zrozumienie siebie i własnych reakcji</li>
              <li>Efektywniejsza współpraca i komunikacja z innymi</li>
              <li>Świadome podejmowanie decyzji życiowych i zawodowych</li>
              <li>Dopasowanie środowiska pracy do swoich predyspozycji</li>
              <li>
                Skuteczniejsze rozwiązywanie konfliktów i budowanie porozumienia
              </li>
              <li>
                Zwiększenie pewności siebie poprzez lepsze zrozumienie własnych
                mocnych stron
              </li>
            </ul>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500">
              MBTI a inne testy osobowości
            </h3>
            <p className="mb-8 text-justify">
              Test MBTI nie jest jedynym narzędziem do poznawania osobowości.
              Popularne alternatywy to m.in. Wielka Piątka (Big Five), testy
              temperamentów czy Enneagram. Każdy z nich opiera się na innych
              założeniach i mierzy inne aspekty ludzkiej psychiki. MBTI wyróżnia
              się tym, że skupia się na preferencjach i stylach funkcjonowania,
              a nie ocenianiu czy diagnozowaniu.
            </p>
          </section>
        </section>

        <aside className="flex-1 flex flex-col gap-6 min-w-[320px] max-w-[640px] w-full">
          <Visualization
            title="Dlaczego ludzie robią test MBTI?"
            data={reasonsPie}
          />
          <BarVisualization
            title="Najczęstsze oczekiwania wobec wyniku testu"
            data={expectationsBar}
          />
          <Visualization
            title="Najczęstsze wyzwania/problematyczne obszary według MBTI"
            data={problemsPie}
          />
        </aside>
      </div>
    </main>
  );
}
