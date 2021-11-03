var findMaxConsecutiveOnes = function(nums) {
    let currentCounter = 0;
    let maxCounter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCounter++;
        } else {
            currentCounter = 0;
        }
        
        if (maxCounter < currentCounter) {
            maxCounter = currentCounter;
        }
    }
    return maxCounter;
};

let input = [1,1,0,1,1,1]
console.log(findMaxConsecutiveOnes(input))



