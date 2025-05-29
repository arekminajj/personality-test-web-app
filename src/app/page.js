"use client";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <section className="max-w-3xl mx-auto px-6 py-12 text-gray-900 dark:text-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">O teście MBTI</h2>

        <p className="mb-4">
          Test MBTI (Myers-Briggs Type Indicator) to jedno z najczęściej
          stosowanych narzędzi do określania typu osobowości. Pomaga zrozumieć,
          jak ludzie postrzegają świat, podejmują decyzje i wchodzą w interakcje
          z otoczeniem.
        </p>

        <p className="mb-6">
          Oparty na teoriach Carla Gustava Junga, test MBTI dzieli osobowość na
          cztery główne wymiary:
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
    </main>
  );
}
