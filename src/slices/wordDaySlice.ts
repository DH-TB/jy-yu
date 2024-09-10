import { createSlice } from '@reduxjs/toolkit';
import { DAY_TEXTS, DAY_IMAGES, TEXT3, IMAGE3 } from '../constants/recommend';
import { generateUniqueRandomNumbers, getIndex } from '../utils/util';

const specialInitState =  generateUniqueRandomNumbers(0, TEXT3.length - 1, 7).map((item, i) => ({
    image: IMAGE3[i],
    hitokoto: TEXT3[item as unknown as number],
    from: '',
    from_who: ''
}))

const initialState = Array.from({ length: 7 }, (_, i) => ({
    image: DAY_IMAGES[getIndex()][i],
    hitokoto: DAY_TEXTS[getIndex()][i],
    from: '',
    from_who: ''
}))

export const wordDaySlice = createSlice({
    name: 'wordDay',
    initialState: { data: getIndex() === 13 ? specialInitState : initialState },
    reducers: {
        saveWordDay: (state, action) => {
            state.data = getIndex() === 13 ? state.data : state.data.map((item, index) => ({
                ...item,
                hitokoto: action.payload[index].hitokoto,
                from: action.payload[index].from,
                from_who: action.payload[index].from_who,
            }));
        },
    },
});

// 导出 actions 供组件使用
export const { saveWordDay } = wordDaySlice.actions;

// 导出 reducer 供 Store 使用
export default wordDaySlice.reducer;
