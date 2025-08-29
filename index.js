let coinCount = document.querySelector("#coin");
let copyCount = document.querySelector("#copyCount");
let heartCount = document.querySelector("#heartCount");
let cardContainer = document.querySelector("#cardsContainer");
let historyList = document.querySelector("#historyList");
let availableCoin = 100;
let heart = 0;
let copyCounter = 0;
coin.textContent = availableCoin;
let historyArray = [];
const cardData = [
  {
    id: "nem",
    name: "National Emergency Number",
    article: "National Emergency",
    number: "999",
    category: "all",
    icon: "./assets/emergency.png",
  },
  {
    id: "phn",
    name: "Police Helpline Number",
    article: "Police",
    number: "999",
    category: "Police",
    icon: "./assets/police.png",
  },
  {
    id: "fsn",
    name: "Fire Service Number",
    article: "Fire Service",
    number: "999",
    category: "Fire",
    icon: "./assets/fire-service.png",
  },
  {
    id: "as",
    name: "Ambulance Service",
    article: " Ambulance",
    number: "1994-999999",
    category: "Health",
    icon: "./assets/ambulance.png",
  },
  {
    id: "wch",
    name: "Women & Child Helpline",
    artile: "Women & Child helpline",
    number: "109",
    category: "Help",
    icon: "./assets/heart.png",
  },
  {
    id: "ach",
    name: "Anti-Corruption Helpline",
    artilce: "Anti-Corruption",
    number: "106",
    category: "Govt.",
    icon: "./assets/emergency.png",
  },
  {
    id: "eh",
    name: "Electricty Helpline",
    article: "Electricty Outage",
    number: "16216",
    category: "Electricty",
    icon: "./assets/emergency.png",
  },
  {
    id: "bh",
    name: "Brac Helpline",
    article: "Brac",
    number: "16445",
    category: "NGO",
    icon: "./assets/brac.png",
  },
  {
    id: "brh",
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
         <button onclick="wishList('${card.id}')" class="${card.id}_cls text-gray-500"><i class="fa-regular fa-heart heart  cursor-pointer"></i></button> 
        </div>
        <div class="mt-2">
          <h3 class="font-bold text-gray-800">${card.name}</h3>
          <p class="text-sm text-gray-500">${card.article}</p>
        </div>
        <p class="text-2xl font-bold my-3">${card.number}</p>
        <span class="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">${card.category}</span>
        <div class="flex gap-2 mt-4">
          <button class="flex-1 bg-gray-100 text-gray-500 rounded-lg py-1 copyBtn" onclick="copyCountFun('${card.name}')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button class="flex-1 bg-green-500 text-white rounded-lg py-1 callBtn" onclick="calling('${card.name}','${card.number}')"><i class="fa-solid fa-phone"></i> Call</button>
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
    alert("Calling " + name + " " + number+"...");
    coinCount.innerText = availableCoin;
    const now = new Date();
    const time = now.toLocaleTimeString();

    historyArray.push({
      name: name,
      number: number,
      time: time,
    });
    renderHistory();
  } else {
    alert("You Dont have enough Coin For calling");
  }
}

function renderHistory() {
    console.log(historyArray);
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = historyArray
    .map(
      (history) => `
      <li class="bg-gray-50 rounded-lg shadow-sm p-3 flex flex-col gap-1 hover:bg-gray-100 transition-colors duration-200">
        <div class="flex justify-between items-center">
          <span class="font-semibold text-gray-800">${history.name}</span>
          <span class="text-gray-500 text-xs">${history.time}</span>
        </div>
        <span class="text-gray-600">${history.number}</span>
      </li>`
    )
    .join("");
}

function wishList(id) {
  const selectedId = document.querySelector("." + id + "_cls");
  const addedHeart = selectedId.classList.toggle("active");
  if (addedHeart) {
    heart++;
  } else {
    heart--;
  }
  heartCount.innerText = heart;
}
function clearHistory() {
  historyArray = [];
  renderHistory();
}
