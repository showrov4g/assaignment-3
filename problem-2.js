function sendNotification(email) {
  if (email.match("@")) {
    let userName = email.split("@")[0];
    let domain = email.split("@")[1];
    let message = userName + " " + "sent you an email from" + " " + domain;
    return message;
  } else {
    return "Invalid Email";
  }
}

