export class SumBetweenRange {
    private readonly prefixSum: number[];

    constructor(nums: number[]) {
        if (nums.length === 0) {
            throw new Error("nums must not be empty");
        }
        this.prefixSum = [nums[0]];
        for (let i = 1; i < nums.length; i++) {
            this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
        }
    }

    /**
     * Returns sum of nums[i...j] inclusive
     */
    sumRange(i: number, j: number): number {
        if (i < 0 || j < 0 || i >= this.prefixSum.length || j >= this.prefixSum.length) {
            throw new RangeError("i or j is out of bounds");
        }
        if (i > j) {
            throw new RangeError("i must be <= j");
        }
        if (i === 0) return this.prefixSum[j];
        return this.prefixSum[j] - this.prefixSum[i - 1];
    }
}