let coin = document.querySelector("#coin");
let copyCount = document.querySelector("#copyCount");
let heartCount = document.querySelector("#heartCount");
let cardContainer = document.querySelector("#cardsContainer");
let availableCoin = 100;
let heart = 0;
let copyCounter = 0;
coin.textContent = availableCoin;

const cardData = [
  {
    name: "National Emergency Number",
    article: "National Emergency",
    number: "999",
    category: "all",
    icon: "./assets/emergency.png",
  },
  {
    name: "Police Helpline Number",
    article: "Police",
    number: "999",
    category: "Police",
    icon: "./assets/police.png",
  },
  {
    name: "Fire Service Number",
    article: "Fire Service",
    number: "999",
    category: "Fire",
    icon: "./assets/fire-service.png",
  },
  {
    name: "Ambulance Service",
    article: " Ambulance",
    number: "1994-999999",
    category: "Health",
    icon: "./assets/ambulance.png",
  },
  {
    name: "Women & Child Helpline",
    artile: "Women & Child helpline",
    number: "109",
    category: "Help",
    icon: "./assets/hart.png",
  },
  {
    name: "Anti-Corruption Helpline",
    artilce: "Anti-Corruption",
    number: "106",
    category: "Govt.",
    icon: "./assets/emergency.png",
  },
  {
    name: "Electricty Helpline",
    article: "Electricty Outage",
    number: "16216",
    category: "Electricty",
    icon: "./assets/emergency.png",
  },
  {
    name: "Brac Helpline",
    article: "Brac",
    number: "16445",
    category: "NGO",
    icon: "./assets/brac.png",
  },
  {
    name: "Bangladesh Railway Helpline",
    article: "Bangladesh Railway",
    number: "163",
    category: "Travel",
    icon: "./assets/Bangladesh-Railway.png",
  },
];

//--------- card print-------
cardContainer.innerHTML = cardData
  .map(
    (card) => `
      <div class="bg-white rounded-xl shadow p-4 card" data-name="${card.name}" data-number="${card.number}" data-category="${card.category}">
        <div class="flex justify-between items-center">
          <div class="bg-red-100 rounded-lg h-10 w-10 flex items-center justify-center">
            <img src="${card.icon}" alt="" class="w-6 h-6">
          </div>
          <i class="fa-regular fa-heart heart text-gray-400 cursor-pointer"></i>
        </div>
        <div class="mt-2">
          <h3 class="font-bold text-gray-800">${card.name}</h3>
          <p class="text-sm text-gray-500">${card.article}</p>
        </div>
        <p class="text-2xl font-bold my-3">${card.number}</p>
        <span class="bg-gradient-to-r from-emerald-300 to-emerald-500 text-white text-xs px-2 py-1 rounded">${card.category}</span>
        <div class="flex gap-2 mt-4">
          <button class="flex-1 bg-gradient-to-r from-emerald-400 to-green-600 text-white rounded-lg py-1 copyBtn" onclick="copyCountFun('${card.name}')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button class="flex-1 bg-gradient-to-r from-emerald-500 to-green-700 text-white rounded-lg py-1 callBtn" onclick="calling('${card.name}','${card.number}')"><i class="fa-solid fa-phone"></i> Call</button>
        </div>
      </div>
    `
  )
  .join("");

function copyCountFun(name) {
  alert("Copy : " + name);
  copyCounter++;
  copyCount.innerText = copyCounter;
}

function calling(name, number) {
  if (availableCoin > 0) {
    availableCoin = availableCoin - 20;
    alert("Calling " + name + " " + number);
  } else {
    alert("You Dont have enough Coin For calling");
  }
}
