import React, { useEffect, useMemo, useState } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import styles from './index.module.scss'
import cx from 'classnames';
import Taro, { useDidShow } from '@tarojs/taro'
import { defaultDarkBackground, randomColor, randomCoverColor } from '../../../../constants/color';
import { CALLS, CALLS_COMMON, CALLS_OTHER, SPECIAL_WORDS, WORDS } from '../../../../constants/call';
import { generateUniqueRandomNumbers, handleLongPressSaveImage } from '../../../../utils/util';
import image from '../../../../image/day.png';
import useAudioPlayer from '../../../../hook/audio';

const generate = () => {
  const index = generateUniqueRandomNumbers(0, WORDS.length + SPECIAL_WORDS.length, 1)[0] as number
  if (index === WORDS.length) {
    return 'https://api.vvhan.com/api/moyu'
  }
  if (index > WORDS.length) {
    return `https://api.vvhan.com/api/artText?text=${SPECIAL_WORDS[index - WORDS.length - 1].replace(/\n/g, '%0A')}&auther=&color=ff7c00&bgcolor=000000`
  }
  return `https://api.vvhan.com/api/artText?text=${WORDS[index].replace(/\n/g, '%0A')}&auther=一《煜》 &color=ff7c00&bgcolor=000000`
}

const Call = (props: { activeTabIndex: number }) => {
  const [showInput, setShowInput] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const [imageUrl, setImageUrl] = useState(generate())
  const [searchText, setSearchText] = useState('')
  const callOthers = useMemo(() => searchText === '' ? CALLS_OTHER :
    CALLS_OTHER.filter((item) => item.song.toLocaleUpperCase().includes(searchText.toLocaleUpperCase())
    ), [searchText]);
  const { playAudio } = useAudioPlayer();
  
  useEffect(() => {
    onReset()
  }, [props.activeTabIndex])

  useDidShow(() => {
    onReset()
  })

  const copy = (data) => {
    Taro.setClipboardData({
      data
    })
  }

  const onBlur = (data) => {
    if (data.detail.value === '711') {
      setShowImage(true)
      setImageUrl(generate())
    }
    if (data.detail.value === '7EVN1lVEN') {
      setShowInput(true)
    }
    if (data.detail.value === '大叔不要跑') {
      playAudio('https://music.163.com/song/media/outer/url?id=2624549413');
    }
  }

  const handleInnerClick = (e) => {
    e.stopPropagation()
  }

  const onReset = () => {
    setShowImage(false)
    setShowInput(false)
    setSearchText('')
  }

  const renderContent = () => {
    if (showInput) {
      return (
        <View className={styles.heartWrap} onClick={onReset}>
          <View className={styles.heartInput} onClick={handleInnerClick}>
            <View className={styles.heart}>
              <Image src={image} className={styles.name} />
            </View>
            <View className={styles.inputWrap}>
              <Input className={styles.input}></Input><Text>天</Text>
            </View>
          </View>
        </View >
      )
    }
    else if (showImage) {
      return <View className={cx(styles.artTextWrap)}>
        <Image src={imageUrl} className={cx(styles.artTextImage)} onClick={onReset} onLongPress={() => handleLongPressSaveImage(imageUrl)}>
        </Image>
      </View>
    } else {
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
