$(document).ready(function () {
  $(".header-menu__icon").click(function (event) {
    $(".header-menu__icon, .header-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

const bodyElement = document.body;
const mainElement = document.documentElement;

window.addEventListener("resize", function (event) {
  adaptive_function();
});

function adaptive_header(w, h) {
  let headerMenu = bodyElement.querySelector(".header-menu");
  let headerLang = bodyElement.querySelector(".header-top-lang");
  let headerTop = bodyElement.querySelector(".header-top");
  let menuBottom = bodyElement.querySelectorAll(".header-bottom-menu");
  let menuLeft = menuBottom[0];
  let menuRight = menuBottom[1];
  let columnLeft = bodyElement.querySelectorAll(".header-bottom__column")[0];
  let columnRight = bodyElement.querySelectorAll(".header-bottom__column")[2];
  if (w < 767) {
    headerLang.classList.add("done");
  } else if (w > 767 && headerLang.classList.contains("done")) {
    headerLang.classList.remove("done");
    headerTop.prepend(headerLang);
  }
  if (headerLang.classList.contains("done")) {
    headerMenu.append(headerLang);
  }

  if (w < 767) {
    menuLeft.classList.add("done");
  } else if (w > 767 && menuLeft.classList.contains("done")) {
    menuLeft.classList.remove("done");
    columnLeft.prepend(menuLeft);
  }
  if (menuLeft.classList.contains("done")) {
    headerLang.after(menuLeft);
  }

  if (w < 767) {
    menuRight.classList.add("done");
  } else if (w > 767 && menuRight.classList.contains("done")) {
    menuRight.classList.remove("done");
    columnRight.prepend(menuRight);
  }
  if (menuRight.classList.contains("done")) {
    menuLeft.after(menuRight);
  }
}

function adaptive_function() {
  const w = mainElement.clientWidth;
  const h = mainElement.clientHeight;
  adaptive_header(w, h);
}
adaptive_function();

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();

//***************************************

google.maps.event.addDomListener(window, "load", init);

function init() {
  let mapOptions = {
    zoom: 11,

    center: new google.maps.LatLng(50.5160497, 30.5031082, 14),

    styles: [
      {
        featureType: "all",
        elementType: "labels.text",
        stylers: [{ color: "#878787" }],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [{ color: "#f9f5ed" }],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{ color: "#f5f5f5" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#c9c9c9" }],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [{ color: "#aee0f4" }],
      },
    ],
  };

  let mapElement = document.getElementById("map");

  let map = new google.maps.Map(mapElement, mapOptions);

  let marker = new google.maps.Marker({
    position: new google.maps.LatLng(50.5160497, 30.5031082, 14),
    map: map,
    title: "Snazzy!",
  });
}
