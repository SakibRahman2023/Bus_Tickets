const applyCoupon = document.getElementById("apply");

applyCoupon.addEventListener("click", function () {
    const couponText = document.getElementById("coupon").value;
    const couponCode = couponText.split(" ").join("").toUpperCase();

    if (couponCode === "NEW15") {
        const discountElement = document.getElementById("discount");
        const discountAmount = totalPrice * 0.85;
        discountElement.innerText = discountAmount.toFixed(2);
        
    } else if (couponCode === "COUPLE20") { 
        const discountElement = document.getElementById("discount");
        const discountAmount = totalPrice * 0.80;
        discountElement.innerText = discountAmount.toFixed(2);
        

    } else {
        alert("Enter Right Coupon");
    }
});