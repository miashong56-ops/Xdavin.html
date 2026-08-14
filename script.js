// ===============================
// DAVIN TOP UP STORE
// ===============================

// Efek tombol Top Up
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const game = document.querySelector("select").value;
        const id = document.querySelector('input[type="text"]').value;

        if (id.trim() === "") {
            alert("Masukkan ID Game terlebih dahulu!");
            return;
        }

        alert(
            "✅ Pesanan Berhasil!\n\n" +
            "Game : " + game +
            "\nID : " + id +
            "\n\nSilakan lanjutkan pembayaran."
        );
    });
}

// Efek klik card game
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        cards.forEach(c => c.classList.remove("aktif"));

        card.classList.add("aktif");

        const nama = card.querySelector("h3").innerText;

        const pilihGame = document.querySelector("#topup select");

        if (pilihGame) {
            pilihGame.value = nama;
        }

        document
            .getElementById("topup")
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

// Efek muncul saat discroll
const muncul = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

muncul.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.8s";

    observer.observe(item);

});

// Jam berjalan
function updateJam() {

    const sekarang = new Date();

    const jam = sekarang.getHours().toString().padStart(2, "0");
    const menit = sekarang.getMinutes().toString().padStart(2, "0");
    const detik = sekarang.getSeconds().toString().padStart(2, "0");

    const waktu = document.getElementById("jam");

    if (waktu) {
        waktu.innerHTML = jam + ":" + menit + ":" + detik;
    }

}

setInterval(updateJam, 1000);
updateJam();

// Judul browser berganti
const judul = [
    "🔥 DAVIN TOP UP STORE 🔥",
    "💎 TOP UP TERMURAH 💎",
    "⚡ PUBG • FF • ML • ROBLOX ⚡",
    "🎮 SELAMAT DATANG 🎮"
];

let index = 0;

setInterval(() => {

    document.title = judul[index];

    index++;

    if (index >= judul.length) {
        index = 0;
    }

}, 2000);

// Tombol kembali ke atas
const tombolAtas = document.createElement("button");

tombolAtas.innerHTML = "⬆";

tombolAtas.style.position = "fixed";
tombolAtas.style.bottom = "20px";
tombolAtas.style.right = "20px";
tombolAtas.style.width = "50px";
tombolAtas.style.height = "50px";
tombolAtas.style.border = "none";
tombolAtas.style.borderRadius = "50%";
tombolAtas.style.fontSize = "22px";
tombolAtas.style.cursor = "pointer";
tombolAtas.style.background = "#00c3ff";
tombolAtas.style.color = "white";
tombolAtas.style.display = "none";

document.body.appendChild(tombolAtas);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        tombolAtas.style.display = "block";
    } else {
        tombolAtas.style.display = "none";
    }

});

tombolAtas.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});