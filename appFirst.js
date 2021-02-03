const password = prompt("Please type your password");
// give you chance to input something to the console from outside

// password must be 6 + characters
if (password.length >= 6) {
    // password cannot include space
    // and if only it is long enough it will continue to check for the second condition for SPACES
   if (password.indexOf(' ') === -1) {
    console.log("Valid  Password")
   } else {
    console.log("Password cannot contain spaces!")
   }
} else {
    console.log("Password too short! Must be 6+ characters")
}



