
const seats = document.querySelectorAll(".kbd");
let selectedSeats = 0;
let totalPrice = 0;

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    seat.addEventListener("click", function () {
        if (!seat.classList.contains('selected')) {
            if (selectedSeats < 4) {
                seat.style.backgroundColor = 'green';
                seat.classList.add('selected');
                const name = seat.querySelector("h3").innerText;

                const numInc = document.getElementById('num-in');
                const currNum = numInc.innerText;
                const current = parseInt(currNum);
                const NewNum = current + 1;
                numInc.innerText = NewNum;

                const numDnc = document.getElementById('number-seat');
                const currSeat = numDnc.innerText;
                const currentSeat = parseInt(currSeat);
                const NewSeat = currentSeat - 1;
                numDnc.innerText = NewSeat;

                const price = 550;

                const seatSelect = document.getElementById('seat-select');
                const p = document.createElement("p");
                p.innerText = name;
                seatSelect.appendChild(p);

                const eco = document.getElementById('economy')
                const p1 = document.createElement("p");
                p1.innerText = "Business";
                eco.appendChild(p1);

                const taka = document.getElementById('tk');
                const p2 = document.createElement('p');
                p2.innerText = price;
                taka.appendChild(p2);

                const tTaka = document.getElementById('cal');
                 totalPrice += price; 
                tTaka.innerText = " " + totalPrice;

                selectedSeats++;
            } else {
                alert("You can only select up to four seats.");
            }
        } else {
            alert("This seat has already been selected.");
        }
    });
}


