import React from 'react'
import {Image, View} from '@tarojs/components'
import styles from './index.module.scss'
import title from '../../../../image/title.png'

function Bar() {
  return (
    <View className={styles.titleWrap}>
      <Image src={title} className={styles.title} />
    </View>
  )
}

export default Bar

