

const applyCouponButton = document.getElementById("apply");

applyCouponButton.addEventListener("click", function () {
    const couponText = document.getElementById("coupon").value;
    const couponCode = couponText.split(" ").join("").toUpperCase();

    if (couponCode === "NEW15" || couponCode === "COUPLE20") {
        const discountElement = document.getElementById("discount");
        let discountAmount;
        if (couponCode === "NEW15") {
            discountAmount = totalPrice * 0.85;
        } else { 
            discountAmount = totalPrice * 0.80;
        }
        discountElement.innerText = discountAmount.toFixed(2);
        document.getElementById("coupon_div").style.display = "none"; 
    } else {
        alert("Enter Right Coupon");
    }
});