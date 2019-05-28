// карта начало

ymaps.ready(init);

function init() {

  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map")
  var myMap;

  myMap = new ymaps.Map('map', {
    // При инициализации карты, обязательно нужно указать
    // ее центр и коэффициент масштабирования
    center: [34.869497, -111.760186],
    zoom: 10,
    controls: []
  });

  myMap.behaviors.disable('scrollZoom');

  myMap.controls.add("zoomControl", {
    position: {
      top: 15,
      left: 15
    }
  });


  // добавление и настройка маркера

  var myPlacemark = new ymaps.Placemark([34.869497, -111.760186], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon-map-marker.svg',
    iconImageSize: [27, 27],
    iconImageOffset: [-13.5, 0]
  });

  myMap.geoObjects.add(myPlacemark);

}

// карта конец
