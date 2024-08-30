import React from 'react'
import {View, Text, Image, SwiperItem, Swiper} from '@tarojs/components'
import styles from "./index.module.scss";
import cx from 'classnames'
import { defaultBackground } from '../../../../constants/color';
import { useSelector } from 'react-redux';

function WordDay() {
  const data = useSelector((state) => state.wordDay);

  return (
    <Swiper className={styles.swiper}>
      {data.map((item, index) =>
        <SwiperItem key={index} className={styles.swiperitem}>
          <View key={index} className={cx(styles.dailyWrap)}>
            <Image src={item.image} className={styles.image} style={{ background: defaultBackground }}/>
            <View className={styles.text}>{item.hitokoto}</View>
            {item.hitokoto &&
              <View className={styles.tip}>
                {item.from ? <Text>—— {item.from}</Text> : <Text></Text>}
                {item.from_who ? <Text> · {item.from_who}</Text> : <Text/>}
              </View>
            }
          </View>
        </SwiperItem>
      )}
    </Swiper>
  )
}

export default WordDay

