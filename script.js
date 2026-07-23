/* ================= TRANSLATIONS ================= */
const translations = {
  en:{
    loading:"Preparing your table…",
    nav_home:"Home",nav_about:"About Us",nav_menu:"Menu",nav_promo:"Promotion",nav_gallery:"Gallery",nav_reservation:"Reservation",nav_contact:"Contact",
    hero_eyebrow:"Since the Streets of Bangkok",hero_title:"Thai Heritage Restaurant",hero_sub:"Authentic Halal Thai Cuisine in Malaysia",
    hero_btn1:"View Menu",hero_btn2:"Reservation",hero_btn3:"Order Online",
    about_eyebrow:"Our Story",about_title:"About Us",
    about_text:"Bringing the authentic taste of Thailand to Malaysia with halal ingredients and traditional recipes, crafted by Thai-trained chefs and served in a home away from Bangkok.",
    pillar1_t:"Authentic Recipe",pillar1_d:"Traditional Thai techniques",
    pillar2_t:"Fresh Ingredients",pillar2_d:"Sourced daily, always fresh",
    pillar3_t:"100% Halal",pillar3_d:"Certified halal kitchen",
    pillar4_t:"Thai Chef",pillar4_d:"Trained in Thailand",
    menu_eyebrow:"Taste of Thailand & Malaysia",menu_title:"Our Menu",
    promo_eyebrow:"Limited Time",promo_title:"Special Promotions",
    promo1_t:"Lunch Set",promo1_d:"Weekday lunch, 11am–3pm",
    promo2_t:"Family Package",promo2_d:"Feeds 4, includes dessert",
    promo3_t:"Buy 2 Thai Tea",promo3_d:"Free Dessert",
    gallery_eyebrow:"A Glimpse Inside",gallery_title:"Gallery",
    res_eyebrow:"Book Your Table",res_title:"Reservation",
    res_text:"Reserve your table for an unforgettable evening of Thai hospitality. Prefer to chat? Message us directly on WhatsApp.",
    res_whatsapp:"Chat on WhatsApp — +60 12-345 6789",
    form_name:"Name",form_phone:"Phone Number",form_date:"Date",form_time:"Time",form_guests:"Number of Guests",form_btn:"Reserve Table",
    form_success:"Thank you! Your reservation request has been noted — we'll confirm shortly by phone.",
    contact_eyebrow:"Find Us",contact_title:"Contact",
    contact_addr_t:"Address",contact_hours_t:"Opening Hours",contact_hours_d:"Daily, 11:00 AM – 11:00 PM",contact_phone_t:"Phone",
    footer_slogan:"\u201cExperience the Taste of Thailand in Every Bite.\u201d"
  },
  ms:{
    loading:"Sedang menyediakan meja anda…",
    nav_home:"Utama",nav_about:"Tentang Kami",nav_menu:"Menu",nav_promo:"Promosi",nav_gallery:"Galeri",nav_reservation:"Tempahan",nav_contact:"Hubungi",
    hero_eyebrow:"Sejak dari Jalanan Bangkok",hero_title:"Thai Heritage Restaurant",hero_sub:"Masakan Thai Halal Sebenar di Malaysia",
    hero_btn1:"Lihat Menu",hero_btn2:"Tempahan",hero_btn3:"Pesan Online",
    about_eyebrow:"Kisah Kami",about_title:"Tentang Kami",
    about_text:"Membawa rasa Thailand yang tulen ke Malaysia dengan bahan halal dan resipi tradisional, dimasak oleh chef terlatih dari Thailand.",
    pillar1_t:"Resipi Tulen",pillar1_d:"Teknik tradisional Thailand",
    pillar2_t:"Bahan Segar",pillar2_d:"Dibekal setiap hari, sentiasa segar",
    pillar3_t:"100% Halal",pillar3_d:"Dapur bersijil halal",
    pillar4_t:"Chef Thailand",pillar4_d:"Dilatih di Thailand",
    menu_eyebrow:"Rasa Thailand & Malaysia",menu_title:"Menu Kami",
    promo_eyebrow:"Tawaran Terhad",promo_title:"Promosi Istimewa",
    promo1_t:"Set Makan Tengahari",promo1_d:"Hari bekerja, 11pg–3ptg",
    promo2_t:"Pakej Keluarga",promo2_d:"Untuk 4 orang, termasuk pencuci mulut",
    promo3_t:"Beli 2 Thai Tea",promo3_d:"Percuma Pencuci Mulut",
    gallery_eyebrow:"Intipan Restoran",gallery_title:"Galeri",
    res_eyebrow:"Tempah Meja Anda",res_title:"Tempahan",
    res_text:"Tempah meja anda untuk malam penuh keramahan Thailand. Lebih suka berbual? Hubungi kami terus di WhatsApp.",
    res_whatsapp:"Chat di WhatsApp — +60 12-345 6789",
    form_name:"Nama",form_phone:"Nombor Telefon",form_date:"Tarikh",form_time:"Masa",form_guests:"Bilangan Tetamu",form_btn:"Tempah Meja",
    form_success:"Terima kasih! Permintaan tempahan anda telah diterima — kami akan sahkan tidak lama lagi melalui telefon.",
    contact_eyebrow:"Cari Kami",contact_title:"Hubungi",
    contact_addr_t:"Alamat",contact_hours_t:"Waktu Operasi",contact_hours_d:"Setiap hari, 11:00 pagi – 11:00 malam",contact_phone_t:"Telefon",
    footer_slogan:"\u201cRasai Kelazatan Thailand Dalam Setiap Suapan.\u201d"
  }
};
let currentLang = "en";

