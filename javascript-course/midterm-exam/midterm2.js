function getInventoryValuation(inventory) {
    let techArray = [];
    let furnitureArray = [];

    for (let i = 0; i < inventory.length; i++){
        if (inventory[i].category === 'Tech'){
            techArray.push(inventory[i]);
        }
        else if (inventory[i].category === 'Furniture'){
            furnitureArray.push(inventory[i]);
        }
    }

    let techSum = 0
    let furnitureSum = 0

    for (let i =0; i < techArray.length; i++){
        sum = techArray[i].qty *techArray[i].price
        techSum += sum
    }

    for (let i =0; i < furnitureArray.length; i++){
        sum = furnitureArray[i].qty * furnitureArray[i].price
        furnitureSum += sum
    }

    return `Tech: ${techSum}, Furniture: ${furnitureSum}`

}

// Test Code
const testInventory = [
    { name: 'Monitor', qty: 2, price: 200, category: 'Tech' },
    { name: 'Mouse', qty: 0, price: 50, category: 'Tech' },
    { name: 'Desk', qty: 1, price: 300, category: 'Furniture' },
    { name: 'Lamp', qty: 2, price: 50, category: 'Furniture' }
];
console.log(getInventoryValuation(testInventory)); 
