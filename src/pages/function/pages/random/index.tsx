import React, { useState } from 'react'
import { Button, Input, Text, View } from '@tarojs/components'
import styles from './index.module.scss'
import cx from 'classnames';

function Random() {
  const [min, setMin] = useState<string | undefined>(undefined)
  const [max, setMax] = useState<string | undefined>(undefined)
  const [count, setCount] = useState<string | undefined>(undefined)
  const [error, setError] = useState(false)
  const [result, setResult] = useState<any[]>([])

  const generateUniqueRandomNumbers = () => {
    setError(false);
    setResult([]);
    if (Number(max) - Number(min) + 1 < Number(count)) {
      console.log(max, min, count, 44)
      setError(true);
      return;
    }

    const randomNumbers = new Set();
    while (randomNumbers.size < Number(count)) {
      const randomNum = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
      randomNumbers.add(randomNum);
    }
    setResult(Array.from(randomNumbers));
  }

  const reset = () => {
    setMin(undefined)
    setMax(undefined)
    setCount(undefined)
    setResult([])
  }

  return (
    <View className={styles.random}>
      <View className={styles.randomContent}>
        <View className={styles.randomInput}>
          <Text className={styles.randomText}>范围：</Text>
          <Input type='number' placeholder='min' className={styles.input} value={min} onInput={(data) => setMin(data.detail.value)} />
          <Input type='number' placeholder='max' className={cx(styles.input, styles.padding)} value={max} onInput={(data) => setMax(data.detail.value)} />
        </View>
        <View className={styles.randomInput}>
          <Text className={styles.randomText}>个数：</Text>
          <Input type='number' placeholder='count' className={styles.input} value={count} onInput={(data) => setCount(data.detail.value)} />
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

