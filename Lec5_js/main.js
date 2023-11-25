// // Task 1_1
// var fruite = "banana"  ;
// var text1;
// switch (fruite) {
//     case "banana":
//         text1 = "Hello" ;
//         break;
//     case "apple":
//         text1 = "Welcome" ;
//         break;
    
//     default:
//         break;
// }
// alert(text1)
// //Task 1_2
// var text2;
// var x  = 5  , y= 3  ;
// if (x>y) {
//     text2 = "Hello World" ;
// } else {
//     text2 = "Goodbye" ;
// }
// alert(text2) ;

// //Task 2_1

// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];

// for(let  i in fruits){
//     document.writeln(fruits[i] + ", ") ;
// }

// //Task 2_2
// for (var  i=  0  ; i< 10 ; i++) {
//     document.writeln(i + "   ")
// }
// document.body.appendChild(document.createElement("HR") );
// // Task 2_3 
// for (var  i=  0  ; i< 10 ; i+=2) {
//     document.writeln(i + "   ")
// }


// // Task 3
// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.sort() ;
// fruits.pop() ;
// fruits.push("Kiwi") ;
// for(let  i in fruits){
//     document.writeln(fruits[i] + "  ") ;
// }

//Task 4 

function findMin(){
    let min  = Infinity ;
    for(let i= 0 ; i<arguments.length ; i++){
        if(arguments[i] < min) min = arguments[i] ;
    }
    return min ;

}
 
document.write(findMin(2,3,4,6)) ;
