import {useEffect, useState} from 'react'
import Taro from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import styles from './index.module.scss'
import q1 from './image/q1.jpeg'
import q2 from './image/q2.jpeg'
import q3 from './image/q3.jpeg'
import q4 from './image/q4.jpeg'
import image from './image/q.jpg'
import person1 from './image/person1.jpeg'
import person2 from './image/person2.jpeg'
import qr from './image/qr.jpeg'
import qr1 from './image/qr1.svg'
import text from './image/text.png'
import song from './image/song.png'

import cx from 'classnames'
import {AtIcon} from "taro-ui";

const links = [
  {
    image: q1,
    value: '【超话】',
    path: '5020731203125889'
  },
  {
    image: q2,
    value: '【专贴】',
    path: '5046827349705134'
  },
  {
    image: q3,
    value: '【B站】',
    path: '113006595932963'
  },
  {
    image: q4,
    value: '【煜情骨纵】',
    path: '1753403670'
  },
  // value: '【TOP歌曲】'
  // value: '【打工记录】'
  // value: '【小煜语录】'
  // value: '【二创安利】'
  // value: '【应援合集】'
  // value: '【立绘合集】'
  // value: '【纪念日子】'
  // value: '【ALL•煜】'
]


function Person() {
  const [showFront, setShowFront] = useState(true)

  useEffect(() => {
    const audio = Taro.createInnerAudioContext();
    audio.src = ''; // 替换为你的音频地址
    audio.autoplay = true;

    audio.onPlay(() => {
      console.log('开始播放');
    });

    audio.onError((res) => {
      console.log('音频播放出错:', res.errMsg);
    });

    return () => {
      audio.destroy(); // 组件卸载时销毁音频实例
    };
  }, []);

  const jump = (item, index) => {
    if (index >= 2) {
      const timestamp = new Date().getTime()
      const path = `pages/video/video?__preload_=${timestamp * 10 + 3}&__key_=${timestamp * 10 + 4}&avid=${item.path}`
      Taro.navigateToMiniProgram({
        appId: 'wx7564fd5313d24844',
        path,
        success: res => {
          console.log('跳转成功')
        }
      })
    } else {
      jumpTo(item)
    }
  }

  const jumpTo = (item) => {
    Taro.navigateToMiniProgram({
      appId: 'wx9074de28009e1111',
      path: `pages/index/index?blog_id=${item.path}`,
      // path: 'pages/index/index?blog_id=5067034822709591',
      success(res) {
      }
    })
  }

  return (
    <View className={styles.home}>
      <View className={styles.songWrap}>
        <View className={styles.songInfo}>
          <Image src={song} className={styles.songIcon}/>
          <View className={styles.song}>
            <View className={styles.songText}>没有办法 拿你没有办法</View>
            <View className={styles.songName}>7EVNVEN/没有办法<Text className={styles.original}>原创</Text></View>
          </View>
        </View>
        <View className={styles.songProcessWrap}>
          01:03
          <View className={styles.songProcess}>
            <View className={styles.process}></View>
          </View>
          03:07
        </View>
        <View className={styles.playIconWrap}>
          <View className='at-icon at-icon-prev'></View>
          <View className={cx(styles.playIcon, 'at-icon at-icon-play')}></View>
          <View className='at-icon at-icon-next'></View>
        </View>
      </View>
      <View className={cx(styles.personInfo, showFront && styles.active)} onClick={() => setShowFront(!showFront)}>
        <Image src={person1} className={cx(styles.person, styles.person1)}/>
        <Image src={person2} className={cx(styles.person, styles.person2)}/>
      </View>
      <View className={styles.info}>
        <Image src={image} className={styles.icon}/>
        <View className={styles.typing}>欢迎来到比比芭比啵比星球</View>
      </View>
      <View className={styles.cardContainer}>
        <View className={styles.cardWrap}>
          {links.map((item, index) =>
            <View className={cx(styles.card)} onClick={() => jump(item, index)}>
              <Image src={item.image} className={styles.cardImage}/>
              <View>{item.value}</View>
            </View>
          )}
        </View>
        <View className={styles.qrIconWrap}>
          <Image src={qr1} className={styles.qrIcon}/>
          <Image src={text} className={styles.text}/>
          <Image src={qr} className={styles.qrIcon}/>
        </View>
      </View>
    </View>
  )
}

export default Person
