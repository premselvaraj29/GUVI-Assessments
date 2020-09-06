function onSubmit() {
  let phoneNum = document.forms["form1"]["phone-number"].value;
  let pincode = document.forms["form1"]["postal-zip"].value;
  let email = document.forms["form1"]["email"].value;

  if (isNaN(phoneNum) && phoneNum.length != 10) {
    alert("Enter a valid phone number");
    return false;
  }

  if (isNaN(pincode) && pincode.length != 6) {
    alert("Enter a valid pincode");
    return false;
  }
  let boolEmail = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  if (boolEmail) {
    alert("Not a valid email");
    return false;
  }
  alert("Thanks");
}
