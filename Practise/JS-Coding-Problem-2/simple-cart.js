// Total Price
/* let shopping = [
    {name: 'Shirt', price: 1800},
    {name: 'Pant', price: 2500},
    {name: 'Shoe', price: 2000},
    {name: 'Belt', price: 800},
];

function shoppingCost(expense) {
    let sum = 0;
    for(let i = 0; i < expense.length; i++){
        let cost = expense[i]
        sum = sum + cost.price;
    }
    return sum;
}

let totalExpense = shoppingCost(shopping);
console.log('Today total cost: ', totalExpense)


// Quantity


let quantity = [
    {name: 'Shirt', total: 2, price: 1},
    {name: 'Pant', total: 3, price: 2},
    {name: 'Shoe', total: 1, price: 3},
    {name: 'Belt', total: 2, price: 3},
];

function totalQuantity(piece) {
    let sum = 0;
    for(let i = 0; i < piece.length; i++){
        let totalPiece = piece[i];
        let totalProduct = totalPiece.total * totalPiece.price;
        sum = sum + totalProduct;
        // sum = sum + totalPiece.total * totalPiece.price;
    }
    return sum;
}
let shop = totalQuantity(quantity);
console.log('Total Quantity: ' ,shop)

 */



function MindGame(num) {
  return (num * 3 + 10) / 2 - 5;
}

let output1 = MindGame(5);
let output2 = MindGame(50);
let output3 = MindGame(33)
console.log(output1, output2, output3);



function evenOdd(str) {
  if (str.length % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

let result = evenOdd('chatgpt');
console.log(result)



function isLGSeven(number) {
  const difference = number - 7;
  if (difference < 7) {
    return difference;
  } else {
    return number * 2;
  }
}

let output = isLGSeven(15);
console.log(output)

/* 
function getSmall(number) {
    let largest = number[0]
for(let i = 0; i < number.length; i++){
    let index = i;
    let element = number[index];
    if (element < largest) {
        largest = element
    }
}
return largest;
}

let heightCm = [1,2,5];
let getCount = getSmall(heightCm);
console.log('Smallest number is: ', getCount) */

function findingBadData(arr) {
    let badDataCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            badDataCount++;
        }
    }
    return badDataCount;
}

let data = [-4, -9, -5, -33, -55];
let data1 = findingBadData(data);
console.log(data1);



function gemsToDiamond(x, y, z) {
    let totalGems = x + y + z;
    let totalDiamonds = totalGems * 96;
  
    if (totalDiamonds > 1000) {
      return totalDiamonds - 2000;
    } else {
      return totalDiamonds;
    }
  }
  
let getDiamond = gemsToDiamond(1, 1, 1);
console.log(getDiamond);














