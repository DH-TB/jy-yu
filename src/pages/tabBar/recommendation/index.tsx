import React, { useState } from 'react'
import { View } from '@tarojs/components'
import styles from "./index.module.scss";
import WordDay from "../../function/pages/wordDay";
import Random from "../../function/pages/random";
import Bar from "../../component/pages/bar";
import Tab from '../../component/pages/tab';

const tabs = [
  '日推', '随机数'
]

const background = 'radial-gradient(circle, rgba(211, 120, 133, 0.6) 30%, #e9d7d4 70%)'

function Recommendation() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  return (
    <View className={styles.recommendation} style={{ background: activeTabIndex === 0 ? 'rgba($color: #fff7f3, $alpha: 0.3)' : background }}>
      <Bar />
      <Tab tabs={tabs} changeTab={setActiveTabIndex} />
      {activeTabIndex === 0 ? <WordDay activeTabIndex={activeTabIndex} /> : <Random />}
    </View>
  )
}

export default Recommendation

