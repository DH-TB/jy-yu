import React, { useState } from 'react'
import { View } from '@tarojs/components'
import styles from "./index.module.scss";
import WordDay from "../../function/pages/wordDay";
import Random from "../../function/pages/random";
import Lyric from "../../function/pages/lyric";
import Holiday from "../../function/pages/holiday";
import Bar from "../../component/pages/bar";
import Tab from '../../component/pages/tab';
import { useShareAppMessage } from '@tarojs/taro';

const tabs = [
  '日推', '歌词', '抽象', '随机'
]
const background = 'radial-gradient(circle, rgba(211, 120, 133, 0.6) 30%, #e9d7d4 70%)'
const ellipseBackground = 'radial-gradient(ellipse, rgba(211, 120, 133, 0.6) 24%, #e9d7d4 70%)'
const bottomBackground = 'radial-gradient(circle at 50% 70%, rgba(211, 120, 133, 0.8) 15%, #e9d7d4 70%)'
const lightBackground = 'rgba($color: #fff7f3, $alpha: 0.3)'
const arrays = [lightBackground, background, bottomBackground, ellipseBackground]

function Recommendation() {
  useShareAppMessage(() => {
    return {
      title: '煜Yu',
      path: '/pages/tabBar/recommendation/index',
      imageUrl: 'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kue9137j30u00u010l.jpg'
    };
  });
  
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const renderContent = () => {
    if (activeTabIndex === 0) {
      return <WordDay />
    }
    else if (activeTabIndex === 1) {
      return <Lyric />
    }
    else if (activeTabIndex === 2) {
      return <Holiday />
    }
    return <Random />
  }

  const getBackground = () => arrays[activeTabIndex]

  return (
    <View className={styles.recommendation} style={{ background: getBackground() }}>
      <Bar />
      <Tab tabs={tabs} changeTab={setActiveTabIndex} />
      {renderContent()}
    </View>
  )
}

export default Recommendation

