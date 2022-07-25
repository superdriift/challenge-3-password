// Assignment code here
// firstquestion() will run on a button click

// *** VARIABLES *** //

var pwordlengthimportance =''
var specialcharimportance =''
var genpassword = ''
var lengthpassword = ''
var charpassword = ''
var password2 = ''

// *** FUNCTIONS *** //
// General Password Generator
function gengenerator() {
  var options = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < 7; i++) {
    genpassword += options.charAt(Math.floor(Math.random()*options.length));
  };
};

// Length Password Generator
function lengthgenerator() {
  var options1 = 'abcdefghijklmnopqrstuvwxyz';
  for (i = 8; i<=128; i++) {
    lengthpassword += options1.charAt(Math.floor(Math.random()*options1.length));
  };
};

// Special Char Password Generator
function chargenerator() {
  var options2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()'
  for (var i = 0; i <= 7; i++) {
    charpassword += options2.charAt(Math.floor(Math.random()*options2.length));
  }
}

// Password 2.0 Generator
function password2generator() {
  var options3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()'
  for (var i = 8; i <= 128; i++) {
    password2 += options3.charAt(Math.floor(Math.random()*options3.length));
  }
}

// // How long would you like your password?
// if (pwordlengthimportance === 'yes') {
//   lengthchoice = prompt(`How long would you like your password to be? (Please input a number value between 8 and 128.)`);
// }

// Is password length important?
function firstquestion() {
  pwordlengthimportance = prompt(`Is the length of your password important? (Yes or No)`)
  console.log(pwordlengthimportance)
  return pwordlengthimportance;
  }

  // Are special characters important?
  function secondquestion() {
    specialcharimportance = prompt(`Should the password contain include lowercase, uppercase, numeric, and/or special characters? ('Yes' or 'No')`);
    console.log(specialcharimportance)
    return specialcharimportance;
    }

// *** ACTION *** //
   var runem = function() {
    firstquestion();
    secondquestion(); 

//   // How long would you like your password?
// if (pwordlengthimportance === 'yes') {
//   lengthchoice = prompt(`How long would you like your password to be? (Please input a number value between 8 and 128.)`);
//   console.log(lengthchoice);
// };

    if ((pwordlengthimportance === 'no') && (specialcharimportance === 'no')) {
      gengenerator();
      alert(genpassword);
      return;
    }; 

    if ((pwordlengthimportance === 'yes') && (specialcharimportance === 'no')) {
      lengthgenerator();
      alert(lengthpassword);
      return;
    };

    if ((pwordlengthimportance === 'no') && (specialcharimportance === 'yes')) {
      chargenerator();
      alert(charpassword);
      return;
    };

    if ((pwordlengthimportance === 'yes') && (specialcharimportance === 'yes')) {
      password2generator();
      alert(password2);
      return;
    } 
    else {
      alert(`Please input simple "yes" or "no" values, then try again.`)
    }
}
