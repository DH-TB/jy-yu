import React, { useEffect, useMemo, useState } from 'react'
import { Swiper, SwiperItem, Image, View } from '@tarojs/components'
import styles from './index.module.scss'
import { AtAccordion, AtList, AtListItem } from 'taro-ui'
import { COMMON, CP, MID_AUTUMN_FESTIVAL } from '../../../../constants/summary'
import useAudioPlayer from '../../../../hook/audio'
import Taro from '@tarojs/taro'
import includes from 'lodash/includes'
import filter from 'lodash/filter'

function Summary(props: { activeTabIndex: number, open: boolean }) {
  const [showSwiper, setShowSwiper] = useState(false)
  const [openIndexs, setOpenIndexs] = useState<number[]>([])
  const data = useMemo(() => props.activeTabIndex === 0 ? COMMON : CP, [props.activeTabIndex])

  const { playAudio } = useAudioPlayer();

  const openSwiper = () => {
    setShowSwiper(!showSwiper)
  }

  useEffect(() => {
    setOpenIndexs(props.open ? data.map((_, index) => index) : [])
    setShowSwiper(props.open)
  }, [props.open])

  const toggleSwiper = (index) => {
    if (includes(openIndexs, index)) {
      const indexs = filter(openIndexs, (item) => item !== index);
      setOpenIndexs(indexs)
    } else {
      setOpenIndexs([...openIndexs, index])
    }
  }

  useEffect(() => {
    if (showSwiper && props.activeTabIndex === 0) {
      playAudio('https://music.163.com/song/media/outer/url?id=2627793218');
    }

  }, [showSwiper])

  const gotoBilibili = (path) => {
    const timestamp = new Date().getTime()
    Taro.navigateToMiniProgram({
      appId: 'wx7564fd5313d24844',
      path: `pages/video/video?__preload_=${timestamp * 10 + 3}&__key_=${timestamp * 10 + 4}&avid=${path}`
    })
  }

  return (
    <View className={styles.summary}>
      {props.activeTabIndex === 0 &&
        <AtAccordion title='中秋祝福' icon={{ value: showSwiper ? 'heart-2' : 'heart', color: '#d37885', size: '20' }} isAnimation={false} onClick={openSwiper}>
        </AtAccordion>
      }
      {props.activeTabIndex === 0 && showSwiper && <Swiper className={styles.swiper} autoplay>
        {MID_AUTUMN_FESTIVAL.map((item, index) =>
          <SwiperItem key={index} className={styles.swiperitem}>
            <Image src={item} className={styles.image} />
          </SwiperItem>
        )}
      </Swiper>
      }
      {
        data.map((list, index) =>
          <AtAccordion title={list.type} icon={{ value: list.icon, color: '#d37885', size: '20' }} isAnimation={false} open={openIndexs.includes(index)}
            onClick={() => toggleSwiper(index)}>
            <AtList>
              {
                list.data.map((item) =>
                  <AtListItem
                    title={item.name}
                    note={item.time}
                    thumb={list.image || ''}
                    onClick={() => gotoBilibili(item.path)}
                  />)
              }
            </AtList>
          </AtAccordion>
        )
      }
    </View>
  )
}

export default Summary

