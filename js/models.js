const models = [
  {
    id: 'cayman',
    name: '718 Cayman',
    price: '74 999',
    smallCardImageSrc: '../img/cayman-small.png',
    gasoline: '10,0',
    co: '250',
    bigCardImageSrc: '../img/cayman-big.png',
    power: '421 кВт/650 л.с.',
    acceleration: '4,2 c',
    maxSpeed: '290 км/ч',
  },
  {
    id: '911',
    name: '911 Turbo S',
    price: '791 190',
    smallCardImageSrc: '../img/911-small.png',
    gasoline: '11,5',
    co: '263',
    bigCardImageSrc: '../img/911-big.png',
    power: '478 кВт/650 л.с.',
    acceleration: '2,7 c',
    maxSpeed: '330 км/ч',
  },
  {
    id: 'taycan',
    name: 'Taycan',
    price: '288 999',
    smallCardImageSrc: '../img/taycan-small.png',
    gasoline: '10,5',
    co: '255',
    bigCardImageSrc: '../img/taycan-big.png',
    power: '460 кВт/650 л.с.',
    acceleration: '3,0 c',
    maxSpeed: '300 км/ч',
  },
  {
    id: 'panamera',
    name: 'Panamera',
    price: '74 999',
    smallCardImageSrc: '../img/panamera-small.png',
    gasoline: '10,0',
    co: '250',
    bigCardImageSrc: '../img/panamera-big.png',
    power: '421 кВт/650 л.с.',
    acceleration: '4,2 c',
    maxSpeed: '290 км/ч',
  },
  {
    id: 'macan',
    name: 'Macan',
    price: '74 999',
    smallCardImageSrc: '../img/macan-small.png',
    gasoline: '11,5',
    co: '263',
    bigCardImageSrc: '../img/macan-big.png',
    power: '478 кВт/650 л.с.',
    acceleration: '2,7 c',
    maxSpeed: '330 км/ч',
  },
  {
    id: 'cayenne',
    name: 'Cayenne',
    price: '74 999',
    smallCardImageSrc: '../img/cayenne-small.png',
    gasoline: '10,5',
    co: '255',
    bigCardImageSrc: '../img/cayenne-big.png',
    power: '460 кВт/650 л.с.',
    acceleration: '3,0 c',
    maxSpeed: '300 км/ч',
  },
];

const smallCardsView = models.map((model) => `
  <div class="first_block_model_list_element">
    <div class="first_block_model_list_element_image_container">
      <img src="${model.smallCardImageSrc}" />
      <a href="#${model.id}">Подробнее</a>
    </div>
    <div class="first_block_model_list_element_description">
      <h2>${model.name}</h2>
      <p>от ${model.price} BYN</p>
    </div>
  </div>
`).join('');

const getBigCardsView = (modelsArray) => modelsArray.map((model) => `
  <div id="${model.id}" class="third_block_model_item">
    <div class="third_block_model_item_main_container">
      <div class="third_block_model_item_description">
        <h2>${model.name}</h2>
        <p>от ${model.price} BYN</p>

        <div class="characteristics third_block_model_item_characteristics">
          <div class="characteristics_container">
            <div class="characteristics_icon_container">
              <img src="../img/gasoline-icon.svg">
            </div>
            <div class="characteristics_description">
              <p class="characteristics_description_index">${model.gasoline}</p>
              <p class="characteristics_description_unit">л/100 км</p>
            </div>
          </div>
          <div class="characteristics_container">
            <div class="characteristics_icon_container">
              <img src="../img/co-icon.svg">
            </div>
            <div class="characteristics_description">
              <p class="characteristics_description_index">${model.co}</p>
              <p class="characteristics_description_unit">г/км</p>
            </div>
          </div>
        </div>
      </div>
      <div class="third_block_model_item_image_container">
        <img src="${model.bigCardImageSrc}" />
      </div>
    </div>
    <div class="details_block">
      <div class="details_block_element">
        <h3>${model.power}</h3>
        <p>Мощность (кВт)/Мощность (л.с.)</p>
      </div>
      <div class="details_block_element">
        <h3>${model.acceleration}</h3>
        <p>Разгон 0 - 100 км/ч</p>
      </div>
      <div class="details_block_element">
        <h3>${model.maxSpeed}</h3>
        <p>Максимальная  скорость </p>
      </div>
    </div>
  </div>
  <hr />
`).join('');

document.getElementById("models_list_cards").innerHTML = smallCardsView;
document.getElementById("models_list_design").innerHTML = getBigCardsView(models.slice(0, 3));
document.getElementById("models_list_dynamics").innerHTML = getBigCardsView(models.slice(3, 7));