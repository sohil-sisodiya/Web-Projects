// about section

var tablinks = document.getElementsByClassName("tab-links")
        var tabcontents = document.getElementsByClassName("tab-contents")

        function opentab(tabname) {
          for (tablink of tablinks) {
            tablink.classList.remove("active-link");
          }
          for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
          }
          event.currentTarget.classList.add("active-link");
          document.getElementById(tabname).classList.add("active-tab");
        }

// menu section 

var sidemenu = document.getElementById("side-menu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// for google sheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbznSsF2B80paxAGKsy0eoqbcLSYRoAF8nvped-Sm3gtnIcB8TQk_zkByyKVKV8yBC6P/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
          msg.innerHTML = "Message Sent successfully"
          setTimeout(function () {
            msg.innerHTML = ""
          },3000)
          form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})