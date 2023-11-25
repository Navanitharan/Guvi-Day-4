//1.odd
// (function(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             console.log(arr[i])
//         }
//     }
// }([1,2,3,4,5,6,7,8]));

// //2.UPPERCASE
// (function(str){
//     console.log(str.toUpperCase())
// }("guvi"));

// //3.SUM OF ALL NUMBERS
// (function (num){
//     var sum=0;
//     for(var i=0;i<num.length;i++){
//         sum+=num[i];
//     }
//     console.log(sum)
// }([1,2,3,4,5,6,7,8]))

//4.PRIME NUMBERS
// (function ( arr ) {
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
// }([1,2,3,4,5,6,7,8,9,10,11]))

//5.PALINDROME 
// (function(arr) {
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
// }(["madam","lool","car"]))

//6.MEDIAN OF SORTED ARRAY
// var arr1=[1,2,3,4,5];
// var arr2=[6,7,8,9,10];

// (function(arr1,arr2){
// var marr=[...arr1,...arr2];
// var len=marr.length/2;
// var median;

// if(marr.length%2==0){
//     median=(marr[len-1]+marr[len])/2;
// }else{
//     median=marr[len-1]/2;
// }
// console.log("The Median is: "+Math.round(median))
// })(arr1,arr2);


//7.REMOVE DUPLICATE
(function (arr){
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
})([1,2,3,4,2,6,3])

