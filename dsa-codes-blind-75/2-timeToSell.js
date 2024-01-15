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

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5
