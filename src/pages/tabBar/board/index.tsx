import { useState } from 'react'
import { View } from '@tarojs/components'
import styles from './index.module.scss'
import Call from "../../function/pages/call";
import Bar from "../../component/pages/bar";
import Tab from '../../component/pages/tab';
import { useShareAppMessage } from '@tarojs/taro';

const tabs = [
  '原创', '翻唱', '通用'
]

function Board() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  useShareAppMessage(() => {
    return {
      title: '煜Yu',
      path: '/pages/tabBar/board/index',
      imageUrl: 'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kue9137j30u00u010l.jpg'
    };
  });
  
  return (
    <View className={styles.board}>
      <Bar />
      <Tab tabs={tabs} changeTab={setActiveTabIndex} />
      <Call activeTabIndex={activeTabIndex}></Call>
    </View>
  )
}

export default Board

