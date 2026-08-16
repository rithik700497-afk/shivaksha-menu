/* =========================================================
   SHIVAKSHA RESTRO — NEW MENU
   Old menu completely replaced.
   ========================================================= */

const dish = (name, price, category, type = "veg", image = "") => ({
  name,
  price,
  category,
  type,
  image
});


/* =========================================================
   NEW MENU
   ========================================================= */

const menuItems = [

  // 🥟 STARTERS
  dish("Paneer Pakoda", "130", "Starters"),
  dish("Veg Pakoda", "120", "Starters"),
  dish("Chicken Pakoda", "220", "Starters", "nonveg"),
  dish("Egg Pakoda", "100", "Starters", "nonveg"),
  dish("Omelet", "60", "Starters", "nonveg"),

  // 🍲 SOUP
  dish("Veg Soup", "70", "Soup"),
  dish("Veg Manchow Soup", "90", "Soup"),
  dish("Veg Hot & Sour Soup", "90", "Soup"),
  dish("Mushroom Soup", "120", "Soup"),
  dish("Chicken Manchow Soup", "120", "Soup", "nonveg"),
  dish("Chicken Hot & Sour Soup", "120", "Soup", "nonveg"),

  // 🥢 CHINESE — VEG
  dish("Veg Chilli", "130", "Chinese — Veg"),
  dish("Paneer Chilli", "150", "Chinese — Veg"),
  dish("Chinese Chilli", "120", "Chinese — Veg"),
  dish("Potato Chilli", "120", "Chinese — Veg"),
  dish("Honey Potato Chilli", "150", "Chinese — Veg"),
  dish("Babycorn Chilli", "170", "Chinese — Veg"),
  dish("Mushroom Chilli", "190", "Chinese — Veg"),
  dish("Paneer Garlic Chilli", "160", "Chinese — Veg"),
  dish("Veg Manchurian", "140", "Chinese — Veg"),
  dish("Paneer Manchurian", "170", "Chinese — Veg"),
  dish("Mushroom Manchurian", "190", "Chinese — Veg"),
  dish("Veg Lolly Pop", "150", "Chinese — Veg"),
  dish("Veg Chowmein", "120", "Chinese — Veg"),

  // 🍜 CHINESE — NOODLES
  dish("Mix Chowmein", "200", "Chinese — Noodles"),
  dish("Paneer Chowmein", "150", "Chinese — Noodles"),
  dish("Mushroom Chowmein", "160", "Chinese — Noodles"),
  dish("Schezwan Chowmein", "130", "Chinese — Noodles"),
  dish("Chicken Chowmein", "160", "Chinese — Noodles", "nonveg"),
  dish("Chicken Singapuri Chowmein", "170", "Chinese — Noodles", "nonveg"),
  dish("Chicken Schezwan Chowmein", "180", "Chinese — Noodles", "nonveg"),
  dish("Non-Veg Mix Chowmein", "190", "Chinese — Noodles", "nonveg"),
  dish("Veg Chowmein", "150", "Chinese — Noodles"),
  dish("Veg Hakka Noodle", "160", "Chinese — Noodles"),

  // 🍗 CHINESE — NON-VEG
  dish("Chicken Chilli (Bone/Boneless)", "190/220", "Chinese — Non-Veg", "nonveg"),
  dish("Chicken Manchurian", "220", "Chinese — Non-Veg", "nonveg"),
  dish("Chicken Salt & Pepper", "190", "Chinese — Non-Veg", "nonveg"),
  dish("Chicken Garlic Chilli", "220", "Chinese — Non-Veg", "nonveg"),
  dish("Chicken 65 (Bone/Boneless)", "190/220", "Chinese — Non-Veg", "nonveg"),
  dish("Chicken Lollipop", "190", "Chinese — Non-Veg", "nonveg"),

  // 🍚 RICE
  dish("Plain Rice", "90/50", "Rice"),
  dish("Jeera Rice", "110/70", "Rice"),
  dish("Veg Pulao", "160", "Rice"),
  dish("Matar Pulao", "150", "Rice"),
  dish("Kashmiri Pulao", "180", "Rice"),
  dish("Veg Fried Rice", "160", "Rice"),
  dish("Mushroom Fried Rice", "180", "Rice"),
  dish("Paneer Fried Rice", "180", "Rice"),
  dish("Mix Fried Rice", "200", "Rice"),
  dish("Navratan Pulao", "240", "Rice"),
  dish("Veg Biryani", "160", "Rice"),
  dish("Veg Hyderabadi Biryani", "190", "Rice"),
  dish("Special Biryani", "230", "Rice"),
  dish("Paneer Biryani", "180", "Rice"),
  dish("Egg Biryani", "160", "Rice", "nonveg"),
  dish("Egg Fried Rice", "170", "Rice", "nonveg"),
  dish("Chicken Fried Rice", "170", "Rice", "nonveg"),
  dish("Chicken Biryani", "180", "Rice", "nonveg"),
  dish("Chicken Hyderabadi Biryani", "210", "Rice", "nonveg"),
  dish("Chicken Dum Biryani", "210", "Rice", "nonveg"),

  // 🥘 VEG MAIN COURSE
  dish("Paneer Kalimirch", "220", "Veg Main Course"),
  dish("Paneer Mushroom Taj", "250", "Veg Main Course"),
  dish("Veg Do Pyaza", "180", "Veg Main Course"),
  dish("Veg Kadhai", "180", "Veg Main Course"),
  dish("Aloo Dum", "140", "Veg Main Course"),
  dish("Aloo Dum Kashmiri", "180", "Veg Main Course"),
  dish("Veg Kofta", "190", "Veg Main Course"),
  dish("Paneer Kofta", "220", "Veg Main Course"),
  dish("Malai Kofta", "220", "Veg Main Course"),
  dish("Paneer Korma", "200", "Veg Main Course"),
  dish("Paneer Mushroom Masala", "210", "Veg Main Course"),
  dish("Mushroom Masala", "200", "Veg Main Course"),
  dish("Mushroom Butter Masala", "220", "Veg Main Course"),
  dish("Mushroom Do Pyaza", "220", "Veg Main Course"),
  dish("Mushroom Kadhai", "230", "Veg Main Course"),
  dish("Mushroom Handi", "240", "Veg Main Course"),
  dish("Mushroom Curry", "200", "Veg Main Course"),
  dish("Mushroom Chatpata", "240", "Veg Main Course"),
  dish("Babycorn Do Pyaza", "200", "Veg Main Course"),
  dish("Stuffed Tamatar", "180", "Veg Main Course"),
  dish("Stuffed Shimla", "190", "Veg Main Course"),
  dish("Kaju Fry", "200", "Veg Main Course"),
  dish("Kaju Masala", "250", "Veg Main Course"),
  dish("Kaju Butter Masala", "260", "Veg Main Course"),
  dish("Kaju Do Pyaza", "250", "Veg Main Course"),
  dish("Kaju Kadhai", "260", "Veg Main Course"),
  dish("Kaju Korma", "280", "Veg Main Course"),

  // 🍗 NON-VEG MAIN COURSE
  dish("Chicken Curry (2 Pc/4 Pc)", "120/180", "Non-Veg Main Course", "nonveg"),
  dish("Chicken Dehati (4 Pc/8 Pc)", "250/420", "Non-Veg Main Course", "nonveg"),
  dish("Chicken Masala (4 Pc)", "220", "Non-Veg Main Course", "nonveg"),
  dish("Chicken Do Pyaza (4 Pc)", "220", "Non-Veg Main Course", "nonveg"),
  dish("Chicken Kadhai (4 Pc)", "230", "Non-Veg Main Course", "nonveg"),
  dish("Chicken Keema", "220", "Non-Veg Main Course", "nonveg"),
  dish("Chicken Lababdar (4 Pc)", "230", "Non-Veg Main Course", "nonveg"),
  dish("Kolhapuri Chicken (4 Pc)", "220", "Non-Veg Main Course", "nonveg"),
  dish("Chicken Angara (4 Pc)", "230", "Non-Veg Main Course", "nonveg"),
  dish("Punjabi Chicken (4 Pc/8 Pc)", "250/420", "Non-Veg Main Course", "nonveg"),
  dish("Afgani Chicken (4 Pc)", "230", "Non-Veg Main Course", "nonveg"),
  dish("Egg Curry (2 Pc)", "90", "Non-Veg Main Course", "nonveg"),
  dish("Egg Bhurji", "70", "Non-Veg Main Course", "nonveg"),
  dish("Omelet Curry", "100", "Non-Veg Main Course", "nonveg"),
  dish("Chicken Butter Masala", "250", "Non-Veg Main Course", "nonveg"),

  // 🫓 BREADS
  dish("Tawa Roti", "15", "Breads"),
  dish("Tawa Butter Roti", "20", "Breads"),
  dish("Tawa Paratha", "40", "Breads"),
  dish("Tandoori Roti", "15", "Breads"),
  dish("Butter Tandoori Roti", "20", "Breads"),
  dish("Plain Naan", "50", "Breads"),
  dish("Butter Naan", "60", "Breads"),
  dish("Shahi Naan", "100", "Breads"),
  dish("Cheese Naan", "100", "Breads"),
  dish("Garlic Naan", "80", "Breads"),
  dish("Stuff Naan", "90", "Breads"),
  dish("Masala Kulcha", "80", "Breads"),
  dish("Paneer Kulcha", "90", "Breads"),
  dish("Malai Kulcha", "110", "Breads"),
  dish("Missi Roti", "50", "Breads"),
  dish("Aloo Paratha", "50", "Breads"),
  dish("Sattu Paratha", "60", "Breads"),

  // 🍛 DAL
  dish("Plain Dal", "100", "Dal"),
  dish("Dal Fry Butter", "120/80", "Dal"),
  dish("Dal Tadka", "140/90", "Dal"),

  // 🥗 SALAD / RAITA
  dish("Green Salad Half", "50", "Salad / Raita"),
  dish("Green Salad Full", "70", "Salad / Raita"),
  dish("Onion Salad", "25", "Salad / Raita"),
  dish("Mix Raita", "90", "Salad / Raita"),
  dish("Bundi Raita", "90", "Salad / Raita"),
  dish("Dahi", "60", "Salad / Raita"),
  dish("Peanut Masala", "140", "Salad / Raita"),

  // 🥤 DRINKS
  dish("Masala Cold Drink", "40", "Drinks"),
  dish("Lassi", "70", "Drinks"),
  dish("Coffee", "50", "Drinks"),
  dish("Masala Chhachh", "60", "Drinks")
];


