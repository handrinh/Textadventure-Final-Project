import { useState, useEffect, useCallback } from 'react';
import '../../Styles/storiesSeite/GameScreen.css';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Icon from "../../Components/Icons";

const GameScreen = ({ onExit }) => {
  const {scenarioTitle } = useParams();
  const [currentText, setCurrentText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const dummyInitialText = `Willkommen in deinem Abenteuer! Szenario Titel: ${scenarioTitle}`;
  const dummyNextText = "Dies ist der nächste Abschnitt deines Abenteuers.";

  const startGame = useCallback(async () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentText(dummyInitialText);
      setGameStarted(true);
      setLoading(false);
    }, 1000);
  }, [dummyInitialText]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const nextStep = async () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentText(dummyNextText);
      setUserInput('');
      setLoading(false);
    }, 1000);
  };

  const submitInput = async () => {
    if (!userInput) return; 
    setLoading(true);
    setTimeout(() => {
      setCurrentText(`Benutzereingabe: ${userInput}`);
      setUserInput('');
      setLoading(false);
    }, 1000);
  };

  const handleExit = () => {
    onExit();
  };

  if (loading) {
    return <div>Wird geladen...</div>;
  }

  return (
    <main className="gameScreen-background">
      <div className="game-screen">
        <button className="exit-button" onClick={handleExit}><Icon type="exit" /></button>
        <div className="story-content">
          <div className="story-text">
            <p>{currentText}</p>
          </div>
        </div>
        {gameStarted && (
          <div className="user-interaction">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Geben Sie Ihre Eingabe ein"
              id="user-input"
            />
            <button onClick={submitInput}><Icon type="send" /></button>
            <button onClick={nextStep}><Icon type="next" /></button>
          </div>
        )}
      </div>
    </main>
  );
};

GameScreen.propTypes = {
  onExit: PropTypes.func.isRequired,
};

export default GameScreen;