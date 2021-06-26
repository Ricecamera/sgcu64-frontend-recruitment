const form = document.getElementById("register-form")
form.addEventListener("submit", event => {
  event.preventDefault()
  const formData = new FormData(form)
  const data = {}
  /* USER Addition */
  let message = []
  let fail = false
  let timerID = undefined;
  /* USER Addition */
  for(const [key, value] of formData.entries()) {
    /* USER CODE Begin: Validate data */
    if(key === "email") {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if(!emailRegex.test(value)) {
        message.push("wrong email format");
        fail = true;
      }
    }
    else if(key === "confirmpassword") {
      if(value != data["password"]) {
        message.push("password do not match");
        fail = true;
      }
    }
    data[key] = value
    /* USER CODE Begin: Validate data */
  }
  console.log(data)
  /* USER CODE Begin: What happened next after recieve form data (Optional) */
  if(!fail) {
    let message = `Welcome ${data['username']}, your resgistation succeed.`
    alert(message)
    location.reload()
  }
  else {
    if(timerID) clearTimeout(timerID)
    const errorText = document.getElementById("error-text")
    errorText.innerHTML = message.join(', ') + "!";
    timerID = setTimeout(() => { errorText.innerHTML = '' }, 3000);
  }
  /* USER CODE END: What happened next after recieve form data (Optional) */
})