/**
 * 121. Best Time to Buy and Sell Stock
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param prices 
 */
export function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(const price of prices) {
        if(price < minPrice) {
            minPrice = price;
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit;
}