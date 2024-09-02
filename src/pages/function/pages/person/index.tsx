import { useEffect, useMemo, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import styles from './index.module.scss'
import heart from '../../../../image/heart.jpg'
import text from '../../../../image/text.png'
import cx from 'classnames'
import Bar from "../../../component/pages/bar";
import { defaultBackground } from '../../../../constants/color'

const links = [
  {
    image: 'https://wx1.sinaimg.cn/large/0089ZZ9mgy1hqzlz9r1eqg308c08c1kx.gif',
    value: '【超话】',
    path: '5072452772433134',
    shortLink: '#小程序://微博/9VDmM0Wcctap1qJ'
  },
  {
    image: 'https://wx2.sinaimg.cn/large/0089ZZ9mgy1hqzj9q0v22g308c08ckh8.gif',
    value: '【专贴】',
    path: '5046827349705134',
    shortLink: '#小程序://微博/ITdA2qnPtECbR7I'
  },
  {
    image: 'https://wx4.sinaimg.cn/large/0089ZZ9mgy1hqzj9ofvz8g308c08ck97.gif',
    value: '【B站】',
    path: '113006595932963'
  },
  {
    image: 'https://wx2.sinaimg.cn/large/0089ZZ9mgy1hqzlz62309g308c08cne8.gif',
    value: '7EVNVEN',
    path: 'https://music.163.com/#/artist?id=37189432'
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
  // const statusBarHeight = useMemo(() => Taro.getSystemInfoSync().statusBarHeight, [])

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

  const openInBrowser = (item) => {
    Taro.setClipboardData({
      data: item.path,
      success: function () {
        Taro.showModal({
          title: '提示',
          content: '链接已复制，去浏览器中打开？',
          success: (res) => {
            if (res.confirm) {
              Taro.getSystemInfo({
                success: (info) => {
                  if (info.platform === 'ios') {
                    Taro.showToast({
                      title: '请手动粘贴链接至Safari浏览器中打开',
                      icon: 'none',
                      duration: 2000,
                    });
                  } else {
                    Taro.showToast({
                      title: '请手动粘贴链接至浏览器中打开',
                      icon: 'none',
                      duration: 2000,
                    });
                  }
                },
              });
            }
          },
        });
      },
    });
  };


  const jump = (item, index) => {
    if (index === 3) {
      openInBrowser(item)
    }
    else if (index === 2) {
      const timestamp = new Date().getTime()
      const path = `pages/video/video?__preload_=${timestamp * 10 + 3}&__key_=${timestamp * 10 + 4}&avid=${item.path}`
      Taro.navigateToMiniProgram({
        appId: 'wx7564fd5313d24844',
        path
      })
    } else {
      jumpByShortLink(item)
    }
  }

  const jumpByShortLink = (item) => {
    Taro.navigateToMiniProgram({
      shortLink: item.shortLink,
      // appId: 'wx9074de28009e1111',
      // path: `pages/index/index?blog_id=${item.path}`
    })
  }

  const showToast = () => {
    jumpByShortLink({
      shortLink: '#小程序://网易云音乐听歌/QCIDlOYhslKnkPv'
    })
      // Taro.showToast({
      //   title: '假的啦!～～，播放不了呢',
      //   icon: 'none',
      //   duration: 2000
      // })
    }

  return (
      <View className={styles.home}>
        <Bar />
        <View className={styles.songWrap}>
          <View className={styles.songInfo}>
            <Image src={'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kue9137j30u00u010l.jpg'} className={styles.songIcon} style={{ background: defaultBackground }} />
            <View className={styles.song}>
              <View className={styles.songText}>没有办法 拿你没有办法</View>
              <View className={styles.songName}>7EVNVEN/没有办法<Text className={styles.original}>原创</Text></View>
            </View>
            <View className={styles.box}>
              <View className={styles.p}></View>
              <View className={styles.p}></View>
              <View className={styles.p}></View>
              <View className={styles.p}></View>
              <View className={styles.p}></View>
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
            <View className={cx(styles.playIcon, 'at-icon at-icon-play')} onClick={showToast}></View>
            <View className='at-icon at-icon-next'></View>
          </View>
        </View>
        <View className={cx(styles.personInfo, showFront && styles.active)} onClick={() => setShowFront(!showFront)}>
          <Image
            src={"https://wx2.sinaimg.cn/large/005SF7JFly1ht3ksydjfvj30uu0ho77c.jpg"}
            className={cx(styles.person, styles.person1)}
            style={{ background: defaultBackground }}
          />
          <Image
            src={"https://wx1.sinaimg.cn/large/005SF7JFly1ht3ksy0jvhj30v90hjtd9.jpg"}
            className={cx(styles.person, styles.person2)}
            style={{ background: defaultBackground }}
          />
        </View>
        <View className={styles.info}>
          <Image src={heart} className={styles.icon} />
          <View className={styles.typing}>欢迎来到比比芭比啵比星球...</View>
        </View>
        <View className={styles.cardContainer}>
          <View className={styles.cardWrap}>
            {links.map((item, index) =>
              <View className={cx(styles.card)} onClick={() => jump(item, index)}>
                <Image src={item.image} className={styles.cardImage} defaultSource={heart} />
                <View>{item.value}</View>
              </View>
            )}
          </View>
          <View className={styles.qrIconWrap}>
            <Image
              src={'https://wx3.sinaimg.cn/large/005SF7JFly1ht3tmizgbjj30sg0sgjy8.jpg'}
              className={styles.qrIcon}
              style={{ background: defaultBackground }}
              showMenuByLongpress
            />
            <Image src={text} className={styles.text} />
            <Image
              src={'https://wx1.sinaimg.cn/large/005SF7JFly1ht3tmio43nj30sg0sgjxr.jpg'}
              className={styles.qrIcon}
              style={{ background: defaultBackground }}
              showMenuByLongpress
            />
          </View>
        </View>
      </View>
    )
  }

  export default Person

