if(document.querySelector("#ratechecker2")){
const form= document.querySelector("#ratechecker2");
let inp= document.querySelector("#hours2");
let rate= document.querySelector("#calculatedhours2");
form.addEventListener("submit", function(e){
    e.preventDefault();
const ratein= inp.value
const rateperhour= document.getElementById("calculatedhours2")
rateperhour.innerText=ratein * document.getElementById("boldrate2").innerHTML + `$` ;
console.log(rateperhour);
inp.value="";
});

} if(document.querySelector("#ratechecker")){
    const form= document.querySelector("#ratechecker");
    let inp= document.querySelector("#hours");
    let rate= document.querySelector("#calculatedhours");
    form.addEventListener("submit", function(e){
        e.preventDefault();
    const ratein= inp.value
    const rateperhour= document.getElementById("calculatedhours")
    rateperhour.innerText=ratein * document.getElementById("boldrate").innerHTML + `$` ;
    console.log(rateperhour);
    inp.value="";
    });
    
    }

    if(document.querySelector("#ratechecker3")){
        const form= document.querySelector("#ratechecker3");
        let inp= document.querySelector("#hours3");
        let rate= document.querySelector("#calculatedhours3");
        form.addEventListener("submit", function(e){
            e.preventDefault();
        const ratein= inp.value
        const rateperhour= document.getElementById("calculatedhours3")
        rateperhour.innerText=ratein * document.getElementById("boldrate3").innerHTML + `$` ;
        console.log(rateperhour);
        inp.value="";
        });
        
        }


if(document.querySelector("#ratechecker4")){
            const form= document.querySelector("#ratechecker4");
            let inp= document.querySelector("#hours4");
            let rate= document.querySelector("#calculatedhours4");
            form.addEventListener("submit", function(e){
                e.preventDefault();
            const ratein= inp.value
            const rateperhour= document.getElementById("calculatedhours4")
            rateperhour.innerText=ratein * document.getElementById("boldrate4").innerHTML + `$` ;
            console.log(rateperhour);
            inp.value="";
            });
            
            }




 /* show n hide */
const hidebutton= document.querySelector("#view");
const hidediv= document.querySelector("#footerdiscord");
hidebutton.onclick= function(){
hidediv.classList.toggle('hide');

};

 /* form validation Login form*/
 const loginbtn= document.getElementById("log");
const user= document.getElementById("Uname");
const pass= document.getElementById("Pass");
loginbtn.onclick= function(e){
    if(user.value==""){
     e.preventDefault();
    alert("Please Enter the Username!");
    }
else if(pass.value==""){
    e.preventDefault();
        alert("Please Enter the Password!");
        }


}



 /* form validation Register form*/
 const register= document.querySelector("#registerbutton");
 const Reguser= document.getElementById("RegUname");
 const RegContact= document.getElementById("Contactno");
 const RegEmail= document.getElementById("Email");
 const Regpass= document.getElementById("RegPass");
 register.onclick= function(){
 if (Reguser.value==""){
 alert("Please Enter the Username");
 }
 else if (Reguser.value.length<10){
    alert("Please Enter a valid Username, must be 10 characters");
    }

 else if(RegContact.value==""){
    alert("Please Enter the Contact Number");
 }
 else if(RegContact.value.length<10){
    alert("Please Enter a valid Contact Number!");
 }
 else if(RegEmail.value==""){
    alert("Please Enter the Email");
}

else if(Regpass.value==""){
    alert("Please Enter the password");
}
else if(Regpass.value.length<6){
    alert("The password must be atleast 6 Characters!");
}

else{
       
         alert("Account Registered!!");
}
     };


const forgetbtn= document.getElementById("forgetbtn");
forgetbtn.onclick= function(e){
    e.preventDefault();
    alert("A code has been send to your registered mobile number. Use it to login instead password");
}






  







