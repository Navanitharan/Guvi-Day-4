// //1.Odd
// var odd = function(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             console.log(arr[i])
//         }
//     }
// }
// var arr =[1,2,3,4,5,6,7,8]
// odd(arr);

// //2.UPPERCASE
// var upp = function(str){
//     console.log(str.toUpperCase())
// };
// upp("guvi")

// //3.SUM OF ALL NUMBERS
// var sum=function (num){
//     var sum=0;
//     for(var i=0;i<num.length;i++){
//         sum+=num[i];
//     }
//     console.log(sum)
// }
// sum([1,2,3,4,5,6,7,8])

//4.RETURN ALL PRIME NUMBER IN AN ARRAY
// var prime=function (arr) {
//     for(var i=0;i<arr.length;i++){
//         var count=0;
//         for(var j=2;j<arr[i];j++){
//             if(arr[i]%j==0)
//             count++;
//         }
//         if(count==0){
//             console.log(arr[i]);
//         }
//     }
// }
// prime([1,2,3,4,5,6,7,8,9,10,11]);

//5.PALINDROME
// var prime = function(arr) {
//     for(var i=0; i<arr.length;i++){
//         var pal=true;
//         var f=0;
//         var l=arr[i].length-1
//         while(f<l){
//             if(arr[i].charAt(f)!=arr[i].charAt(l) ){
//                 pal=false;
//                 break;
//             }
//             l--;
//             f++;
//         }
//         if(pal==true){
//             console.log(arr[i]);
//         }
//     }
// }
// prime(["madam","lool","car"])

//6.MEDIAN OF SORTED ARRAY
// var arr1=[1,2,3,4,5];
// var arr2=[6,7,8,9,10];

// var merge=function(arr1,arr2){
// var merge=[...arr1,...arr2];
//    return merge;
// }

// var marr=merge(arr1,arr2);

// var len=marr.length/2;
// var median;

// if(marr.length%2==0){
//     median=(marr[len-1]+marr[len])/2;
// }else{
//     median=marr[len-1]/2;
// }
// console.log("The Median is: "+Math.round(median))

//7.REMOVE DUPLICATE
var isdup = function (arr){
    var nodup=[];
    for(var i=0; i<arr.length; i++){
        var count=0;
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]==arr[i]){
                count++;
            }
        }
        if(count==0){
            nodup.push(arr[i]);
        }
    }
    console.log(nodup)
}
isdup([1,2,3,4,2,6,3])
