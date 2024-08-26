import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import styles from './index.module.scss'
import cx from 'classnames';
import Taro from '@tarojs/taro'
import song1 from './image/song1.jpeg'
import song2 from './image/song2.jpeg'
import song3 from './image/song3.jpeg'
import song4 from './image/song4.jpeg'
import song5 from './image/song5.jpeg'
import song6 from './image/song6.jpeg'
import song7 from './image/song7.jpeg'
import song8 from './image/song8.jpeg'
import song9 from './image/song9.jpeg'

const calls = [
  {
    song: '《没有办法》',
    text: '没有办法💗',
    image: song1
  },
  {
    song: '《臻》',
    text: '煜公主的美丽属于骑士✨回忆关于煜公主的👸🏼连同泪滴💧都是粉色💗',
    image: song2
  },
  {
    song: '《WHAT U WANT》',
    text: '煜公主👸🏼和骑士紧紧挨在一起💕 只是呆在原地💫便有面对世界的勇气💖',
    image: song3
  },
  {
    song: '《像朋友一样吗》',
    text: '听过最动听💖的声音🎶是煜公主👸🏼在歌里说爱骑士💘骑士对煜公主的爱💓用语言总无法概括',
    image: song4
  },
  {
    song: '《时光河里划着小船摇啊摇》',
    text: '和煜公主👸🏼划小船🛶摇啊摇🌟摇船桨💖摇烦恼✨咧嘴的笑🫧',
    image: song5
  },
  {
    song: '《嘿，你好》',
    text: '嘿你好📞如果时间有尽头⏳骑士会在那里等煜公主👸🏼不会再错过💓',
    image: song6
  },
  {
    song: '《BLUE+PINK》',
    text: '等到煜公主👸🏼想要牵着骑士的手🩵骑士💂带煜公主去环游💞仰望宇宙💫💫',
    image: song7
  },
  {
    song: '《WHAT IS LOVE》',
    text: 'Love is a mysterious💖骑士✨只想在煜公主👸🏼心里降落🛬',
    image: song8
  },
  {
    song: '《MY ZONE》',
    text: '为煜公主👸🏼打破墨菲定律🫧煜公主牵动骑士💂的每一次心跳💓',
    image: song9
  }
]

const callsOther = [
  {
    song: '《Therefore I Am》',
    text: '✨I think, therefore, I am. 💖'
  },
  {
    song: '《向云端》',
    text: '✨向云端☁️山那边⛰️海里边🌊陪伴在煜公主身边🩵'
  },
  {
    song: '《认真的雪》',
    text: '爱的那么认真💫爱的那么认真 💖公主和骑士之间🫧不会听见说不可能💌'
  },
  {
    song: '《没有办法》',
    text: '煜公主的美丽属于骑士✨回忆关于煜公主的👸🏼连同泪滴💧都是粉色💗'
  },
  {
    song: '《臻》',
    text: '煜公主的美丽属于骑士✨回忆关于煜公主的👸🏼连同泪滴💧都是粉色💗'
  },
  {
    song: '《WHAT U WANT》',
    text: '煜公主👸🏼和骑士紧紧挨在一起💕 只是呆在原地💫便有面对世界的勇气💖'
  },
  {
    song: '《像朋友一样吗》',
    text: '听过最动听💖的声音🎶是煜公主👸🏼在歌里说爱骑士💘骑士对煜公主的爱💓用语言总无法概括'
  },
  {
    song: '《时光河里划着小船摇啊摇》',
    text: '和煜公主👸🏼划小船🛶摇啊摇🌟摇船桨💖摇烦恼✨咧嘴的笑🫧'
  },
  {
    song: '《嘿，你好》',
    text: '嘿你好📞如果时间有尽头⏳骑士会在那里等煜公主👸🏼不会再错过💓'
  },
  {
    song: '《BLUE+PINK》',
    text: '等到煜公主👸🏼想要牵着骑士的手🩵骑士💂带煜公主去环游💞仰望宇宙💫💫'
  },
  {
    song: '《WHAT IS LOVE》',
    text: 'Love is a mysterious💖骑士✨只想在煜公主👸🏼心里降落🛬'
  },
  {
    song: '《MY ZONE》',
    text: '为煜公主👸🏼打破墨菲定律🫧煜公主牵动骑士💂的每一次心跳💓'
  }
]

