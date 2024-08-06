//FUNCTION 
// syntax  of function
//function cooked (){}

//simplest form of function

/*function trafficlight(){
    console.log("red + green + yellow")
}
trafficlight()*/

//parameter in function

/*function circumference(radius){
    return "The circumference of a Circle is" + 2*3.142*radius
}
circumference(2.5);*/


/*function square (number){
    return "squre of the given number is"+number*number
}
square(4);*/

/*function halfry(egg:number,salt:number,butter:number){
console.log(egg + salt + butter)
}
halfry(1,1.5,2);*/


// function areaofrectangular(width:number,height:number) {
//     return "Area of Rectangular:"+ width*height
// }
// console.log(areaofrectangular(6,8));

//if else in function


// function count (start_number,end_number){
//     if(start_number< end_number){
//         for(let i=start_number; i<end_number;i++){
//             console.log(i);
//         }   
//     }
//     else if(start_number> end_number){
//         for(let i=start_number; i>end_number;i--){
//             console.log(i);
//         }   
//     }
//     else if(start_number= end_number){
//         console.log("both are equal");
//     }

// }
// count (1,15);



//switch in function

// function calculateDiscount(producttype,price){
//     let discount:number;
//     switch(producttype){
//         case "electronics":
//              discount = price* 0.01;
//              break;

//         case "clothing":
//             discount = price* 0.2;
//             break;

//         case "books":
//             discount=price* 0.15;
//             break;

//         case "toy":
//             discount= price* 0.3;
//             break;
//           default  :
//           console.log("original price" );
//           break;
//     }
//     let discountedprice=(price-discount).toFixed(2)
//     return discountedprice;
// }
// console.log(calculateDiscount('colthing',192))

// console.log(calculateDiscount('colthing',192))

 
//call signature

// type DescribableFunction = {
//     description: string;
//     (someArg: number): boolean;
//   };
//   function doSomething(fn: DescribableFunction) {
//     console.log(fn.description + " returned " + fn(6));
//   }
   
//   function myFunc(someArg: number) {
//     return someArg > 3;
//   }
//   myFunc.description = "default description";
   
//   doSomething(myFunc);

//constracr s
// interface CallOrConstruct {
//     (n?: number): string;
//     new (s: string): Date;
//   }
 //generic 

//  function firstElement<Type>(arr: Type[]): Type | undefined {
//     return arr[0];
//   }
























