import React, { useEffect } from 'react'
import { View, Text, Image, SwiperItem, Swiper } from '@tarojs/components'
import styles from "./index.module.scss";
import cx from 'classnames'
import { defaultBackground } from '../../../../constants/color';
import { useSelector, useDispatch } from 'react-redux';
import { saveWordDay } from '../../../../slices/wordDaySlice';
import Taro, { useDidShow } from '@tarojs/taro';
import { WORD_DAY_TYPE } from '../../../../constants/recommend';
import { generateUniqueRandomNumbers, isNight } from '../../../../utils/util';

function WordDay() {
  const wordDay = useSelector((state) => state.wordDay);
  const { data } = wordDay
  const dispatch = useDispatch();

  useDidShow(() => {
    if (!isNight()) {
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
        dispatch(saveWordDay(data))
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

