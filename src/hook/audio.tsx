import { useState, useRef, useEffect } from 'react';
import Taro from '@tarojs/taro';

const useAudioPlayer = (onEndedCallback?: () => void) => {
  const audio = useRef<any>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audioContext = Taro.createInnerAudioContext();
    audio.current = audioContext;

    audio.current.onPlay(() => {
      console.log('开始播放');
    });

    audio.current.onEnded(() => {
      setPlaying(false);
      if(onEndedCallback) {
        onEndedCallback()
      }
    });

    return () => {
      audio.current.destroy();
    };
  }, []);

  const playAudio = (url: string) => {
    if (playing) {
      return;
    }
    if (audio.current) {
      setPlaying(true);
      audio.current.src = url;
      audio.current.play();
    }
  };

  return {
    playAudio
  };
};

export default useAudioPlayer;
