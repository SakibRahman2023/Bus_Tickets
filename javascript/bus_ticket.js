
// const seats = document.querySelectorAll(".kbd");
// for ( let index = 0; index<seats.length;index++){
//     const seat = seats[index];
//     // console.log(seat)
//     seat.addEventListener("click",function(){
//         seat.style.backgroundColor = 'green'
//         // console.log("clicked");
//         const name = seat.querySelector("h3").innerText;
//         // console.log(name.innerText)

//         // ticket increase
//         const numInc= document.getElementById('num-in');
//         const currNum = numInc.innerText;
//         const current = parseInt(currNum);
//         const NewNum = current + 1;
//         numInc.innerText = NewNum;

//         // ticket decrsing
//         const numDnc = document.getElementById('number-seat');
//         const currSeat = numDnc.innerText;
//         const currentSeat = parseInt(currSeat);
//         const NewSeat = currentSeat - 1;
//         numDnc.innerText = NewSeat;

//         const price = 550;
//         // console.log(price)
//         const seatSelect = document.getElementById('seat-select');
//         const p = document.createElement("p");
//         p.innerText= name;
//         seatSelect.appendChild(p);

//         const eco = document.getElementById('economy')
//         const p1 = document.createElement("p");
//         p1.innerText = "Economy";
//         eco.appendChild(p1);

//         const taka= document.getElementById('tk');
//         const p2 = document.createElement('p');
//         p2.innerText = price;
//         taka.appendChild(p2);


//     })

// }




const seats = document.querySelectorAll(".kbd");
let selectedSeats = 0; 

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    seat.addEventListener("click", function () {
        if (selectedSeats < 4) { 
            seat.style.backgroundColor = 'green';
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
            p1.innerText = "Economoy";
            eco.appendChild(p1);

            const taka = document.getElementById('tk');
            const p2 = document.createElement('p');
            p2.innerText = price;
            taka.appendChild(p2);

            selectedSeats++; 
        } 
        else if (selectedSeats < 4){
            const totalTk = document.getElementById('cal');
            const currTk = TotalTk.innerText;
            const currentTk = parseInt(currTk);
            const NewTk = currentTk*selectedSeats + 550;
            totalTk.innerText = NewTk;

        }
        
        else {
            alert("You can only select up to four seats.");
        }
    });
}
