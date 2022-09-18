import { testFunction } from './Helpers';

describe("First test", () =>{
    it("Making first test", () => {
        expect(testFunction(1,2)).toBe(3)
    })
})