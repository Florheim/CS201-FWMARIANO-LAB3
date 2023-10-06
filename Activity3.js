var password = prompt ("Enter Your Password");
let pass = (password.length);

if (pass == 8) {
    console.log ("Welcome");
} else if (pass <= 8) {
    console.log ("Password is too small");
} else if (pass >= 8) {
    console.log ("Password should be 8 characters");
} else if (pass == 0) {
    console.log ("Please provide a password");
}