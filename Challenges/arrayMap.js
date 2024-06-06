// this function is to check if there is a contiguous subarray to sum to the target

function hasContiguousSubarrayWithSum(array, targetSum) {

    let start = 0;   //declare the start pointer

    let currentSum = 0;   //initialize the current sum


// this loo is to; loop through the array with the end pointer
    for (let end= 0; end < array.length; end++) {
        currentSum += array[end];           //adding the current element to the current sum

        //while the current sum exceeds the target sum, move the start pointer to the right and subtract the elements from the current sum

        while (currentSum > targetSum && start <= end) {
            currentSum -= array[start];
            start++;
        }
        //then to check if the current sum is equal to the target sum

        if (currentSum === targetSum) {
            return true; // is so return true
        }
    }
    //if no return false

    return false;
}

// Import the 'readline' module to get user input from the console
const readline = require('readline');

// Create an interface to read input from the console
const rl = readline.createInterface({
    input: process.stdin, // Read input from the standard input stream (console)
    output: process.stdout // Write output to the standard output stream (console)
});


function inputprocess() {
// Prompt the user to enter an array of integers separated by commas
    rl.question('Enter the array of integers separated by commas (e.g., 1,2,3,7,5): ', (arrayInput) => {
        // After getting the array input, prompt the user to enter the target sum
        rl.question('Enter the target sum (e.g., 9): ', (targetSumInput) => {
            // Convert the input string to an array of integers
            const array = arrayInput.split(',').map(Number);
            // Convert the target sum input to a number
            const targetSum = parseInt(targetSumInput);

            // Check if a contiguous subarray with the target sum exists
            const result = hasContiguousSubarrayWithSum(array, targetSum);

            // Display the result to the user
            console.log(result ? "True" : "False");

            // Close the readline interface after getting the user input and displaying the result
            inputprocess()
        });
    });

}

inputprocess();
