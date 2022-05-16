var username=document.getElementById("username")
var password=document.getElementById("password")
var loginStatus=localStorage.getItem('loginStatus')
console.log(loginStatus)



function login(){

    if(username.value==password.value){

        alert("Login Successful")
        localStorage.setItem('loginStatus','Login')
        location.assign("./ordersPage.html")
        
    }
    else{
        alert("please enter valid credential " +username.value +" "+ password.value  )
    }
}


