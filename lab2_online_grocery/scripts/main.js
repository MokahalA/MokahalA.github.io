/* credits: 
 	Form & button styling inspired by: www.w3schools.com
	Javascript backend inspired by Professor Caroline Barrière's code: https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery
*/


window.onload = function(){
	document.getElementById('clientButton').click();
}



function openInfo(evt, tabName) {

	if(tabName == 'Products'){
		populateListProductChoices();
	}

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


function populateListProductChoices() {
	var s1 = document.getElementById("type");
	var s2 = document.getElementById("allergy");
	var s3 = document.getElementById("lactose");
	var s4 = document.getElementById("displayProduct");

	console.log(s1.value);
	console.log(s2.value);
	console.log(s3.value);
	
	// s5 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s4.innerHTML = "";


	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value, s2.value, s3.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s4.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s4.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s4.appendChild(document.createElement("br"));    
	}
}

function nextClick(tabName){
    if (tabName == 'Client'){
        document.getElementById("productsButton").click(); 
    }

    if (tabName == 'Products'){
        document.getElementById("cartButton").click();
    }
}


function previousClick(tabName){
    if (tabName == 'Products'){
        document.getElementById("clientButton").click(); 
    }

    if (tabName == 'Cart'){
        document.getElementById("productsButton").click();
    }
}


// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);	
	c.appendChild(document.createTextNode("Total price: $" + getTotalPrice(chosenProducts)));
}