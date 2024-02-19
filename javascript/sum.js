



// const seats = document.querySelectorAll(".kbd");
// let selectedSeats = 0;

// for (let index = 0; index < seats.length; index++) {
//     const seat = seats[index];
//     seat.addEventListener("click", function () {
//         if (selectedSeats < 4) {
           
       
//             const totalTk = document.getElementById('cal');
//             const currTk = TotalTk.innerText;
//             const currentTk = parseInt(currTk);
//             const NewTk = currentTk * selectedSeats + 550;
//             totalTk.innerText = NewTk;

//         }

//         else {
//             alert("You can only select up to four seats.");
//         }
//     });
// }



const seats = document.querySelectorAll(".kbd");
let totalTk = 0;

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    seat.addEventListener("click", function () {
        if (totalTk < 4) {
            const calSpan = document.getElementById('cal');
            totalTk += 550; // Assuming each seat adds 550 to the total price
            calSpan.innerText = totalTk;
        } else {
            alert("You can only select up to four seats.");
        }
    });
}
