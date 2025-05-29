"use client";
import Visualization from "@/components/Visualization2";
import BarVisualization from "@/components/BarVisualization";

export default function Home() {
  // PieChart 1 – Dlaczego ludzie robią test MBTI?
  const reasonsPie = [
    { answerText: "Poznanie siebie", percent: 35 },
    { answerText: "Ciekawość", percent: 20 },
    { answerText: "Problemy w relacjach", percent: 18 },
    { answerText: "Rozwój kariery", percent: 17 },
    { answerText: "Sugestia od znajomego/coacha", percent: 10 },
  ];

  // BarChart 1 – Najważniejsze oczekiwania wobec testu
  const expectationsBar = [
    { name: "Lepsze relacje", value: 25 },
    { name: "Wskazówki zawodowe", value: 23 },
    { name: "Potwierdzenie cech", value: 20 },
    { name: "Zrozumienie reakcji", value: 18 },
    { name: "Radzenie sobie ze stresem", value: 14 },
  ];

  // PieChart 2 – Najczęstsze wyzwania/problematiczne obszary wg MBTI
  const problemsPie = [
    { answerText: "Trudności z decyzjami", percent: 28 },
    { answerText: "Problemy w relacjach", percent: 24 },
    { answerText: "Brak motywacji", percent: 18 },
    { answerText: "Stres zawodowy", percent: 17 },
    { answerText: "Niepewność kariery", percent: 13 },
  ];

  // BarChart 2 – Najczęstsze strategie radzenia sobie
  const copingBar = [
    { name: "Rozmowa z bliskimi", value: 27 },
    { name: "Szukanie w internecie", value: 24 },
    { name: "Zmiana otoczenia/pracy", value: 18 },
    { name: "Rozwój osobisty", value: 16 },
    { name: "Konsultacja z psychologiem", value: 15 },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-8">
      <div className="flex flex-col lg:flex-row max-w-8xl mx-auto gap-10 px-2 md:px-6">
        {/* LEWA SEKCJA – zawartość z Twojego pliku */}
        <section className="flex-1 lg:max-w-[54%]">
          <section className="max-w-3xl mx-auto px-2 md:px-6 py-12 text-gray-900 dark:text-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">
              O teście MBTI
            </h2>
            <p className="mb-4">
              Test MBTI (Myers-Briggs Type Indicator) to jedno z najczęściej
              stosowanych narzędzi do określania typu osobowości. Pomaga
              zrozumieć, jak ludzie postrzegają świat, podejmują decyzje i
              wchodzą w interakcje z otoczeniem.
            </p>
            <p className="mb-6">
              Oparty na teoriach Carla Gustava Junga, test MBTI dzieli osobowość
              na cztery główne wymiary:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8">
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
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              Dlaczego ludzie robią ten test?
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Poznanie swoich mocnych stron i preferencji</li>
              <li>Poprawa relacji międzyludzkich i komunikacji</li>
              <li>Wsparcie przy wyborze ścieżki kariery</li>
              <li>Zwiększenie samoświadomości i rozwoju osobistego</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              Kto stworzył test?
            </h3>
            <p className="mb-8">
              MBTI został opracowany przez Katharine Cook Briggs i Isabel Briggs
              Myers, inspirowane teoriami Junga. Choć nie jest narzędziem
              klinicznym, jego popularność sprawiła, że jest szeroko stosowany w
              edukacji, rekrutacji i coachingu.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              W czym może Ci pomóc?
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Lepsze zrozumienie siebie i własnych reakcji</li>
              <li>Efektywniejsza współpraca i komunikacja z innymi</li>
              <li>Świadome podejmowanie decyzji życiowych i zawodowych</li>
              <li>Dopasowanie środowiska pracy do swoich predyspozycji</li>
            </ul>
          </section>
        </section>

        {/* PRAWA SEKCJA – wykresy */}
        <aside className="flex-1 flex flex-col gap-6 min-w-[320px]">
          {/* Wykresy z propozycji 2 */}
          <Visualization
            title="Dlaczego ludzie robią test MBTI?"
            data={reasonsPie}
          />
          <BarVisualization
            title="Najważniejsze oczekiwania wobec wyniku testu"
            data={expectationsBar}
          />
          {/* Wykresy z propozycji 1 */}
          <Visualization
            title="Najczęstsze wyzwania/problematiczne obszary wg MBTI"
            data={problemsPie}
          />
          <BarVisualization
            title="Najczęstsze strategie radzenia sobie z problemami"
            data={copingBar}
          />
        </aside>
      </div>
    </main>
  );
}
