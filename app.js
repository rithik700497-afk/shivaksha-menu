/* Static menu only. Add verified dishes here; optional image filenames go in assets/. */
const dish = (name, price, category, type = "veg", image = "") => ({ name, price, category, type, image });
const menuItems = [
  // Sandwich
  dish("Veg Grilled Sandwich", "110", "Sandwich"), dish("Veg Sandwich (Without Grill)", "100", "Sandwich"),
  dish("Chicken Grilled Sandwich", "160", "Sandwich", "nonveg"), dish("Non-Veg Club Grilled Sandwich", "180", "Sandwich", "nonveg"),
  // Soup
  ...["Clear Soup", "Lemon Coriander Soup", "Hot N Sour Soup", "Sweet Corn Soup", "Manchow Soup", "Cream Of Tomato", "Cream Of Mushroom"].map(name => dish(name, "120", "Soup")),
  ...["Clear Soup", "Lemon Coriander Soup", "Hot N Sour Soup", "Sweet Corn Soup", "Manchow Soup"].map(name => dish(name, "140", "Soup", "nonveg")), dish("Cream Of Chicken", "150", "Soup", "nonveg"),
  // Deep fried starters
  dish("Veg Pakora", "140", "Deep Fried Starters"), dish("Paneer Pakora", "160", "Deep Fried Starters"), dish("Onion Pakora", "160", "Deep Fried Starters"), dish("Chicken Pakora", "190", "Deep Fried Starters", "nonveg"), dish("Fish Amritsari", "200", "Deep Fried Starters", "nonveg"),
  // Tandoori starters
  dish("Kasturi Paneer Tikka", "230", "Tandoori Starters"), dish("Paneer Tikka", "220", "Tandoori Starters"), dish("Kali Mirch Paneer Tikka", "230", "Tandoori Starters"), dish("Multani Paneer Tikka", "240", "Tandoori Starters"), dish("Paneer Ajwaini Tikka", "230", "Tandoori Starters"), dish("Pahadi Paneer Tikka", "230", "Tandoori Starters"), dish("Paneer Malai Tikka", "240", "Tandoori Starters"), dish("Paneer Achari Tikka", "220", "Tandoori Starters"), dish("Dahi Ke Sholey", "220", "Tandoori Starters"), dish("Mushroom Galouti Kebab", "500", "Tandoori Starters"), dish("Tandoori Mushroom", "210", "Tandoori Starters"), dish("Veg Hara Bhara Kebab", "200", "Tandoori Starters"), dish("Veg Seekh Kebab", "210", "Tandoori Starters"), dish("Assorted Veg Platter", "390", "Tandoori Starters"),
  dish("Chicken Tikka", "299", "Tandoori Starters", "nonveg"), dish("Chicken Achari Tikka", "299", "Tandoori Starters", "nonveg"), dish("Chicken Lasuni Tikka", "309", "Tandoori Starters", "nonveg"), dish("Chicken Malai Tikka", "329", "Tandoori Starters", "nonveg"), dish("Chicken Banarasi Kebab", "289", "Tandoori Starters", "nonveg"), dish("Chicken Makhani Kebab", "289", "Tandoori Starters", "nonveg"), dish("Chicken Seekh Kebab", "299", "Tandoori Starters", "nonveg"), dish("Chicken Reshmi Kebab", "299", "Tandoori Starters", "nonveg"), dish("Chicken Kali Mirch Kebab", "299", "Tandoori Starters", "nonveg"), dish("Chicken Lasuni Tangdi Kebab", "299", "Tandoori Starters", "nonveg"), dish("Fish Ajwaini Tikka", "369", "Tandoori Starters", "nonveg"), dish("Chicken Afghani Half", "329", "Tandoori Starters", "nonveg"), dish("Chicken Afghani Full", "479", "Tandoori Starters", "nonveg"), dish("Tandoori Chicken Half", "279", "Tandoori Starters", "nonveg"), dish("Tandoori Chicken Full", "449", "Tandoori Starters", "nonveg"), dish("Tandoori Prawns", "449", "Tandoori Starters", "nonveg"),
  // Chinese starters
  dish("Paneer 65", "200", "Chinese Starters"), dish("Chilly Paneer Dry", "190", "Chinese Starters"), dish("Veg Momo", "140", "Chinese Starters"), dish("Crispy Baby Corn", "210", "Chinese Starters"), dish("Crispy Baby Corn Honey Style", "230", "Chinese Starters"), dish("Mushroom Chilly Dry", "200", "Chinese Starters"), dish("Veg Manchurian Dry", "200", "Chinese Starters"), dish("Szechuan Paneer Dry", "210", "Chinese Starters"), dish("American Corn Chilli", "210", "Chinese Starters"), dish("Chinese Bhel", "160", "Chinese Starters"), dish("Veg Spring Roll", "180", "Chinese Starters"), dish("Honey Chilli Potatoes", "190", "Chinese Starters"), dish("Corn Salt & Pepper", "200", "Chinese Starters"), dish("Chilli Mushroom Baby Corn", "210", "Chinese Starters"), dish("Paneer Green Salt & Pepper", "210", "Chinese Starters"), dish("Saute Vegetable", "200", "Chinese Starters"),
  dish("Chicken Momos", "180/190", "Chinese Starters", "nonveg"), dish("Chilli Chicken Dry", "230", "Chinese Starters", "nonveg"), dish("Honey Chilli Chicken", "250", "Chinese Starters", "nonveg"), dish("Chicken Lolipop", "230", "Chinese Starters", "nonveg"), dish("Crispy Chicken", "230", "Chinese Starters", "nonveg"), dish("Chicken Spring Roll", "210", "Chinese Starters", "nonveg"), dish("Spicy Chicken Wings", "230", "Chinese Starters", "nonveg"), dish("Chicken 65", "220", "Chinese Starters", "nonveg"), dish("Sliced Chicken In Hot Garlic Sauce", "220", "Chinese Starters", "nonveg"), dish("Chicken Manchurian Dry", "220", "Chinese Starters", "nonveg"), dish("Fish Chilli Dry", "230", "Chinese Starters", "nonveg"), dish("Fish In Butter Garlic Sauce", "240", "Chinese Starters", "nonveg"), dish("Drums Of Heaven", "240", "Chinese Starters", "nonveg"), dish("Chicken In Butter Garlic Sauce", "220", "Chinese Starters", "nonveg"), dish("Szechuan Chicken Dry", "230", "Chinese Starters", "nonveg"),
  // Indian main course
  dish("Paneer Angara", "250", "Indian Main Course"), dish("Paneer Peshawari", "250", "Indian Main Course"), dish("Paneer Patiala", "240", "Indian Main Course"), dish("Paneer Do Pyaza", "230", "Indian Main Course"), dish("Paneer Lababdar", "240", "Indian Main Course"), dish("Paneer Butter Masala", "240", "Indian Main Course"), dish("Kadai Paneer", "230", "Indian Main Course"), dish("Shahi Paneer", "250", "Indian Main Course"), dish("Matar Paneer", "220", "Indian Main Course"), dish("Palak Paneer", "230", "Indian Main Course"), dish("Paneer Bhurje", "210", "Indian Main Course"), dish("Paneer Chatpata", "230", "Indian Main Course"), dish("Bhindi Masala", "210", "Indian Main Course"), dish("Methi Matar Malai", "240", "Indian Main Course"), dish("Navratan Korma", "240", "Indian Main Course"), dish("Malai Kofta", "240", "Indian Main Course"), dish("Veg Kofta", "200", "Indian Main Course"), dish("Aloo Jeera", "180", "Indian Main Course"), dish("Aloo Gobhi Dry/Gravy", "190", "Indian Main Course"), dish("Mushroom Do Pyaza", "210", "Indian Main Course"), dish("Mushroom Masala", "210", "Indian Main Course"), dish("Mix Vegetable", "190", "Indian Main Course"), dish("Veg Jalfrezi", "190", "Indian Main Course"), dish("Chana Masala", "190", "Indian Main Course"), dish("Corn Chatkara Palak", "200", "Indian Main Course"), dish("Sham Savera Kofta", "210", "Indian Main Course"),
  dish("Chicken Curry", "120/180", "Indian Main Course", "nonveg"), dish("Chicken Dehati", "250/420", "Indian Main Course", "nonveg"), dish("Chicken Masala", "220", "Indian Main Course", "nonveg"), dish("Chicken Do Pyaza", "220", "Indian Main Course", "nonveg"), dish("Chicken Kadhai", "230", "Indian Main Course", "nonveg"), dish("Chicken Keema", "220", "Indian Main Course", "nonveg"), dish("Chicken Lababdar", "230", "Indian Main Course", "nonveg"), dish("Kolhapuri Chicken", "220", "Indian Main Course", "nonveg"), dish("Chicken Angara", "230", "Indian Main Course", "nonveg"), dish("Punjabi Chicken", "250/420", "Indian Main Course", "nonveg"), dish("Afgani Chicken", "230", "Indian Main Course", "nonveg"), dish("Chicken Butter Masala", "250", "Indian Main Course", "nonveg"), dish("Egg Curry", "90", "Indian Main Course", "nonveg"), dish("Egg Bhurji", "70", "Indian Main Course", "nonveg"), dish("Omlet Curry", "100", "Indian Main Course", "nonveg"),
  // Dal, rice and breads
  dish("Dal Palak", "140", "Dal"), dish("Lasooni Dal", "140", "Dal"), dish("Plain Dal", "130", "Dal"), dish("Dal Tadka", "140", "Dal"), dish("Dal Makhani", "180", "Dal"), dish("Dal Fry", "140", "Dal"),
  dish("Steamed Rice", "110", "Rice & Biryani"), dish("Jeera Rice", "130", "Rice & Biryani"), dish("Veg Pulao", "160", "Rice & Biryani"), dish("Green Peas Pulao", "160", "Rice & Biryani"), dish("Kashmiri Pulao", "210", "Rice & Biryani"), dish("Vegetable Biryani", "180", "Rice & Biryani"), dish("Egg Biryani", "200", "Rice & Biryani", "nonveg"), dish("Chicken Dum Biryani", "240", "Rice & Biryani", "nonveg"), dish("Mutton Dum Biryani", "280", "Rice & Biryani", "nonveg"), dish("Hyderabadi Dum Biryani", "250/300", "Rice & Biryani", "nonveg"),
  dish("Tandoori Roti", "15", "Breads"), dish("Butter Tandoori Roti", "20", "Breads"), dish("Missi Roti", "30", "Breads"), dish("Butter Missi Roti", "35", "Breads"), dish("Naan", "30", "Breads"), dish("Butter Naan", "35", "Breads"), dish("Lachha Paratha", "40", "Breads"), dish("Onion/Masala Kulcha", "50/55", "Breads"), dish("Paneer Kulcha", "65", "Breads"), dish("Garlic Naan", "50", "Breads"), dish("Cheese Garlic Naan", "70", "Breads"), dish("Kashmiri Naan", "70", "Breads"), dish("Bread Basket", "160", "Breads"),
  // Chinese mains and noodles
  dish("Chilli Paneer", "200", "Chinese Main Course"), dish("Schezwan Paneer", "220", "Chinese Main Course"), dish("Chilli Mushroom", "210", "Chinese Main Course"), dish("Vegetable Ball Manchurian", "220", "Chinese Main Course"), dish("Paneer Sweet & Sour", "230", "Chinese Main Course"), dish("Chilli Chicken", "240", "Chinese Main Course", "nonveg"), dish("Chicken Manchurian", "240", "Chinese Main Course", "nonveg"), dish("Chicken Sweet & Sour", "240", "Chinese Main Course", "nonveg"), dish("Schezwan Chicken", "250", "Chinese Main Course", "nonveg"), dish("Chicken In Hot Garlic Sauce", "240", "Chinese Main Course", "nonveg"), dish("Garlic Chicken", "240", "Chinese Main Course", "nonveg"), dish("Ginger Chicken", "240", "Chinese Main Course", "nonveg"), dish("Chilli Fish", "240", "Chinese Main Course", "nonveg"),
  dish("American Chopsuey", "180", "Rice & Noodles"), dish("Hakka Noodles", "140", "Rice & Noodles"), dish("Chowmein", "120", "Rice & Noodles"), dish("Burnt Chilli Garlic Noodles", "150", "Rice & Noodles"), dish("Schezwan Noodles", "150", "Rice & Noodles"), dish("Burnt Garlic Fried Rice", "150", "Rice & Noodles"), dish("Fried Rice", "140", "Rice & Noodles"), dish("American Chopsuey", "220", "Rice & Noodles", "nonveg"), dish("Hakka Noodles", "160/180", "Rice & Noodles", "nonveg"), dish("Chowmein", "140/160", "Rice & Noodles", "nonveg"), dish("Burnt Chilli Garlic Noodles", "170/190", "Rice & Noodles", "nonveg"), dish("Schezwan Noodles", "170/190", "Rice & Noodles", "nonveg"), dish("Burnt Garlic Fried Rice", "170/190/210", "Rice & Noodles", "nonveg"), dish("Fried Rice", "160/180/200", "Rice & Noodles", "nonveg"),
  // Continental, desserts, breakfast and shakes
  dish("Veg Pasta (Penne)", "250", "Continental"), dish("French Fries", "160", "Continental"), dish("Cheese Ball", "190", "Continental"), dish("Cheese Corn Balls", "200", "Continental"), dish("Non-Veg Pasta (Penne)", "280", "Continental", "nonveg"), dish("Fish Finger", "200", "Continental", "nonveg"), dish("Fish & Chips", "220", "Continental", "nonveg"),
  dish("Gulab Jamun", "50", "Dessert"), dish("Vanilla Ice Cream With Chocolate Sauce", "100", "Dessert"), dish("Choice Of Ice Cream", "90", "Dessert"), dish("Sizzling Brownie With Vanilla Ice Cream", "160", "Dessert"), dish("Shahi Tukda", "140", "Dessert"), dish("Firni", "110", "Dessert"), dish("Moong Dal Halwa", "120", "Dessert"), dish("Gajjar Ka Halwa", "120", "Dessert"), dish("White Rasgulla", "50", "Dessert"),
  dish("Bread Toast With Preserves", "80", "Breakfast"), dish("Eggs To Order", "90", "Breakfast", "nonveg"), dish("Cereals With Hot/Cold Milk", "80", "Breakfast"), dish("Choice Of Paratha", "120", "Breakfast"), dish("Paneer Paratha", "140", "Breakfast"), dish("Bread Omelette", "100", "Breakfast", "nonveg"), dish("Puri Sabji", "120", "Breakfast"), dish("Poha", "70", "Breakfast"), dish("Steamed Idli", "60", "Breakfast"), dish("Continental Breakfast", "200", "Breakfast"), dish("Indian Breakfast", "140", "Breakfast"),
  dish("Cold Coffee", "140/120", "Shakes"), dish("Vanilla Milk Shake", "140/120", "Shakes"), dish("Chocolate Shake", "140/120", "Shakes"), dish("Strawberry Shake", "140/120", "Shakes"), dish("Butter Scotch Shake", "140/120", "Shakes")
];

