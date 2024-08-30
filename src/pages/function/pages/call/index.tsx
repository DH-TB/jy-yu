import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import styles from './index.module.scss'
import cx from 'classnames';
import Taro from '@tarojs/taro'
import { defaultDarkBackground, randomColor } from '../../../../constants/color';
import { CALLS, CALLS_COMMON, CALLS_OTHER } from '../../../../constants/call';

const Call = (props: { activeTabIndex: number }) => {

  const copy = (data) => {
    Taro.setClipboardData({
      data
    })
  }

  if (props.activeTabIndex === 0) {
    return <View className={cx(styles.cardWrap, 'at-row at-row--wrap')}>
      {
        CALLS.map((item) =>
          <View className={cx(styles.songCard, 'at-col')} onClick={() => copy(item.text)} >
            <Image className={cx(styles.songCard, 'at-col', styles.songBackground)} style={{ background: defaultDarkBackground }}src={item.image}></Image>
            <View className={cx(styles.songCardText)}>
              <Text className={cx(styles.title, styles.text)}>{item.song}</Text>
              <Text className={styles.text}>{item.text}</Text>
            </View>

          </View>
        )
      }
    </View>
  } else if (props.activeTabIndex === 1) {
    return <View className={cx(styles.cardWrap)}>
      {
        CALLS_OTHER.map((item) => (
          <View className={cx(styles.songCard, styles.otherSongCard)} onClick={() => copy(item.text)} >
            <View className={cx(styles.songCardText, styles.otherSongCard)} style={{ background: item.background }}>
              <Text className={cx(styles.otherSongTitle)}>{item.song}</Text>
              <Text className={cx(styles.otherSongText)}>{item.text}</Text>
            </View>
          </View>
        ))
      }
    </View>
  } else {
    return <View className={cx(styles.cardWrap)}>{
      CALLS_COMMON.map((item) => {
        return (
          <View className={cx(styles.songCard, styles.otherSongCard)} onClick={() => copy(item)} >
            <View className={cx(styles.songCardText, styles.otherSongCard)} style={{ background: randomColor() }}>
              <Text className={cx(styles.commonSongText)}>{item}</Text>
            </View>
          </View>
        )
      })
    }
    </View>
  }
}

export default Call
