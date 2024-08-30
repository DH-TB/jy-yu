import React from 'react'
import { View } from '@tarojs/components'
import styles from './index.module.scss'
import { LYRIC } from '../../../../constants/call'
import { generateUniqueRandomNumbers } from '../../../../utils/util'


const getStyle = () => {
  const alignments = ['flex-start', 'center', 'flex-end'];
  const randomRotation = Math.floor(Math.random() * 21) - 10;
  const randomOffset = Math.floor(Math.random() * 21) - 10; 
  return {
    transform: `rotate(${randomRotation}deg)`,
    marginLeft: `${randomOffset}%`,
    alignSelf: alignments[Math.floor(Math.random() * alignments.length)]
  }
}

function Lyric() {
  return (
    <View className={styles.lyricContainer}>
      <View className={styles.lyricWrap}>
        {generateUniqueRandomNumbers(0, 30, 9).map((item) => <View className={styles.text} style={{ ...getStyle() }}>
          {LYRIC[item as number]}
        </View>)}
      </View>
    </View>
  )
}

export default Lyric

