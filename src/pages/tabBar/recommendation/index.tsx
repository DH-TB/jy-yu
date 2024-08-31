import React, { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import styles from "./index.module.scss";
import WordDay from "../../function/pages/wordDay";
import Random from "../../function/pages/random";
import Lyric from "../../function/pages/lyric";
import Bar from "../../component/pages/bar";
import Tab from '../../component/pages/tab';
import { useDispatch } from 'react-redux';
import { saveWordDay } from '../../../slices/wordDaySlice';
import Taro from '@tarojs/taro';
import { WORD_DAY_TYPE } from '../../../constants/recommend';

const tabs = [
  '日推', '歌词', '随机'
]
const background = 'radial-gradient(circle, rgba(211, 120, 133, 0.6) 30%, #e9d7d4 70%)'

function Recommendation() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const dispatch = useDispatch();

  useEffect(() => {
    const arrays = Array.from({ length: 7 }, (_, i) => refresh())
    Promise.all(arrays)
      .then(responses => {
        return Promise.all(responses.map(response => response.data));
      })
      .then(data => {
        dispatch(saveWordDay(data))
      })
      .catch((err) => {
        console.error('获取失败:', err)
      })
  }, [])

  const getDailyType = () => WORD_DAY_TYPE[Math.floor(Math.random() * (WORD_DAY_TYPE.length))]

  const refresh = () => {
    return Taro.request({
      url: `https://v1.hitokoto.cn/?c=${getDailyType().type}`,
      method: 'GET'
    })
  }

  const renderContent = () => {
    if (activeTabIndex === 0) {
      return <WordDay />
    }
    else if (activeTabIndex === 1) {
      return <Lyric />
    }
    return <Random />
  }

  return (
    <View className={styles.recommendation} style={{ background: activeTabIndex === 0 ? 'rgba($color: #fff7f3, $alpha: 0.3)' : background }}>
      <Bar />
      <Tab tabs={tabs} changeTab={setActiveTabIndex} />
      {renderContent()}
    </View>
  )
}

export default Recommendation

