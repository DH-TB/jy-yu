import { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import styles from './index.module.scss'
import q1 from './image/q1.jpeg'
import q2 from './image/q2.jpeg'
import q3 from './image/q3.jpeg'
import q4 from './image/q4.jpeg'
import image from './image/q.jpg'
import cx from 'classnames'

const links = [
  {
    image: q1,
    value: '【个人超话】',
    path: '5020731203125889'
  },
  {
    image: q2,
    value: '【个人专贴】',
    path: '5046827349705134'
  },
  {
    image: q3,
    value: '【B站帖子】',
    path: '113006595932963'
  },
  {
    image: q4,
    value: '【煜情骨纵】',
    path: '1753403670'
  },

  // {
  //   image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
  //   value: '【TOP歌曲】'
  // },
  // {
  //   image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
  //   value: '【打工记录】'
  // },
  // {
  //   image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
  //   value: '【小煜语录】'
  // },
  // {
  //   image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
  //   value: '【二创安利】'
  // },
  // {
  //   image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
  //   value: '【应援合集】'
  // },
  // {
  //   image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
  //   value: '【立绘合集】'
  // },
  // {
  //   image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
  //   value: '【纪念日子】'
  // },
  // {
  //   image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
  //   value: '【ALL•煜】'
  // }
]


function Person() {
  // const images = [one, two, three, four, five, six, seven]
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
      <View className={styles.info}>
        <Image src={image} className={styles.icon} />
        欢迎来到比比芭比啵比星球
      </View>
      <View className={styles.cardWrap}>
        {links.map((item, index) =>
          <View className={cx(styles.card, index === 0 || index === 3 ? styles.lightCard : styles.darkCard)} onClick={() => jump(item, index)}>
            <Image src={item.image} className={styles.cardImage} />
            <View>{item.value}</View>
          </View>
        )}
      </View>
    </View>
  )
}

export default Person

