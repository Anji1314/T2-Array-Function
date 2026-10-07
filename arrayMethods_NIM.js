// Tugas 2 - Array Function
// Ganti NIM pada nama file dan identitas di README.md sebelum dikumpulkan.

const hobi = [
    { nama: "Membaca novel", kategori: "Kreatif", jamPerMinggu: 5, rutin: true },
    { nama: "Bersepeda", kategori: "Olahraga", jamPerMinggu: 4, rutin: true },
    { nama: "Memasak", kategori: "Kreatif", jamPerMinggu: 3, rutin: false },
    { nama: "Fotografi", kategori: "Kreatif", jamPerMinggu: 6, rutin: true },
    { nama: "Bermain gitar", kategori: "Musik", jamPerMinggu: 7, rutin: true },
    { nama: "Mendaki gunung", kategori: "Petualangan", jamPerMinggu: 2, rutin: false },
    { nama: "Menggambar digital", kategori: "Kreatif", jamPerMinggu: 8, rutin: true },
    { nama: "Bermain gim", kategori: "Hiburan", jamPerMinggu: 10, rutin: false },
    { nama: "Merawat tanaman", kategori: "Santai", jamPerMinggu: 3, rutin: true },
    { nama: "Menonton film", kategori: "Hiburan", jamPerMinggu: 4, rutin: false }
];

console.log("=== DATA HOBI ===");
console.table(hobi);

// 1. map(): mengambil nama semua hobi dalam format yang lebih ringkas.
const daftarNamaHobi = hobi.map((item) => item.nama);
console.log("1. map() - Daftar nama hobi:", daftarNamaHobi);

// 2. filter(): memilih hobi yang membutuhkan waktu minimal 6 jam per minggu.
const hobiIntensif = hobi.filter((item) => item.jamPerMinggu >= 6);
console.log("2. filter() - Hobi minimal 6 jam per minggu:");
console.table(hobiIntensif);

// 3. reduce(): menghitung total waktu seluruh hobi dalam satu minggu.
const totalJamPerMinggu = hobi.reduce(
    (total, item) => total + item.jamPerMinggu,
    0
);
console.log("3. reduce() - Total jam hobi per minggu:", totalJamPerMinggu, "jam");

// 4. find(): mencari hobi pertama yang termasuk kategori Musik.
const hobiMusik = hobi.find((item) => item.kategori === "Musik");
console.log("4. find() - Hobi kategori Musik:", hobiMusik);

// 5. some(): mengecek apakah ada hobi dengan durasi lebih dari 9 jam per minggu.
const adaHobiSangatLama = hobi.some((item) => item.jamPerMinggu > 9);
console.log("5. some() - Ada hobi lebih dari 9 jam per minggu:", adaHobiSangatLama);

// 6. every(): mengecek apakah semua hobi memiliki durasi setidaknya 2 jam.
const semuaHobiMinimalDuaJam = hobi.every((item) => item.jamPerMinggu >= 2);
console.log("6. every() - Semua hobi minimal 2 jam per minggu:", semuaHobiMinimalDuaJam);
