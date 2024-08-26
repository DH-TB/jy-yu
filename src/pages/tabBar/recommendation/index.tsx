import React from 'react'
import { View } from '@tarojs/components'
import styles from "./index.module.scss";
import WordDay from "../../tool/pages/wordDay";

function Recommendation() {
  return (
    <View className={styles.recommendation}>
      <WordDay />
    </View>
  )
}

export default Recommendation

