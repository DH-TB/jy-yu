import React, { useEffect, useMemo, useRef, useState } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import styles from './index.module.scss'
import { LYRIC } from '../../../../constants/call'
import { generateUniqueRandomNumbers } from '../../../../utils/util'
import name from '../../../../image/name.png'
import audio1 from '../../../../assets/audio1.mp3'
import audio2 from '../../../../assets/audio2.mp3'
import audio3 from '../../../../assets/audio3.mp3'
import audio4 from '../../../../assets/audio4.mp3'
import audio5 from '../../../../assets/audio5.mp3'

const RADIO = [audio1, audio2, audio3, audio4, audio5]
const getStyle = () => {
  const alignments = ['flex-start', 'center', 'flex-end'];
  const randomRotation = Math.floor(Math.random() * 21) - 10;
  return {
    transform: `rotate(${randomRotation}deg)`,
    alignSelf: alignments[Math.floor(Math.random() * alignments.length)]
  }
}

function Lyric() {
  const [count, setCount] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [data, setData] = useState(generateUniqueRandomNumbers(0, LYRIC.length - 1, 9))
  const showHeart = useMemo(() => count === 47, [count])
  const audio = useRef<any>()

  const refresh = () => {
    setCount(count + 1)
    setData(generateUniqueRandomNumbers(0, LYRIC.length, 9))
  }

  useEffect(() => {
    const audioContext = Taro.createInnerAudioContext();
    audio.current = audioContext;

    audio.current.onPlay(() => {
      console.log('开始播放');
    });

    audio.current.onEnded(() => {
      setCount(0)
      setPlaying(false)
    });

    return () => {
      audio.current.destroy();
    };
  }, []);

  const getRandom = () => RADIO[Math.floor(Math.random() * RADIO.length)]

  const onClick = () => {
    if(playing) {
      return
    }
    if (audio.current) {
      setPlaying(true)
      audio.current.src = getRandom()
      audio.current.play()
    }
  }

  return (
    <View className={styles.lyricWrap}>
      {showHeart &&
        <View className={styles.heartWrap} catchMove>
          <View className={styles.heart}>
            <Image src={name} className={styles.name} onClick={onClick} />
          </View>
        </View>
      }
      <View className={styles.lyric} onClick={refresh}>
        {data.map((item) => <View className={styles.text} style={{ ...getStyle() }}>
          {LYRIC[item as number]}
        </View>)}
      </View>
    </View>
  )
}

export default Lyric

