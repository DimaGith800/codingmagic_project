const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];

const buttons = document.querySelectorAll('.main_container--game--pickascientist--filters--wrapper--firstcolumn--filter, .main_container--game--pickascientist--filters--wrapper--secondcolumn--filter, .main_container--game--pickascientist--filters--filter')
const cardWrapper = document.querySelector('.main_container--game--pickascientist--cards');

function initScientistsFilter() {
    buttons.forEach((button) => {
        button.addEventListener('click', (evt) => {
            buttons.forEach(btn => btn.style.backgroundColor = '');
            button.style.backgroundColor = 'grey';
        
            const filteredData = createCards(evt.currentTarget.id);
            renderCards(filteredData);
        });
    });
}

function createCards(sortType) {
    switch (sortType) {
        case 'filter-19th-century':
            return scientists.filter(s => s.born > 1800 && s.born <= 1900);

        case 'filter-alphabet':
            return [...scientists].sort((a, b) => a.surname.localeCompare(b.surname));

        case 'filter-died-oldest':
            return [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));

        case 'filter-born-latest':
            const youngestScientist = scientists.reduce((youngest, current) => 
                current.born > youngest.born ? current : youngest
            );
            return [youngestScientist];

        case 'filter-born-albert':
            const albert = scientists.find(s => s.surname === 'Einstein');
            return albert ? [albert] : [];

        case 'filter-surnames-start-c':
            return scientists.filter(s => s.surname[0].toUpperCase() === 'C');

        case 'filter-name-start-a':
            return scientists.filter(s => s.name.startsWith('A'));

        case 'filter-age-oldestandyoungest':
            const longestLife = scientists.reduce((max, s) => 
                (s.dead - s.born) > (max.dead - max.born) ? s : max
            );
            const shortestLife = scientists.reduce((min, s) => 
                (s.dead - s.born) < (min.dead - min.born) ? s : min
            );
            return [shortestLife, longestLife];

        case 'filter-samesurnames':
            return scientists.filter(s => s.name[0].toLowerCase() === s.surname[0].toLowerCase());

        default: 
            return [];
    }
}

function renderCards(arr) {
    cardWrapper.innerHTML = '';
    arr.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('main_container--game--pickascientist--cards--card');
        
        const scientistName = document.createElement('p');
        scientistName.classList.add('main_container--game--pickascientist--cards--card--name');
        scientistName.textContent = `${element.name} ${element.surname}`;
        
        const scientistLife = document.createElement('p');
        scientistLife.classList.add('main_container--game--pickascientist--cards--card--life');
        scientistLife.textContent = `${element.born} - ${element.dead}`;

        card.append(scientistName, scientistLife);
        cardWrapper.append(card);
    });
}

export {initScientistsFilter}