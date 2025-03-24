document.addEventListener("DOMContentLoaded", () => {
  const error_message = document.getElementById("email-error");
  const email_input = document.getElementById("email");
  const subscribe_btn = document.getElementById("subscribe-btn");

  subscribe_btn.addEventListener("click", (e) => {
    e.preventDefault(); //to prevent form submision
    const entered_email = email_input.value.trim();
    console.log(entered_email);

    // validate email
    if (!validEmail(entered_email)) {
      error();
    } else {
      error_message.classList.add("hidden");
      email_input.classList.remove("error");
    }
  });

  function validEmail(email) {
    //check email input is valid or not
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function error() {
    //show error message
    error_message.classList.remove("hidden");
    email_input.classList.add("error");
  }
});
