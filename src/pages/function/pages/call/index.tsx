import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import styles from './index.module.scss'
import cx from 'classnames';
import Taro from '@tarojs/taro'

const calls = [
  {
    song: '《没有办法》',
    text: '💕没有办法✨拿你没有办法💫骑士守护煜公主👸🏼像写童话🫧',
    image: 'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kp42fbdj30pd0pdwg1.jpg'
  },
  {
    song: '《臻》',
    text: '煜公主的美丽属于骑士✨回忆关于煜公主的👸🏼连同泪滴💧都是粉色💗',
    image: 'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kp4g79uj30u00u0taa.jpg'
  },
  {
    song: '《没有办法pt2·圣诞限度》',
    text: '',
    image: 'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kp51xppj30u00u0wm7.jpg'
  },
  {
    song: '《WHAT U WANT》',
    text: '煜公主👸🏼和骑士紧紧挨在一起💕 只是呆在原地💫便有面对世界的勇气💖',
    image: 'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kp7f9v5j3334334e82.jpg'
  },
  {
    song: '《嘿，你好》',
    text: '嘿你好📞如果时间有尽头⏳骑士会在那里等煜公主👸🏼不会再错过💓',
    image: 'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kp7samej30kf0kfjth.jpg'
  },
  {
    song: '《摩天轮》',
    text: '当煜公主👸🏼需要骑士的时候 就闪现✈️ 相信爱💞会有魔力🪄它会指引骑士来到煜公主身边🌟',
    image: 'https://wx1.sinaimg.cn/large/005SF7JFly1ht3kp9aeo5j32sb2sb4qq.jpg'
  },
  {
    song: '《Weekend》',
    text: '喝一杯🍷再喝一杯🥂陪在骑士🫧身边的只有煜公主👸🏼这一位✨',
    image: 'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kp7f9v5j3334334e82.jpg'
  },
  {
    song: '《KnowKnow-唯一》',
    text: '对于我们的第一次相遇🌟注定煜公主👸🏼是骑士心中70亿的唯一💫',
    image: 'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kpa5vm8j30n00n0wgq.jpg'
  },
  {
    song: '《像朋友一样吗》',
    text: '听过最动听💖的声音🎶是煜公主👸🏼在歌里说爱骑士💘骑士对煜公主的爱💓用语言总无法概括',
    image: 'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kpak9j1j30u00u076l.jpg'
  },
  {
    song: '《时光河里划着小船摇啊摇》',
    text: '和煜公主👸🏼划小船🛶摇啊摇🌟摇船桨💖摇烦恼✨咧嘴的笑🫧',
    image: 'https://wx1.sinaimg.cn/large/005SF7JFly1ht3kpbdd05j30u00u0wlq.jpg'
  },
  {
    song: '《普通不普通》',
    text: 'ohoh普通的人生🎞️普通的故事🌠因为煜公主👸🏼而变得不普通🌟',
    image: 'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kp7f9v5j3334334e82.jpg'
  },
  {
    song: '《成为你自己好吗》',
    text: '✨过去没有人曾像煜公主👸🏼未来也没有人会像煜公主💫你就是唯一💖的煜公主🌟',
    image: ''
  },
  {
    song: '《BLUE+PINK》',
    text: '等到煜公主👸🏼想要牵着骑士的手🩵骑士💂带煜公主去环游💞仰望宇宙💫💫',
    image: 'https://wx1.sinaimg.cn/large/005SF7JFly1ht3kp3q7mhj30u00u0n0e.jpg'
  },
  {
    song: '《between I & U》',
    text: '对煜公主👸🏼骑士想说📢I Like💗I need💓I Love💕u',
    image: 'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kp7f9v5j3334334e82.jpg'
  },
  {
    song: '《WHAT IS LOVE》',
    text: 'Love is a mysterious💖骑士✨只想在煜公主👸🏼心里降落🛬',
    image: 'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kpbn9a1j30n00n0dhu.jpg'
  },
  {
    song: '《CANDY CRUSH》',
    text: '眼睛里的彩虹🌈在燃烧❤️‍🔥身边浩瀚银河🌌在环绕💫骑士会用心听煜公主👸🏼留下的暗号‼️',
    image: 'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kpc0cpcj30u00u0afx.jpg'
  },
  {
    song: '《1+1≠1》',
    text: '曾经💖会畏惧流言蜚语💧但现在变了✨因为骑士会一直守护煜公主👸🏼',
    image: 'https://wx1.sinaimg.cn/large/005SF7JFly1ht3kpcgkooj30ro0ro7br.jpg'
  },
  {
    song: '《钟》',
    text: '钟🕰️带不走的是牵挂💖的痕迹💧煜公主👸🏼带来的爱❤️藏在时针秒针里',
    image: 'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kpcumgmj30u00u0djm.jpg'
  },
  {
    song: '《存在》',
    text: '存在✨谁能定义我们的存在⭐️煜公主的灵魂👸🏼会成为骑士们的最爱💖',
    image: 'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kp7f9v5j3334334e82.jpg'
  },
  {
    song: '《B.O.W》',
    text: '',
    image: 'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kp7f9v5j3334334e82.jpg'
  },
  {
    song: '《煜Freestyle》',
    text: '',
    image: 'https://wx1.sinaimg.cn/large/005SF7JFly1ht3kpdapddj30u00u0tec.jpg'
  },
  {
    song: '《MY ZONE》',
    text: '为煜公主👸🏼打破墨菲定律🫧煜公主牵动骑士💂的每一次心跳💓',
    image: 'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kpdmq4ij30u00u0dip.jpg'
  },
  {
    song: '《狼吟》',
    text: '骑士眼里只有煜公主 👸🏼永远站边煜公主🌟 女巫有毒🔮猎人有枪⁀➷而你有我💖',
    image: 'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kpdxs8qj30u00u0acu.jpg'
  },
  {
    song: '《清零》',
    text: '煜公主👸🏼流了眼泪💧比鲜花还娇贵🌹一切都清零吧💫喝下这杯用回忆调配🥂',
    image: 'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kpeel7zj30hs0hsadm.jpg'
  }
]

