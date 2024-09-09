
let form=document.getElementById("form")
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  
 
});
function log(){
  

  let email=document.getElementById("email").value;
  let pass=document.getElementById("pwd").value;

  let getuser=localStorage.getItem("email");
  let getpaas=localStorage.getItem("password")

  if(email=== "" && pass=== ""){
    document.getElementById("errorl").innerHTML = "this filed empty";
    document.getElementById("errorlog").innerHTML = "this filed empty";
  }

 else if(email===getuser && pass===getpaas){
  alert("login success")
  
  document.getElementById("errorl").innerHTML = "";
  document.getElementById("errorlog").innerHTML = "";
}
else if(email===getuser&& pass=== ""){
  document.getElementById("errorl").innerHTML = " ";
  document.getElementById("errorlog").innerHTML = "this filed empty";
}
else if(email!= getuser){
  document.getElementById("errorl").innerHTML = "not match";
  
}
else if(pass!= getpaas){
  document.getElementById("errorlog").innerHTML = "not match";
  
}
else if(pass=== getpaas){
  document.getElementById("errorlog").innerHTML = "not match";
  
}

else if(email=== ""){
  document.getElementById("errorl").innerHTML = "this filed empty";
  
}
else if(pass=== ""){
  document.getElementById("errorl").innerHTML = "this filed empty";
  
}




}