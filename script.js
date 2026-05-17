// ==========================================================================
// PURE JAVASCRIPT ARHITEKTURA - BeTourist Podaci i Funkcionalnosti
// ==========================================================================

// Centralizovana baza podataka agencije
const data = {
    ljeto: [
        ['Santorini', 'slikesajt/santorini.jpg.webp'],
        ['Rodos', 'slikesajt/rodos.webp'],
        ['Kapri', 'slikesajt/SICILIJA.jpg'],
        ['Amalfi', 'slikesajt/amalfi.webp'],
        ['Majorka', 'slikesajt/majorka.jpg'],
        ['Ibica', 'slikesajt/ibica.jpg'],
        ['Alanja', 'slikesajt/alanya.jpg'],
        ['Hurgada', 'slikesajt/hurgada.jpg']
    ],
    zima: [
        ['St. Moritz', 'slikesajt/moric.jpg'],
        ['Kicbil', 'slikesajt/kicbil.jpg'],
        ['Nasfeld', 'slikesajt/nasfeld.jpg'],
        ['Cervinia', 'slikesajt/cervinia.avif'],
        ['Paradiski', 'slikesajt/paradiski.webp']
    ],
    grad: [
        ['Barselona', 'slikesajt/barcelonaa.avif'],
        ['Madrid', 'slikesajt/madrid.webp'],
        ['Rim', 'slikesajt/rim.jpg'],
        ['Lisabon', 'slikesajt/lisabon.jpg'],
        ['Venecija', 'slikesajt/venecija.jpg'],
        ['Pariz', 'slikesajt/paris.webp'],
        ['London', 'slikesajt/london.jpg'],
        ['Amsterdam', 'slikesajt/amsterdam.jpg'],
        ['Budimpešta', 'slikesajt/budimpesta.jpg'],
        ['Istanbul', 'slikesajt/istanbul.webp']
    ],
    popular: [
        ['Pariz', 'slikesajt/paris.webp', '5 dana', '600€'],
        ['London', 'slikesajt/london.jpg', '7 dana', '700€'],
        ['Rim', 'slikesajt/rim.jpg', '5 dana', '550€'],
        ['Barselona', 'slikesajt/barcelonaa.avif', '6 dana', '620€']
    ],
    exotic: [
        ['Maldivi', 'slikesajt/maldivi.jpg'],
        ['Tajland', 'slikesajt/tajland.jpg'],
        ['Bali', 'slikesajt/bali.webp'],
        ['Lanzarote', 'slikesajt/lanzarote.jpg'],
        ['Mauricijus', 'slikesajt/mauri.jpg'],
        ['Sejšeli', 'slikesajt/sajseli.jpg']
    ],
    firstminute: [
        ['Santorini', 'slikesajt/santorini.jpg.webp', '7 dana', '499€', '700€'],
        ['Kapri', 'slikesajt/SICILIJA.jpg', '5 dana', '589€', '800€'],
        ['Bali', 'slikesajt/bali.webp', '14 dana', '1199€', '1500€'],
        ['Hurgada', 'slikesajt/hurgada.jpg', '8 dana', '449€', '650€']
    ],
    faraway: [
        ['Jordan', 'slikesajt/jordan.avif'],
        ['Kenija', 'slikesajt/kenya.webp'],
        ['Japan', 'slikesajt/japan.jpg'],
        ['Brazil', 'slikesajt/brazil.webp'],
        ['Novi Zeland', 'slikesajt/zeland.jpg']
    ],
    weekend: [
        ['Beograd', 'slikesajt/beograd.jpg'],
        ['Zagreb', 'slikesajt/Zagreb.webp'],
        ['Trst', 'slikesajt/trst.png'],
        ['Grad', 'slikesajt/grac.jpg']
    ],
    reviews: [
        { n: 'David', r: 'Grafički dizajner', t: 'Sve je bilo po dogovoru. Hotel vrhunski, vodič još bolji!', a: 'https://i.pravatar.cc/120?img=12' },
        { n: 'Marija', r: 'Profesor fizike', t: 'Sve preporuke za ekipu iz agencije, učinili su nam ljetovanje nezaboravnim.', a: 'https://i.pravatar.cc/120?img=47' },
        { n: 'Stefan', r: 'Inženjer', t: 'Brza komunikacija, odlične cijene i sjajna organizacija putovanja.', a: 'https://i.pravatar.cc/120?img=33' }
    ]
};

