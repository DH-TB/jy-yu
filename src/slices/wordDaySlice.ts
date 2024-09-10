import { createSlice } from '@reduxjs/toolkit';

export const wordDaySlice = createSlice({
    name: 'wordDay',
    initialState: [],
    reducers: {
        saveWordDay: (state, action) => {
            state = action.payload
        },
    },
});

// 导出 actions 供组件使用
export const { saveWordDay } = wordDaySlice.actions;

// 导出 reducer 供 Store 使用
export default wordDaySlice.reducer;