/* =========================================================
   ITEM OPTIONS
   ========================================================= */

const itemOptions = {
  "Paneer Pakoda|veg": {
    popular: true
  },

  "Chicken Pakoda|nonveg": {
    popular: true
  },

  "Paneer Chilli|veg": {
    spicy: true
  },

  "Chicken Chilli (Bone/Boneless)|nonveg": {
    spicy: true,
    priceLabel: "Bone / Boneless"
  },

  "Chicken 65 (Bone/Boneless)|nonveg": {
    spicy: true,
    priceLabel: "Bone / Boneless"
  },

  "Chicken Curry (2 Pc/4 Pc)|nonveg": {
    priceLabel: "2 Pc / 4 Pc"
  },

  "Chicken Dehati (4 Pc/8 Pc)|nonveg": {
    priceLabel: "4 Pc / 8 Pc"
  },

  "Punjabi Chicken (4 Pc/8 Pc)|nonveg": {
    priceLabel: "4 Pc / 8 Pc"
  },

  "Plain Rice|veg": {
    priceLabel: "Full / Half"
  },

  "Jeera Rice|veg": {
    priceLabel: "Full / Half"
  },

  "Dal Fry Butter|veg": {
    priceLabel: "Full / Half"
  },

  "Dal Tadka|veg": {
    priceLabel: "Full / Half"
  }
};


