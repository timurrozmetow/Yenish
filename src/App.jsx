import { useState } from 'react'; // Добавили импорт useState
import { ParticlesBackground } from "./components/ParticlesBackground";
import { Timer } from "./components/Timer";
import { Navbar } from './components/Navbar';

const MiniGame = () => {
  const [position, setPosition] = useState(50);
  
  const moveYenish = () => {
    setPosition(prev => Math.min(Math.max(prev + (Math.random() * 20 - 10), 0), 100));
  };

  // Добавили возврат JSX
  return (
    <div className="mini-game">
      <h3>Уклонись от призыва!</h3>
      <div className="game-area">
        <div 
          className="yenish-avatar"
          style={{ left: `${position}%` }}
          onMouseMove={moveYenish}
        />
        <div className="army-tank" />
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <div className="matrix-bg"></div>
      
      <div className="container">
        <img 
          src="/yenish-photo.jpg" 
          alt="Yenish" 
          className="photo"
        />
        
        <Timer />
        
        <ParticlesBackground />
      </div>


    </>
  );
}

export default App;