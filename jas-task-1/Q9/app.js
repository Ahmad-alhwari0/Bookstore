let str =prompt("Enter a string:")

function text(str){
let word=str.split(" ");
let result=""
    for (let i = 0; i < word.length; i++) {
        result += word[i][0].toUpperCase() + word[i].slice(1);
    }
    return result;
}


console.log(text(str));