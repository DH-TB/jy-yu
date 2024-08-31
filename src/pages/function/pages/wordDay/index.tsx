import React, { useEffect } from 'react'
import { View, Text, Image, SwiperItem, Swiper } from '@tarojs/components'
import styles from "./index.module.scss";
import cx from 'classnames'
import { defaultBackground } from '../../../../constants/color';
import { useSelector, useDispatch } from 'react-redux';
import { saveWordDay } from '../../../../slices/wordDaySlice';
import Taro from '@tarojs/taro';
import { WORD_DAY_TYPE } from '../../../../constants/recommend';

function WordDay() {
  const wordDay = useSelector((state) => state.wordDay);
  const { data, success } = wordDay

  const dispatch = useDispatch();

  useEffect(() => {
    if (!success) {
      const arrays = Array.from({ length: 7 }, (_, i) => refresh())
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
  }, [])

  const getDailyType = () => WORD_DAY_TYPE[Math.floor(Math.random() * (WORD_DAY_TYPE.length))]

  const refresh = () => {
    return Taro.request({
      url: `https://v1.hitokoto.cn/?c=${getDailyType().type}`,
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

