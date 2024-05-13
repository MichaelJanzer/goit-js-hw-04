function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
    ];
    
    const names = [];
    const prices = [];
    const quantitys = [];

    for (const product of products) {
        names.push(product.name);
        // console.log(names);
        // console.log(names.push(product.price));
    }
    return names;
}



getAllPropValues("name")  
 getAllPropValues("quantity")  
 getAllPropValues("price")  
 getAllPropValues("category")  