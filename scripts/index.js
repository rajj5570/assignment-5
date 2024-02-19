const allSeatsByClass = document.getElementsByClassName('seat');
const grandPrice = document.getElementById('grand-price');
let ticketCount = 0;
let isTicketBooked = false;

// for loop for each seat
for (const seat of allSeatsByClass) {
  const seatNo = seat.innerText;
//   click event for each seat
  seat.addEventListener("click", selectSeat);

//   toggle function
  function selectSeat() {
    if(ticketCount >= 4){
      alert('You can\'t buy more than 4 tickets at once');
      return;
    }
    ticketCount++;

    if (seat.classList.contains("bg-[#F7F8F8]")) {

        // bg change
      seat.classList.remove("bg-[#F7F8F8]");
      seat.classList.add("bg-[#1DD100]");

    //   create new div,p tag with classname & value
        const creatDiv = document.createElement("div");
        creatDiv.setAttribute("class", "flex justify-between del");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText = seatNo;
        p2.innerText = "Economy";
        p3.innerText = parseFloat("550");
        // pushing p tag into div as child
        creatDiv.appendChild(p1);
        creatDiv.appendChild(p2);
        creatDiv.appendChild(p3);
        // inserting newly created div tag into specific location
        const insert = document.getElementById('insert');
        insert.insertBefore(creatDiv,null);

        // total seat count
      const totalSeat = document.getElementById("total-seat");
      const remainingSeat = parseFloat(totalSeat.innerText) - 1;
      totalSeat.innerText = remainingSeat;


        // seat count in calculation section
      const seatCount = document.getElementById("seat-count");
        seatCount.classList.remove('hidden');
        const newCount= parseFloat(seatCount.innerText)+1;
        seatCount.innerText=newCount;
    
      
        
        // calculation in total price & grand total
      const totalPrice =document.getElementById('total-price');
      const newTotalPrice = parseFloat(totalPrice.innerText)+parseFloat(p3.innerText);
      totalPrice.innerText = newTotalPrice;
        grandPrice.innerText = newTotalPrice;

        if(parseFloat(seatCount.innerText)>0){
            isTicketBooked = true;
        }
    } else {
        // toggle class for remove selection
      seat.classList.add("bg-[#F7F8F8]");
      // calculation in total price & grand total
      const totalPrice =document.getElementById('total-price');
    const newTotalPrice = parseFloat(totalPrice.innerText)-550;
    totalPrice.innerText = newTotalPrice;
    grandPrice.innerText = newTotalPrice;


    // remove newly created div from calculation section
      const removeElement = document.querySelector('.del')
      removeElement.remove();
        // total seat count
      const totalSeat = document.getElementById("total-seat");
      const remainingSeat = parseFloat(totalSeat.innerText) + 1;
      totalSeat.innerText = remainingSeat;
        // seat count in calculation section
      const seatCount = document.getElementById("seat-count");
        const newCount= parseFloat(seatCount.innerText)-1;
        seatCount.innerText=newCount;
        if(parseFloat(seatCount.innerText)==0){
            seatCount.classList.add('hidden');
            
        }
        if(parseFloat(seatCount.innerText)==0){
            isTicketBooked = false;
        }
      
    }
  }
}


const applyBtn = document.getElementById('apply-btn');
const inputField = document.getElementById('input-field');
const totalprice = document.getElementById('total-price');

inputField.addEventListener('onkeyup',function(){
  console.log(inputField.value);
  if(inputField.value ==='NEW15' || inputField.value==='Couple 20'){
    applyBtn.setAttribute('disabled',false);
  }else{
    applyBtn.setAttribute('disabled',true);

  }
})


applyBtn.addEventListener('click',function(){
    if(inputField.value==='Couple 20'){
    const newGrandprice = parseFloat(totalprice.innerText)-parseFloat(totalprice.innerText)*0.2;
        grandPrice.innerText = newGrandprice;

    }else if(inputField.value ==='NEW15'){
        const newGrandprice = parseFloat(totalprice.innerText)-parseFloat(totalprice.innerText)*0.15;
        grandPrice.innerText = newGrandprice;

    }
    else{
        grandPrice.innerText = parseFloat(totalprice.innerText);
        // alert('Invalid Coupon Code');
        inputField.value="";
    
    }
})

