import { useRef } from "react";

export default function Answers({
    answers,
    selectedAnswer,
    answerState,
    onSelect,
}) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = answer === selectedAnswer;
                let cssClasses = "";
                if (isSelected && answerState === "answered")
                    cssClasses = "selected";
                if (
                    isSelected &&
                    (answerState === "correct" || answerState === "wrong")
                )
                    cssClasses = answerState;
                return (
                    <li key={answer} className="answer">
                        <button
                            onClick={onSelect.bind(null, answer)}
                            className={cssClasses}
                            disabled={selectedAnswer !== ""}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
