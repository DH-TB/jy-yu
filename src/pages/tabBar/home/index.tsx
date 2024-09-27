import React from 'react'
import { View } from '@tarojs/components'
import styles from './index.module.scss'
import Person from "../../function/pages/person";
import { useShareAppMessage } from '@tarojs/taro';
import { PERSON_IMAGE } from '../../../constants/home';

function Home() {
  useShareAppMessage(() => {
    return {
      title: '煜Yu',
      path: '/pages/tabBar/home/index',
      imageUrl: PERSON_IMAGE
    };
  });
  
  return (
    <View className={styles.home}>
      <Person />
    </View>
  )
}

export default Home

