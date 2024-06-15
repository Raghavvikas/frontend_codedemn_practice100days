import { useState } from "react";


export default function Question({
    question,
    questionDescription,
    options,
    explanation,
    answerQuestion,
}) {
    const [isAnswered, setIsAnswered] = useState(false);

    return (
        <>
            <div>
                <h3 className="text-3xl font-bold">{question}</h3>

                <p className="text-lg text-gray-800 mt-2">
                    {questionDescription}
                </p>
                <div className="flex flex-col items-start gap-2 w-full mt-6">
                    {options.map((optionText, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => answerQuestion(index)}
                                className="rounded-md border-2 px-4 py-2 w-full font-bold hover:bg-gray-200"
                            >
                                {optionText}
                            </button>
                        );
                    })}
                </div>

                {isAnswered ? (
                    <>
                        <p>{explanation}</p>
                    </>
                ) : null}
            </div>
        </>
    );
}