const backgrounds = [
  'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
  'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
  'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
  'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
  'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)',
  'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
  'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)',
  'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
  'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)',
  'linear-gradient(to top, #fddb92 0%, #d1fdff 100%)',
  'linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%)',
  'linear-gradient(to top, #feada6 0%, #f5efef 100%)',
  'linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)',
  'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)',
  'linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)',
  'linear-gradient( 58.2deg,  rgba(40,91,212,0.73) -3%, rgba(171,53,163,0.45) 49.3%, rgba(255,204,112,0.37) 97.7% )',
  'linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)',
  'linear - gradient(-225deg, #3D4E81 0 %, #5753C9 48 %, #6E7FF3 100 %)',
  'linear - gradient(-225deg, #DFFFCD 0 %, #90F9C4 48 %, #39F3BB 100 %)',
  'linear - gradient(to right, #c1c161 0 %, #c1c161 0 %, #d4d4b1 100 %)',
  'linear - gradient(60deg, #3d3393 0 %, #2b76b9 37 %, #2cacd1 65 %, #35eb93 100 %)',
  'linear - gradient(to top, #9be15d 0 %, #00e3ae 100 %)',
  'linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)',
  'linear-gradient( 180.3deg,  rgba(221,221,221,1) 5.5%, rgba(110,136,161,1) 90.2% )',
  'linear-gradient( 89.4deg,  rgba(74,77,103,1) -4.3%, rgba(119,125,165,1) 102.1% )'
]

const degs = [
  '45deg', '60deg', '120deg', '180deg', '220deg', '260deg', '320deg'
]

const colors = [
  'rgba(221,221,221,1) 5.5%',
  'rgba(110,136,161,1) 90.2%',
  'rgba(74,77,103,1) -4.3%',
  'rgba(119,125,165,1) 102.1%',
  '#0c3483',
  '#a2b6df',
  '#6b8cce',
  '#fad0c4',
  '#ffd1ff',
  '#a18cd1',
  '#fbc2eb',
  '#ff9a9e',
  '#fecfef',
  '#a6c1ee',
  '#fdcbf1',
  '#e6dee9',
  '#a6c0fe',
  '#f68084',
  '#fccb90',
  '#d57eeb',
  '#a8edea',
  '#fed6e3',
  '#d299c2',
  '#fef9d7',
  '#ebc0fd',
  '#d9ded8',
  '#fddb92',
  '#d1fdff',
  '#ebbba7',
  '#cfc7f8',
  '#feada6',
  '#f5efef',
  '#9795f0',
  '#fbc8d4',
  '#abecd6',
  '#fbed96',
  '#d5dee7',
  '#ffafbd',
  '#c9ffbf',
  '#fff7f3',
  '#bedc40',
  '#c69df6',
  '#ff5555',
  '#e03838',
  '#ffcdaa',
  '#ee897f',
  '#3D4E81',
  '#5753C9',
  '#6E7FF3',
  '#DFFFCD',
  '#90F9C4',
  '#39F3BB',
  '#c1c161',
  '#c1c161',
  '#d4d4b1',
  '#3d3393',
  '#2b76b9',
  '#2cacd1',
  '#35eb93',
  '#9be15d',
  '#00e3ae'
]


const Call = (props: { activeTabIndex: number }) => {

  const copy = (data) => {
    Taro.setClipboardData({
      data
    })
  }

  const getColor = () => colors[Math.floor(Math.random() * (colors.length))]

  if (props.activeTabIndex === 0) {
    return <View className={cx(styles.cardWrap, 'at-row at-row--wrap')}>
      {
        calls.map((item) =>
          <View className={cx(styles.songCard, 'at-col')} onClick={() => copy(item.text)} >
            <Image className={cx(styles.songCard, 'at-col', styles.songBackground)} src={item.image || song1}></Image>
            <View className={cx(styles.songCardText)}>
              <Text className={cx(styles.title, styles.text)}>{item.song}</Text>
              <Text className={styles.text}>{item.text}</Text>
            </View>

          </View>
        )
      }
    </View>
  } else {
    return <View className={cx(styles.cardWrap)}>
      {
        callsOther.map((item) => {
          const deg = degs[Math.floor(Math.random() * (degs.length))]
          const background = `linear-gradient(${deg}, ${getColor()} 0%, ${getColor()} 0%, ${getColor()} 100%)`
          console.log(background)
          return (
            <View className={cx(styles.songCard, styles.otherSongCard)} onClick={() => copy(item.text)} >
              <View className={cx(styles.songCardText, styles.otherSongCard)} style={{ background }}>
                <Text className={cx(styles.otherSongTitle)}>{item.song}</Text>
                <Text className={cx(styles.otherSongText)}>{item.text}</Text>
              </View>
            </View>
          )
        })
      }
    </View>
  }
}

export default Call
