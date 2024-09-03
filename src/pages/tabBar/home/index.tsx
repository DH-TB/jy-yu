import React from 'react'
import { View } from '@tarojs/components'
import styles from './index.module.scss'
import Person from "../../function/pages/person";
import { useShareAppMessage } from '@tarojs/taro';

function Home() {
  useShareAppMessage(() => {
    return {
      title: '煜Yu',
      path: '/pages/tabBar/home/index',
      imageUrl: 'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kue9137j30u00u010l.jpg'
    };
  });
  
  return (
    <View className={styles.home}>
      <Person />
    </View>
  )
}

export default Home

