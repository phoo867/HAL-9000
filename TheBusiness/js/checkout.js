function calculatePrice(price, quantity) {
	return price * quantity;
}

function calculateFinalPrice() {
	const price = document.getElementById("price").value;
	const quantity = document.getElementById("quantity").value;
	let totalPrice = calculatePrice(price, quantity);

	const coupon = document.getElementById("coupon").value;
	if (coupon) {
		totalPrice -= coupon;
	}

	const discount = document.getElementById("discount").value;
	if (discount) {
		totalPrice *= (1 - discount / 100);
	}

	const paymentType = document.getElementById("paymentType").value;
	if (paymentType === "credit") {
		totalPrice *= 1.02; // add 2% credit card fee
	} else if (paymentType === "debit") {
		totalPrice *= 1.01; // add 1% debit card fee
	}

	const formattedPrice = "$" + totalPrice.toFixed(2);
	const priceElement = document.getElementById("value");
	priceElement.innerHTML = "Total Price: " + formattedPrice;
	// document.getElementById("value").innerHTML = finalPrice.toFixed(2);
}
