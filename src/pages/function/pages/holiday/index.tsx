import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import styles from './index.module.scss'
import Taro from '@tarojs/taro'
import cx from 'classnames'
import get from 'lodash/get'

const API = ['https://timor.tech/api/holiday/tts', 'https://timor.tech/api/holiday/tts/next', 'https://timor.tech/api/holiday/tts/tomorrow']

function Holiday() {
  const [data, setData] = useState('')
  const [joke, setJoke] = useState('')
  const [poetry, setPoetry] = useState('')
  const [calendar, setCalendar] = useState({
    year: '',
    lunar_month: '',
    lunar_day: '',
    month: '',
    date: '',
    today: '',
    day: ''
  })

  useEffect(() => {
    Taro.request({
      url: API[Math.floor(Math.random() * 3)],
      method: 'GET'
    }).then((res) => {
      setData(res.data.tts)
    })
    Taro.request({
      url: 'https://api.xygeng.cn/openapi/day#',
      method: 'GET'
    }).then((res) => {
      const data = get(res.data, 'data')
      setCalendar({
        today: data.date,
        day: data.solar.day,
        ...data.lunar,
      })
    })
    Taro.request({
      url: 'https://api.vvhan.com/api/text/joke',
      method: 'GET'
    }).then((res) => {
      setJoke(`🤡 (好笑程度不详)：${res.data}`)
    })
    Taro.request({
      url: 'https://api.vvhan.com/api/ian/shici',
      method: 'GET'
    }).then((res) => {
      setPoetry(`诗词：《${res.data}》`)
    })
  }, [])

  return (
    <View className={styles.holiday}>
      {calendar.date && <View className={styles.word}>
        <View>今天是{calendar.today}，{calendar.day}。</View>
        农历{calendar.month}{calendar.date}，{calendar.year}年{calendar.lunar_month}月{calendar.lunar_day}日。
      </View>
      }
      {joke && <View className={styles.word}>{joke}</View>}
      {poetry && <View className={styles.word}>{poetry}</View>}
      <View className={styles.system}>
        <View className={styles.sun}></View>
        <View className={styles.merpath}></View>
        <View className={styles.mer}></View>
        <View className={styles.venpath}></View>
        <View className={styles.ven}></View>
        <View className={styles.earpath}></View>
        <View className={styles.ear}><View className={styles.lune}></View></View>
        <View className={styles.marpath}></View>
        <View className={styles.mar}>
          <View className={styles.pho}></View>
          <View className={styles.dem}></View>
        </View>
        <View className={styles.juppath}></View>
        <View className={styles.jup}>
          <View className={styles.spot}></View>
          <View className={styles.joveio}></View>
          <View className={styles.joveeur}></View>
          <View className={styles.jovegan}></View>
          <View className={styles.jovecal}></View>
        </View>
        <View className={styles.satpath}></View>
        <View className={styles.sat}>
          <View className={cx('f-ring')}></View>
          <View className={cx('a-ring')}></View>
          <View className={cx('b-ring')}></View>
          <View className={cx('c-ring')}></View>
        </View>
        <View className={styles.urapath}></View>
        <View className={styles.ura}>
          <View className={cx('e-ring')}></View>
        </View>
        <View className={styles.neppath}></View>
        <View className={styles.nep}>
          <View className={styles.spot}></View>
        </View>
        <View className={styles.plupath}></View>
        <View className={styles.plu}></View>
      </View>
    </View>
  )
}

export default Holiday

