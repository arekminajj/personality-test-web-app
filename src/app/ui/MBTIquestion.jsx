export default function Question({ questionData }) {
    const { question, answers } = questionData;
  
    return (
      <div className="p-4 border rounded-xl shadow-md bg-black max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">{question}</h2>
        <ul className="space-y-2">
          {answers.map((answer, index) => (
            <li key={index}>
              <button className="w-full text-left p-2 bg-gray-700 hover:bg-gray-900 rounded">
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }