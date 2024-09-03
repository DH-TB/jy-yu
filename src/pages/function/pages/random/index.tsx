import React, { useState } from 'react'
import { Button, Input, Text, View } from '@tarojs/components'
import styles from './index.module.scss'
import cx from 'classnames';
import isEmpty from 'lodash/isEmpty';
import { generateUniqueRandomNumbers, isEmptyValue } from '../../../../utils/util';

function Random() {
  const [min, setMin] = useState<number | undefined>(1)
  const [max, setMax] = useState<number | undefined>(10)
  const [count, setCount] = useState<number | undefined>(1)
  const [error, setError] = useState(false)
  const [result, setResult] = useState<any[]>([])

  const generate = () => {
    setError(false);
    setResult([]);

    if (!isEmptyValue(min) && !isEmptyValue(max) && !isEmptyValue(count)) {
      const result = generateUniqueRandomNumbers(min, max, count)
      if (isEmpty(result)) {
        setError(true)
      } else {
        setResult(result)
      }
    }
  }

  const reset = () => {
    setMin(1)
    setMax(10)
    setCount(1)
    setResult([])
    setError(false);
  }

  return (
    <View className={styles.random}>
      <View className={styles.randomContent}>
        <View className={styles.randomInput}>
          <Text className={styles.randomText}>范围：</Text>
          <Input type='number' placeholder='min' className={styles.input} value={min?.toString()} onInput={(data) => setMin(data.detail.value ? Number(data.detail.value) : undefined)} />
          <Input type='number' placeholder='max' className={cx(styles.input, styles.padding)} value={max?.toString()} onInput={(data) => setMax(data.detail.value ? Number(data.detail.value) : undefined)} />
        </View>
        <View className={styles.randomInput}>
          <Text className={styles.randomText}>个数：</Text>
          <Input type='number' placeholder='count' className={styles.input} value={count?.toString()} onInput={(data) => setCount(data.detail.value ? Number(data.detail.value) : undefined)} />
        </View>
        <View className={styles.randomButton}>
          <Button type='primary' className={styles.default} onClick={reset}>重置</Button>
          <Button type='primary' className={styles.primary} onClick={generate}>生成</Button>
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

