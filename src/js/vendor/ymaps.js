import ymaps from 'ymaps';

ymaps
  .load('https://api-maps.yandex.ru/2.1/?apikey=a7be2d12-c5d1-4cf7-aa37-276d200dd60d&lang=ru_RU')
  .then(maps => {
    const map = new maps.Map('map', {
      center: [55.911542, 37.542617],
      zoom: 16,
      behaviors: ['default', 'scrollZoom']
    });


		map.controls.add('zoomControl');
		map.controls.remove('geolocationControl'); // удаляем геолокацию
		map.controls.remove('searchControl'); // удаляем поиск
		map.controls.remove('trafficControl'); // удаляем контроль трафика
		map.controls.remove('typeSelector'); // удаляем тип
		map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
		//map.controls.remove('zoomControl'); // удаляем контрол зуммирования
		map.controls.remove('rulerControl'); // удаляем контрол правил
		map.behaviors.disable('scrollZoom');

    var myPlacemark = new ymaps.Placemark([55.911542, 37.542617], {
			balloonContentHeader: '127495, Россия, г.Москва, Дмитровское шоссе, д.163а, к.2',
			balloonContentBody: ""
							}, {
				iconLayout: 'default#image',
					iconImageHref: '/bitrix/templates/sk/img/map-icon.png',
					iconImageSize: [246, 131],
					iconImageOffset: [-123, -100]
			});

			map.geoObjects.add(myPlacemark);
  })
  .catch(error => console.log('Failed to load Yandex Maps', error));
