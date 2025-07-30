import { zeroStriping } from "../../2-hashmaps-and-sets/3-zero-striping";

describe("Zero Striping", ()=>{
    it('sets rows and columns to 0 when 0 is present', ()=>{
        const matrix = [
            [1, 2, 3],
            [4, 0, 6],
            [7, 8, 9]
        ];

        const expected = [
            [1, 0, 3],
            [0, 0, 0],
            [7, 0, 9]
        ];

        zeroStriping(matrix);
        expect(matrix).toEqual(expected);
    });

    it('handles empty matrix', ()=>{
        const matrix: number[][] = [];
        zeroStriping(matrix);
        expect(matrix).toEqual([]);
    });

    it('handles single row with 0', ()=>{
        const matrix = [[1, 0, 3]];
        const expected = [[0, 0, 0]];
        zeroStriping(matrix);
        expect(matrix).toEqual(expected);
    });

    it('handles single column with 0', ()=>{
        const matrix =[[1],[0],[3]];
        const expected = [[0],[0],[0]];
        zeroStriping(matrix);
        expect(matrix).toEqual(expected);
    })

    it('does nothing when no zeros', ()=>{
        const matrix = [
            [1, 2],
            [3, 4]
        ];
        const expected = [
            [1, 2],
            [3, 4]
        ];
        zeroStriping(matrix);
        expect(matrix).toEqual(expected);
    })
});