import { useState } from 'react'
import { View } from '@tarojs/components'
import styles from './index.module.scss'
import Call from "../../function/pages/call";
import Bar from "../../component/pages/bar";
import Tab from '../../component/pages/tab';

const tabs = [
  '原创', '翻唱', '普通'
]

function Board() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <View className={styles.board}>
      <Bar />
      <Tab tabs={tabs} changeTab={setActiveTabIndex} />
      <Call activeTabIndex={activeTabIndex}></Call>
    </View>
  )
}

export default Board