const callsOther = [
  {
    song: '《暴风雪》',
    text: '暴风雪🌌煜公主带我们走出这冰天里的雪地❄️穿过那封锁线♾️这一首夜曲🎵只属于我们的回忆💖'
  },
  {
    song: '《为你写诗》',
    text: '为你写诗💌为你做不可能的事🫧为你弹奏🎹所有情歌的句子💫我忘了说 最美的是煜👸🏼的名字'
  },
  {
    song: '《关键词》',
    text: '🍃落叶的位置 谱出一首诗❤️骑士和煜公主的故事🎸才正要开始🎶'
  },
  {
    song: '《为什么》',
    text: '✨因为见不到公主👸🏼我思维混乱💔被爱冲昏头脑💧骑士变成笨蛋💌'
  },
  {
    song: '《镜头》',
    text: '有公主👸🏼这里就是迪士尼✨不是侏罗纪💖把你的镜头对向我🌟'
  },
  {
    song: '《萱草花》',
    text: '✨遥遥的天之涯💫萱草花开放🌸 煜公主👸🏼就是我牵挂的模样💖'
  },
  {
    song: '《怪天气》',
    text: '怪就怪天气☁️像煜公主不讲道理✨那些相爱留下的痕迹💖满街都是骑士溺爱的回忆💫'
  },
  {
    song: '《刻在我心底的名字》',
    text: '💫刻在骑士心底的名字💖除了煜公主👸🏼还能有谁呢🫧'
  },
  {
    song: '《奇妙能力歌》',
    text: '我忘了置身濒绝孤岛🐳忘了眼泪不过失效药💊忘了百年无声口号💧不会忘记煜公主👸🏼'
  },
  {
    song: '《无聊的》',
    text: '或许我🌟太需要一个证明💖没有煜公主👸🏼骑士真的不行‼️'
  },
  {
    song: '《危险派对》',
    text: '当音乐再次奏响 💫连呼吸都在碰撞❤️‍🔥把心放你手掌🌟沦陷在煜公主的目光👀'
  },
  {
    song: '《空心》',
    text: '热爱💫曾是唯一的信仰💘但现在煜公主👸🏼也是信仰💖'
  },
  {
    song: '《向云端》',
    text: '✨向云端☁山那边⛰海里边🌊陪伴在煜公主身边🩵'
  },
  {
    song: '《在加纳共和国离婚》',
    text: '✨你还爱我吗💗我还爱你啊💞骑士永远爱着煜公主💖'
  },
  {
    song: '《在这个年代找不到浪漫》',
    text: '在这个年代✨找不到浪漫💞因为煜公主快乐👸🏼所以骑士快乐💖'
  },
  {
    song: '《见山》',
    text: 'WARNING⚠前方高能预警❗随便谁来挑战🔥 没人可以夺走煜皇❤‍🔥半壁的江山‼️'
  },
  {
    song: '《连锁反应》',
    text: '是真的沦陷💫是真的迷恋🫧不小心点燃引线💥想和煜公主👸🏼体验各种体验💖'
  },
  {
    song: '《7years》',
    text: "I only see my goals✨I don't believe in failure💖"
  },
  {
    song: '《上学威龙》',
    text: '我小小年纪为什么要承受听公主讲笑话这份痛苦❓煜皇就是傲慢❤‍🔥你能拿我咋办❓'
  },
  {
    song: '《最长的电影》',
    text: '我们的开始✨是很长的电影🎇放映了百天💌冰上的芭蕾🫧脑海中还在旋转💫望着你💓不会忘记你'
  },
  {
    song: '《烟花易冷》',
    text: '烟花易冷🎆人事易分💕缘份落地生根是我们💞听青春🍃迎来笑声💫羡煞许多人'
  },
  {
    song: '《第三人称》',
    text: '难过时候不流泪💧流泪也不算伤悲💫对于第三人称的角度而言💌煜只是煜'
  },
  {
    song: '《艾蜜莉》',
    text: '煜公主👸🏼煜公主💌夕阳掉进我心里💖我要带你去寻找💞散落的星星✨'
  },
  {
    song: '《认真的雪》',
    text: '爱的那么认真💫爱的那么认真 💖公主和骑士之间🫧不会听见说不可能💌'
  },
  {
    song: '《离开地球表面》',
    text: '一颗心噗通噗通的狂跳💓一瞬间烦恼烦恼烦恼全忘掉💫'
  },
  {
    song: '《Therefore I Am》',
    text: '✨I think, therefore, I am. 💖'
  },
  {
    song: '《忏悔录》',
    text: '我逃出我的身体这感觉很微妙🌈空气中弥漫着爱煜的味道💞彩色的气泡将你我给围绕💫 '
  },
  {
    song: '《说散就散》',
    text: '干嘛听苦情歌以为多浪漫💫 听煜公主👸🏼唱才能浪漫不被拆散💘 一起共患难💕'
  },
  {
    song: '《我好想你》',
    text: '我好想你✨好想你💗不露痕迹💫装作无所谓🫧深藏在心💖'
  },
  {
    song: '《回到我们的track》',
    text: '💥Yeah we back on🔥煜皇登基版❤️‍🔥煜帝哥哥back on！💥危险! ! '
  },
  {
    song: '《花海》',
    text: '不要你离开💞距离隔不开💫情歌被打败💘爱依然存在💌'
  },
  {
    song: '《阿拉斯加海湾》',
    text: '你最近是否不再失眠啦✨愿世间温情化作一缕风🍃代替我拥抱你🌈上天你别管我先让小煜幸福吧🫧我会祝福他🌟'
  },
  {
    song: '《唯一》',
    text: '骑士真的爱煜公主👸🏼没人能比拟✨ 证明煜公主是我们的唯一💖'
  },
  {
    song: '《克卜勒》',
    text: '一闪一闪亮晶晶 ⭐️煜公主永远为骑士放光明✨'
  },
  {
    song: '《someone like you 》',
    text: 'someone like you, everyone love you 💕'
  },
  {
    song: '《红》',
    text: '✨For tonight ✰⋆º☾骑士为公主做的一切都是应该💕'
  },
  {
    song: '《一直很安静》',
    text: '给公主👸🏼的爱一直很安静🫧从一开始就下定决心💌'
  }
]

