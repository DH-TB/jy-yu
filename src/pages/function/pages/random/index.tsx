import React, { useState } from 'react'
import { Button, Input, Text, View } from '@tarojs/components'
import styles from './index.module.scss'
import cx from 'classnames';

function Random() {
  const [min, setMin] = useState<number>(1)
  const [max, setMax] = useState<number>(10)
  const [count, setCount] = useState<number>(1)
  const [error, setError] = useState(false)
  const [result, setResult] = useState<any[]>([])

  const generateUniqueRandomNumbers = () => {
    setError(false);
    setResult([]);

    if (max - min + 1 < count) {
      setError(true);
      return;
    }

    const randomNumbers = new Set();
    while (randomNumbers.size < count) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      randomNumbers.add(randomNum);
    }
    setResult(Array.from(randomNumbers));
  }

  const reset = () => {
    setMin(1)
    setMax(10)
    setCount(1)
    setResult([])
    setError(false);
  }

  console.log(max, min, count, error, result, 33)
  return (
    <View className={styles.random}>
      <View className={styles.randomContent}>
        <View className={styles.randomInput}>
          <Text className={styles.randomText}>范围：</Text>
          <Input type='number' placeholder='min' className={styles.input} value={min.toString()} onInput={(data) => setMin(Number(data.detail.value))} />
          <Input type='number' placeholder='max' className={cx(styles.input, styles.padding)} value={max.toString()} onInput={(data) => setMax(Number(data.detail.value))} />
        </View>
        <View className={styles.randomInput}>
          <Text className={styles.randomText}>个数：</Text>
          <Input type='number' placeholder='count' className={styles.input} value={count.toString()} onInput={(data) => setCount(Number(data.detail.value))} />
        </View>
        <View className={styles.randomButton}>
          <Button type='primary' className={styles.default} onClick={reset}>重置</Button>
          <Button type='primary' className={styles.primary} onClick={generateUniqueRandomNumbers}>生成</Button>
        </View>
        {error && <View className={styles.error}>你说说！？？这怎么生成啊</View>}
        {result.length > 0 &&
          <View className={styles.result} >
            {result.map((item) => <Text className={styles.text}>{item}</Text>)}
          </View>
        }
      </View>

    </View>
  )
}

export default Random
