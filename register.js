// create a User constructor

//create a user and display on the console
let user

function init() {
    console.log("script");
}

window.onload=init

function register () {
    let inputfName = $("#txtFirstName").val();//getting the value
    let inputlName = $("#txtLastName").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputGender = $("#txtGender").val();

    console.log(inputfName,inputlName,inputEmail,inputPassword,inputGender)
    let newUser = new User1(inputfname,)
}





//create a user Constructor
class user1 {}
function User1(first, last , password) {
    this.firstName = John;
    this.lastName = Doe;
    this.password = password1;
    
}
console.log(User1);
