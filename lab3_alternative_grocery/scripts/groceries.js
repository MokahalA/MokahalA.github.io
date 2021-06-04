var products = [
    {
		name: "Broccoli ($1.99)",
		isOrganic: false,
		allergyFree: true,
		lactoseFree: true,
		price: 1.99
	},
	{
		name: "Bell peppers ($2.19)",
		isOrganic: false,
		allergyFree: true,
		lactoseFree: true, 
		price: 2.19
	},
	{
		name: "Mushrooms ($1.79)",
		isOrganic: false,
		allergyFree: true,
		lactoseFree: true,
		price: 1.79
	},
	{
		name: "Bread ($2.35)",
		isOrganic: false,
		allergyFree: true,
		lactoseFree: true,
		price: 2.35
	},
	{
		name: "Organic Eggplants ($2.99)",
		isOrganic: true,
		allergyFree: true,
		lactoseFree: true,
		price: 2.99

	},
	{
		name: "Organic Apples ($1.99)",
		isOrganic: true,
		allergyFree: true,
		lactoseFree: true,
		price: 1.99
	},	

	{
		name: "Organic Spinach ($1.39)",
		isOrganic: true,
		allergyFree: true,
		lactoseFree: true,
		price: 1.39
	},	
	{
		name: "Salmon ($10.00)",
		isOrganic: false,
		allergyFree: true,
		lactoseFree: true,
		price: 10.00
	},
	{
		name: "Cheddar Cheese ($3.49)",
		isOrganic: false,
		allergyFree: false,
		lactoseFree: false,
		price: 3.49
	},
	{
		name: "Peanut Butter Icecream ($1.49)",
		isOrganic: false,
		allergyFree: false,
		lactoseFree: false,
		price: 1.49
	},
	{
		name: "Organic Peanuts ($1.99)",
		isOrganic: true,
		allergyFree: false,
		lactoseFree: true,
		price: 1.99
	},
	{
		name: "Cow's Milk ($2.99)",
		isOrganic: false,
		allergyFree: true,
		lactoseFree: false,
		price: 2.99
	},
	{
		name: "Organic Almond Milk ($3.29)",
		isOrganic: true,
		allergyFree: false,
		lactoseFree: true,
		price: 3.29,
	},
	{
		name: "Chicken ($4.99)",
		isOrganic: false,
		allergyFree: true,
		lactoseFree: true,
		price: 4.99
	},
	{
		name: "Greek Yogurt ($2.59)",
		isOrganic: false,
		allergyFree: true,
		lactoseFree: false,
		price: 2.59
	},
	{
		name: "Walnuts ($1.49)",
		isOrganic: false,
		allergyFree: false,
		lactoseFree: true,
		price: 1.49
	},
	{
		name: "Granola bar ($0.99)",
		isOrganic: false,
		allergyFree: false,
		lactoseFree: true,
		price: 0.99
	},
	{
		name: "Organic Peach ($2.39)",
		isOrganic: true,
		allergyFree: true,
		lactoseFree: true,
		price: 2.19
	},
	{
		name: "Organic Tomatoes ($1.29)",
		isOrganic: true,
		allergyFree: true,
		lactoseFree: true,
		price: 1.29
	},
	{
		name: "Organic Cottage Cheese ($2.89)",
		isOrganic: true,
		allergyFree: true,
		lactoseFree: false,
		price: 2.89
	},
	{
		name: "Organic Chocolate Milk ($2.35)",
		isOrganic: true,
		allergyFree: true,
		lactoseFree: false,
		price: 2.35
	},
	{
		name: "Organic Sour Cream ($1.85)",
		isOrganic: true,
		allergyFree: true,
		lactoseFree: false,
		price: 1.85
	},
	{
		name: "Shrimp ($6.99)",
		isOrganic: false,
		allergyFree: false,
		lactoseFree: false,
		price: 6.99
	},
	{
		name: "Snickers bar ($1.19)",
		isOrganic: false,
		allergyFree: false,
		lactoseFree: true,
		price: 1.19
	},
]


function restrictListProducts(prods, type, allergy, lactose) {

	prods.sort(function(a,b){return a.price-b.price});

	console.log("prods list: "+ prods);

	let product_names = [];

	for (let i=0; i<prods.length; i+=1) {

		//If no restrictions are given in the "Client" section
		if ((type == "n/a") && (allergy == "n/a") && (allergy == "n/a")){
			product_names.push(prods[i].name);
		}
		if ((type == "organic") && (prods[i].isOrganic == true)){
			if((allergy == "yes") && (lactose == "yes") && (prods[i].allergyFree == true) && (prods[i].lactoseFree == true)){
				product_names.push(prods[i].name);
			}
			if((allergy == "no") && (lactose == "yes") && (prods[i].lactoseFree == true)){
				product_names.push(prods[i].name);
			}
			if((allergy == "yes") && (lactose == "no") && (prods[i].allergyFree == true)){
				product_names.push(prods[i].name);
			}
			if((allergy == "no") && (lactose == "no")){
				product_names.push(prods[i].name);
			}
		} else if (type == "none"){
			if((allergy == "yes") && (lactose == "yes") && (prods[i].allergyFree == true) && (prods[i].lactoseFree == true)){
				product_names.push(prods[i].name);
			}
			if((allergy == "no") && (lactose == "yes") && (prods[i].lactoseFree == true)){
				product_names.push(prods[i].name);
			}
			if((allergy == "yes") && (lactose == "no") && (prods[i].allergyFree == true)){
				product_names.push(prods[i].name);
			}
			if((allergy == "no") && (lactose == "no")){
				product_names.push(prods[i].name);
			}
		}
	}
	console.log("products: "+ product_names);
	return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return (Math.round(totalPrice * 100) / 100).toFixed(2);
}