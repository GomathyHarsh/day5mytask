//Arrow Function
//print odd numbers in an array
var a=[3,6,7,9,12,11,34];
let oddno=a.filter((element)=>{
    return element%2!=0;
})
console.log(oddno);

//convert all strings to title caps in a string array
var str="string";
var strArr=[];
var titleCaps = ()=>{
    for(let i=0; i<str.length;i++) {
        strArr.push(str[i].toUpperCase());
    console.log(strArr[i]);
    }
}
titleCaps(strArr);

//sum of all the numbers in an array
var s=[20,40,50,10,60,50];
let total=s.reduce((accu,curr)=>{
    return accu+curr;
})
console.log(total);

//return all palindromes in an array
 
const palindromes = arr => {
  return arr.filter(item => item === item.split('').reverse().join(''));
};

console.log(palindromes(['dad', '121', 'hello', 's', 'mom']));

//
//const newArray=[1,3,2,5,10];
const isPrime=num=>{
    for(let i=0; i<num;i++){
        if(num % i=== 0) 
        return false;
    }
    return num !==1;
};
const myPrimeArray=newArray.filter(element=> isPrime(element));
console.log(myPrimeArray([2,3,6,5,1]));