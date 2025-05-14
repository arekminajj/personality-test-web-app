export default function Question({ questionData }) {
  const {id, question, answers } = questionData;

  return (
    <div className="p-4 border rounded-xl shadow-md bg-black max-w-xl">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <ul className="space-y-2">
        {Object.keys(answers).map((key) => {
          const answer = answers[key];
          return (
              <li key={key}> 
                <div class="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700">
                    <input id={answer.text} type="radio" value={answer.text} name={id} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for={answer.text} class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{answer.text}</label>
                </div>
              </li>
          );
        })}
      </ul>
    </div>
  );
}
