const product1 = {
  image: 'images/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'images/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'images/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

const product1HTML = `
<img class="card-img-top" src=${product1.image} alt="Card image cap">
<div class="card-body">
  <h2 class="card-title">${product1.name}</h2>
  <p class="card-text">${product1.description}</p>
</div>
<button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;

const klobouk = document.querySelector("#product1");
klobouk.innerHTML = product1HTML;

const product2HTML = `
<img class="card-img-top" src=${product2.image} alt="Slepičkabelka">
<div class="card-body">
  <h2 class="card-title">${product2.name}</h2>
  <p class="card-text">${product2.description}</p>
</div>
<button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;

const kabelka = document.querySelector("#product2");
kabelka.innerHTML = product2HTML;

const product3HTML = `
<img class="card-img-top" src=${product3.image} alt="Anatoplavky">
<div class="card-body">
<h2 class="card-title">${product3.name}</h2>
<p class="card-text">${product3.description}</p>
</div>
<button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;

const anatoplavky = document.querySelector("#product3");
anatoplavky.innerHTML = product3HTML;