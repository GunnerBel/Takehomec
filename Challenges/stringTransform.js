const readline = require('readline');

const re = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseWord(word) {
    //giving the reversed string and no space in between
    return word.split('').reverse().join('').replace(/\s/g, '');

}
//function to give the ASCII string
function TurntoASCII(string)
{
    let result = '';
    for (let i = 0; i < string.length; i++) {
        //get the ASCII code of the input current characters
        const charCode = string.charCodeAt(i);
        // convert the ASCII code to a string and concatenate with a space
        result += charCode.toString() + ' ';
    }
    //returning the finall ASCII string
    return result;

}
// function to re-call the process when it's done
function inputprocess(){
re.question('Enter any word: ', (firstword) => {
    if (firstword.length % 3 === 0 && firstword.length % 5 === 0) {
        const reverse = reverseWord(firstword);
        const coded = TurntoASCII(firstword)
        console.log(coded);
        console.log(reverse);

    }
    else if ( firstword.length % 3 === 0)
    {
        const reverse = reverseWord(firstword)
        console.log(reverse);
    }
    else if ( firstword.length % 5 === 0)
    {
        const coded = TurntoASCII(firstword)
        console.log(coded);

    }

    else
    {
        console.log("Sorry, the string provided is neither divisible by 3 nor 5");

    }

    //call for input process again to prompt
    inputprocess();





});
}
//start the process by calling the function
inputprocess();

