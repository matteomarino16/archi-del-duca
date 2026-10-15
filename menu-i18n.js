// Menu tradotto (EN/FR/DE). In italiano vengono mostrate le pagine originali (pagina1-7.jpg).
// Quando cambia il menu aggiornare sia le immagini sia questi dati.
// Ogni piatto: it = nome originale, t = traduzioni, a = allergeni, p = prezzo, d = descrizione (opzionale)

const menuLabels = {
    en: {
        story: 'Our Story',
        cuisine: 'Our Cuisine',
        footnote: '* Price varies according to the ingredients available. For allergen information, please ask our dining room staff.',
        allergens: 'The numbers next to each dish refer to the allergen table at the end of the menu.'
    },
    fr: {
        story: 'Notre histoire',
        cuisine: 'Notre cuisine',
        footnote: '* Prix variable selon les produits disponibles. Pour toute information sur les allergènes, veuillez vous adresser au personnel de salle.',
        allergens: 'Les numéros à côté de chaque plat renvoient au tableau des allergènes à la fin du menu.'
    },
    de: {
        story: 'Unsere Geschichte',
        cuisine: 'Unsere Küche',
        footnote: '* Preis je nach verfügbaren Zutaten. Für Informationen zu Allergenen wenden Sie sich bitte an unser Servicepersonal.',
        allergens: 'Die Zahlen neben den Gerichten verweisen auf die Allergentabelle am Ende der Speisekarte.'
    }
};

const menuIntro = {
    en: {
        story: 'Archi del Duca is a family story, a place where tradition and memory meet the present. An arch is a passage that unites two worlds: past and present, home cooking and refinement, family hospitality and the pleasure of good food. “Del Duca” recalls the ancient heart of Martina Franca, between noble residences and the flavours of popular cuisine. For almost twenty years, passing through our arches has meant entering a place where you eat well, feel at home and celebrate Apulian cuisine with respect and passion.',
        cuisine: 'We use extra virgin olive oil from our territory both for cooking and for finishing our dishes. Fried food is prepared with sunflower oil. We celebrate our land by choosing fresh products, selected daily according to season and availability. For organisational reasons or market availability, some seafood, including squid, cuttlefish, octopus, scampi and prawns, may be frozen or blast-chilled.'
    },
    fr: {
        story: 'Archi del Duca est une histoire de famille, un lieu où la tradition et la mémoire rencontrent le présent. Un arc est un passage qui unit deux mondes : le passé et le présent, la cuisine familiale et le raffinement, l’accueil chaleureux et le plaisir de la bonne table. « Del Duca » évoque le cœur ancien de Martina Franca, entre demeures nobles et saveurs de la cuisine populaire. Depuis près de vingt ans, franchir nos arcs signifie entrer dans un lieu où l’on mange bien, où l’on se sent comme à la maison et où l’on célèbre la cuisine des Pouilles avec respect et passion.',
        cuisine: 'Nous utilisons de l’huile d’olive extra vierge de notre terroir, aussi bien pour la cuisson que pour la finition de nos plats. Les fritures sont réalisées à l’huile de tournesol. Nous valorisons notre territoire en choisissant des produits frais, sélectionnés chaque jour selon la saison et la disponibilité. Pour des raisons d’organisation ou de disponibilité sur le marché, certains produits de la mer, dont les calamars, les seiches, le poulpe, les langoustines et les crevettes, peuvent être surgelés ou congelés rapidement.'
    },
    de: {
        story: 'Archi del Duca ist eine Familiengeschichte, ein Ort, an dem Tradition und Erinnerung auf die Gegenwart treffen. Ein Bogen ist ein Durchgang, der zwei Welten verbindet: Vergangenheit und Gegenwart, Hausmannskost und Raffinesse, familiäre Gastfreundschaft und den Genuss guten Essens. „Del Duca“ erinnert an das historische Herz von Martina Franca, zwischen Adelspalästen und den Aromen der Volksküche. Seit fast zwanzig Jahren bedeutet das Durchschreiten unserer Bögen, einen Ort zu betreten, an dem man gut isst, sich wie zu Hause fühlt und die apulische Küche mit Respekt und Leidenschaft feiert.',
        cuisine: 'Wir verwenden natives Olivenöl extra aus unserer Region sowohl zum Kochen als auch zum Verfeinern unserer Gerichte. Frittiert wird mit Sonnenblumenöl. Wir schätzen unsere Region, indem wir frische Produkte wählen, die täglich nach Saison und Verfügbarkeit ausgesucht werden. Aus organisatorischen Gründen oder je nach Marktlage können einige Meeresprodukte, darunter Calamari, Tintenfisch, Oktopus, Scampi und Garnelen, tiefgekühlt oder schockgefrostet sein.'
    }
};

