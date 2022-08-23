//print odd numbers in an array by using anonymous function
  var array=[21,40,5,61,85,12,40]      
var odd = function (){
    var result = array.filter(number => number%2!=0)
    return result;
}
console.log(odd());

//print odd numbers in an array by using IIFE
    
 (function odd(){
    var a=[21,40,5,61,85,12,40]  
   for(var i=0; i<a.length; i++){
           if (a[i]%2!=0)
           console.log(a[i])
       }
     
    })
    ();
//convert all the strings to title caps in a string array by using anonymous function
var str="string";
var titleCaps = function() {
    var newArr = [];
    for (var i = 0; i < str.length; i++) {
      newArr.push(str[i].toUpperCase());
    }
    return newArr;
  };
  console.log(titleCaps());

//convert all the strings to title caps in a string array by using IIFE
(function str(){
    var string=["s,t,r,i,n,g"];
    var strArr =[];
    for(let i=0; i<string.length;i++) {
        strArr.push(string[i].toUpperCase());
        console.log(strArr);
    }
   
})
();
//Sum all the number in an array by using anonymous function
var sumArr=[20,40,35,25];
var add= function() {
    var sum=0;
    for(i=0; i<sumArr.length; i++)
    {
        sum=sum+sumArr[i];
    }
    return sum;
}
console.log(add());

////Sum all the number in an array by using IIFE
(function add(){
var adArr=[20,40,35,25];
var sum=0;
for(i=0; i<adArr.length; i++)
    {
        sum=sum+adArr[i];
    }
    console.log(sum);
})
();

// return all prime number in array by using anonymous array
var p=[2,9,6,7,13];
var prime=function(){
    var primeArr=[];
    for(let i=0; i<p.length;i++){
        if(1>=p[i])
        {
         return false;
        }
        else if(p[i]%i !=0){
        primeArr.push(p[i]);
        }
        }
        return primeArr;
}
console.log(prime());



// return all palindrome in an array by using anonymous function

var ap= ['dad', 'hello', 'task', 's', 'mom'];
var palin= function(){
  var  rsl= ap.filter(item => item === item.split('').reverse().join(''));  
return rsl;
}
console.log(palin());

//return all palindrome in an array by using IIFE

(function palind(){
    var apl= ['232', '656', 'task', 's', 'mom'];
    var  rslt= apl.filter(item => item === item.split('').reverse().join(''));  
    console.log(rslt);
})
();

//remove duplicates from an array using by anonymous function
var d=[2,5,2,9,3,5];
var uniqueArr= function(){
    var newarr=[...new Set(d)];
    return newarr;
}
console.log(uniqueArr());

//remove duplicates from an array using by IIFE function

(function uniArr(){
    var rem=[8,9,8,7,9,4,7];
    var resArr =[...new Set(rem)];
    console.log(resArr);

})
();

//Rotate an array by K times by using anonymous fuction

var arra = [1,2,3,4,5];
var k = 2;
var newArrs = [];
var rotate= function(){
for(var i=0;i<arra.length;i++){
    newArrs[i] = arra[(i+k)%arra.length];
 }
  return newArrs;
}
console.log(rotate());

//Rotate an array by K times by using IIFE
(function rotates(){
    var rotArr=[8,9,7,6,1];
    var r=3;
    var resRotate=[];
    for(let i=0; i<rotArr.length;i++)
    {
        resRotate[i]=rotArr[(i+k)%rotArr.length];
    }
    console.log(resRotate);
})
();
