var name, lastname, email, phone, password, repassword, passExpression, emailExpression, message;
name = document.getElementById('name');
lastname = document.getElementById('lastname');
email = document.getElementById('email');
phone = document.getElementById('phone');
password = document.getElementById('password');
repassword = document.getElementById('repassword');
passExpression = /(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z]*([0-9#$-/:-?{-~!"^_`\[\]]))(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]*[a-zA-Z])[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]{4,}/;
emailExpression = /([\w\.]+)@([\w\.]+)\.(\w+)/;

var alertTemplate = document.getElementById('message').innerHTML;
var template = Handlebars.compile(alertTemplate);

var result = document.getElementById('postCard').innerHTML;
var temp = Handlebars.compile(result);

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
        document.getElementById('result').innerHTML = "";
      },2000);
    }

function validate() {
    if(name.value == '' || lastname.value == '' || email.value == '' || phone.value == '' || password.value == '' || repassword.value =='') {
         document.getElementById('result').innerHTML = template({type:'danger', body:'Please fill all fields'});
         off();

    } else if(!emailExpression.test(email.value)){
            document.getElementById('result').innerHTML = template({type:'danger', body:'The Email is not Valid'});
         off();
    

    } else if(!passExpression.test(password.value)){
        document.getElementById('result').innerHTML = template({type:'danger', body:'The Password is not Valid'});
       $(':password').val('');
        off();
     
    }
      else if(password.value != repassword.value){
           document.getElementById('result').innerHTML = template({type:'danger', body:'Passwords do not match, please try again'});
        $(':password').val('');
        off();
          
    } else{
        document.getElementById('result').innerHTML = template({type:'success', body:'!!Well, the fields are correct!!'});
         off();
         $('input').val("").addClass('add');
         search();
    }
} 

function search(){
    $.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts/101',
  method: 'GET'
})
    .then(function(data) {
        document.getElementById('posts').innerHTML = temp({items: data});
    })

    .catch(function(err){
        document.getElementById('posts').innerHTML = template({type: 'danger', body: '!!Error, The post not are found!!'});
        setTimeout(function(){
            document.getElementById('posts').innerHTML = "";
        },4000);
    });
}