// Ogni pagina contiene una o più sezioni; footnote: true mostra la nota sul prezzo variabile
const menuPages = [
    {
        footnote: true,
        sections: [{
            title: { en: 'Starters', fr: 'Entrées', de: 'Vorspeisen' },
            items: [
                { it: 'Capocollo e formaggi della Murgia', a: '7', p: '14€',
                  t: { en: 'Capocollo and Murgia cheeses', fr: 'Capocollo et fromages de la Murgia', de: 'Capocollo und Käse aus der Murgia' } },
                { it: 'Flan o terrina del giorno', a: '3,7', p: '13€',
                  t: { en: 'Flan or terrine of the day', fr: 'Flan ou terrine du jour', de: 'Flan oder Terrine des Tages' } },
                { it: 'Fritto dell’orto con polpettine', a: '1,3,7', p: '11€',
                  t: { en: 'Fried seasonal vegetables with meatballs', fr: 'Friture de légumes de saison et boulettes de viande', de: 'Frittiertes Saisongemüse mit Fleischbällchen' } },
                { it: 'Carpaccio di porcini', a: '7', p: '14€',
                  t: { en: 'Porcini mushroom carpaccio', fr: 'Carpaccio de cèpes', de: 'Steinpilz-Carpaccio' } },
                { it: 'Polpo in pignatta', a: '1,4', p: '15€',
                  t: { en: 'Octopus slow-cooked “in pignatta” (terracotta pot)', fr: 'Poulpe mijoté « in pignatta » (pot en terre cuite)', de: 'Oktopus „in Pignatta“ (im Tontopf geschmort)' } },
                { it: 'Sfiziosità dello Chef*', a: '', p: '',
                  t: { en: 'Chef’s special*', fr: 'Spécialité du Chef*', de: 'Spezialität des Küchenchefs*' } },
                { it: 'Antipasto del Duca*', a: '', p: '23€',
                  t: { en: 'Antipasto del Duca*', fr: 'Antipasto del Duca*', de: 'Antipasto del Duca*' },
                  d: { en: 'A selection of five courses chosen by the Chef from the menu and the daily specials. Minimum 2 people.',
                       fr: 'Une sélection de cinq plats choisis par le Chef parmi la carte et les suggestions du jour. Minimum 2 personnes.',
                       de: 'Eine Auswahl von fünf Gerichten des Küchenchefs aus der Karte und den Tagesempfehlungen. Mindestens 2 Personen.' } }
            ]
        }]
    },
    {
        footnote: true,
        sections: [{
            title: { en: 'First Courses', fr: 'Premiers plats', de: 'Erste Gänge' },
            items: [
                { it: 'Orecchiette e cime di rapa', a: '1,4', p: '14€',
                  t: { en: 'Orecchiette with turnip greens', fr: 'Orecchiette aux feuilles de navet (cime di rapa)', de: 'Orecchiette mit Stängelkohl (Cime di Rapa)' } },
                { it: 'Orecchiette della nonna con pomodoro passato e polpettine', a: '1,3,7', p: '15€',
                  t: { en: 'Grandma’s orecchiette with tomato sauce and meatballs', fr: 'Orecchiette de grand-mère, sauce tomate et boulettes de viande', de: 'Orecchiette nach Großmutters Art mit Tomatensauce und Fleischbällchen' } },
                { it: 'Tagliatelle al ragù', a: '1,3,7,9', p: '15€',
                  t: { en: 'Tagliatelle with meat ragù', fr: 'Tagliatelle au ragù de viande', de: 'Tagliatelle mit Fleischragout' } },
                { it: 'Fave e verdure', a: '', p: '15€',
                  t: { en: 'Fava beans and seasonal greens', fr: 'Fèves et légumes verts de saison', de: 'Saubohnen mit Saisongemüse' } },
                { it: 'Tagliolini al tartufo', a: '1,3,7', p: '23€',
                  t: { en: 'Tagliolini with truffle', fr: 'Tagliolini à la truffe', de: 'Tagliolini mit Trüffel' } },
                { it: 'Risotto del giorno', a: '7,8,9', p: '20€',
                  t: { en: 'Risotto of the day', fr: 'Risotto du jour', de: 'Risotto des Tages' } },
                { it: 'Proposta del giorno*', a: '7,8,9', p: '',
                  t: { en: 'Chef’s daily special*', fr: 'Suggestion du jour du Chef*', de: 'Tagesempfehlung des Küchenchefs*' } }
            ]
        }]
    },
    {
        footnote: false,
        sections: [{
            title: { en: 'Main Courses', fr: 'Plats principaux', de: 'Hauptgerichte' },
            items: [
                { it: 'Filetto di vitello alla griglia', a: '', p: '25€',
                  t: { en: 'Grilled veal fillet', fr: 'Filet de veau grillé', de: 'Gegrilltes Kalbsfilet' } },
                { it: 'Tagliata di manzo, rucola e grana', a: '1,7', p: '25€',
                  t: { en: 'Sliced beef with rocket and Grana cheese', fr: 'Tagliata de bœuf, roquette et grana', de: 'Tagliata vom Rind mit Rucola und Grana' } },
                { it: 'Entrecôte di manzo alla griglia', a: '', p: '24€',
                  t: { en: 'Grilled beef entrecôte', fr: 'Entrecôte de bœuf grillée', de: 'Gegrilltes Rinder-Entrecôte' } },
                { it: 'Tagliata in padellino, rucola e grana', a: '7', p: '23€',
                  t: { en: 'Pan-seared sliced beef with rocket and Grana cheese', fr: 'Tagliata de bœuf poêlée, roquette et grana', de: 'In der Pfanne gebratene Tagliata mit Rucola und Grana' } },
                { it: 'Filetto ubriaco', a: '7', p: '27€',
                  t: { en: 'Beef fillet in red wine', fr: 'Filet de bœuf au vin rouge', de: 'Rinderfilet in Rotwein' } },
                { it: 'Filetto al pepe verde', a: '7', p: '27€',
                  t: { en: 'Beef fillet with green peppercorn sauce', fr: 'Filet de bœuf au poivre vert', de: 'Rinderfilet mit grüner Pfeffersauce' } },
                { it: 'Fritto di paranza', a: '1,4', p: '18€',
                  t: { en: 'Mixed fried local fish', fr: 'Friture de petits poissons locaux', de: 'Frittierte gemischte Fische aus der Region' } },
                { it: 'Frittura di calamari', a: '1,4', p: '18€',
                  t: { en: 'Crispy fried squid', fr: 'Calamars frits', de: 'Frittierte Calamari' } },
                { it: 'Pescato del giorno', a: '4', p: '90€/kg',
                  t: { en: 'Catch of the day', fr: 'Pêche du jour', de: 'Fang des Tages' } },
                { it: 'Scampi o gambero viola', a: '2', p: '110€',
                  t: { en: 'Scampi or purple Mediterranean prawns', fr: 'Langoustines ou crevettes violettes de Méditerranée', de: 'Kaisergranat oder violette Mittelmeergarnelen' } }
            ]
        }]
    },
    {
        footnote: true,
        sections: [
            {
                title: { en: 'Side Dishes', fr: 'Accompagnements', de: 'Beilagen' },
                items: [
                    { it: 'Insalata verde', a: '', p: '4€',
                      t: { en: 'Green salad', fr: 'Salade verte', de: 'Grüner Salat' } },
                    { it: 'Patate al forno', a: '', p: '5€',
                      t: { en: 'Roast potatoes', fr: 'Pommes de terre au four', de: 'Ofenkartoffeln' } },
                    { it: 'Verdure grigliate', a: '', p: '6€',
                      t: { en: 'Grilled vegetables', fr: 'Légumes grillés', de: 'Gegrilltes Gemüse' } },
                    { it: 'Cicoria ripassata', a: '', p: '6€',
                      t: { en: 'Sautéed chicory', fr: 'Chicorée sautée', de: 'Geschmorte Zichorie' } }
                ]
            },
            {
                title: { en: 'Desserts', fr: 'Desserts', de: 'Desserts' },
                items: [
                    { it: 'Dolce della casa*', a: '', p: '7€',
                      t: { en: 'Homemade dessert*', fr: 'Dessert maison*', de: 'Hausgemachtes Dessert*' } }
                ]
            }
        ]
    },
    {
        footnote: false,
        sections: [
            {
                title: { en: 'Beverages', fr: 'Boissons', de: 'Getränke' },
                items: [
                    { it: 'Acqua 75 cl', a: '', p: '€2,50',
                      t: { en: 'Still or sparkling water (75 cl)', fr: 'Eau plate ou gazeuse (75 cl)', de: 'Stilles oder sprudelndes Wasser (75 cl)' } },
                    { it: 'Bibite (33 cl in bottiglia di vetro)', a: '', p: '€3',
                      t: { en: 'Soft drinks (Coca-Cola, Coca-Cola Zero, Fanta – 33 cl glass bottle)', fr: 'Boissons (Coca-Cola, Coca-Cola Zero, Fanta – bouteille en verre 33 cl)', de: 'Softdrinks (Coca-Cola, Coca-Cola Zero, Fanta – 33 cl Glasflasche)' } },
                    { it: 'Birra Menabrea 33 cl', a: '', p: '€4',
                      t: { en: 'Menabrea beer (33 cl)', fr: 'Bière Menabrea (33 cl)', de: 'Menabrea Bier (33 cl)' } },
                    { it: 'Birra Menabrea 66 cl', a: '', p: '€6',
                      t: { en: 'Menabrea beer (66 cl)', fr: 'Bière Menabrea (66 cl)', de: 'Menabrea Bier (66 cl)' } },
                    { it: 'Calice vino selezione ristorante', a: '', p: '€5',
                      t: { en: 'Glass of house selection wine', fr: 'Verre de vin – sélection de la maison', de: 'Glas Wein – Auswahl des Hauses' } },
                    { it: 'Caffè', a: '', p: '€1,50',
                      t: { en: 'Espresso', fr: 'Café expresso', de: 'Espresso' } }
                ]
            },
            {
                title: { en: 'Digestifs & Spirits', fr: 'Digestifs & spiritueux', de: 'Digestifs & Spirituosen' },
                items: [
                    { it: 'Amari', a: '', p: '€4',
                      t: { en: 'Italian digestifs', fr: 'Digestifs italiens', de: 'Italienische Kräuterliköre' } },
                    { it: 'Rum', a: '', p: '€5',
                      t: { en: 'Rum selection', fr: 'Sélection de rhums', de: 'Rum-Auswahl' } },
                    { it: 'Grappe', a: '', p: '€5',
                      t: { en: 'Grappa selection', fr: 'Sélection de grappas', de: 'Grappa-Auswahl' } },
                    { it: 'Coperto', a: '', p: '€3', plain: true,
                      t: { en: 'Cover charge', fr: 'Couvert', de: 'Gedeck' } }
                ]
            }
        ]
    }
];

