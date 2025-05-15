export default function Question({ questionData, selected, onChange }) {
  const { id, question, answers } = questionData;

  return (
    <div className="p-4 border rounded-xl shadow-md bg-black max-w-xl">
      <h2 className="text-xl font-semibold mb-4 text-white">{question}</h2>
      <ul className="space-y-2">
        {Object.entries(answers).map(([key, answer]) => (
          <li key={key}>
              <input
                id={`${id}-${key}`}
                type="radio"
                value={key}
                name={id.toString()}
                checked={selected?.selectedKey === key}
                onChange={() => onChange(id, key, questionData)}
                className="hidden peer"
              />
              <label
                htmlFor={`${id}-${key}`}
                className="block w-full p-4 rounded-md cursor-pointer border border-gray-700 text-gray-300
                          bg-black hover:bg-gray-800 peer-checked:bg-blue-700 peer-checked:text-white transition
                          peer-checked:hover:bg-blue-800"
                          >
                {answer.text}
              </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
