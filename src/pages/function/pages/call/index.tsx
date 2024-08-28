import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import styles from './index.module.scss'
import cx from 'classnames';
import Taro from '@tarojs/taro'

const calls = [
  {
    song: '《没有办法》',
    text: '没有办法💗',
    image: 'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kp42fbdj30pd0pdwg1.jpg'
  },
  {
    song: '《臻》',
    text: '煜公主的美丽属于骑士✨回忆关于煜公主的👸🏼连同泪滴💧都是粉色💗',
    image: 'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kp4g79uj30u00u0taa.jpg'
  },
  {
    song: '《没有办法pt2.圣诞限度》',
    text: '',
    image: 'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kp51xppj30u00u0wm7.jpg'
  },
  {
    song: '《WHAT U WANT》',
    text: '煜公主👸🏼和骑士紧紧挨在一起💕 只是呆在原地💫便有面对世界的勇气💖',
    image: 'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kp7f9v5j3334334e82.jpg'
  },
  {
    song: '《嘿，你好》',
    text: '嘿你好📞如果时间有尽头⏳骑士会在那里等煜公主👸🏼不会再错过💓',
    image: 'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kp7samej30kf0kfjth.jpg'
  },
  {
    song: '《摩天轮》',
    text: '',
    image: 'https://wx1.sinaimg.cn/large/005SF7JFly1ht3kp9aeo5j32sb2sb4qq.jpg'
  },
  {
    song: '《Weekend》',
    text: '',
    image: 'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kpa5vm8j30n00n0wgq.jpg'
  },
  {
    song: '《唯一》',
    text: '',
    image: 'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kpc0cpcj30u00u0afx.jpg'
  },
  {
    song: '《像朋友一样吗》',
    text: '听过最动听💖的声音🎶是煜公主👸🏼在歌里说爱骑士💘骑士对煜公主的爱💓用语言总无法概括',
    image: 'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kpak9j1j30u00u076l.jpg'
  },
  {
    song: '《时光河里划着小船摇啊摇》',
    text: '和煜公主👸🏼划小船🛶摇啊摇🌟摇船桨💖摇烦恼✨咧嘴的笑🫧',
    image: 'https://wx1.sinaimg.cn/large/005SF7JFly1ht3kpbdd05j30u00u0wlq.jpg'
  },
  {
    song: '《普通不普通》',
    text: '',
    image: 'https://wx1.sinaimg.cn/large/005SF7JFly1ht3kpcgkooj30ro0ro7br.jpg'
  },
  {
    song: '《成为你自己好吗》',
    text: '',
    image: 'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kpcumgmj30u00u0djm.jpg'
  },
  {
    song: '《BLUE+PINK》',
    text: '等到煜公主👸🏼想要牵着骑士的手🩵骑士💂带煜公主去环游💞仰望宇宙💫💫',
    image: 'https://wx1.sinaimg.cn/large/005SF7JFly1ht3kp3q7mhj30u00u0n0e.jpg'
  },
  {
    song: '《between I & U》',
    text: '',
    image: ''
  },
  {
    song: '《WHAT IS LOVE》',
    text: 'Love is a mysterious💖骑士✨只想在煜公主👸🏼心里降落🛬',
    image: 'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kpbn9a1j30n00n0dhu.jpg'
  },
  {
    song: '《CANDY CRUSH》',
    text: '',
    image: ''
  },
  {
    song: '《1+1》',
    text: '',
    image: ''
  },
  {
    song: '《钟》',
    text: '',
    image: ''
  },
  {
    song: '《存在》',
    text: '',
    image: ''
  },
  {
    song: '《B.O.W》',
    text: '',
    image: ''
  },
  {
    song: '《煜Freestyle》',
    text: '',
    image: 'https://wx1.sinaimg.cn/large/005SF7JFly1ht3kpdapddj30u00u0tec.jpg'
  },
  {
    song: '《MY ZONE》',
    text: '为煜公主👸🏼打破墨菲定律🫧煜公主牵动骑士💂的每一次心跳💓',
    image: 'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kpdmq4ij30u00u0dip.jpg'
  },
  {
    song: '《朗吟》',
    text: '',
    image: 'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kpdxs8qj30u00u0acu.jpg'
  },
  {
    song: '《清零》',
    text: '',
    image: 'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kpdxs8qj30u00u0acu.jpg'
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

const degs = [
  '45deg', '60deg', '120deg', '180deg', '220deg', '260deg', '320deg'
]

const colors = [
  'rgba(221,221,221,1)',
  'rgba(110,136,161,1)',
  'rgba(74,77,103,1)',
  'rgba(119,125,165,1)',
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
            <Image className={cx(styles.songCard, 'at-col', styles.songBackground)} src={item.image}></Image>
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
