import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import styles from './index.module.scss'
import Taro from '@tarojs/taro'

const API = ['https://timor.tech/api/holiday/tts', 'https://timor.tech/api/holiday/tts/next', 'https://timor.tech/api/holiday/tts/tomorrow']

function Holiday() {
  const [data, setData] = useState('')

  useEffect(() => {
    Taro.request({
      url: API[Math.floor(Math.random() * 3)],
      method: 'GET'
    }).then((res) => {
      setData(res.data.tts)
    })

  }, [])

  return (
    <View className={styles.holiday}>
      {data}
    </View>
  )
}

export default Holiday

