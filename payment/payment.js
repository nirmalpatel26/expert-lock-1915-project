let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let allbilling=document.getElementById("allbilling");
let payment1=document.querySelector(".payment");

payment(cartData)
function payment(data){
    let x='';
    let y=0;
data.forEach((elem) => {
    x+=` 
    <div class="cart-total">
       <h4>${elem.subject}</h4>
       <h4>₹ ${elem.price}</h4>
    </div>
    `
    y+=elem.price;
});
x+=`<div class="cart-total">
<h2>TOTAL AMMOUNT</h2>
<h2>₹ ${y}</h2>
</div>`
allbilling.innerHTML=x;
}

payment1.addEventListener("click",(el)=>{
    el.preventDefault();
    Swal.fire({
        icon: 'success',
        text: `CONGRATULATION YOUR COURSE IS SUCCESSFUL BOOKED`,
      })
      
})