// //1.odd
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
(function ( arr ) {
    for(var i=0;i<arr.length;i++){
        var count=0;
        for(var j=2;j<arr[i];j++){
            if(arr[i]%j==0)
            count++;
        }
        if(count==0){
            console.log(arr[i]);
        }
    }
}([1,2,3,4,5,6,7,8,9,10,11]))