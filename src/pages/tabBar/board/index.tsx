import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.module.scss'
import cx from 'classnames';
import Call from "../../function/pages/call";
import Bar from "../../function/pages/bar";

const tabs = [
  '原创', '翻唱'
]

function Board() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <View className={styles.board}>
      <Bar />
      <View className={styles.tab}>
        {tabs.map((item, index) => <Text className={cx(styles.tabTitle, index === activeTabIndex && styles.activeTitle)} onClick={() => setActiveTabIndex(index)}>{item}</Text>)}
      </View>
      <Call activeTabIndex={activeTabIndex}></Call>
    </View>
  )
}

export default Board

