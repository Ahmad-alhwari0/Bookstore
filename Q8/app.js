let str=prompt("Enter a Text");



function text(str){
    let result="";

    for (let i = 0; i < str.length; i++) {
        if (str[i]===str[i].toUpperCase()){
            result +=str[i].toLowerCase();
        }else if (str[i]===str[i].toLowerCase()){
            result +=str[i].toUpperCase();
        }
            
        
        
    }
    return result;

}


console.log(text(str));