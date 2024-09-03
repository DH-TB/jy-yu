import React, { useEffect, useMemo, useState } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import styles from './index.module.scss'
import cx from 'classnames';
import Taro from '@tarojs/taro'
import { defaultDarkBackground, randomColor, randomCoverColor } from '../../../../constants/color';
import { CALLS, CALLS_COMMON, CALLS_OTHER, SPECIAL_WORDS, WORDS } from '../../../../constants/call';
import { generateUniqueRandomNumbers } from '../../../../utils/util';

const generate = () => {
  const index = generateUniqueRandomNumbers(0, WORDS.length + SPECIAL_WORDS.length, 1)[0] as number
  if(index === WORDS.length) {
    return 'https://api.vvhan.com/api/moyu'
  }
  if(index > WORDS.length) {
    return `https://api.vvhan.com/api/artText?text=${SPECIAL_WORDS[index - WORDS.length -1].replace(/\n/g, '%0A')}&auther=&color=ff7c00&bgcolor=000000`
  }
  return `https://api.vvhan.com/api/artText?text=${WORDS[index].replace(/\n/g, '%0A')}&auther=一《煜》 &color=ff7c00&bgcolor=000000`
}

const Call = (props: { activeTabIndex: number }) => {
  const [showImage, setShowImage] = useState(false)
  const [searchText, setSearchText] = useState('')
  const callOthers = useMemo(() => searchText === '' ? CALLS_OTHER :
    CALLS_OTHER.filter((item) => item.song.toLocaleUpperCase().includes(searchText.toLocaleUpperCase())
    ), [searchText]);

  useEffect(() => {
    onReset()
  }, [props.activeTabIndex])

  const copy = (data) => {
    Taro.setClipboardData({
      data
    })
  }

  const onBlur = (data) => {
    if (data.detail.value === '711' || data.detail.value === '7EVN1lVEN') {
      setShowImage(true)
    }
  }

  const onReset = () => {
    setShowImage(false)
    setSearchText('')
  }

  const renderContent = () => {
    if (showImage) {
      return <View className={cx(styles.artTextWrap)}>
        <Image src={generate()} className={cx(styles.artTextImage)} onClick={onReset}>
        </Image>
      </View>
    }
    return <View className={cx(styles.cardWrap)}>
      <View className={styles.inputWrap}>
        <View className={cx(styles.inputIcon, 'at-icon at-icon-search')} />
        <Input placeholder='请输入' className={styles.input} value={searchText} onInput={(data) => setSearchText(data.detail.value)} onBlur={onBlur} />
      </View>
      {
        callOthers.map((item) => (
          <View className={cx(styles.songCard, styles.otherSongCard)} onClick={() => copy(item.text)} >
            <View className={cx(styles.songCardText, styles.otherSongCard)} style={{ background: item.background || randomCoverColor() }}>
              <Text className={cx(styles.otherSongTitle)}>{item.song}</Text>
              <Text className={cx(styles.otherSongText)}>{item.text}</Text>
            </View>
          </View>
        ))
      }
    </View>
  }

  if (props.activeTabIndex === 0) {
    return <View className={cx(styles.cardWrap, 'at-row at-row--wrap')}>
      {
        CALLS.map((item) =>
          <View className={cx(styles.songCard, 'at-col')} onClick={() => copy(item.text)} >
            <Image className={cx(styles.songCard, 'at-col', styles.songBackground)} style={{ background: defaultDarkBackground }} src={item.image}></Image>
            <View className={cx(styles.songCardText)}>
              <Text className={cx(styles.title, styles.text)}>{item.song}</Text>
              <Text className={styles.text}>{item.text}</Text>
            </View>

          </View>
        )
      }
    </View>
  } else if (props.activeTabIndex === 1) {
    return renderContent()
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