menuItems.forEach(item => {
  Object.assign(
    item,
    { available: true },
    itemOptions[`${item.name}|${item.type}`] || {}
  );
});


/* =========================================================
   STATE
   ========================================================= */

const state = {
  filter: "all",
  category: "All",
  search: "",
  sort: "default"
};


/* =========================================================
   TABLE NUMBER FROM QR
   ========================================================= */

const params = new URLSearchParams(window.location.search);
const rawTable = params.get("table");

const safeTable =
  rawTable && /^[a-z0-9-]{1,12}$/i.test(rawTable)
    ? rawTable
    : null;

const tableNumber = document.querySelector("#tableNumber");
const welcomeTable = document.querySelector("#welcomeTable");

if (tableNumber) {
  tableNumber.textContent = safeTable
    ? `Table ${safeTable}`
    : "Table —";
}

if (welcomeTable) {
  welcomeTable.textContent = safeTable
    ? `Table ${safeTable} · Dine-in menu`
    : "Welcome · Digital menu";
}


/* =========================================================
   ICONS
   ========================================================= */

const icons = {
  "Starters": "🥟",
  "Soup": "🍲",
  "Chinese — Veg": "🥢",
  "Chinese — Noodles": "🍜",
  "Chinese — Non-Veg": "🍗",
  "Rice": "🍚",
  "Veg Main Course": "🥘",
  "Non-Veg Main Course": "🍗",
  "Breads": "🫓",
  "Dal": "🍛",
  "Salad / Raita": "🥗",
  "Drinks": "🥤"
};


