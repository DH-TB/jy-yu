import React from 'react'
import { View } from '@tarojs/components'
import styles from "./index.module.scss";
import WordDay from "../../tool/pages/wordDay";
import Bar from "../../function/pages/bar";

function Recommendation() {
  return (
    <View className={styles.recommendation}>
      <Bar />
      <WordDay />
    </View>
  )
}

export default Recommendation

