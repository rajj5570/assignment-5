const allSeatsByClass = document.getElementsByClassName("seat");
let ticketCount = 0;
for (const seat of allSeatsByClass) {
  const seatNo = seat.innerText;
  seat.addEventListener("click", selectSeat);
  function selectSeat() {
    if (seat.classList.contains("bg-[#F7F8F8]")) {
      seat.classList.remove("bg-[#F7F8F8]");
      seat.classList.add("bg-[#1DD100]");
        const creatDiv = document.createElement("div");
        creatDiv.setAttribute("class", "flex justify-between del");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText = seatNo;
        p2.innerText = "Economy";
        p3.innerText = parseFloat("550");
        creatDiv.appendChild(p1);
        creatDiv.appendChild(p2);
        creatDiv.appendChild(p3);
        const insert = document.getElementById('insert');
        insert.insertBefore(creatDiv,null);

      const totalSeat = document.getElementById("total-seat");
      const remainingSeat = parseFloat(totalSeat.innerText) - 1;
      totalSeat.innerText = remainingSeat;

      const seatCount = document.getElementById("seat-count");
        seatCount.classList.remove('hidden');
        const newCount= parseFloat(seatCount.innerText)+1;
        seatCount.innerText=newCount;
        if(parseFloat(seatCount.innerText)>4){
            alert('You can\'t book more than 4 seats at once');
            return;
        }
    
        

      const totalPrice =document.getElementById('total-price');
      const newTotalPrice = parseFloat(totalPrice.innerText)+parseFloat(p3.innerText);
      totalPrice.innerText = newTotalPrice;

      const grandPrice = document.getElementById('grand-price');
     console.log(grandPrice.innerText);
     grandPrice.innerText = newTotalPrice;


    } else {
      seat.classList.add("bg-[#F7F8F8]");
      const totalPrice =document.getElementById('total-price');
    const newTotalPrice = parseFloat(totalPrice.innerText)-550;
    totalPrice.innerText = newTotalPrice;

    
    const removeElement = document.querySelector('.del')
    removeElement.remove();
    
    const totalSeat = document.getElementById("total-seat");
    const remainingSeat = parseFloat(totalSeat.innerText) + 1;
    totalSeat.innerText = remainingSeat;
    
    const seatCount = document.getElementById("seat-count");
    const newCount= parseFloat(seatCount.innerText)-1;
    seatCount.innerText=newCount;
    if(parseFloat(seatCount.innerText)==0){
        seatCount.classList.add('hidden');
    }
    
    const grandPrice = document.getElementById('grand-price');
     console.log(grandPrice.innerText);
     grandPrice.innerText = newTotalPrice;
      
    }
  }
}


const applyBtn = document.getElementById('apply-btn');
const inputField = document.getElementById('input-field');
const totalprice = document.getElementById('total-price');


applyBtn.addEventListener('click',function(){
    if(inputField.value==='Couple 20'){
        applyBtn.disabled = false;
        const newGrandprice = parseFloat(totalprice.innerText)-parseFloat(totalprice.innerText)*0.2;

        grandPrice.innerText = newGrandprice;
    }else if(inputField.value ==='NEW15'){
        applyBtn.disabled = false;
        const newGrandprice = parseFloat(totalprice.innerText)-parseFloat(totalprice.innerText)*0.15;

        grandPrice.innerText = newGrandprice;

    }
    else{
        applyBtn.disabled = true;
        grandPrice.innerText = parseFloat(totalprice.innerText);
        // alert('Invalid Coupon Code');
    
    }
    inputField.value="";
    totalprice.innerText=0;
    grandPrice.innerText=0;
})