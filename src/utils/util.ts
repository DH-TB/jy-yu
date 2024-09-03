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

// const statusBarHeight = useMemo(() => Taro.getSystemInfoSync().statusBarHeight, [])
// 'https://music.163.com/song/media/outer/url?id=441491828'; // 替换为你的音频地址