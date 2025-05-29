import TestQuestions from '../../data/TestQuestions'
import Visualization from '@/components/Visualization'

export default async function Page() {
  const statsRes = await fetch(process.env.BASE_URL + `/api/stats`,
    { cache: 'no-store' }
  )
  if (!statsRes.ok) throw new Error('Failed to load stats')
  const { data: rawStats } = await statsRes.json()

  const merged = rawStats
    .map(({ questionId, stats }) => {
      const q = TestQuestions.find(q => String(q.id) === questionId)
      const statsWithText = stats.map(({ key, percent }) => ({
        answerText: q.answers[key].text,
        percent,
      }))
      return {
        questionId,
        questionText: q ? q.question : `Question ${questionId}`,
        stats: statsWithText,
      }
    })
    .sort((a, b) => Number(a.questionId) - Number(b.questionId))

  return (
    <main className="bg-black min-h-screen text-white py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Statystki wyników
      </h1>
      <Visualization data={merged} />
    </main>
  )
}