/* =========================================================
   CATEGORIES
   ========================================================= */

const categories = [
  "All",
  ...new Set(menuItems.map(item => item.category))
];

const categoryList = document.querySelector("#categoryList");
const container = document.querySelector("#menuContainer");
const emptyState = document.querySelector("#emptyState");
const title = document.querySelector("#sectionTitle");
const count = document.querySelector("#dishCount");
const search = document.querySelector("#searchInput");
const clear = document.querySelector("#clearSearch");


/* =========================================================
   CATEGORY RENDER
   ========================================================= */

function renderCategories() {
  if (!categoryList) return;

  categoryList.innerHTML = categories
    .map(category => `
      <button
        class="category ${category === state.category ? "active" : ""}"
        data-category="${category}"
        type="button"
      >
        ${category}
      </button>
    `)
    .join("");

  categoryList.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      render();
    });
  });
}


/* =========================================================
   FILTER / SEARCH / SORT
   ========================================================= */

function filteredItems() {

  const items = menuItems.filter(item => {

    const typeMatch =
      state.filter === "all" ||
      item.type === state.filter;

    const categoryMatch =
      state.category === "All" ||
      item.category === state.category;

    const searchMatch =
      item.name
        .toLowerCase()
        .includes(state.search.toLowerCase());

    return typeMatch && categoryMatch && searchMatch;
  });

  if (state.sort === "default") {
    return items;
  }

  return [...items].sort((a, b) => {

    const getPrice = item =>
      Number.parseInt(
        String(item.price).split("/")[0],
        10
      );

    return state.sort === "low"
      ? getPrice(a) - getPrice(b)
      : getPrice(b) - getPrice(a);
  });
}


/* =========================================================
   DISH CARD
   ========================================================= */

