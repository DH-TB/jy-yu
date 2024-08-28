import {useEffect, useState} from 'react'
import {View, Text, Image, SwiperItem, Swiper} from '@tarojs/components'
import styles from "./index.module.scss";
import Taro from '@tarojs/taro';
import cx from 'classnames'

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

const dailyImages = [
  'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kd2rhuyj30rc0rbdpi.jpg',
  'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kd1vf59j30rb0r3n37.jpg',
  'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kcyfjx8j30na0uydnf.jpg',
  'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kczw21qj30ri0rfahz.jpg',
  'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kd0l7inj30rd0rm11j.jpg',
  'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kd1c55pj30rr0s3aez.jpg',
  'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kcx8dd1j30r90retgs.jpg'
]

const dailyTexts = [
  '万事尽头 终将如意',
  '要勇敢 不要盘旋',
  '你要为喜欢的东西奔跑 走路真的来不及',
  '人间不值得 开心最重要',
  '世界需要讲道理 而我永远向着你',
  '永远有人十七岁 但是没有人永远十七岁',
  '山鸟与鱼不同路'
]
// '第一次活 手忙脚乱 一点小事就想死 是正常人类的 可爱反应机制'

function WordDay() {
  const [data, setData] = useState<{
    hitokoto: '',
    from: '',
    from_who: ''
  }[]>([])

  const getDailyType = () => dailys[Math.floor(Math.random() * (dailys.length))]

  useEffect(() => {
    const arrays = Array.from({length: 7}, (_, i) => refresh())
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
            <Image src={dailyImages[index]} className={styles.image}/>
            <View className={styles.text}>{item.hitokoto || dailyTexts[index]}</View>
            {item.hitokoto &&
              <View className={styles.tip}>
                {item.from ? <Text>—— {item.from}</Text> : <Text></Text>}
                {item.from_who ? <Text> . {item.from_who}</Text> : <Text/>}
              </View>
            }
          </View>
        </SwiperItem>
      )}
    </Swiper>
  )
}

export default WordDay

