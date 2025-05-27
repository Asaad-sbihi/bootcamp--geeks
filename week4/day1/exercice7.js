// Self-invoking function to show user info in navbar
(function(username) {
  const userDiv = document.createElement('div');
  userDiv.className = "user-info";
  userDiv.innerHTML = `${username} <img src="https://i.pravatar.cc/30" alt="Profile Picture" />`;
  document.getElementById("user-container").appendChild(userDiv);
})("John");


