import React, { useState } from 'react'
import { Text, View } from '@tarojs/components'
import styles from './index.module.scss'
import cx from 'classnames';


interface IProps {
  tabs: string[]
  changeTab: (index: number) => void
}

function Tab(props: IProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const changeTab = (index) => {
    setActiveTabIndex(index)
    props.changeTab(index)
  }

  return (
    <View className={styles.tab}>
      {props.tabs.map((item, index) => <View className={cx(styles.tabTitle, index === activeTabIndex && styles.activeTitle)} onClick={() => changeTab(index)}>{item}</View>)}
    </View>
  )
}

export default Tab

