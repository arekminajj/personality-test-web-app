export default function Question({ questionData, selected, onChange }) {
  const { id, question, answers } = questionData;

  return (
    <div className="p-4 border rounded-xl shadow-md bg-black max-w-xl">
      <h2 className="text-xl font-semibold mb-4 text-white">{question}</h2>
      <ul className="space-y-2">
        {Object.entries(answers).map(([key, answer]) => (
          <li key={key}>
            <div className="select-none flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700 bg-black">
              <input
                id={`${id}-${key}`}
                type="radio"
                value={key}
                name={id.toString()}
                checked={selected?.selectedKey === key}
                onChange={() => onChange(id, key, questionData)}
                className="w-4 h-4 text-blue-600 border-gray-300"
              />
              <label
                htmlFor={`${id}-${key}`}
                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {answer.text}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
