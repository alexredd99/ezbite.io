let map;
let service;
let infowindow;
let currDate = new Date();
currDate = currDate.getDay() !== 0 ? currDate.getDay() - 1 : 7;

"use strict";

function createMarker(place) {
    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location
    });
    google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name);
        infowindow.open(map);
    });
}

function RestuarantInfo(name,number,categoryArr){
    this.name = name;
    this.number = number;
    this.categoryArr = categoryArr;  // Takes an array of category strings
}

RestuarantInfo.prototype = {
    constructor: RestuarantInfo,
   
    display(popUpBox,restName,restNumber){
        popUpBox.style.display = 'block';
        restName.textContent = this.name;
        restNumber.textContent = this.number;

        const evanston = new google.maps.LatLng(42.045, -87.688);
        infowindow = new google.maps.InfoWindow();
        map = new google.maps.Map(document.getElementById("map"), {
                center: evanston,
                zoom: 16
        });
        const request = {
                query: this.name,
                fields: ["name", "geometry","place_id"],
        };
        service = new google.maps.places.PlacesService(map);
        service.findPlaceFromQuery(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                createMarker(results[0]);
                map.setCenter(results[0].geometry.location);

                let hoursRequest = {reference: results[0].place_id}
                service.getDetails(hoursRequest, (details,status)=>{
                    document.getElementById('restInfo').textContent = details.opening_hours.weekday_text[currDate];
                })
            }
        });   
    },
}

