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
                <div className="select-none flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700 bg-black focus:bg-gray-800">
                    <label htmlFor={answer.text} className=" focus: focus:ring-0 w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      <input id={answer.text} type="radio" value={answer.text} name={id} className="w-4 h-4 text-blue-600 border-gray-300"></input>
                        {answer.text}
                    </label>
                </div>
              </li>
          );
        })}
      </ul>
    </div>
  );
}