const state = { filter: "all", category: "All", search: "", sort: "default" };
// These presentation tags can be edited anytime; availability is true unless explicitly set false.
const itemOptions = {
  "Paneer Tikka|veg": { chefSpecial: true, popular: true },
  "Chicken Tikka|nonveg": { chefSpecial: true, popular: true },
  "Paneer Butter Masala|veg": { popular: true },
  "Chicken Butter Masala|nonveg": { popular: true },
  "Dal Makhani|veg": { chefSpecial: true },
  "Chilli Paneer|veg": { spicy: true, popular: true },
  "Chilli Chicken|nonveg": { spicy: true, popular: true },
  "Chicken Angara|nonveg": { spicy: true },
  "Paneer Angara|veg": { spicy: true },
  "Chicken Curry|nonveg": { priceLabel: "Half / Full" },
  "Chicken Dehati|nonveg": { priceLabel: "Half / Full" },
  "Punjabi Chicken|nonveg": { priceLabel: "Half / Full" }
};
menuItems.forEach(item => Object.assign(item, { available: true }, itemOptions[`${item.name}|${item.type}`]));
const params = new URLSearchParams(window.location.search);
const rawTable = params.get("table");
const safeTable = rawTable && /^[a-z0-9-]{1,12}$/i.test(rawTable) ? rawTable : null;
document.querySelector("#tableNumber").textContent = safeTable ? `Table ${safeTable}` : "Table —";
document.querySelector("#welcomeTable").textContent = safeTable ? `Table ${safeTable} · Dine-in menu` : "Welcome · Digital menu";