function renderMenuText(lang) {
    const images = document.getElementById('menu-images');
    const text = document.getElementById('menu-text');
    if (!images || !text) return;

    // In italiano si mostrano le pagine originali del menu
    if (!menuLabels[lang]) {
        images.hidden = false;
        text.hidden = true;
        return;
    }

    const L = menuLabels[lang];
    const logo = '<img class="menu-card-logo" src="/archi.png" alt="">';

    let html = `
        <article class="menu-card">
            <h3 class="menu-card-brand">Ristorante<br>Archi del Duca</h3>
            <p class="menu-card-sub">Lucia &amp; Damiano</p>
            <h3 class="menu-card-title">${L.story}</h3>
            <p class="menu-card-text">${menuIntro[lang].story}</p>
            <h3 class="menu-card-title">${L.cuisine}</h3>
            <p class="menu-card-text">${menuIntro[lang].cuisine}</p>
            <p class="menu-card-text menu-card-allergens">${L.allergens}</p>
        </article>`;

    menuPages.forEach(page => {
        html += '<article class="menu-card">';
        page.sections.forEach(section => {
            html += `<h3 class="menu-card-title">${section.title[lang]}</h3><ul class="menu-card-list">`;
            section.items.forEach(item => {
                const allergens = item.a ? ` <sup>${item.a}</sup>` : '';
                const desc = item.d ? `<span class="dish-desc">${item.d[lang]}</span>` : '';
                html += `
                    <li class="dish${item.plain ? ' dish-plain' : ''}">
                        <div class="dish-row">
                            <span class="dish-name">${item.t[lang]}${allergens}</span>
                            <span class="dish-price">${item.p}</span>
                        </div>
                        <span class="dish-it">${item.it}</span>
                        ${desc}
                    </li>`;
            });
            html += '</ul>';
        });
        if (page.footnote) html += `<p class="menu-card-footnote">${L.footnote}</p>`;
        html += logo + '</article>';
    });

    text.innerHTML = html;
    images.hidden = true;
    text.hidden = false;
}

document.addEventListener('langchange', (e) => renderMenuText(e.detail));
