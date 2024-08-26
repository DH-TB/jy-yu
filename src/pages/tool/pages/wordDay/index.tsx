import { useEffect, useState } from 'react'
import { View, Text, Image, SwiperItem, Swiper } from '@tarojs/components'
import styles from "./index.module.scss";
import Taro from '@tarojs/taro';
import cx from 'classnames'
import daily1 from './image/daily1.jpg'
import daily2 from './image/daily2.jpg'
import daily3 from './image/daily3.jpg'
import daily4 from './image/daily4.jpg'
import daily5 from './image/daily5.jpg'
import daily6 from './image/daily6.jpg'
import daily7 from './image/daily7.jpeg'

const dailys = [
  {
    type: 'b',
    text: '漫画'
  },
  {
    type: 'c',
    text: '游戏'
  },
  {
    type: 'd',
    text: '文学'
  },
  {
    type: 'e',
    text: '原创'
  },
  {
    type: 'f',
    text: '网络'
  },
  {
    type: 'g',
    text: '其他'
  },
  {
    type: 'h',
    text: '影视'
  },
  {
    type: 'i',
    text: '诗词'
  },
  {
    type: 'j',
    text: '网易云'
  },
  {
    type: 'k',
    text: '哲学'
  },
  {
    type: 'i',
    text: '抖机灵'
  },
]

const dailyImages = [daily1, daily2, daily3, daily4, daily5, daily6, daily7]
const dailyTexts = [
  '万事尽头 终将如意',
  '要勇敢 不要盘旋',
  '你要为喜欢的东西奔跑 走路真的来不及',
  '人间不值得 开心最重要',
  '世界需要讲道理 而我永远想着你',
  '永远有人十七岁 但是没有人永远十七岁',
  '山鸟与鱼不同路'
]

function WordDay() {
  const [data, setData] = useState<{
    hitokoto: '',
    from: '',
    from_who: ''
  }[]>([])

  const getDailyType = () => dailys[Math.floor(Math.random() * (dailys.length))]

  useEffect(() => {
    const arrays = Array.from({ length: 7 }, (_, i) => refresh())
    console.log(arrays, 8)
    Promise.all(arrays)
      .then(responses => {
        return Promise.all(responses.map(response => response.data));
      })
      .then(data => {
        console.log(data)
        setData(data)
      })
      .catch((err) => {
        console.error('获取失败:', err)
      })
  }, [])

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
            <Image src={item.hitokoto || dailyImages[index]} className={styles.image} />
            <View className={styles.text}>{dailyTexts[index]}</View>
            <View className={styles.tip}>
              {item.from ? <Text>—— {item.from}</Text> : <Text></Text>}{item.from_who ? <Text> . {item.from_who}</Text> : <Text />}
            </View>
          </View>
        </SwiperItem>
      )}
    </Swiper>
  )
}

export default WordDay

