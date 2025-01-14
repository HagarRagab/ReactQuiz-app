import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter(
        (answer) => answer === null
    ).length;
    const correctAnswers = userAnswers.filter(
        (answer, index) => answer === QUESTIONS[index].answers[0]
    ).length;

    const skippedAnswersShare = Math.round(
        (skippedAnswers / userAnswers.length) * 100
    );
    const correctAnswersShare = Math.round(
        (correctAnswers / userAnswers.length) * 100
    );
    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;
    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Trophy logo" />
            <h2>quiz completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersShare}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersShare}%</span>
                    <span className="text">correct</span>
                </p>
                <p>
                    <span className="number">{wrongAnswersShare}%</span>
                    <span className="text">wrong</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClasses = "user-answer ";
                    if (answer === null) cssClasses += "skipped";
                    else if (answer === QUESTIONS[index].answers[0])
                        cssClasses += "correct";
                    else cssClasses += "wrong";

                    return (
                        <li key={QUESTIONS[index].text}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={cssClasses}>{answer || "skipped"}</p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
