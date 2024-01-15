// Example usage:

const maxProfit = (ar) => {
    const n = ar.length;
    let maxProfit = 0;
    for (let buyDay = 0; buyDay < n - 1; buyDay++) {
        for (let sellDay = buyDay + 1; sellDay < n; sellDay++) {
            const currentProfit = ar[sellDay] - ar[buyDay];
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
    }
    return maxProfit;
};


const optimaxProfit = (prices) => {
    let minPrice = Infinity; // Set initial minimum price to positive infinity
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // Update the minimum price if the current price is lower
        minPrice = Math.min(minPrice, prices[i]);

        // Update the maximum profit if selling at the current price yields a higher profit
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
};

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5


console.log(optimaxProfit(prices)); // Output: 5
