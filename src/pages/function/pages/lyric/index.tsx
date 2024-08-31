import React, { useState } from 'react'
import { View } from '@tarojs/components'
import styles from './index.module.scss'
import { LYRIC } from '../../../../constants/call'
import { generateUniqueRandomNumbers } from '../../../../utils/util'

const getStyle = () => {
  const alignments = ['flex-start', 'center', 'flex-end'];
  const randomRotation = Math.floor(Math.random() * 21) - 10;
  return {
    transform: `rotate(${randomRotation}deg)`,
    alignSelf: alignments[Math.floor(Math.random() * alignments.length)]
  }
}

function Lyric() {
  const [data, setData] = useState(generateUniqueRandomNumbers(0, LYRIC.length -1, 9))

  const refresh = () => {
    setData(generateUniqueRandomNumbers(0, LYRIC.length, 9))
  }

  return (
    <View className={styles.lyricWrap} onClick={refresh}>
      {data.map((item) => <View className={styles.text} style={{ ...getStyle() }}>
        {LYRIC[item as number]}
      </View>)}
    </View>
  )
}

export default Lyric

