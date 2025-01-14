import logoImg from "../assets/quiz-logo.png";

export default function Header() {
    return (
        <header>
            <img src={logoImg} alt="A clipoard with pen" />
            <h1>reactquiz</h1>
        </header>
    );
}