/* ================= MENU DATA ================= */
const menuData = [
{cat:"signature",img:"images/tomyam_seefood.png",price:"RM18",en:{n:"Tom Yum Seafood",d:"Hot & sour soup with prawns and squid"},ms:{n:"Tom Yum Seafood",d:"Sup masam pedas dengan udang & sotong"}},
{cat:"signature",img:"images/Green Curry Chicken.png",price:"RM18",en:{n:"Green Curry Chicken",d:"Chicken simmered in coconut green curry"},ms:{n:"Green Curry Ayam",d:"Ayam dalam kari hijau santan"}},
{cat:"signature",img:"images/Pineapple Fried Rice.png",price:"RM20",en:{n:"Pineapple Fried Rice",d:"Signature Thai-style pineapple fried rice"},ms:{n:"Nasi Goreng Nanas",d:"Nasi goreng nanas gaya Thailand"}},
{cat:"signature",img:"images/Pad Thai Shrimp.png",price:"RM20",en:{n:"Pad Thai Shrimp",d:"Classic stir-fried noodles with prawns"},ms:{n:"Pad Thai Udang",d:"Mi goreng klasik Thailand dengan udang"}},
{cat:"signature",img:"images/Basil Chicken Rice (Pad Kra Pao).png",price:"RM15",en:{n:"Basil Chicken Rice (Pad Kra Pao)",d:"Minced chicken stir-fried with holy basil"},ms:{n:"Nasi Ayam Basil (Pad Kra Pao)",d:"Ayam cincang dengan daun basil suci"}},
{cat:"signature",img:"images/Thai Fried Rice Seafood.png",price:"RM18",en:{n:"Thai Fried Rice Seafood",d:"Wok-fried rice with mixed seafood"},ms:{n:"Nasi Goreng Seafood",d:"Nasi goreng dengan campuran hidangan laut"}},
{cat:"signature",img:"images/Cashew Chicken.png",price:"RM25",en:{n:"Cashew Chicken",d:"Crispy chicken tossed with cashew nuts"},ms:{n:"Ayam Cashew",d:"Ayam rangup bersama kacang gajus"}},
{cat:"signature",img:"images/Grilled Beef Short Rib.png",price:"RM60",en:{n:"Grilled Beef Short Rib",d:"Charcoal-grilled ribs, Thai herb sauce"},ms:{n:"Iga Sapi Panggang",d:"Iga dipanggang, sos herba Thailand"}},
{cat:"signature",img:"images/Thai Omelette Rice.png",price:"RM12",en:{n:"Thai Omelette Rice",d:"Fluffy Thai-style omelette over rice"},ms:{n:"Nasi Telur Dadar Thai",d:"Telur dadar gebu gaya Thailand di atas nasi"}},
{cat:"signature",img:"images/Red Curry Duck.png",price:"RM40",en:{n:"Red Curry Duck",d:"Roast duck in aromatic red curry"},ms:{n:"Itik Kari Merah",d:"Itik panggang dalam kari merah wangi"}},

{cat:"soup",img:"images/Tom Yum Ayam.png",price:"RM18",en:{n:"Tom Yum Chicken",d:"Hot & sour soup with tender chicken"},ms:{n:"Tom Yum Ayam",d:"Sup masam pedas dengan ayam lembut"}},
{cat:"soup",img:"images/Tom Yum Seafood Campur.png",price:"RM22",en:{n:"Tom Yum Mixed Seafood",d:"Prawns, squid, fish in tangy broth"},ms:{n:"Tom Yum Seafood Campur",d:"Udang, sotong, ikan dalam kuah masam"}},
{cat:"soup",img:"images/Sup Kelapa Thai.png",price:"RM16",en:{n:"Thai Coconut Soup (Tom Kha)",d:"Creamy galangal coconut chicken soup"},ms:{n:"Sup Kelapa Thai (Tom Kha)",d:"Sup ayam santan berlengas dengan lengkuas"}},

{cat:"rice",img:"images/Nasi Goreng Seafood.png",price:"RM18",en:{n:"Seafood Fried Rice",d:"Wok-tossed rice with prawns & squid"},ms:{n:"Nasi Goreng Seafood",d:"Nasi goreng dengan udang & sotong"}},
{cat:"rice",img:"images/Nasi Goreng Ketam.png",price:"RM22",en:{n:"Crab Fried Rice",d:"Fried rice with fresh crab meat"},ms:{n:"Nasi Goreng Ketam",d:"Nasi goreng dengan isi ketam segar"}},
{cat:"rice",img:"images/Nasi Kari Hijau Ayam.png",price:"RM18",en:{n:"Green Curry Chicken Rice",d:"Green curry chicken served with rice"},ms:{n:"Nasi Kari Hijau Ayam",d:"Ayam kari hijau dihidang dengan nasi"}},
{cat:"rice",img:"images/Nasi Kari Merah Daging.png",price:"RM25",en:{n:"Red Curry Beef Rice",d:"Beef red curry served with rice"},ms:{n:"Nasi Kari Merah Daging",d:"Daging kari merah dihidang dengan nasi"}},

{cat:"noodles",img:"https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=600&auto=format&fit=crop",price:"RM18",en:{n:"Pad See Ew",d:"Wide noodles stir-fried in dark soy"},ms:{n:"Pad See Ew",d:"Mi lebar digoreng dengan kicap pekat"}},
{cat:"noodles",img:"https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=600&auto=format&fit=cro",price:"RM19",en:{n:"Drunken Noodles",d:"Spicy noodles with basil & chili"},ms:{n:"Mi Drunken",d:"Mi pedas dengan basil & cili"}},
{cat:"noodles",img:"images/Thai-Glass-Noodle-Salad_square.jpg",price:"RM20",en:{n:"Glass Noodle Seafood",d:"Clear noodles wok-fried with seafood"},ms:{n:"Tanghoon Seafood",d:"Tanghoon digoreng dengan hidangan laut"}},
{cat:"noodles",img:"https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=600&auto=format&fit=crop",price:"RM22",en:{n:"Thai Boat Noodles",d:"Rich herbal broth, rice noodles"},ms:{n:"Mi Boat Thailand",d:"Kuah herba pekat dengan mi beras"}},

{cat:"curry",img:"images/Massaman Curry.png",price:"RM18",en:{n:"Massaman Curry",d:"Rich, mild curry with potato & peanuts"},ms:{n:"Kari Massaman",d:"Kari lembut kaya rasa dengan kentang & kacang"}},
{cat:"curry",img:"images/Panang Curry.png",price:"RM20",en:{n:"Panang Curry",d:"Thick curry with kaffir lime leaf"},ms:{n:"Kari Panang",d:"Kari pekat dengan daun limau purut"}},
{cat:"curry",img:"images/Red Curry Beef.png",price:"RM25",en:{n:"Red Curry Beef",d:"Tender beef in spiced red curry"},ms:{n:"Kari Merah Daging",d:"Daging lembut dalam kari merah rempah"}},
{cat:"curry",img:"images/Green Curry Chicken.png",price:"RM18",en:{n:"Green Curry Chicken",d:"Chicken simmered in coconut green curry"},ms:{n:"Kari Hijau Ayam",d:"Ayam dalam kari hijau santan"}},

{cat:"seafood",img:"images/Steamed Seabass Lime Chili.png",price:"RM45",en:{n:"Steamed Seabass Lime Chili",d:"Whole seabass, lime & chili sauce"},ms:{n:"Ikan Siakap Stim Limau Cili",d:"Ikan siakap dengan sos limau & cili"}},
{cat:"seafood",img:"images/Sotong Telur Masin.png",price:"RM28",en:{n:"Salted Egg Squid",d:"Crispy squid in salted egg sauce"},ms:{n:"Sotong Telur Masin",d:"Sotong rangup bersalut telur masin"}},
{cat:"seafood",img:"images/Ikan Masam Manis.png",price:"RM30",en:{n:"Sweet Sour Fish",d:"Crispy fish in tangy sweet sauce"},ms:{n:"Ikan Masam Manis",d:"Ikan rangup bersama sos masam manis"}},
{cat:"seafood",img:"images/Ketam Cili Gaya Thai.png",price:"RM55",en:{n:"Chili Crab Thai Style",d:"Whole crab in fiery chili sauce"},ms:{n:"Ketam Cili Gaya Thai",d:"Ketam utuh dalam sos cili pedas"}},
{cat:"seafood",img:"images/Udang Panggang.png",price:"RM35",en:{n:"Grilled Prawn",d:"Charcoal-grilled tiger prawns"},ms:{n:"Udang Panggang",d:"Udang harimau dipanggang atas arang"}},

{cat:"special",img:"images/Mango Salad.png",price:"RM16",en:{n:"Mango Salad",d:"Shredded green mango, chili lime dressing"},ms:{n:"Kerabu Mangga",d:"Mangga muda dihiris, sos limau cili"}},
{cat:"special",img:"images/Papaya Salad (Som Tam).png",price:"RM15",en:{n:"Papaya Salad (Som Tam)",d:"Spicy shredded green papaya salad"},ms:{n:"Kerabu Betik (Som Tam)",d:"Kerabu betik muda pedas"}},
{cat:"special",img:"images/Thai Fish Cake.png",price:"RM18",en:{n:"Thai Fish Cake",d:"Springy fried fish cakes, sweet chili"},ms:{n:"Cucur Ikan Thai",d:"Cucur ikan kenyal dengan cili manis"}},
{cat:"special",img:"images/Chicken Pandan.png",price:"RM20",en:{n:"Chicken Pandan",d:"Pandan-wrapped fried marinated chicken"},ms:{n:"Ayam Pandan",d:"Ayam berperisa dibalut daun pandan"}},
{cat:"special",img:"images/Thai Spring Roll.png",price:"RM14",en:{n:"Thai Spring Roll",d:"Crispy rolls with vegetables & glass noodle"},ms:{n:"Popiah Goreng Thai",d:"Popiah rangup dengan sayur & tanghoon"}},
{cat:"special",img:"images/Satay Thailand.png",price:"RM25",en:{n:"Satay Thailand",d:"Grilled skewers, Thai peanut sauce"},ms:{n:"Satay Thailand",d:"Sate dipanggang, sos kacang Thailand"}},

{cat:"malaysian",img:"images/Nasi Lemak.png",price:"RM8",en:{n:"Nasi Lemak",d:"Coconut rice, sambal, egg, anchovies"},ms:{n:"Nasi Lemak",d:"Nasi santan, sambal, telur, ikan bilis"}},
{cat:"malaysian",img:"images/Mee Goreng Mamak.png",price:"RM9",en:{n:"Mee Goreng Mamak",d:"Spiced fried yellow noodles"},ms:{n:"Mee Goreng Mamak",d:"Mi kuning digoreng berempah"}},
{cat:"malaysian",img:"images/Char Kuey Teow.png",price:"RM10",en:{n:"Char Kuey Teow",d:"Wok-fried flat noodles, prawns, egg"},ms:{n:"Char Kuey Teow",d:"Kuey teow goreng, udang, telur"}},
{cat:"malaysian",img:"images/Nasi Goreng Kampung.png",price:"RM9",en:{n:"Nasi Goreng Kampung",d:"Village-style spicy fried rice"},ms:{n:"Nasi Goreng Kampung",d:"Nasi goreng pedas gaya kampung"}},
{cat:"malaysian",img:"images/Satay Ayam.png",price:"RM16",en:{n:"Satay Ayam",d:"Grilled chicken skewers, peanut sauce"},ms:{n:"Satay Ayam",d:"Sate ayam dipanggang, sos kacang"}},
{cat:"malaysian",img:"images/Roti Canai.png",price:"RM3",en:{n:"Roti Canai",d:"Flaky flatbread with dhal curry"},ms:{n:"Roti Canai",d:"Roti berlapis dengan kari dhal"}},
{cat:"malaysian",img:"images/Laksa.png",price:"RM12",en:{n:"Laksa",d:"Spicy coconut noodle soup"},ms:{n:"Laksa",d:"Sup mi pedas berkuah santan"}},
{cat:"malaysian",img:"images/Mee Kari.png",price:"RM10",en:{n:"Mee Kari",d:"Curry noodle soup with chicken & tofu puff"},ms:{n:"Mee Kari",d:"Sup mi kari dengan ayam & taupok"}},
{cat:"malaysian",img:"images/Ayam Rendang.png",price:"RM14",en:{n:"Ayam Rendang",d:"Slow-cooked chicken in rendang spice"},ms:{n:"Ayam Rendang",d:"Ayam dimasak perlahan dengan rempah rendang"}},
{cat:"malaysian",img:"images/Chicken Rice.png",price:"RM10",en:{n:"Chicken Rice",d:"Poached chicken, fragrant rice"},ms:{n:"Nasi Ayam",d:"Ayam kukus, nasi wangi"}},

{cat:"drinks",img:"images/Thai tea.png",price:"RM8",en:{n:"Thai Milk Tea",d:"Creamy iced Thai tea"},ms:{n:"Thai Milk Tea",d:"Teh Thai ais berkrim"}},
{cat:"drinks",img:"images/Thai Green Tea.png",price:"RM8",en:{n:"Thai Green Tea",d:"Iced green tea, condensed milk"},ms:{n:"Thai Green Tea",d:"Teh hijau ais, susu pekat"}},
{cat:"drinks",img:"images/Coconut Shake.png",price:"RM10",en:{n:"Coconut Shake",d:"Blended young coconut shake"},ms:{n:"Kocakan Kelapa",d:"Kocakan kelapa muda"}},
{cat:"drinks",img:"images/Butterfly Pea Lemo.png",price:"RM9",en:{n:"Butterfly Pea Lemon",d:"Blue pea flower, fresh lemon"},ms:{n:"Bunga Telang Limau",d:"Air bunga telang dengan limau"}},
{cat:"drinks",img:"images/Lemongrass Drink.png",price:"RM8",en:{n:"Lemongrass Drink",d:"Refreshing iced lemongrass"},ms:{n:"Air Serai",d:"Air serai ais menyegarkan"}},
{cat:"drinks",img:"images/Roselle Juice.png",price:"RM8",en:{n:"Roselle Juice",d:"Tangy hibiscus roselle juice"},ms:{n:"Jus Rosel",d:"Jus rosel masam segar"}},
{cat:"drinks",img:"images/Teh Tarik.png",price:"RM4",en:{n:"Teh Tarik",d:"Pulled milk tea, frothy top"},ms:{n:"Teh Tarik",d:"Teh berbuih ditarik"}},
{cat:"drinks",img:"images/Teh O Ais Limau.png",price:"RM4",en:{n:"Teh O Ais Limau",d:"Iced black tea with lime"},ms:{n:"Teh O Ais Limau",d:"Teh o ais dengan limau"}},
{cat:"drinks",img:"images/milo.png",price:"RM7",en:{n:"Milo Dinosaur",d:"Iced Milo topped with Milo powder"},ms:{n:"Milo Dinosaur",d:"Milo ais bertabur serbuk Milo"}},
{cat:"drinks",img:"images/Sirap Bandung.png",price:"RM5",en:{n:"Sirap Bandung",d:"Rose syrup with milk"},ms:{n:"Sirap Bandung",d:"Sirap mawar bersama susu"}},
{cat:"drinks",img:"images/Kopi O.png",price:"RM4",en:{n:"Kopi O",d:"Black coffee, Malaysian style"},ms:{n:"Kopi O",d:"Kopi hitam gaya Malaysia"}},
{cat:"drinks",img:"images/Nescafe Ice.png",price:"RM5",en:{n:"Nescafe Ice",d:"Iced instant coffee with milk"},ms:{n:"Nescafe Ais",d:"Kopi segera ais bersama susu"}},
{cat:"drinks",img:"images/Limau Asam Boi.png",price:"RM6",en:{n:"Limau Asam Boi",d:"Lime juice with preserved plum"},ms:{n:"Limau Asam Boi",d:"Jus limau dengan asam boi"}},
{cat:"drinks",img:"images/Iced barley.png",price:"RM4",en:{n:"Barley Drink",d:"Iced barley drink, refreshing"},ms:{n:"Air Barli",d:"Air barli ais menyegarkan"}},

{cat:"dessert",img:"images/Mango Sticky Rice.png",price:"RM14",en:{n:"Mango Sticky Rice",d:"Sweet mango over coconut sticky rice"},ms:{n:"Pulut Mangga",d:"Mangga manis atas pulut santan"}},
{cat:"dessert",img:"images/Tub Tim Krob.png",price:"RM10",en:{n:"Tub Tim Krob",d:"Water chestnut in sweet coconut milk"},ms:{n:"Tub Tim Krob",d:"Sengkuang dalam santan manis"}},
{cat:"dessert",img:"images/Coconut Ice Cream.png",price:"RM10",en:{n:"Coconut Ice Cream",d:"Homemade coconut ice cream"},ms:{n:"Ais Krim Kelapa",d:"Ais krim kelapa buatan sendiri"}},
{cat:"dessert",img:"images/Thai Coconut Pudding.png",price:"RM1",en:{n:"Thai Coconut Pudding",d:"Silky coconut custard pudding"},ms:{n:"Puding Kelapa Thai",d:"Puding santan lembut & pekat"}},
{cat:"dessert",img:"images/Banana Fritter Ice Cream.png",price:"RM12",en:{n:"Banana Fritter Ice Cream",d:"Crispy banana fritters, ice cream"},ms:{n:"Cekodok Pisang Ais Krim",d:"Cekodok pisang rangup, ais krim"}},
{cat:"dessert",img:"images/Durian Sticky Rice.png",price:"RM16",en:{n:"Durian Sticky Rice",d:"Ripe durian over coconut sticky rice"},ms:{n:"Pulut Durian",d:"Durian masak atas pulut santan"}}
];

