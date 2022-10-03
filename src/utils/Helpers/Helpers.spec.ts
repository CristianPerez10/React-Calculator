import { testFunction } from './Helpers';
import { expect, test } from 'vitest'

test("Function test", () => {
    expect(testFunction(2, 2)).toBe(4)
})