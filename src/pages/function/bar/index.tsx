import React from 'react'
import { View } from '@tarojs/components'
import styles from './index.module.scss'
import Person from "../../function/pages/person";

function Home() {
  return (
    <View className={styles.home}>
      <Person />
    </View>
  )
}

export default Home

