// const applyCoupon = document.getElementById("apply");

// applyCoupon.addEventListener("click", function () {
//     const couponText = document.getElementById("coupon").value;
//     const couponCode = couponText.split(" ").join("").toUpperCase();

//     if (couponCode === "NEW15") {
//         const discountElement = document.getElementById("discount");
//         const discountAmount = totalPrice * 0.85;
//         discountElement.innerText = discountAmount.toFixed(2);
        
//     } else if (couponCode === "COUPLE20") { 
//         const discountElement = document.getElementById("discount");
//         const discountAmount = totalPrice * 0.80;
//         discountElement.innerText = discountAmount.toFixed(2);
        

//     } else {
//         alert("Enter Right Coupon");
//     }
// });


const applyCouponButton = document.getElementById("apply");

applyCouponButton.addEventListener("click", function () {
    const couponText = document.getElementById("coupon").value;
    const couponCode = couponText.split(" ").join("").toUpperCase();

    if (couponCode === "NEW15" || couponCode === "COUPLE20") {
        const discountElement = document.getElementById("discount");
        let discountAmount;
        if (couponCode === "NEW15") {
            discountAmount = totalPrice * 0.85;
        } else { // COUPLE20
            discountAmount = totalPrice * 0.80;
        }
        discountElement.innerText = discountAmount.toFixed(2);
        document.getElementById("coupon_div").style.display = "none"; // Hide coupon_div if coupon accepted
    } else {
        alert("Enter Right Coupon");
    }
});