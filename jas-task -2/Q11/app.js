let num=Number(prompt("enter a number btween 0-100:"))

while(num<0 || num>100 || isNaN(num)){
    num=Number(prompt("enter a number btween 0-100:"))
}

console.log("number is :"+num);