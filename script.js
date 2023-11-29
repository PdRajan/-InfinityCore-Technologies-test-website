function verifyUser() {
    var userID = document.getElementById("userID").value;
    var userList = [
      {
        id: "ICT23009001",
        name: "SANJEEV JAISWAL",
        registrationDate: "01-05-2023",
        type: "Robotics"
      },
      {
        id: "ICT23009002",
        name: "Chunmun Kumar",
        registrationDate: "05-05-2023",
        type: "Robotics",
    
  }
  ];
  var user = null;
  for (var i = 0; i < userList.length; i++) {
  if (userList[i].id === userID) {
  user = userList[i];
  break;
  }
  }
  if (user === null) {
  alert("Certificate is not valid.");
  } else {
  // Display user information
  document.getElementById("userName").innerHTML = user.name;
  document.getElementById("userIDDisplay").innerHTML = user.id;
  document.getElementById("registrationDate").innerHTML = user.registrationDate;
  document.getElementById("userType").innerHTML = user.type;
  
  // Show user information panel
  var userInfoPanel = document.getElementById("userInfoPanel");
  userInfoPanel.classList.remove("hidden");
  }
  }
          // Add your custom scripts here
          // For example, you can add smooth scrolling to the navigation links
  
          $(document).ready(function () {
              // Smooth scrolling for anchor links
              $('a.nav-link').on('click', function (event) {
                  if (this.hash !== '') {
                      event.preventDefault();
                      var hash = this.hash;
                      $('html, body').animate({
                          scrollTop: $(hash).offset().top
                      }, 800, function () {
                          window.location.hash = hash;
                      });
                  }
              });
          });
  