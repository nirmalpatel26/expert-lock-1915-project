// 
let username=document.getElementById('username');
let password=document.getElementById("password");
let process=document.getElementById("process");
let form=document.querySelector("form"); 
let log_in=document.querySelector(".log_in");
  async function fetchurl(){
    try{
      let res=await fetch("https://mock-api-template-gyfo.onrender.com/login");
      let data=await res.json();
      console.log(data)
      let result=check(data)
      if(result){
        Swal.fire({
            icon: 'success',
            text: `WELCOME ${result.toUpperCase()}`,
          })
          localStorage.setItem("username", JSON.stringify(result))
          let username= JSON.parse(localStorage.getItem("username"))||"";
          log_in.innerHTML=username.toUpperCase();
        }else{
          Swal.fire({
                icon: 'error',
                title:  'Oops...',
                text: 'ENTER CURRECT PASSWORD',
              
              })
        }

    }catch(error){
      console.log(error)
    }
  }
  form.addEventListener("submit",(el)=>{
    el.preventDefault()
    fetchurl()
  })
  // fetchurl()
  

  function check(data){


    for(let i=0; i<data.length; i++){
  
      if(data[i].username==username.value && data[i].password==password.value){
  
        return data[i].username;
      }
      else{
        false
      }
  
      
  
    }
  
  }