// Traduzioni del sito: italiano (default), inglese, francese, tedesco
const translations = {
    it: {
        'nav.home': 'Home',
        'nav.menu': 'Menù',
        'nav.gallery': 'Galleria',
        'whatsapp': 'Prenota un tavolo',
        'about.title': 'About Us',
        'about.p1': 'Archi del Duca non è solo un nome, è un passaggio di famiglia, tradizione e memoria.<br>Un arco è un varco che unisce due mondi: passato e presente, cucina di casa e raffinatezza,<br>accoglienza familiare e gusto autentico.',
        'about.p2': '‘Del Duca’ omaggia il cuore antico di Martina Franca, tra nobili dimore e sapori popolari.<br>Da quasi vent’anni, attraversare i nostri archi significa entrare in un luogo dove si mangia bene,<br>si è accolti come a casa, e si celebra la cucina pugliese con rispetto e passione.',
        'location.title': 'Dove Siamo',
        'location.hours': 'Apertura:<br>12:30 - 15:00; <br>20:00 - 23:30. <br>Chiusura: Mercoledì',
        'gallery.title': 'Galleria',
        'footer.vat': 'P.iva 026556940737',
        'footer.rights': '&copy; 2026 ArchidelDuca.it - Tutti i diritti riservati',
        'title.home': 'Archi del Duca',
        'title.menu': 'Menu - Archi del Duca',
        'title.gallery': 'Galleria - Archi del Duca'
    },
    en: {
        'nav.home': 'Home',
        'nav.menu': 'Menu',
        'nav.gallery': 'Gallery',
        'whatsapp': 'Book a table',
        'about.title': 'About Us',
        'about.p1': 'Archi del Duca is not just a name: it is a legacy of family, tradition and memory.<br>An arch is a passage that unites two worlds: past and present, home cooking and refinement,<br>family hospitality and authentic flavour.',
        'about.p2': '‘Del Duca’ pays tribute to the ancient heart of Martina Franca, between noble residences and popular flavours.<br>For almost twenty years, crossing our arches has meant entering a place where you eat well,<br>are welcomed like at home, and Apulian cuisine is celebrated with respect and passion.',
        'location.title': 'Where We Are',
        'location.hours': 'Opening hours:<br>12:30 - 15:00; <br>20:00 - 23:30. <br>Closed: Wednesday',
        'gallery.title': 'Gallery',
        'footer.vat': 'VAT no. 026556940737',
        'footer.rights': '&copy; 2026 ArchidelDuca.it - All rights reserved',
        'title.home': 'Archi del Duca',
        'title.menu': 'Menu - Archi del Duca',
        'title.gallery': 'Gallery - Archi del Duca'
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.menu': 'Menu',
        'nav.gallery': 'Galerie',
        'whatsapp': 'Réserver une table',
        'about.title': 'Qui sommes-nous',
        'about.p1': 'Archi del Duca n’est pas seulement un nom : c’est un héritage de famille, de tradition et de mémoire.<br>Un arc est un passage qui unit deux mondes : passé et présent, cuisine familiale et raffinement,<br>accueil chaleureux et goût authentique.',
        'about.p2': '« Del Duca » rend hommage au cœur ancien de Martina Franca, entre demeures nobles et saveurs populaires.<br>Depuis près de vingt ans, franchir nos arcs signifie entrer dans un lieu où l’on mange bien,<br>où l’on est accueilli comme à la maison et où l’on célèbre la cuisine des Pouilles avec respect et passion.',
        'location.title': 'Où nous trouver',
        'location.hours': 'Ouverture :<br>12h30 - 15h00 ; <br>20h00 - 23h30. <br>Fermeture : mercredi',
        'gallery.title': 'Galerie',
        'footer.vat': 'N° TVA 026556940737',
        'footer.rights': '&copy; 2026 ArchidelDuca.it - Tous droits réservés',
        'title.home': 'Archi del Duca',
        'title.menu': 'Menu - Archi del Duca',
        'title.gallery': 'Galerie - Archi del Duca'
    },
    de: {
        'nav.home': 'Startseite',
        'nav.menu': 'Speisekarte',
        'nav.gallery': 'Galerie',
        'whatsapp': 'Tisch reservieren',
        'about.title': 'Über uns',
        'about.p1': 'Archi del Duca ist nicht nur ein Name, sondern ein Erbe aus Familie, Tradition und Erinnerung.<br>Ein Bogen ist ein Durchgang, der zwei Welten verbindet: Vergangenheit und Gegenwart, Hausmannskost und Raffinesse,<br>familiäre Gastfreundschaft und authentischen Geschmack.',
        'about.p2': '„Del Duca“ ist eine Hommage an das historische Herz von Martina Franca, zwischen Adelspalästen und volkstümlichen Aromen.<br>Seit fast zwanzig Jahren bedeutet das Durchschreiten unserer Bögen, einen Ort zu betreten, an dem man gut isst,<br>wie zu Hause empfangen wird und die apulische Küche mit Respekt und Leidenschaft feiert.',
        'location.title': 'So finden Sie uns',
        'location.hours': 'Öffnungszeiten:<br>12:30 - 15:00 Uhr; <br>20:00 - 23:30 Uhr. <br>Ruhetag: Mittwoch',
        'gallery.title': 'Galerie',
        'footer.vat': 'USt-IdNr. 026556940737',
        'footer.rights': '&copy; 2026 ArchidelDuca.it - Alle Rechte vorbehalten',
        'title.home': 'Archi del Duca',
        'title.menu': 'Speisekarte - Archi del Duca',
        'title.gallery': 'Galerie - Archi del Duca'
    }
};

const LANGS = ['it', 'en', 'fr', 'de'];

// GitHub Pages non permette redirect 301: se si arriva da un vecchio link (menu.html, index.html)
// la barra degli indirizzi viene ripulita mostrando /menu, /galleria o /
(function cleanUrl() {
    const path = location.pathname;
    if (!path.endsWith('.html')) return;
    let clean = path.replace(/\.html$/, '');
    if (clean.endsWith('/index')) clean = clean.slice(0, -'index'.length);
    history.replaceState(null, '', clean + location.search + location.hash);
})();

function getSavedLang() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
        const saved = localStorage.getItem('lang');
        if (LANGS.includes(saved)) return saved;
    } catch (e) {}
    return 'it';
}

function applyLang(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = t[el.dataset.i18n];
        if (value === undefined) return;
        el.innerHTML = value;
    });

    const titleKey = document.body.dataset.i18nTitle;
    if (titleKey && t[titleKey]) document.title = t[titleKey];

    document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    const current = document.querySelector('.lang-current');
    if (current) current.textContent = lang.toUpperCase();

    try { localStorage.setItem('lang', lang); } catch (e) {}

    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector('.lang-switch');
    const toggle = document.querySelector('.lang-current');

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        switcher.classList.toggle('open');
    });

    document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            applyLang(btn.dataset.lang);
            switcher.classList.remove('open');
        });
    });

    document.addEventListener('click', () => switcher.classList.remove('open'));

    applyLang(getSavedLang());
});
