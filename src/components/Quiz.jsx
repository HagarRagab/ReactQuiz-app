import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prevUserAnswers) => [
            ...prevUserAnswers,
            selectedAnswer,
        ]);
    }, []);

    const handleSkipQuestion = useCallback(() => {
        handleSelectAnswer(null);
    }, []);

    if (isQuizComplete) {
        return <Summary userAnswers={userAnswers} />;
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onTimeout={handleSkipQuestion}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}
