import { createSlice } from '@reduxjs/toolkit';
import { DAY_IMAGES, DAY_TEXTS } from '../constants/recommend';

const initialState = Array.from({ length: 7 }, (_, i) => ({
    image: DAY_IMAGES[i],
    hitokoto: DAY_TEXTS[i],
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
