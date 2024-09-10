import React, { useState } from 'react'
import { View, Text, Image, SwiperItem, Swiper } from '@tarojs/components'
import styles from "./index.module.scss";
import cx from 'classnames'
import { defaultBackground } from '../../../../constants/color';
import Taro, { useDidShow } from '@tarojs/taro';
import { WORD_DAY_TYPE, DAY_TEXTS, DAY_IMAGES, TEXT3, IMAGE3 } from '../../../../constants/recommend';
import { generateUniqueRandomNumbers, getIndex, isNight } from '../../../../utils/util';

const getSpecialInitState = () => generateUniqueRandomNumbers(0, TEXT3.length - 1, IMAGE3.length).map((item, i) => ({
  image: IMAGE3[i],
  hitokoto: TEXT3[item as unknown as number],
  from: '',
  from_who: ''
}))

const initialState = Array.from({ length: 7 }, (_, i) => ({
  image: DAY_IMAGES[getIndex()][i],
  hitokoto: DAY_TEXTS[getIndex()][i],
  from: '',
  from_who: ''
}))

function WordDay() {
  const [data, setData] = useState(getIndex() === 13 ? getSpecialInitState() : initialState)

  useDidShow(() => {
    if (getIndex() === 13) {
      setData(getSpecialInitState())
    } else if (isNight()) {
      return
    } else {
      fetch()
    }
  })

  const fetch = () => {
    const arrays = generateUniqueRandomNumbers(0, WORD_DAY_TYPE.length - 1, 7).map((item) => refresh(WORD_DAY_TYPE[item as number]))
    Promise.all(
      arrays.map(promise =>
        promise.then(response => {
          if (response.statusCode === 403) {
            throw new Error('403 Forbidden: Access is denied');
          }
          return response.data;
        })
      )
    )
      .then(data => {
        setData(data.map((item) => ({
          ...item,
          hitokoto: item.hitokoto,
          from: item.from,
          from_who: item.from_who,
        })))
      })
      .catch((err) => {
        console.error('获取失败:', err)
      })
  }

  const refresh = (item) => {
    return Taro.request({
      url: `https://v1.hitokoto.cn/?c=${item.type}`,
      method: 'GET'
    })
  }

  return (
    <Swiper className={styles.swiper}>
      {data.map((item, index) =>
        <SwiperItem key={index} className={styles.swiperitem}>
          <View key={index} className={cx(styles.dailyWrap)}>
            <Image src={item.image} className={styles.image} style={{ background: defaultBackground }} />
            <View className={styles.text}>{item.hitokoto}</View>
            {item.hitokoto &&
              <View className={styles.tip}>
                {item.from ? <Text>—— {item.from}</Text> : <Text></Text>}
                {item.from_who ? <Text> · {item.from_who}</Text> : <Text />}
              </View>
            }
          </View>
        </SwiperItem>
      )}
    </Swiper>
  )
}

export default WordDay


