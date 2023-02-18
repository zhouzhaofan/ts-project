import { getHelloMessage } from './hello'

describe('hello', () => {
  test('getHelloMessage', () => {
    const message = getHelloMessage()
    expect(message).toBe('Hello, World!')
  })
})
