// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0

var maxProfit = function(prices) {

    let low = prices[0] 
    let profit = 0 
    for(let i = 0; i < prices.length; i++) {
        if ( prices[i] < low ) {
            low = prices[i]
        } 
        if ( prices[i] - low > profit) {
            profit = prices[i] - low 
        }
    }
    return profit
    
}

var array = [7,1,5,3,6,4]
console.log(maxProfit(array))


/**
 * declare variables buy, sell, profit
 * if price[i] (tempbuy) is less than price[i]
 * buy day assigned to i and buy price to price[i]
 * 
 * do the same for sell day and sell price
 * make sure sell day is after buy day
 * 
 * subtract buy price from sell price and 
 *  return profit
 * 
 */

