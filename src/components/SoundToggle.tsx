import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import useSound from 'use-sound';

const SoundToggle = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [play, { stop }] = useSound('./sounds/audio.mp3', { 
    loop: true,
    volume: 0.4 
  });

  useEffect(() => {
    if (!isMuted) {
      play();
    } else {
      stop();
    }
    return () => stop();
  }, [isMuted, play, stop]);

  return (
    <button
      onClick={() => setIsMuted(!isMuted)}
      className="fixed bottom-6 right-6 z-50 bg-purple-600/20 p-3 rounded-full hover:bg-purple-600/30 transition-colors"
    >
      {isMuted ? (
        <VolumeX className="w-6 h-6 text-white" />
      ) : (
        <Volume2 className="w-6 h-6 text-white" />
      )}
    </button>
  );
};

export default SoundToggle;