const callCommon = [
  '✨星月🌙共绘至死不渝的浪漫💞献给煜公主殿下👸🏼',
  '在线通缉偷心贼💘煜公主殿下👸🏼',
  '物各有主♡💌♡你是我们的煜公主👸🏼',
  '嘘💗是宇宙神明派来唱歌给你听的煜公主殿下👸🏼',
  '啊，我怎么走不动道了？✨哦，原来是煜公主👸🏼驾到啦！',
  '今天吃了果冻✨喝了脉动🌟还是忍不住对煜公主心动！💖',
  '今日限定🩷煜公主全糖去冰🍬',
  '星尘⭐陨石坠落人间🌈，煜公主👸🏼歌声🎶停留耳边👂🏻',
  '💿煜公主就是行走的唱片♬ ✨挥挥荧光棒🌸疯狂撒花🌸',
  '真情永不变💖煜宝天天见🌹 和煜公主一起摇摆哎💃🏻🕺🏻'
]

const degs = [
  '45deg', '60deg', '120deg', '180deg', '220deg', '260deg', '320deg'
]

const colors = [
  'rgba(221,221,221,1)',
  'rgba(110,136,161,1)',
  'rgba(74,77,103,1)',
  'rgba(119,125,165,1)',
  '#0c3483',
  '#a2b6df',
  '#6b8cce',
  '#fad0c4',
  '#ffd1ff',
  '#a18cd1',
  '#fbc2eb',
  '#ff9a9e',
  '#fecfef',
  '#a6c1ee',
  '#fdcbf1',
  '#e6dee9',
  '#a6c0fe',
  '#f68084',
  '#fccb90',
  '#d57eeb',
  '#a8edea',
  '#fed6e3',
  '#d299c2',
  '#fef9d7',
  '#ebc0fd',
  '#d9ded8',
  '#fddb92',
  '#d1fdff',
  '#ebbba7',
  '#cfc7f8',
  '#feada6',
  '#f5efef',
  '#9795f0',
  '#fbc8d4',
  '#abecd6',
  '#fbed96',
  '#d5dee7',
  '#ffafbd',
  '#c9ffbf',
  '#fff7f3',
  '#bedc40',
  '#c69df6',
  '#ff5555',
  '#e03838',
  '#ffcdaa',
  '#ee897f',
  '#3D4E81',
  '#5753C9',
  '#6E7FF3',
  '#DFFFCD',
  '#90F9C4',
  '#39F3BB',
  '#c1c161',
  '#c1c161',
  '#d4d4b1',
  '#3d3393',
  '#2b76b9',
  '#2cacd1',
  '#35eb93',
  '#9be15d',
  '#00e3ae'
]

