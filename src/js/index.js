window.addEventListener("load", () => {
  /* Yandex Maps*/
  const init = () => {
    const pointSokolniki = "метро Сокольники";
    const pointPreobrSq = "метро Преображенская площадь";
    const destinationPoint = "Москва, Колодезный переулок д.2а";

    const myMap = new ymaps.Map("map", {
      center: [55.792528, 37.697885],
      zoom: 13,
      controls: ["zoomControl"]
    });

    const multiRouteFromSokolniki = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointSokolniki, destinationPoint],
        params: {
          routingMode: "pedestrian"
        }
      },
      {
        routeActivePedestrianSegmentStrokeColor: "#e43535",
        wayPointStartIconFillColor: "#e43535",
        wayPointFinishVisible: false
      }
    );

    const multiRouteFromPreobrSq = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointPreobrSq, destinationPoint],
        params: {
          routingMode: "pedestrian"
        }
      },
      {
        routeActivePedestrianSegmentStrokeStyle: "solid",
        routeActivePedestrianSegmentStrokeColor: "#2889f0",
        wayPointStartIconFillColor: "#2889f0",
        wayPointFinishVisible: false
      }
    );

    const destPointMark = new ymaps.GeoObject(
      {
        geometry: {
          type: "Point",
          coordinates: [55.798682, 37.695816]
        },
        properties: {
          iconContent: ""
        }
      },
      {
        preset: "islands#redStretchyIcon"
      }
    );
    myMap.geoObjects.add(multiRouteFromSokolniki);
    myMap.geoObjects.add(multiRouteFromPreobrSq);
    myMap.geoObjects.add(destPointMark);
  };
  ymaps.ready(init);
  /**********************************/

  /* Filtering in portfolio */
  window.mixitup(".portfolio__logos");
  /**********************************/

  /* Portfolio button set active on click */
  const btnContainer = document.getElementById("portfolio");
  const btns = btnContainer.getElementsByClassName("portfolio__button");
  for (let btn of btns) {
    btn.addEventListener("click", e => {
      let current = document.getElementsByClassName("portfolio__button_active");
      current[0].className = current[0].className.replace(
        " portfolio__button_active",
        ""
      );
      e.target.className += " portfolio__button_active";
    });
  }
  /**********************************/

  /* jquery scroll up and carousel */
  $(window).scroll(function() {
    if ($(this).scrollTop() != 0) $("#toTop").fadeIn();
    else $("#toTop").fadeOut();
  });
  $("#toTop").click(function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      800
    );
  });

  $(".owl-carousel").owlCarousel({
    loop: false,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      768: {
        items: 2,
        dots: true
      },
      992: {
        items: 3,
        mouseDrag: false,
        touchDrag: false
      }
    }
  });
  /**********************************/
});
