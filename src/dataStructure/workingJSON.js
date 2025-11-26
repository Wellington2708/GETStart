let receipt = {
    firstName: "Wellington",
    age: 25,
    products:{
        0: ["Camisa do Barcelona", 49.90],
        1: ["Chuteira", 250.00],
        2: ["Joelheira", 99.90],
        4: ["Meião", 26.50],
        5: ["Short", 39.90]

    }
    
}


generateReceipt(receipt);

function generateReceipt(receipt){
    console.log(`Nome : ${receipt.firstName}`);
    console.log(`Idade : ${receipt.age}`);
    console.log("-------------------");

    for( index in receipt.products){
        let [product, price] = receipt.products[index];
        console.log(`Produtos: ${product} | Price: ${price}`);
        

    }
    
}