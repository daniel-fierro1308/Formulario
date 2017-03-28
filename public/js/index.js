var passExpression = /(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z]*([0-9#$-/:-?{-~!"^_`\[\]]))(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]*[a-zA-Z])[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]{4,}/;
var emailExpression = /([\w\.]+)@([\w\.]+)\.(\w+)/;

function revise(element){
    if(element.value ==''){
        element.className ='error';
    } else {
        element.className = 'form-input';
    }
}

function reviseEmail(element){
    if(element.value!="") {
        var date = element.value;
        if(!emailExpression.test(date)){
            element.className = 'error';
            return false;
        } else {
            element.className = 'form-input';
        }
    }
}

    function validePassword(element){
        if(element.value!=""){
            var password = element.value;
            if(!passExpression.test(password)){
                element.className = 'error';
                return false;
            } else {
                element.className = 'form-input';
            } 
     }
    }
    function off(){
        setTimeout(function(){
        document.getElementById('message').innerHTML = "";
      },2000);
    }

function validate(form) {

    if(form.name.value == '' || form.lastname.value == '' || form.email.value == '' || form.phone.value == '' || form.password.value == '' || form.repassword.value =='') {
         document.getElementById('message').innerHTML = "<div class ='alert alert-danger' role='alert'>"+ "Please fill all fields" +
         "</div>";
         off();
       return false;

    } else if(!emailExpression.test(form.email.value)){
            document.getElementById('message').innerHTML = "<div class ='alert alert-danger' role='alert'>"+ "The Email is not Valid" +
         "</div>";
         off();
     return false;

    } else if(!passExpression.test(form.password.value)){
        document.getElementById('message').innerHTML = "<div class ='alert alert-danger' role='alert'>"+ "The Password is not Valid" +
         "</div>";
       $(':password').val('').addClass('error');
        off();
     return false;
    }
      else if(form.password.value != form.repassword.value){
        document.getElementById('message').innerHTML = "<div class ='alert alert-danger' role='alert'>"+ "Passwords do not match, please try again" +
         "</div>";
        $(':password').val('').addClass('error');
        off();
         return false; 
    } else{
         document.getElementById('message').innerHTML = "<div class ='alert alert-success' role='alert'>"+ "!!Well, the fields are correct!!" +
         "</div>";
         off();
         $('input').val("").addClass('add');
         return false;
         
    }
} 
