import { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import styles from './index.module.scss'
import q1 from './image/q1.jpeg'
import q2 from './image/q2.jpeg'
import q3 from './image/q3.jpeg'
import q4 from './image/q4.jpeg'
import image from './image/q.jpg'
import person from './image/person.jpeg'

import cx from 'classnames'

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
      success(res) { }
    })
  }

  return (
    <View className={styles.home}>
      <Image src={person} className={styles.person} />
      {/* <View className={styles.person} /> */}
      <View className={styles.info}>
        <Image src={image} className={styles.icon} />
        欢迎来到比比芭比啵比星球
      </View>
      <View className={styles.cardWrap}>
        {links.map((item, index) =>
          <View className={cx(styles.card, styles.lightCard)} onClick={() => jump(item, index)}>
            <Image src={item.image} className={styles.cardImage} />
            <View>{item.value}</View>
          </View>
        )}
      </View>
    </View>
  )
}

export default Person