const categories = [
  {key:"signature",en:"Signature Thai",ms:"Signature Thai"},
  {key:"soup",en:"Soup & Tomyam",ms:"Sup & Tomyam"},
  {key:"rice",en:"Rice",ms:"Nasi"},
  {key:"noodles",en:"Noodles",ms:"Mi"},
  {key:"curry",en:"Curry",ms:"Kari"},
  {key:"seafood",en:"Seafood",ms:"Hidangan Laut"},
  {key:"special",en:"Thai Special",ms:"Istimewa Thai"},
  {key:"malaysian",en:"Malaysian Food",ms:"Makanan Malaysia"},
  {key:"drinks",en:"Drinks",ms:"Minuman"},
  {key:"dessert",en:"Dessert",ms:"Pencuci Mulut"}
];
let activeCat = "signature";

const galleryImgs = [
  "images/Durian Sticky Rice.png", 
 "images/Ayam Rendang.png",
 "images/Basil Chicken Rice (Pad Kra Pao).png",
 "images/Butterfly Pea Lemo.png",
 "images/Cashew Chicken.png",
 "images/Char Kuey Teow.png",
 "images/Chicken Pandan.png",
 "images/Chicken Rice.png",
 "images/Coconut Shake.png",
 "images/Green Curry Chicken.png",
 "images/Grilled Beef Short Rib.png",
 "images/Ikan Masam Manis.png",
 "images/Ketam Cili Gaya Thai.png", 
 "images/Laksa.png",
 "images/Lemongrass Drink.png", 
 "images/Mango Salad.png",
 "images/Massaman Curry.png",
 "images/Mee Goreng Mamak.png",
 "images/Mee Kari.png",
 "images/Mi Drunken.jpg",


];