function card(item, index) {

  const image = item.image
    ? `<img src="assets/${item.image}" alt="${item.name}">`
    : icons[item.category] || "🍽️";

  const badges = [
    item.chefSpecial
      ? `<span class="badge special">Chef's Special</span>`
      : "",

    item.popular
      ? `<span class="badge popular">Bestseller</span>`
      : "",

    item.spicy
      ? `<span class="badge spicy">Spicy</span>`
      : ""
  ].join("");

  let price;

  if (item.price.includes("/") && item.priceLabel) {

    price = `
      <span class="price-parts">
        ${item.price
          .split("/")
          .map(value => `₹${value}`)
          .join(" / ")}
      </span>
      <span class="price-note">
        ${item.priceLabel}
      </span>
    `;

  } else {

    price = `₹${item.price}`;

  }

  const status =
    item.available
      ? "Available"
      : "Sold Out";

  return `
    <article
      class="food-card ${item.available ? "" : "sold-out"}"
      style="animation-delay:${index * 55}ms"
    >

      <div class="dish-body">

        <h3 class="dish-name">
          <span
            class="type-marker ${
              item.type === "nonveg"
                ? "nonveg"
                : ""
            }"
          ></span>

          ${item.name}
        </h3>

        <p class="dish-category">
          ${item.category}
        </p>

        ${
          badges
            ? `<div class="dish-badges">${badges}</div>`
            : ""
        }

        <p class="price">
          ${price}
        </p>

        <p class="availability">
          ${status}
        </p>

      </div>

      <div class="dish-image">
        ${image}
      </div>

    </article>
  `;
}


/* =========================================================
   MAIN RENDER
   ========================================================= */

function render() {

  const items = filteredItems();

  renderCategories();

  if (container) {
    container.innerHTML =
      items.map(card).join("");

    container.hidden =
      items.length === 0;
  }

  if (emptyState) {
    emptyState.hidden =
      items.length !== 0;
  }

  if (title) {
    title.textContent =
      state.category === "All"
        ? "All dishes"
        : state.category;
  }

  if (count) {
    count.textContent =
      `${items.length} ${
        items.length === 1
          ? "dish"
          : "dishes"
      }`;
  }
}


/* =========================================================
   VEG / NON-VEG
   ========================================================= */

document.querySelectorAll(".filter").forEach(button => {

  button.addEventListener("click", () => {

    state.filter =
      button.dataset.filter;

    document
      .querySelectorAll(".filter")
      .forEach(item => {

        item.classList.toggle(
          "active",
          item === button
        );

      });

    render();
  });

});


/* =========================================================
   SEARCH
   ========================================================= */

if (search) {

  search.addEventListener("input", () => {

    state.search =
      search.value.trim();

    const searchBox =
      document.querySelector(".search-box");

    if (searchBox) {
      searchBox.classList.toggle(
        "has-text",
        Boolean(state.search)
      );
    }

    render();
  });

}


/* =========================================================
   CLEAR SEARCH
   ========================================================= */

if (clear) {

  clear.addEventListener("click", () => {

    if (search) {
      search.value = "";
      state.search = "";
      search.focus();
    }

    const searchBox =
      document.querySelector(".search-box");

    if (searchBox) {
      searchBox.classList.remove("has-text");
    }

    render();
  });

}


/* =========================================================
   SORT
   ========================================================= */

const sortMenu =
  document.querySelector("#sortMenu");

if (sortMenu) {

  sortMenu.addEventListener("change", event => {

    state.sort =
      event.target.value;

    render();

  });

}


/* =========================================================
   SLIDING BANNER
   ========================================================= */

const bannerTrack =
  document.querySelector("#bannerTrack");

const bannerDots = [
  ...document.querySelectorAll(".banner-dots button")
];

let bannerIndex = 0;


function showBanner(index) {

  if (
    !bannerTrack ||
    bannerDots.length === 0
  ) {
    return;
  }

  bannerIndex =
    (index + bannerDots.length)
    % bannerDots.length;

  bannerTrack.style.transform =
    `translateX(-${bannerIndex * 100}%)`;

  bannerDots.forEach((dot, dotIndex) => {

    dot.classList.toggle(
      "active",
      dotIndex === bannerIndex
    );

  });
}


/* =========================================================
   BANNER DOTS
   ========================================================= */

bannerDots.forEach((dot, index) => {

  dot.addEventListener(
    "click",
    () => showBanner(index)
  );

});


/* =========================================================
   AUTO SLIDE
   ========================================================= */

if (bannerDots.length > 0) {

  setInterval(
    () => showBanner(bannerIndex + 1),
    4500
  );

}


/* =========================================================
   START
   ========================================================= */

render();