function check(){
    var varusername=document.getElementById("input_username").value;
    var n=document.getElementById("input_password").value;
    var a=document.getElementById("input_confirm_password").value;
    var p=document.getElementById("input_age").value;
      var y=document.getElementById("input_address").value;
    var z=document.getElementById("input_phone_number").value;
    var b=document.getElementById("input_other_details").value;

        if(varusername==""){
        window.alert("ALERT! Enter Username")
    }
    
        else if(n==""){
        window.alert("ALERT! Enter Password")
    }
   
       else if(a==""){
        window.alert("ALERT! Confirm your password")
    }
       else if(n!=a){
        window.alert("ALERT! Your password and confirmed password doesn't match.")
    }
   
       else if(p==""){
        window.alert("ALERT! Enter Age")
    }
   
             else if(y==""){
        window.alert("ALERT! Enter Address")
    }
    
       else if(z==""){
        window.alert("ALERT! Enter Phone Number")
    }
    else if(z<1){
window.alert("ALERT! Enter atleast 10 digits")
    }
   
       else if(b==""){
        window.alert("ALERT! Enter Other Details")
    }
    else{
        
                document.getElementById("heading").style.display="none";
        document.getElementById("imagewelcome").style.display="inline-block";
        document.getElementById("username_").style.display="none"; 
        document.getElementById("password_").style.display="none"; 
        document.getElementById("cpassword_").style.display="none"; 
        document.getElementById("age_").style.display="none"; 
        document.getElementById("sex_").style.display="none"; 
        document.getElementById("address_").style.display="none"; 
        document.getElementById("phnu_").style.display="none"; 
        document.getElementById("odet_").style.display="none"; 
        document.getElementById("button_submit").style.display="none"; 
        document.getElementById("input_password").style.display="none"; 
        document.getElementById("input_confirm_password").style.display="none"; 
        document.getElementById("input_age").style.display="none"; 
        document.getElementById("input_male").style.display="none"; 
        document.getElementById("label_male").style.display="none"; 
        document.getElementById("input_female").style.display="none"; 
        document.getElementById("label_female").style.display="none"; 
        document.getElementById("input_address").style.display="none"; 
        document.getElementById("input_phone_number").style.display="none"; 
        document.getElementById("input_other_details").style.display="none";
        document.getElementById("body").style.width="1350px";
        document.getElementById("body").style.margin="30px";
        document.getElementById("label_username").style.display="inline-block";
        document.getElementById("input_username").style.fontSize="40px";
        document.getElementById("input_username").style.margin="40px";
        document.getElementById("input_username").readOnly="true";
        
    }
    }