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

const prvniProdukt = document.querySelector("#product1");
prvniProdukt.classList.add("border-primary");

const tlacitko2 = document.querySelector("#product2 [type=button]");
tlacitko2.classList.remove("btn-primary");

const nazevKarty3 = document.querySelector("#product3 .card-title");
nazevKarty3.classList.toggle("text-center");