// Specifični detaljni podaci isključivo za Lanzarote modal i plan puta
const lanzaroteData = {
    title: 'Lanzarote, Kanarska ostrva',
    img: 'slikesajt/lanzarote.jpg',
    price: '900€',
    days: '7 dana',
    distance: '4.501 km',
    temp: '25°C',
    dateFrom: '15.06.2026.',
    dateTo: '22.06.2026.',
    desc: 'Dobrodošli na Lanzarote, ostrvo vatre i umjetnosti, gdje se dramatični vulkanski pejzaži susreću sa bijelim pijeskom i tirkiznim okeanom, stvarajući osjećaj boravka na drugoj planeti.',
    plan: [
        ['Dan 1', 'Ulazak u srce vulkana — posjeta Nacionalnom parku Timanfaya, demonstracija geotermalne toplote i ručak u restoranu El Diablo.'],
        ['Dan 2', 'Umjetnost i priroda Cesara Manriquea — Jameos del Agua, spektakularna pećina sa podzemnim jezerom.'],
        ['Dan 3', 'Obilazak vinograda La Geria i degustacija lokalnih vina iz vulkanskog pepela.'],
        ['Dan 4', 'Slobodan dan na plaži Papagayo — kristalno čista voda i bijeli pijesak.'],
        ['Dan 5', 'Izlet na ostrvo La Graciosa, vožnja brodom i ronjenje.'],
        ['Dan 6', 'Posjeta gradu Teguise i lokalnoj nedjeljnoj pijaci.'],
        ['Dan 7', 'Slobodno vrijeme i povratak.']
    ]
};

// --- RENDER FUNKCIJE ZA KARTICE ---

// Standardna kartica (Sa klikom na Lanzarote)
const buildSimpleCard = ([name, imgPath]) => {
    if (name === 'Lanzarote') {
        return `
        <div onclick="openDest('Lanzarote')" class="card clickable-card">
            <div class="card-img-wrapper">
                <img class="card-img" loading="lazy" src="${imgPath}" alt="${name}">
            </div>
            <div class="card-gradient-overlay">
                <h3 class="card-overlay-heading">${name}</h3>
            </div>
        </div>`;
    }
    return `
    <div class="card">
        <div class="card-img-wrapper">
            <img class="card-img" loading="lazy" src="${imgPath}" alt="${name}">
        </div>
        <div class="card-gradient-overlay">
            <h3 class="card-overlay-heading">${name}</h3>
        </div>
    </div>`;
};

// Kartica sa prikazom cijena i popusta
const buildPriceCard = ([name, imgPath, days, price, oldPrice]) => `
<div class="card">
    <div class="card-img-wrapper">
        <img class="card-img" loading="lazy" src="${imgPath}" alt="${name}">
    </div>
    <div class="card-content-body">
        <div class="card-flex-header">
            <h3 class="card-pack-title">${name}</h3>
            <div class="price-flex-block">
                ${oldPrice ? `<span class="old-price-slashed">${oldPrice}</span>` : ''}
                <span class="current-price-bold ${oldPrice ? 'sale' : ''}">${price}</span>
            </div>
        </div>
        ${days ? `<p class="card-duration-text">${days}</p>` : ''}
    </div>
</div>`;

