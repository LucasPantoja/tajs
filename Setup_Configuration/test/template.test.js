import { it } from '@jest/globals'

function sum(a, b) {
    return a + b
}

it('Should Sum Two Values', () => {
    expect(sum(2,3)).toBe(5)
})