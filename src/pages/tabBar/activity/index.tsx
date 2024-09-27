import React, { useState } from 'react'
import { View } from '@tarojs/components'
import styles from "./index.module.scss";
import Bar from "../../component/pages/bar";
import Tab from '../../component/pages/tab';
import Summary from '../../function/pages/summary';
import { useShareAppMessage } from '@tarojs/taro';
import cx from 'classnames'
import { PERSON_IMAGE } from '../../../constants/home';

const tabs = [
  'J音社', '连麦',
]

function Activity() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [open, setOpen] = useState(false)

  useShareAppMessage(() => {
    return {
      title: '煜Yu',
      path: '/pages/tabBar/recommendation/index',
      imageUrl: PERSON_IMAGE
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

