import { memo, useCallback, useEffect, useRef, useState } from 'react'
import HomeScene from '../components/HomeScene.jsx';
import HomeInfo from '../components/HomeInfo';

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons';

const Home = ({ t }) => {
  const audioRef = useRef(null);

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(sakura);
    }

    const audio = audioRef.current;
    const unlockAudio = () => {
      audio.play().catch(() => undefined);
    };

    audio.volume = 0.35;
    audio.loop = true;

    if (isPlayingMusic) {
      audio.play().catch(() => {
        document.addEventListener('click', unlockAudio, { once: true });
        document.addEventListener('touchstart', unlockAudio, { once: true });
      });
    } else {
      audio.pause();
    }

    return () => {
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('touchstart', unlockAudio);
      audio.pause();
    };
  }, [isPlayingMusic]);

  const handleMusicToggle = useCallback(() => {
    setIsPlayingMusic((isPlaying) => !isPlaying);
  }, []);

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} t={t} />}
      </div>

      <HomeScene
        isRotating={isRotating}
        setCurrentStage={setCurrentStage}
        setIsRotating={setIsRotating}
      />

      <button
        type="button"
        className="absolute bottom-2 left-2 rounded-full bg-white/80 p-1 shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={t.home.soundToggle}
        aria-pressed={isPlayingMusic}
        onClick={handleMusicToggle}
      >
        <img src={!isPlayingMusic ? soundoff : soundon} alt="" className="w-10 h-10 object-contain" aria-hidden="true" />
      </button>
    </section>
  )
}

export default memo(Home)
