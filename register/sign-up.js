let firstname_list=document.querySelector(".firstname_list");
let email_list=document.querySelector(".email_list");
let new_password_list=document.querySelector(".new_password_list");
let form=document.querySelector("form");
async function fetchurl(){
    try{
        let obj={
            "username":firstname_list.value,
            "password":new_password_list.value,
            "email":email_list.value,
        }
        console.log(obj);
      let res=await fetch("https://mock-api-template-gyfo.onrender.com/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(obj)
      });
      let data=await res.json();
      console.log(data)
      let result=check(data)
      if(result){
        Swal.fire({
            icon: 'success',
            text: `REGISTATION IS SUCCESSFUL`,
          })
          
        }else{
            Swal.fire({
                  icon: 'error',
                  title:  'Oops...',
                  text: 'ENTER CURRECT CREDIENCIAL',
                
                })
          }

    }catch(error){
      console.log(error)
    }
  }

function check(size){
    if(size){
        return true;
    }else{
        return false;
    }
}

form.addEventListener("submit",(el)=>{
    el.preventDefault();
    fetchurl();
})