/* ================= HELPERS ================= */
// Ambil versi foto beresolusi lebih tinggi untuk ditampilkan di lightbox
function hiRes(url){
  return url.replace(/([?&])w=\d+/, "$11600").replace(/([?&])q=\d+/, "$190");
}

/* ================= RENDER FUNCTIONS ================= */
function renderTabs(){
  const wrap = document.getElementById("menuTabs");
  wrap.innerHTML = categories.map(c=>`<button class="menu-tab-btn ${c.key===activeCat?'active':''}" data-cat="${c.key}">${c[currentLang]}</button>`).join("");
  wrap.querySelectorAll(".menu-tab-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{activeCat=btn.dataset.cat;renderTabs();renderMenu();});
  });
}
function renderMenu(){
  const grid = document.getElementById("menuGrid");
  const items = menuData.filter(m=>m.cat===activeCat);
  grid.innerHTML = items.map((m,i)=>`
    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${(i%3)*100}">
      <div class="food-card">
        <div class="fc-img"><img class="zoomable" src="${m.img}" data-full="${hiRes(m.img)}" data-caption="${m[currentLang].n}" alt="${m[currentLang].n}" loading="lazy"></div>
        <div class="fc-body">
          <h5>${m[currentLang].n}</h5>
          <p>${m[currentLang].d}</p>
          <div class="price">${m.price}</div>
        </div>
      </div>
    </div>`).join("");
  AOS.refreshHard();
}
function renderGallery(){
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = galleryImgs.map(src=>`
    <div class="gallery-item"><img class="zoomable" src="${src}" data-full="${hiRes(src)}" data-caption="Thai Heritage Restaurant" loading="lazy" alt="Thai Heritage Restaurant"><div class="gi-overlay"><i class="fa-solid fa-magnifying-glass-plus"></i></div></div>
  `).join("");
}
function applyTranslations(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
  document.documentElement.lang = currentLang;
  renderTabs();
  renderMenu();
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded",()=>{
  AOS.init({once:true,duration:800,easing:"ease-out-cubic"});
  renderGallery();
  applyTranslations();

  // Loader
  window.addEventListener("load",()=>{
    setTimeout(()=>document.getElementById("loader").classList.add("hide"),600);
  });
  setTimeout(()=>document.getElementById("loader").classList.add("hide"),2500);

  // Hero swiper
  new Swiper(".heroSwiper",{
    loop:true,effect:"fade",fadeEffect:{crossFade:true},
    autoplay:{delay:4500,disableOnInteraction:false},
    speed:1200
  });

  // Sticky nav
  const nav = document.getElementById("mainNav");
  window.addEventListener("scroll",()=>{
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });

  // Back to top button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll",()=>{
    backToTop.classList.toggle("show", window.scrollY > 500);
  });
  backToTop.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
  });

  // Mobile menu
  document.getElementById("mobileToggle").addEventListener("click",()=>{
    const m = document.getElementById("mobileMenu");
    m.style.display = m.style.display === "none" ? "block" : "none";
  });
  document.querySelectorAll("#mobileMenu a").forEach(a=>a.addEventListener("click",()=>{
    document.getElementById("mobileMenu").style.display="none";
  }));

  // Language toggle
  document.querySelectorAll("[data-lang]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      currentLang = btn.dataset.lang;
      document.querySelectorAll("[data-lang]").forEach(b=>{
        b.classList.toggle("active", b.dataset.lang===currentLang);
      });
      applyTranslations();
    });
  });

  // Dark mode toggle
  function toggleDark(){
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    document.querySelectorAll("#darkToggle i, #darkToggleMobile i").forEach(i=>{
      i.className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun";
    });
  }
  document.getElementById("darkToggle").addEventListener("click",toggleDark);
  document.getElementById("darkToggleMobile").addEventListener("click",toggleDark);

  // Lightbox (klik foto untuk perbesar)
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");

  function openLightbox(src, caption){
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || "";
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox(){
    lightbox.classList.remove("show");
    document.body.style.overflow = "";
  }

  // Delegasi klik: berlaku untuk foto menu & galeri, termasuk yang dirender ulang saat ganti tab/bahasa
  document.addEventListener("click",(e)=>{
    const img = e.target.closest(".zoomable");
    if(img){
      openLightbox(img.dataset.full || img.src, img.dataset.caption);
    }
  });
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click",(e)=>{
    if(e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown",(e)=>{
    if(e.key === "Escape") closeLightbox();
  });

  // Reservation form
  document.getElementById("reservationForm").addEventListener("submit",function(e){
    e.preventDefault();
    alert(translations[currentLang].form_success);
    this.reset();
  });

  // Smooth scroll offset for sticky nav
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click",function(e){
      const id=this.getAttribute("href");
      if(id.length>1 && document.querySelector(id)){
        e.preventDefault();
        const y = document.querySelector(id).getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({top:y,behavior:"smooth"});
      }
    });
  });
});
