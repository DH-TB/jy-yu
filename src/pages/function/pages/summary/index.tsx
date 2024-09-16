import React, { useEffect, useState } from 'react'
import { Swiper, SwiperItem, Image, View } from '@tarojs/components'
import styles from './index.module.scss'
import { AtAccordion, AtList, AtListItem } from 'taro-ui'
import { MID_AUTUMN_FESTIVAL } from '../../../../constants/summary'
import useAudioPlayer from '../../../../hook/audio'

function Summary() {
  const [showSwiper, setShowSwiper] = useState(true)
  const { playAudio } = useAudioPlayer();

  const openSwiper = () => {
    setShowSwiper(!showSwiper)
  }

  useEffect(() => {
    if (showSwiper) {
      playAudio('https://music.163.com/song/media/outer/url?id=2627793218');
    }

  }, [showSwiper])
  
  return (
    <View className={styles.summary}>
      {/* <AtAccordion title='荣耀乐章' icon={{ value: 'chevron-down', color: 'red', size: '15' }} isAnimation={false} hasBorder={false} open={true}>
        <AtList hasBorder={false}>
          <AtListItem
            title='标题文字'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          />
          <AtListItem
            title='标题文字'
            note='描述信息'
            arrow='right'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='标题文字'
            note='描述信息'
            extraText='详细信息'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
        </AtList>
      </AtAccordion> */}
      <AtAccordion title='中秋祝福' icon={{ value: showSwiper ? 'heart-2' : 'heart', color: '#d37885', size: '20' }} isAnimation={false} hasBorder={false} onClick={openSwiper}>
      </AtAccordion>
      {showSwiper && <Swiper className={styles.swiper} autoplay>
        {MID_AUTUMN_FESTIVAL.map((item, index) =>
          <SwiperItem key={index} className={styles.swiperitem}>
            <Image src={item} className={styles.image} />
          </SwiperItem>
        )}
      </Swiper>
      }
    </View>
  )
}

export default Summary

