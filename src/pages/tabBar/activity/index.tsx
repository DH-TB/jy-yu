import React, { useState } from 'react'
import { View } from '@tarojs/components'
import styles from "./index.module.scss";
import Bar from "../../component/pages/bar";
import Tab from '../../component/pages/tab';
import Summary from '../../function/pages/summary';
import { useShareAppMessage } from '@tarojs/taro';
import cx from 'classnames'

const tabs = [
  'J音社', '连麦',
]

function Activity() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState(false)

  useShareAppMessage(() => {
    return {
      title: '煜Yu',
      path: '/pages/tabBar/recommendation/index',
      imageUrl: 'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kue9137j30u00u010l.jpg'
    };
  });

  return (
    <View className={styles.recommendation}>
      <Bar />
      <Tab tabs={tabs} changeTab={setActiveTabIndex}>
        <View className={cx(styles.operationIcon, open ? 'at-icon at-icon-chevron-up' : 'at-icon at-icon-chevron-down')} onClick={() => setOpen(!open)}></View>
      </Tab>
      <Summary activeTabIndex={activeTabIndex} open={open} />
    </View>
  )
}

export default Activity

