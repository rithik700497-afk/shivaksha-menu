const grid = document.querySelector("#qrGrid");
const countInput = document.querySelector("#tableCount");
function menuUrl(tableNumber) { const base = new URL("index.html", window.location.href); base.searchParams.set("table", tableNumber); return base.href; }
function renderQrs() { const count = Math.min(100, Math.max(1, Number.parseInt(countInput.value, 10) || 1)); countInput.value = count; grid.innerHTML = Array.from({ length: count }, (_, index) => { const table = index + 1; const url = menuUrl(table); const qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&data=${encodeURIComponent(url)}`; return `<article class="qr-card" style="animation-delay:${index * 25}ms"><img src="${qrImage}" alt="QR code for Table ${table}" /><h2>Table ${table}</h2><p>Scan to view menu</p></article>`; }).join(""); }
document.querySelector("#generateButton").addEventListener("click", renderQrs);
document.querySelector("#printButton").addEventListener("click", () => window.print());
renderQrs();