// --- MENADŽMENT KATEGORIJA (TABS) ---
function setCat(categoryKey) {
    const gridElement = document.getElementById('cat-grid');
    if (gridElement && data[categoryKey]) {
        gridElement.innerHTML = data[categoryKey].map(buildSimpleCard).join('');
    }

    // Ažuriranje aktivnog vizuelnog stanja dugmadi
    document.querySelectorAll('.cat-tab-item').forEach(btn => btn.classList.remove('active'));
    const activeButton = document.getElementById(`cat-btn-${categoryKey}`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// --- UPRAVLJANJE DETALJIMA DESTINACIJE (LANZAROTE MODAL) ---
function openDest(name) {
    if (name !== 'Lanzarote') return;
    const d = lanzaroteData;
    const contentBox = document.getElementById('destContent');
    
    if (contentBox) {
        contentBox.innerHTML = `
            <div class="relative-container">
                <img src="${d.img}" alt="${d.title}" class="modal-hero-banner-img">
                <button onclick="closeDest()" class="modal-close-btn">&times;</button>
            </div>
            <div class="modal-content-padding">
                <div class="modal-flex-row">
                    <h2 class="modal-large-heading">${d.title}</h2>
                    <div class="modal-accent-price">${d.price}</div>
                </div>
                
                <div class="modal-features-pill-grid">
                    <div class="feature-pill-box">
                        <div class="pill-emoji">⏰</div>
                        <p class="pill-label-mini">Trajanje</p>
                        <p class="pill-value-bold">${d.days}</p>
                    </div>
                    <div class="feature-pill-box">
                        <div class="pill-emoji">📍</div>
                        <p class="pill-label-mini">Udaljenost</p>
                        <p class="pill-value-bold">${d.distance}</p>
                    </div>
                    <div class="feature-pill-box">
                        <div class="pill-emoji">☀️</div>
                        <p class="pill-label-mini">Temperatura</p>
                        <p class="pill-value-bold">${d.temp}</p>
                    </div>
                    <div class="feature-pill-box">
                        <div class="pill-emoji">📅</div>
                        <p class="pill-label-mini">Datum</p>
                        <p class="pill-value-bold" style="font-size: 11px;">15.06 - 22.06</p>
                    </div>
                </div>
                
                <h3 class="modal-sub-section-title">Opis putovanja</h3>
                <p class="modal-rich-description">${d.desc}</p>
                
                <h3 class="modal-sub-section-title">Plan putovanja</h3>
                <ul class="modal-itinerary-list">
                    ${d.plan.map(([day, text]) => `
                        <li class="itinerary-row">
                            <span class="itinerary-day-badge">${day}</span>
                            <p class="itinerary-text-desc">${text}</p>
                        </li>
                    `).join('')}
                </ul>
                
                <div class="modal-footer-checkout-bar">
                    <div>
                        <p class="pill-label-mini">Ukupna cijena</p>
                        <p class="modal-large-heading">${d.price}</p>
                    </div>
                    <button onclick="openPay('${d.title.replace(/'/g, "\'")}', '${d.price}')" class="btn-brand-action">Rezerviši odmah &rarr;</button>
                </div>
            </div>`;
    }
    
    const modalElement = document.getElementById('destModal');
    if (modalElement) {
        modalElement.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeDest() {
    const modalElement = document.getElementById('destModal');
    if (modalElement) modalElement.classList.add('hidden');
    document.body.style.overflow = '';
}

// --- UPRAVLJANJE REZERVACIJOM I PLAĆANJEM ---
function openPay(title, price) {
    closeDest(); // Zatvori prethodni modal ako je bio otvoren
    
    document.getElementById('payTitle').textContent = title;
    document.getElementById('payPrice').textContent = price;
    document.getElementById('payTotal').textContent = price;
    
    const payModal = document.getElementById('payModal');
    if (payModal) {
        payModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    
    // Resetuj selektovane metode i formu u prvobitno stanje
    document.querySelectorAll('.pay-method-btn').forEach(btn => btn.classList.remove('ring-active'));
    document.getElementById('payForm').classList.remove('hidden');
}

function closePay() {
    const payModal = document.getElementById('payModal');
    if (payModal) payModal.classList.add('hidden');
    document.body.style.overflow = '';
}

function selectMethod(element) {
    document.querySelectorAll('.pay-method-btn').forEach(btn => btn.classList.remove('ring-active'));
    element.classList.add('ring-active');
}

function confirmPay() {
    closePay();
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeSuccess() {
    const successModal = document.getElementById('successModal');
    if (successModal) successModal.classList.add('hidden');
    document.body.style.overflow = '';
}

// --- UPRAVLJANJE AUTH MODALOM ---
function openAuth(mode) {
    const authModal = document.getElementById('authModal');
    if (authModal) authModal.classList.remove('hidden');
    setAuthMode(mode);
}

function closeAuth() {
    const authModal = document.getElementById('authModal');
    if (authModal) authModal.classList.add('hidden');
}

function setAuthMode(mode) {
    const isLogin = mode === 'login';
    document.getElementById('authTitle').textContent = isLogin ? 'Prijavi se' : 'Registruj se';
    document.getElementById('authSubtitle').textContent = isLogin ? 'Dobrodošli nazad u BeTourist' : 'Kreirajte besplatan BeTourist nalog';
    document.getElementById('authSubmit').textContent = isLogin ? 'Prijavi se' : 'Kreiraj nalog';
    document.getElementById('authSwitchText').textContent = isLogin ? 'Nemate nalog?' : 'Već imate nalog?';
    
    const switchBtn = document.getElementById('authSwitchBtn');
    switchBtn.textContent = isLogin ? 'Registruj se' : 'Prijavi se';
    switchBtn.dataset.mode = isLogin ? 'register' : 'login';
}

function toggleAuth() {
    const targetMode = document.getElementById('authSwitchBtn').dataset.mode;
    setAuthMode(targetMode);
}

// --- INICIJALIZACIJA SAJTA I POPUNJAVANJE PODATAKA ---
document.addEventListener('DOMContentLoaded', () => {
    // Podrazumijevano učitavanje ljetnih destinacija
    setCat('ljeto');
    
    // Popunjavanje statičkih gridova podacima iz baze
    const popularGrid = document.getElementById('popular-grid');
    if (popularGrid) popularGrid.innerHTML = data.popular.map(buildPriceCard).join('');
    
    const exoticGrid = document.getElementById('exotic-grid');
    if (exoticGrid) exoticGrid.innerHTML = data.exotic.map(buildSimpleCard).join('');
    
    const firstMinuteGrid = document.getElementById('firstminute-grid');
    if (firstMinuteGrid) firstMinuteGrid.innerHTML = data.firstminute.map(buildPriceCard).join('');
    
    const farawayGrid = document.getElementById('faraway-grid');
    if (farawayGrid) farawayGrid.innerHTML = data.faraway.map(buildSimpleCard).join('');
    
    const weekendGrid = document.getElementById('weekend-grid');
    if (weekendGrid) weekendGrid.innerHTML = data.weekend.map(buildSimpleCard).join('');
    
    // Popunjavanje recenzija korisnika
    const reviewsGrid = document.getElementById('reviews-grid');
    if (reviewsGrid) {
        reviewsGrid.innerHTML = data.reviews.map(r => `
            <div class="review-item-card">
                <div class="review-author-row">
                    <img src="${r.a}" alt="${r.n}" class="review-avatar-img">
                    <div class="review-meta">
                        <h4>${r.n}</h4>
                        <p>${r.r}</p>
                    </div>
                    <div class="review-stars-accent">★★★★★</div>
                </div>
                <p class="review-quote-text">"${r.t}"</p>
            </div>
        `).join('');
    }
});
