import React, { useEffect, useMemo, useRef, useState } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import cx from 'classnames'
import styles from './index.module.scss'
import { LYRIC, SPECIAL_LYRIC } from '../../../../constants/call'
import { generateUniqueRandomNumbers } from '../../../../utils/util'
import name from '../../../../image/name.png'

const RADIO = ['2623267833', '2623263920', '2623265844', '2623273307', '2623272380']

const generate = () => generateUniqueRandomNumbers(0, LYRIC.length - 1, 9)

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
  const [data, setData] = useState(generate())
  const showHeart = useMemo(() => count === 72, [count])
  const audio = useRef<any>()

  const refresh = () => {
    setCount(count + 1)
    setData(generate())
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

  useEffect(() => {
    if (showHeart) {
      Taro.showToast({
        title: '哦莫！隐藏福利就这样被你找到啦～～',
        icon: 'none'
      })
    }
  }, [showHeart])
  const getRandom = () => RADIO[Math.floor(Math.random() * RADIO.length)]

  const onClick = () => {
    if (playing) {
      return
    }
    if (audio.current) {
      setPlaying(true)
      audio.current.src = `https://music.163.com/song/media/outer/url?id=${getRandom()}`
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
        {data.map((item) =>
          <View className={cx(styles.text, SPECIAL_LYRIC.includes(LYRIC[item as number]) && styles.border)} style={{ ...getStyle() }}>
            {LYRIC[item as number]}
          </View>)}
      </View>
    </View>
  )
}

export default Lyric

