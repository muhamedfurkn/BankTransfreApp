document.getElementById('name_iban').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  });
  
  document.getElementById('name_iban').addEventListener('input', function (e) {
    var cc = document.getElementById("name")
    var dd = document.getElementById("name_iban")
    if (dd.value === "2222 2222 2221 2700 1550 0")
      cc.innerHTML = "Mustafa KARAÇUHA"
    else
      cc.innerHTML = "Name Not Found"
  });
  
  
  function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
    navigator.clipboard.writeText(copyText.textContent);
    document.getElementById("time").style.display = "none"
    document.getElementById("copied").innerText = "copied!"
    setTimeout(() => {
      document.getElementById("time").style.display = "block"
      document.getElementById("copied").style.display = "none"
    }, 1000);
  }
  
  function myFunctionn() {
    document.getElementById("sent_icons").style.display = "none"
  
  
    var price = parseInt(document.getElementById("price_bank").innerText)
    var transfer = document.getElementById("price_transfer").value
    document.getElementById("price_bank").innerText = price - transfer;
  
    if (price > price - parseInt(transfer) && -1 < price - parseInt(transfer)) {
      document.getElementById("sent_btnn").innerText = "Sucsess"
      document.getElementById("price_bank").innerText = price - transfer;
        
    }
    else {
      document.getElementById("sent_btnn").innerText = "Failed" 
      document.getElementById("price_bank").innerText = price === 50;
    }
  
    setTimeout(() => {
      document.getElementById('sent_icons').style.display = "block"
      document.getElementById('sent_btnn').style.display = "none"
  
    }, 1000);
  
  }

  document.getElementById('phone').addEventListener('input', function (e) {
    var ff = document.getElementById("phone_name")
    var gg = document.getElementById("phone")
    if (gg.value === "05050048728")
      ff.innerHTML = "Mustafa KARAÇUHA-Vodafone"
    else
      ff.innerHTML = "Name Not Found"
  });
  document.getElementById('flash').addEventListener('input', function (e) {
    var ab = document.getElementById("flash_name")
    var ac = document.getElementById("flash")
    if (ac.value === "123456789")
      ab.innerHTML = "Mustafa KARAÇUHA"
    else
      ab.innerHTML = "Name Not Found"
  });
  
  