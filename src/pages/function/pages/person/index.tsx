import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import styles from './index.module.scss'
import heart from '../../../../image/heart.jpg'
import textImage from '../../../../image/text.png'
import cx from 'classnames'
import Bar from "../../../component/pages/bar";
import { defaultBackground } from '../../../../constants/color'
import { HOME_SONG_INFO, LINKS } from '../../../../constants/home'
import { generateUniqueRandomNumbers, getIndex } from '../../../../utils/util'

// const generate = () => HOME_SONG_INFO[generateUniqueRandomNumbers(0, HOME_SONG_INFO.length - 1, 1) as unknown as number]
const generate = () => HOME_SONG_INFO[getIndex()]
function Person() {
  const { name, text, currentDuration, totalDuration, shortLink } = generate()
  const [showFront, setShowFront] = useState(true)

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
      shortLink
    })
  }

  return (
    <View className={styles.home}>
      <Bar />
      <View className={styles.homeContent}>
        <View className={styles.songWrap}>
          <View className={styles.songInfo}>
            <Image src={'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kue9137j30u00u010l.jpg'} className={styles.songIcon} style={{ background: defaultBackground }} />
            <View className={styles.song}>
              <View className={styles.songText}>{text}</View>
              <View className={styles.songNameWrap}>
                <View className={styles.songName}>{`7EVN1lVEN/${name}`}</View>
                <Text className={styles.original}>原创</Text>
              </View>
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
            {currentDuration}
            <View className={styles.songProcess}>
              <View className={styles.process}></View>
            </View>
            {totalDuration}
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
          <View className={cx(styles.messageWrap)}>
            <Button className={cx(styles.contact)} openType='contact'></Button>
            <View className={cx(styles.message, 'at-icon at-icon-message')}></View>
          </View>
        </View>
        <View className={styles.cardContainer}>
          <View className={styles.cardWrap}>
            {LINKS.map((item, index) =>
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
            <Image src={textImage} className={styles.text} />
            <Image
              src={'https://wx1.sinaimg.cn/large/005SF7JFly1ht3tmio43nj30sg0sgjxr.jpg'}
              className={styles.qrIcon}
              style={{ background: defaultBackground }}
              showMenuByLongpress
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Person