let restaurantList = {
    chipotle: new RestuarantInfo(
        'Chipotle',
        '(847) 425-3959',
        ['fast food'],
    ),

    tomate: new RestuarantInfo(
        'Tomate',
        '(847) 905-0194',
        ['fast food','latin'],
    ),
    
    dnd: new RestuarantInfo(
        'D&D Dogs',
        '(847) 864-1909',
        ['fast food','burgers'],
    ),

    giordanos: new RestuarantInfo(
        'Giordano\'s',
        '(847) 475-5000',
        ['italian','pizza'],
    ),

    louMalnatis: new RestuarantInfo(
        'Lou Malnati\'s',
        '(847) 328-5400',
        ['pizza','italian'],
    ),

    buffaloJoes: new RestuarantInfo(
        'Buffalo Joe\'s',
        '(847) 328-5525',
        ['fast food'],
    ),

    chickenShack: new RestuarantInfo(
        'Evanston Chicken Shack',
        '(847) 328-9360',
        ['fast food'],
    ),

    joyYee: new RestuarantInfo(
        'Joy Yee Noodle',
        '(847) 733-1900',
        ['pan-asian'],
    ),

    todoroki: new RestuarantInfo(
        'Todoroki',
        '(847) 733-0536',
        ['pan-asian'],
    ),

    farmhouse: new RestuarantInfo(
        'Farmhouse Evanston',
        '(847) 492-9700',
        ['burgers'],
    ),

    shangNoodles: new RestuarantInfo(
        'Shang Noodle & Chinese',
        '(847) 859-6868',
        ['pan-asian'],
    ),

    burgerKing: new RestuarantInfo(
        'Burger King',
        '(847) 864-9199',
        ['burgers','fast food'],
    ),

    jimmyJohns: new RestuarantInfo(
        'Jimmy John\'s',
        '(847) 328-8858',
        ['fast food'],
    ),

    dominos: new RestuarantInfo(
        'Domino\'s Pizza',
        '(847) 563-3030',
        ['pizza'],
    ),

    papaJohns: new RestuarantInfo(
        'Papa John\'s Pizza',
        '(847) 440-3152',
        ['pizza'],
    ),
    
    bat17: new RestuarantInfo(
        'Bat 17',
        '(847) 733-7117',
        ['burgers'],
    ),

    lePeep: new RestuarantInfo(
        'Le Peep Evanston',
        '(847) 328-4880',
        ['breakfast'],
    ),

    edzos: new RestuarantInfo(
        'Edzo\'s Burger Shop',
        '(847) 864-3396',
        ['burgers','fast food']
    ),

    potbelly: new RestuarantInfo(
        'Potbelly Sandwich Shop',
        '(847) 328-1800',
        ['fast food'],
    ),

    epicBurger: new RestuarantInfo(
        'Epic Burger',
        '(847) 868-8968',
        ['fast food','burgers'],
    ),

    mustards: new RestuarantInfo(
        'Mustard\'s Last Stand',
        '(847) 864-2700',
        ['fast food']
    ),

    tenQ: new RestuarantInfo(
        '10Q Chicken',
        '(847) 859-6100',
        ['pan-asian'],
    ),

    gigios: new RestuarantInfo(
        'Gigio\'s Pizzeria',
        '(847) 328-0990',
        ['pizza'],
    ),

    vietNomNom: new RestuarantInfo(
        'Viet Nom Nom',
        '(847) 859-6326',
        ['pan-asian','fast food'],
    ),

    ponoOnoPoke: new RestuarantInfo(
        'Pono Ono Poke',
        '(847) 859-6390',
        ['fast food'],
    ),

    alsDeli: new RestuarantInfo(
        'Al\'s Deli',
        '(847) 475-9400',
        ['fast food'],
    ),

    stackednFolded: new RestuarantInfo(
        'Stacked & Folded',
        '(847) 328-9100',
        ['burgers'],
    ),

    chilis: new RestuarantInfo(
        'Chili\'s Grill & Bar',
        '(847) 328-9068',
        ['burgers'],
    ),

    littleMexicanCafe: new RestuarantInfo(
        'That Little Mexican Cafe',
        '(847) 905-1550',
        ['latin'],
    ),

    eggsperienceExpress: new RestuarantInfo(
        'Eggsperience',
        '(847) 859-2240',
        ['breakfast'],
    ),

    blaze: new RestuarantInfo(
        'Blaze Pizza',
        '(847) 264-9263',
        ['pizza','fast food'],
    ),

    flatTop: new RestuarantInfo(
        'Flat Top Grill',
        '(847) 570-0100',
        ['pan-asian'],
    ),
    
    koi: new RestuarantInfo(
        'Koi Evanston',
        '(847) 866-6969',
        ['pan-asian'],
    ),

    coldstone: new RestuarantInfo(
        'Cold Stone Creamery',
        '(847) 424-9000',
        ['ice cream'],
    ),

    subway: new RestuarantInfo(
        'Subway',
        '(847) 864-6600',
        ['fast food'],
    ),

    heckys: new RestuarantInfo(
        'Hecky\'s Barbecue',
        '(847) 492-1182',
        ['fast food'],
    ),

    siamSplendour: new RestuarantInfo(
        'Siam Splendour',
        '(847) 492-1008',
        ['pan-asian', 'fast food'],
    ),

    clarkes: new RestuarantInfo(
        'Clarke\'s Off Campus',
        '(847) 864-1610',
        ['breakfast', 'fast food'],
    ),

    tacoDiablo: new RestuarantInfo(
        'Taco Diablo',
        '(847) 869-4343',
        ['latin']
    ),

    nextofKin: new RestuarantInfo(
        'Next of Kin',
        '(847) 563-8242',
        ['burgers'],
    ),

    cocinata: new RestuarantInfo(
        'La Cocinita',
        '(847) 332-1625',
        ['latin', 'fast food'],
    ),

    bangersandLace: new RestuarantInfo(
        'Bangers & Lace',
        '(847) 905-0854',
        ['burgers']
    ),

    tenMileHouse: new RestuarantInfo(
        'Ten Mile House',
        '(847) 905-0669',
        ['burgers'],
    ),

    celticKnot: new RestuarantInfo(
        'Celtic Knot Public House',
        '(847) 864-1679',
        ['burgers'],
    ),

    mtEverest: new RestuarantInfo(
        'Mt. Everest Restaurant',
        '(847) 491-1069',
        ['pan-asian'],
    ),

    laMacc: new RestuarantInfo(
        'La Macchina Cafe',
        '(847) 425-1080',
        ['italian'],
    ),

    peppercorn: new RestuarantInfo(
        'Peppercorns Kitchen',
        '(847) 563-8461',
        ['pan-asian'],
    ),

    cupitol: new RestuarantInfo(
        'Cupitol Coffee & Eatery',
        '(847) 868-8078',
        ['coffee'],
    ),

    coffeeLab: new RestuarantInfo(
        'Coffee Lab',
        '(847) 868-8033',
        ['coffee'],
    ),

    laoSzeChuan: new RestuarantInfo(
        'Lao Sze Chuan',
        '(847) 868-8989',
        ['pan-asian'],
    ),

    goldenOlympic: new RestuarantInfo(
        'Golden Olympic Restaurant',
        '(847) 328-1617',
        ['breakfast'],
    ),

    davesNewKitchen: new RestuarantInfo(
        'Dave\'s New Kitchen',
        '(847) 864-6000',
        ['italian'],
    ),

    terraAndVine: new RestuarantInfo(
        'Terra & Vine',
        '(847) 563-4333',
        ['italian'],
    ),

    prairieMoon: new RestuarantInfo(
        'Prairie Moon',
        '(847) 864-8328',
        ['burgers'],
    ),

    koco: new RestuarantInfo(
        'Koco Table',
        '(847) 866-7055',
        ['pan-asian'],
    ),
    
    trattoriaDoc: new RestuarantInfo(
        'Trattoria D.O.C.',
        '(847) 475-1111',
        ['italian'],
    ),

    einstein: new RestuarantInfo(
        'Einstein Bros. Bagels',
        '(847) 328-9888',
        ['breakfast'],
    ),

    ovoFrito: new RestuarantInfo(
        'Ovo Frito Cafe',
        '(847) 859-6966',
        ['breakfast','coffee']
    ),
    colectivo: new RestuarantInfo(
        'Colectivo Coffee',
        '(312) 535-3001',
        ['coffee'],
    ),
    peets: new RestuarantInfo(
        'Peet\'s Coffee',
        '(847) 864-8413',
        ['coffee'],
    ),
    newport: new RestuarantInfo(
        'Newport Coffee House',
        '(847) 563-8322',
        ['coffee'],
    ),
    kungFuTea: new RestuarantInfo(
        'Kung Fu Tea',
        '(224) 307-2314',
        ['coffee'],
    ),
    tealiciousBubble: new RestuarantInfo(
        'TEAlicious BUBBLE',
        '(224) 999-7065',
        ['coffee'],
    ),
    laCorallie: new RestuarantInfo(
        'Pâtisserie Coralie',
        '(847) 905-0491',
        ['coffee'],
    ),
};

export {RestuarantInfo, restaurantList};