// Fizz Buzz
console.log("Fizz Buzz Solution Testing")
let i = 1;
while(i < 101){
    if(i%3 == 0 && i%5==0){ //divisible by 3 and 5?
        console.log("Fizz Buzz");
    }
    else if(i%3==0){ // divisible by 3 only
        console.log("Fizz");
    }
    else if(i%5==0){ //divisible by 5 only
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
    i++;
}

//Prime Numbers
/**
 * Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
 */
console.log("\nPrime Numbers Solution Testing")

let arbNum = 5; //arbitrary number, where to start
let orgNum = arbNum
let isPrime = false; //is this number prime?
let primeNum; //storing the prime number 
while (!isPrime) { //is the next prime number found?
  //console.log(`arbNum is ${arbNum}`);
  arbNum++;
  for (let j = 2; j < arbNum; j++) {
    if (arbNum % j == 0) { //arbNum is divisible by a number lower than itself, not prime, arbNum++
      break;
    } else if (j + 1 == arbNum) { //arbNum is not divisble by any other number than itself, store prime num and flip bool
      //console.log(`arbNum is: ${arbNum} j+1 is ${j + 1}`);
      primeNum = arbNum;
      isPrime = true;
    }
  }
  if (primeNum !== undefined) { //primeNumber has been found
    console.log(`${primeNum} is our next prime number after ${orgNum}.`);
  } else if (arbNum == 2) {
    console.log(`${arbNum} is our next prime number.`);
    isPrime = true;
  }
  else if(arbNum < 1){
    console.log("Invalid Entry. Enter a number greater than 0");
    break;
  }
}

//Feeling Loopy
console.log("\nFeeling Loopy Solution Testing")

let csvData2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
//console.log("csv Data:\n" + csvData)
let csvData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let index = 0; 
let cellOne = "";
let cellTwo = "";
let cellThree = "";
let cellFour = "";
let currCell = "";
while (index < csvData.length) {
  if (csvData[index] == ",") {
    index++; //don't include the comma
    if (cellOne.length == 0) {
      cellOne = currCell; 
    } else if (cellTwo.length == 0) {
      cellTwo = currCell;
    } else if (cellThree.length == 0) {
      cellThree = currCell;
    } 
    currCell = ""; //reset current cell string
  }
  else if(csvData[index] == "\n"){
    cellFour = currCell; //this is the last cell: print and reset everything to continue
    console.log(`${cellOne},${cellTwo},${cellThree},${cellFour}`);
    currCell = "";
    cellOne = "";
    cellTwo = "";
    cellThree = "";
    cellFour = "";
    index++;
  } 
  else {
    currCell += csvData[index]; 
    index++;
  }
}