const icons = { Starters: "🍢", "Main Course": "🍛", Dal: "🥣", Rice: "🍚", Breads: "🫓" };
const categories = ["All", ...new Set(menuItems.map(item => item.category))];
const categoryList = document.querySelector("#categoryList");
const container = document.querySelector("#menuContainer");
const emptyState = document.querySelector("#emptyState");
const title = document.querySelector("#sectionTitle");
const count = document.querySelector("#dishCount");
const search = document.querySelector("#searchInput");
const clear = document.querySelector("#clearSearch");

function renderCategories() {
  categoryList.innerHTML = categories.map(category => `<button class="category ${category === state.category ? "active" : ""}" data-category="${category}" type="button">${category}</button>`).join("");
  categoryList.querySelectorAll("button").forEach(button => button.addEventListener("click", () => { state.category = button.dataset.category; render(); }));
}
function filteredItems() {
  const items = menuItems.filter(item => (state.filter === "all" || item.type === state.filter) && (state.category === "All" || item.category === state.category) && item.name.toLowerCase().includes(state.search.toLowerCase()));
  if (state.sort === "default") return items;
  return [...items].sort((a, b) => {
    const firstPrice = item => Number.parseInt(String(item.price).split("/")[0], 10);
    return state.sort === "low" ? firstPrice(a) - firstPrice(b) : firstPrice(b) - firstPrice(a);
  });
}
function card(item, index) {
  const image = item.image ? `<img src="assets/${item.image}" alt="${item.name}" />` : icons[item.category] || "🍽️";
  const badges = [item.chefSpecial ? `<span class="badge special">Chef's Special</span>` : "", item.popular ? `<span class="badge popular">Bestseller</span>` : "", item.spicy ? `<span class="badge spicy">Spicy</span>` : ""].join("");
  const price = item.price.includes("/") && item.priceLabel ? `<span class="price-parts">${item.price.split("/").map(value => `₹${value}`).join(" / ")}</span><span class="price-note">${item.priceLabel}</span>` : `₹${item.price}`;
  const status = item.available ? "Available" : "Sold Out";
  return `<article class="food-card ${item.available ? "" : "sold-out"}" style="animation-delay:${index * 55}ms"><div class="dish-body"><h3 class="dish-name"><span class="type-marker ${item.type === "nonveg" ? "nonveg" : ""}"></span>${item.name}</h3><p class="dish-category">${item.category}</p>${badges ? `<div class="dish-badges">${badges}</div>` : ""}<p class="price">${price}</p><p class="availability">${status}</p></div><div class="dish-image">${image}</div></article>`;
}
function render() {
  const items = filteredItems();
  renderCategories();
  container.innerHTML = items.map(card).join("");
  container.hidden = items.length === 0;
  emptyState.hidden = items.length !== 0;
  title.textContent = state.category === "All" ? "All dishes" : state.category;
  count.textContent = `${items.length} ${items.length === 1 ? "dish" : "dishes"}`;
}
document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => { state.filter = button.dataset.filter; document.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button)); render(); }));
search.addEventListener("input", () => { state.search = search.value.trim(); document.querySelector(".search-box").classList.toggle("has-text", Boolean(state.search)); render(); });
clear.addEventListener("click", () => { search.value = ""; state.search = ""; document.querySelector(".search-box").classList.remove("has-text"); search.focus(); render(); });
document.querySelector("#sortMenu").addEventListener("change", event => { state.sort = event.target.value; render(); });
const bannerTrack = document.querySelector("#bannerTrack");
const bannerDots = [...document.querySelectorAll(".banner-dots button")];
let bannerIndex = 0;
function showBanner(index) {
  bannerIndex = (index + bannerDots.length) % bannerDots.length;
  bannerTrack.style.transform = `translateX(-${bannerIndex * 100}%)`;
  bannerDots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === bannerIndex));
}
bannerDots.forEach((dot, index) => dot.addEventListener("click", () => showBanner(index)));
setInterval(() => showBanner(bannerIndex + 1), 4500);
render();
