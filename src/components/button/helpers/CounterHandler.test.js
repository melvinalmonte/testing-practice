import { CounterHandler } from './CounterHandler'

const counter = CounterHandler(0)

describe('Counter state', () => {
  test('test initial state', () => {
    expect(counter.counter).tobe(0)
  })
})
