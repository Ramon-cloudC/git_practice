/*Count the number of divisors of a positive integer n.

Random tests go up to n = 500000, but fixed tests go higher.

Examples (input --> output)

4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
*/

function getDivisorsCnt(n){
    
    let newArr = [];
    for(let i = 0; i < n; i++){
  //     console.log(n);
      newArr.push(n);
    }
     
    let finalArray = newArr.map(digit => {
      digit = digit - (n-1);
        n --; 
  //     console.log(digit)
      return digit
      });
    
      let divisors = [];
     for(let j = 0; j < finalArray.length; j++){
       if(finalArray.length % finalArray[j] === 0){
         divisors.push(finalArray[j]);
         console.log(finalArray[j])
       }
     }
    return divisors.length;
      }
    
  
  console.log(getDivisorsCnt(346));