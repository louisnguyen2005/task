function checkUsername() {
    const elMsg = document.getElementById("check-username");
    const elUsername = document.getElementById("username");
  
    if (elUsername.value.length < 3) {
      elMsg.textContent = "⚠️ Username must be at least 3 characters long.";
      elMsg.classList.remove("passed");
      elMsg.classList.add("error");
      return false;
    } else {
      elMsg.textContent = "Passed ✓";
      elMsg.classList.remove("error");
      elMsg.classList.add("passed");
      return true;
    }
  }
  
  function checkEmail() {
    const elMsg = document.getElementById("check-email");
    const elEmail = document.getElementById("email");
  
    if (
      elEmail.value.indexOf("@") < 5 ||
      !(elEmail.value.endsWith("@gmail.com") || elEmail.value.endsWith("@gmail.vn"))
    ) {
      elMsg.textContent = "⚠️ Invalid email format. Please check again!";
      elMsg.classList.remove("passed");
      elMsg.classList.add("error");
      return false;
    } else {
      elMsg.textContent = "Passed ✓";
      elMsg.classList.remove("error");
      elMsg.classList.add("passed");
      return true;
    }
  }
  
  function checkPass() {
    const elMsg = document.getElementById("check-pas");
    const elPass = document.getElementById("password");
  
    if (elPass.value.length < 5) {
      elMsg.textContent = "⚠️ Password must be at least 5 characters long.";
      elMsg.classList.remove("passed");
      elMsg.classList.add("error");
      return false;
    } else {
      elMsg.textContent = "Passed ✓";
      elMsg.classList.remove("error");
      elMsg.classList.add("passed");
      return true;
    }
  }
  
  document.getElementById("username").onblur = checkUsername;
  document.getElementById("email").onblur = checkEmail;
  document.getElementById("password").onblur = checkPass;
  
  document.getElementById("register-button").addEventListener("click", function (e) {
    const username = checkUsername();
    const email = checkEmail();
    const password = checkPass();
  
    if (!username || !email || !password) {
      e.preventDefault();
      alert("Please complete all fields correctly before registering.");
    }
  });
  
  document.getElementById("togglePassword").addEventListener("click", function () {
    const pasInput = document.getElementById("password");
    const type = pasInput.getAttribute("type") === "password" ? "text" : "password";
    pasInput.setAttribute("type", type);
  });
  