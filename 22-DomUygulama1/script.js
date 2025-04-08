const InputDOM = document.querySelector("#gunluk");
const butonDOM = document.querySelector("#ekleButon");
const listeDOM = document.querySelector("#liste");
let listeDizi = [];

InputDOM.addEventListener("change", function (olayInput) {
  let InputValue = olayInput.target.value;
  console.log(InputValue);
});

butonDOM.addEventListener("click", function (olayButon) {
  olayButon.preventDefault();
  listeDizi.unshift({ id: listeDizi.length + 1, isim: InputDOM.value });
  InputDOM.value = "";
  listeGuncelle();
});

function listeGuncelle() {
  let sonuc = "";
  listeDizi.forEach((item) => {
    sonuc += `<li class="d-flex justify-content-between">
    <span>${item.isim}</span>
    <button type="reset" class="btn btn-outline-danger border-0" onclick="listeTekSil(${item.id})">
      Sil
    </button>`;
  });
  listeDOM.innerHTML = sonuc;
}

function listeTekSil(id) {
  listeDizi = listeDizi.filter((item) => item.id !== id);
  listeGuncelle();
}

function listeSil() {
  listeDizi = [];
  listeGuncelle();
}