const commonColors = [
  'linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)',
  'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
  'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
  'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
  'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)',
  'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
  'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
  'linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%)',
  'linear-gradient(to top, #feada6 0%, #f5efef 100%)',
  'linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)',
  'linear-gradient(58.2deg, rgba(40, 91, 212, 0.73) -3%, rgba(171, 53, 163, 0.45) 49.3%, rgba(255, 204, 112, 0.37) 97.7%)',
  'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
  'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
  'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
  'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
  'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)',
  'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
  'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)',
  'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
  'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)',
  'linear-gradient(to top, #fddb92 0%, #d1fdff 100%)',
  'linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%)',
  'linear-gradient(to top, #feada6 0%, #f5efef 100%)',
  'linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)',
  'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)',
  'linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)',
  'linear-gradient(58.2deg, rgba(40,91,212,0.73) -3%, rgba(171, 53, 163, 0.45) 49.3%, rgba(255, 204, 112, 0.37) 97.7%)',
  'linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)',
  'linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)',
  'linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)',
  'linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%)',
  'linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%)',
  'linear-gradient(to top, #9be15d 0%, #00e3ae 100%)',
  'linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)',
  'linear-gradient(180.3deg, rgba(221, 221, 221, 1) 5.5%, rgba(110, 136, 161, 1) 90.2%)',
  'linear-gradient(89.4deg, rgba(74,77,103,1) -4.3%, rgba(119, 125, 165, 1) 102.1%)',
  'linear-gradient(68.4deg, rgba(248, 182, 204, 1) 0.5%, rgba(192, 198, 230, 1) 49%, rgba(225, 246, 240, 1) 99.8%)'
]

const Call = (props: { activeTabIndex: number }) => {

  const copy = (data) => {
    Taro.setClipboardData({
      data
    })
  }

  const getColor = () => colors[Math.floor(Math.random() * (colors.length))]

  if (props.activeTabIndex === 0) {
    return <View className={cx(styles.cardWrap, 'at-row at-row--wrap')}>
      {
        calls.map((item) =>
          <View className={cx(styles.songCard, 'at-col')} onClick={() => copy(item.text)} >
            <Image className={cx(styles.songCard, 'at-col', styles.songBackground)} src={item.image}></Image>
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
        callsOther.map((item) => {
          const deg = degs[Math.floor(Math.random() * (degs.length))]
          const background = `linear-gradient(${deg}, ${getColor()} 0%, ${getColor()} 0%, ${getColor()} 100%)`
          return (
            <View className={cx(styles.songCard, styles.otherSongCard)} onClick={() => copy(item.text)} >
              <View className={cx(styles.songCardText, styles.otherSongCard)} style={{ background }}>
                <Text className={cx(styles.otherSongTitle)}>{item.song}</Text>
                <Text className={cx(styles.otherSongText)}>{item.text}</Text>
              </View>
            </View>
          )
        })
      }
    </View>
  } else {
    return <View className={cx(styles.cardWrap)}>{
      callCommon.map((item) => {
        const background = commonColors[Math.floor(Math.random() * (commonColors.length))]
        return (
          <View className={cx(styles.songCard, styles.otherSongCard)} onClick={() => copy(item)} >
            <View className={cx(styles.songCardText, styles.otherSongCard)} style={{ background }}>
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
