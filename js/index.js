var link = document.querySelector(".company-contacts-button");
var popup = document.querySelector(".modal-communication");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form"); 
var givenname = popup.querySelector("[name=givenname]");
var email = popup.querySelector("[name=e-mail]");
var text = popup.querySelector("[name=text]");

var isStorageSupport = true;
var storage = "";
  
try {
storage = localStorage.getItem("givenname");
} catch (err) {
isStorageSupport = false;
}

	link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");
givenname.focus();

if (storage) {
  givenname.value = storage;
  email.focus();
} else {
  givenname.focus();
}
	});

	close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.add("modal-error");
	});

	form.addEventListener("submit", function (evt) {
if (!givenname.value || !email.value || !text.value) {
	evt.preventDefault();
	popup.classList.remove("modal-error");
	popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("modal-error");
} else {
	if (isStorageSupport) {
localStorage.setItem("login", givenname.value);
		}
}
	});

	var mapLink = document.querySelector(".contacts-button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {			    
    if (evt.keyCode === 27) {
    	evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.add("modal-error");
      }
    }
  });
