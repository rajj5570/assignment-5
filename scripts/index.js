 // all variables declarations
const allSeatsByClass = document.getElementsByClassName('seat');
const grandPrice = document.getElementById('grand-price');
const seatCount = document.getElementById("seat-count");
let ticketCount = 0;
let isTicketBooked = false;
const applyBtn = document.getElementById('apply-btn');
const inputField = document.getElementById('input-field');
const totalprice = document.getElementById('total-price');
const telephone =document.getElementById('telephone');
const nextButton =document.getElementById('nextBtn');
const couponSection = document.getElementById('coupon-section');
const discountSection =document.getElementById('discount-section');
const discountPrice =document.getElementById('discounted-price');

// for loop for each seat
for (const seat of allSeatsByClass) {
  const seatNo = seat.innerText;


  //   click event for each seat
  seat.addEventListener("click", selectSeat);


  function selectSeat() {
    
    //  count the purchase limit of ticket 
    if(ticketCount >= 4){
      alert('You can\'t buy more than 4 tickets at once');
      return;
    }
    ticketCount++;
     

      //   toggle function each click in the seat
    if (seat.classList.contains("bg-[#F7F8F8]")) {


          // background change to green
      seat.classList.remove("bg-[#F7F8F8]");
      seat.classList.add("bg-[#1DD100]");


            //   create new div,p tag with neccessary classname & value
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


                    // total seat count from 40 seat
      const totalSeat = document.getElementById("total-seat");
      const remainingSeat = parseFloat(totalSeat.innerText) - 1;
      totalSeat.innerText = remainingSeat;


                      // seat count in price calculation section
        seatCount.classList.remove('hidden');
        const newCount= parseFloat(seatCount.innerText)+1;
        seatCount.innerText=newCount;
    
      
        
                          // calculation in total price & grand total
      const totalPrice =document.getElementById('total-price');
      const newTotalPrice = parseFloat(totalPrice.innerText)+parseFloat(p3.innerText);
      totalPrice.innerText = newTotalPrice;
        grandPrice.innerText = newTotalPrice;

        
    } else {
      
// toggle class for remove selection
      seat.classList.add("bg-[#F7F8F8]");
    
      
  // reverse calculation in total price & grand total  
    const newTotalPrice = parseFloat(totalPrice.innerText)-550;
    totalPrice.innerText = newTotalPrice;
    grandPrice.innerText = newTotalPrice;


    // remove newly created div from calculation section
      const removeElement = document.querySelector('.del')
      removeElement.remove();
       
      
      // reverse the total seat count number
      const remainingSeat = parseFloat(totalSeat.innerText) + 1;
      totalSeat.innerText = remainingSeat;


        // reverse the seat count number in calculation section
      const seatCount = document.getElementById("seat-count");
        const newCount= parseFloat(seatCount.innerText)-1;
        seatCount.innerText=newCount;
        if(parseFloat(seatCount.innerText)==0){
            seatCount.classList.add('hidden');
            
        }
      
    }
  }
}



// function for the apply button in the coupon section
applyBtn.addEventListener('click',function(){

  // condition for coupon code "Couple 20"
    if(inputField.value==='Couple 20'){
      couponSection.setAttribute('class','hidden');
      discountSection.classList.remove('hidden');
      discountPrice.innerText = parseFloat(totalprice.innerText)*0.2;
    const newGrandprice = parseFloat(totalprice.innerText)-parseFloat(totalprice.innerText)*0.2;
        grandPrice.innerText = newGrandprice;

        //  condition for coupon code "NEW15"
    }else if(inputField.value ==='NEW15'){
      couponSection.setAttribute('class','hidden');
      discountSection.classList.remove('hidden');
      discountPrice.innerText = parseFloat(totalprice.innerText)*0.15;
        const newGrandprice = parseFloat(totalprice.innerText)-parseFloat(totalprice.innerText)*0.15;
        grandPrice.innerText = newGrandprice;

    }

    // condition for without any coupon code
    else{
        grandPrice.innerText = parseFloat(totalprice.innerText);
        inputField.value="";
    
    }
})

// reload function after completing a purchase
document.getElementById('btn-continue').addEventListener('click',function(){
  window.location.reload();
});

