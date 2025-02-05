'use client'

import "./Game.css"

const Game = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score }) => {
    return (
        <div className="game">
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>
            <h1>Adivinhe a palavra:</h1>
            <h3 className="tip">
                Dicas sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativas(s).</p>
            <div className="wordContainer">
                {letters.map((lettler, index) =>
                    guessedLetters.includes(lettler) ? (
                        <span key={index} className="letter">
                            {lettler}
                        </span>
                    ) : (
                        <span key={index} className="blankSquare"></span>
                    )
                )}
            </div>
            <div className="letterContainer">
                <p>Tente adivinhar uma letra da palavra:</p>
                <form>
                    <input type="text" name="letter" maxLength={1} required />
                    <button>Jogar</button>
                </form>
            </div>
            <div className="wrongLetterContainer">
                <p>Letras já utilizadas:</p>
                {wrongLetters.map((letter, index) => (
                    <span key={index}>{letter}, </span>
                ))}
            </div>
        </div>
    )
}

export default Game;