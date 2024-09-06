import Taro from '@tarojs/taro';
import * as _ from 'lodash'
import { DAY_IMAGES } from '../constants/recommend';

export const generateUniqueRandomNumbers = (min, max, count) => {
  if (Number(max) - Number(min) + 1 < Number(count)) {
    return [];
  }

  const randomNumbers = new Set();
  while (randomNumbers.size < Number(count)) {
    const randomNum = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
    randomNumbers.add(randomNum);
  }
  return Array.from(randomNumbers);
}

export const isEmptyValue = (value) => !_.isNumber(value) && !_.isBoolean(value) && _.isEmpty(value)

export const handleLongPressSaveImage = (url) => {
  // 下载图片
  Taro.downloadFile({
    url,
    success: (res) => {
      if (res.statusCode === 200) {
        // 获取保存到相册的权限
        Taro.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: () => {
            Taro.showToast({
              title: '图片保存成功',
              icon: 'success',
              duration: 2000
            });
          },
          fail: (err) => {
            if (err.errMsg.includes('auth')) {
              // 如果用户未授权保存图片，提示用户前往授权
              Taro.showModal({
                title: '提示',
                content: '需要授权保存图片到相册',
                success: (res) => {
                  if (res.confirm) {
                    Taro.openSetting(); // 引导用户前往授权
                  }
                }
              });
            } else {
              Taro.showToast({
                title: '图片保存失败',
                icon: 'none',
                duration: 2000
              });
            }
          }
        });
      }
    },
    fail: (err) => {
      console.error('图片下载失败', err);
    }
  });
};

const getToday = () => {
  const today = new Date();
  return Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
};

// 根据当前时间计算应该显示的图片索引
export const getIndex = () => {
  const currentIndex = Math.floor(getToday() / 3) % DAY_IMAGES.length - 1;
  console.log(currentIndex, getToday(), 89)
  if (currentIndex < 0 || currentIndex >= DAY_IMAGES.length) {
    return 0
  }
  return currentIndex;
}
