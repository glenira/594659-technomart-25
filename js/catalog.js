var links = document.querySelectorAll(".buy-button");
var popup = document.querySelector(".modal-item-added");
var close = popup.querySelector(".modal-close");

var isStorageSupport = true;
var storage = "";
  
try {
storage = localStorage.getItem("givenname");
} catch (err) {
isStorageSupport = false;
}

links.forEach(link => link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");
givenname.focus();

if (storage) {
  givenname.value = storage;
  email.focus();
} else {
  givenname.focus();
}
	}));

	close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
	});

	window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });

var сontinue = document.querySelector(".сontinue-shopping");

	сontinue.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
});  		
