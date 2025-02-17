import { useState } from "react";
import QUESTIONS from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Question({ index, onTimeout, onSelect }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null,
    });

    let timer = 5000;
    if (answer.selectedAnswer && answer.isCorrect === null) timer = 1000;
    if (answer.isCorrect !== null) timer = 2000;

    const handleSelectAnswer = (answer) => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null,
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: answer === QUESTIONS[index].answers[0],
            });

            setTimeout(() => {
                onSelect(answer);
            }, 2000);
        }, 1000);
    };

    let answerState = "";
    if (answer.isCorrect !== null && answer.selectedAnswer) {
        answerState = answer.isCorrect ? "correct" : "wrong";
    } else if (answer.isCorrect === null && answer.selectedAnswer !== "") {
        answerState = "answered";
    }

    return (
        <div id="question">
            <QuestionTimer
                key={timer}
                timeout={timer}
                onTimeout={answer.selectedAnswer === "" ? onTimeout : null}
                mode={answerState}
            />
            <h2>{QUESTIONS[index].text}</h2>
            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}
