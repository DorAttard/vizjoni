// --- counter ----------
  var countDownDate = new Date("May 25, 2024 18:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("counter").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXHIBITION OPEN";
    }
  }, 1000);
// --- counter -----------


// --- scroll bar ----------

  //this is the second part, it is basically a java script from w3school
  // When the user scrolls the page, execute myFunction 
  window.onscroll = function() {myFunction()};

  function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  }

// --- scroll bar -----------------------


// --- burger menu -----------------------

  /* Open menu */
  function openNav() {
      document.getElementById("myNav").style.display = "block";
    }

  /* Close menu */
  function closeNav() {
      document.getElementById("myNav").style.display = "none";
    }

// --- burger menu --------------------------
