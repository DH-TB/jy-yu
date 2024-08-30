import { createSlice } from '@reduxjs/toolkit';

const images = [
    'https://wx4.sinaimg.cn/large/005SF7JFly1ht3kd2rhuyj30rc0rbdpi.jpg',
    'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kd1vf59j30rb0r3n37.jpg',
    'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kcyfjx8j30na0uydnf.jpg',
    'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kczw21qj30ri0rfahz.jpg',
    'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kd0l7inj30rd0rm11j.jpg',
    'https://wx3.sinaimg.cn/large/005SF7JFly1ht3kd1c55pj30rr0s3aez.jpg',
    'https://wx2.sinaimg.cn/large/005SF7JFly1ht3kcx8dd1j30r90retgs.jpg'
]

const texts = [
    '人生之所以珍贵',
    '不是我们去过的一个又一个精彩华丽的旅游胜地🏜️',
    '而是旅途之中寂寞无聊不可打发的时间里 有你陪伴💓',
    '人间不值得 开心最重要',
    '万事尽头 终将如意',
    '要勇敢 不要盘旋',
    '你要为喜欢的东西奔跑 走路真的来不及'
]
// '世界需要讲道理 而我永远向着你'
// '永远有人十七岁 但是没有人永远十七岁'
// '第一次活 手忙脚乱 一点小事就想死 是正常人类的 可爱反应机制'
// '山鸟与鱼不同路'

const initialState = Array.from({ length: 7 }, (_, i) => ({
    image: images[i],
    hitokoto: texts[i],
    from: '',
    from_who: ''
}))

export const wordDaySlice = createSlice({
    name: 'wordDay',
    initialState: initialState,
    reducers: {
        saveWordDay: (state, action) => {
            state = action.payload;
        },
    },
});

// 导出 actions 供组件使用
export const { saveWordDay } = wordDaySlice.actions;

// 导出 reducer 供 Store 使用
export default wordDaySlice.reducer;
