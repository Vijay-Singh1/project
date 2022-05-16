var username=document.getElementById("username")
var password=document.getElementById("password")
var loginStatus=localStorage.getItem('loginStatus')
console.log(loginStatus)



function login(){

    if(username.value==password.value){

        alert("Login Successful")
        localStorage.setItem('loginStatus','Login')
        location.assign("http://127.0.0.1:5501/ordersPage.html")
        
    }
    else{
        alert("please enter valid credential " +username.value +" "+ password.value  )
    }
}


