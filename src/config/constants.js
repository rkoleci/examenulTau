
import { v4 as uuidv4 } from 'uuid';

export const appName = 'ExamenulTau'

export const apiKey = ''

export const menuList = ['home', 'classes', 'exercises', 'matter', 'memorator', 'your opinion']

export const filters = [
    {
        id: uuidv4(), title: 'By Chapter', type: 'chapter', filters: [
            {
                title: 'Clasa a 5-a',
                id: uuidv4(),
                items: [
                    {
                        title: 'Fracții ',
                        id: uuidv4(),
                        options: [
                            "Fracții subunitare",
                            "Fracții supraunitare",
                            "Fracții echiunitare",
                            "Aflarea unei fracții dintr-un număr",
                            "Fracții echivalente",
                            "Amplificarea fracțiilor",
                            "Simplificarera fracțiilor",
                            "Fracții ireductibile",
                            "Scoaterea întregilor din fracții",
                            "Introducerea întregilor în fracții",
                            "Fracții zecimale finite",
                            "Fracții zecimale periodice simple",
                            "Fracții zecimale periodice mixte",
                            "Transformarea fracțiilor ordinare în fractii zecimale",
                            "Transformarea fracțiilor zecimale în fracții ordinare"
                        ]
                    },
                    {
                        title: 'Măsurare şi măsuri ',
                        id: uuidv4(),
                        options: [
                            "Unități de măsură pentru lungime; transformări",
                            "Unități de măsură pentru arie; transformări",
                            "Unități de măsură pentru volum; transformări"
                        ]
                    },
                    {
                        title: 'Numere ',
                        id: uuidv4(),
                        options: [
                            "Mulţimi numerice/nenumerice",
                            "Relaţia dintre un element şi o mufiime",
                            "Relaţirintre muffimi",
                            "Mulţimi finite, cardinalul unei mufiimi fintle",
                            "Operaţii cu reuniune, intersecţie, diterenţă",
                            "Mulţimi definite printr-o proprietate comună a elementelor lor",
                            "Intervale numerice şi reprezentarea lor pe axa numerelor",
                            "Interşecţia şi reuniunea intervalelor "
                        ]
                    },
                ]
            },
            {
                title: 'Clasa a 6-a',
                id: uuidv4(),
                items: [
                    {
                        title: 'Linii imporlante in triunghi si concurenta lor (Vezi maj putine)',
                        id: uuidv4(),
                        options: [
                            "Medialoarea ▪ ConcurenIa mediatoarelor. Centrul cercului ❑circumscris Bisectoarea",
                            "ConcurenIa bisectoarelor. Centrul cercului inscris",
                            "Inăltimea",
                            "Concurenta Ortocentrul",
                            "Mediana",
                            "Concurenta medianolor. Centrul de groutate",
                            "Metlianain triunghiul dreptunghic",
                            "Linia mijlocie"
                        ]
                    },
                    {
                        title: 'Triunghiul ',
                        id: uuidv4(),
                        options: [
                            "Suma unghlurilor in triunghi",
                            "Unghiul exterior",
                            "Triunghlul oarecare",
                            "Triunghlul isoscel",
                            "Triunghlul echilateral",
                            "Triunghlul asculitunghic",
                            "Triunghlul dreptunghic",
                            "Triunghlul obtuzunghic",
                            "Criterille de congruenţă pentru Munghlurile ❑OdreCare Criterille de congruenţă pentru triunghiurile dreptunghice",
                            "Cazuri de congn,enţă",
                            "Liniile importante in triunghiul isoscel",
                            "Proprietătile triunghiului isoscel",
                            "Liniile importante in triunghiul echilateral",
                            "Proprietătile triunghiului echilateral",
                        ]
                    },
                    {
                        title: 'Divizibilitatea numerelor naturale ',
                        id: uuidv4(),
                        options: [
                            "Divizor; divizori ❑comuni:",
                            "Multiplu; mNliplii comuni",
                            "Criterii de divizibilitate cu: 2, 5, 10^n",
                            "Criterii de divizibilitate cu:3, 9",
                            "Numere prime; numere compuse",
                            "Descompunerea numerelor naturale (n produs de puteri tle numere prime;",
                            "Deterrninarea celui mai mare divizor comun (c.m.m.d.c.)",
                            "Numere prime intre ele",

                        ]
                    },
                    {
                        title: 'Rapoarte şi proportii (Vezi mă putine)',
                        id: uuidv4(),
                        options: [
                            "Rapoarte",
                            "Proportii.",
                            "Determinarea unui tennen necunoscul dintr-o proporlie.",
                            "Proprietatea fundamentală a proportiilor.",
                            "Proportii derivate.",
                            "Şir de rapoade egale.",
                            "Mărimi direct proportionale",
                            "Mărimi invers proportionale",
                            "Regula de trei simplă"
                        ]
                    },
                    {
                        title: 'Notiuni fundamentale de geomettie plană ',
                        id: uuidv4(),
                        options: [
                            "Puncte, drepte, plane, semidrepte, semiplane conventii Pozlţile de notare, reprezentări. relative ale unui puncllaţăde o dreaptă",
                            "Prin două puncte distincte trece o dreaptă Si numai una. Puncte coliniare",
                            "Pozlle relative două drepte: drepte concurente, drepte paralele",
                            "Axioma paralelor",
                            "Segment, conventii cle notare, reprezentări",
                            "Distanta dintre clouă puncte. Lungimea unui segment",
                            "Mijlocul unui segment",
                            "Simetficul unui punct fată de un punct",
                        ]
                    },
                    {
                        title: 'Paralelism perpendicularbatein plan ',
                        id: uuidv4(),
                        options: [
                            "Criterii de pardelism (unghlur formate de două drepte paralele cu secantă)",
                            "Drepte perpentliculareîn plan (defint[le, nota(ie)",
                            "Distanta de la un punct la o dreaptă",
                            "Mediatoarea unui segment",
                            "Simetna fată de o dreaptă"
                        ]
                    },
                    {
                        title: 'Unghilai',
                        id: uuidv4(),
                        options: [
                            "Clasificări de unghiuri: unghi drept, unghi ascufit, unghi obtvz",
                            "Unghiuri suplementae, unghiuri complementare",
                            "Calcule cu măsuri de unghiuri exprimateln grade şiminute sexagesimale",
                            "Interiorul unui unghi, exteriorul unui unghi",
                            "Unghiuri adiacente",
                            "Bisectoarea unui unghi",
                            "Unghiuri in jurul unui punct, suma măsurilor lor",
                            "Unghiuri opuse id vări, congruenta lor",
                            "Unghi nul, unghi alungit",
                            "Măsura unui unghi",
                            "Unghiuri congmente",
                        ]
                    },
                ]
            },
            {
                title: 'Clasa a 7-a',
                id: uuidv4(),
                items: [
                    {
                        title: 'Numere reale',
                        id: uuidv4(),
                        options: [
                            "Reprezentare pe ază a numerelor reale",
                            "Opusul unui număr real",
                            "Modulul unui număr real",
                            "Compararea numerelor reale"
                        ]
                    },
                    {
                        title: 'Operaţii cu numere reale',
                        id: uuidv4(),
                        options: [
                            "Operaţii cu numere intregi",
                            "Operaţii cu numere raţionale",
                            "Operaţii cu numere reale",
                            "Ordinea efectuării eperaţiilor",
                            "Media aritmetică",
                            "Media aritmetică ponderată",
                            "Media geometrică"
                        ]
                    },
                    {
                        title: 'Radicali',
                        id: uuidv4(),
                        options: [
                            "Rädäcina pätratä",
                            "Algoritmul de extragere a radicalului",
                            "Introducerea factorilor sub radical",
                            "Inmultirea radicalilor",
                            "Impärtirea radicalilor",
                            "Rationalizarea numitorului",
                        ]
                    },
                    {
                        title: 'Asemănarea triunghiurilor',
                        id: uuidv4(),
                        options: [
                            "Teorema lui Thales şi reciproca ei. Teorema fundamentală a asemănării",
                            "Reciproca teoremei lui Thales",
                            "Triunghiuri asemenea Teorema fundamentală a asemănării",
                            "Criteriul de asemănare UU",
                            "Criteriul de asemănare LUL",
                            "Criteriul de asemănare LLL",
                        ]
                    },
                    {
                        title: 'Linia mijlocie',
                        id: uuidv4(),
                        options: [
                            "Linia mijlocie întrun triunghi"
                        ]
                    },
                    {
                        title: 'Paralelogramul. Paralelograme particulare',
                        id: uuidv4(),
                        options: [
                            "Paralelogramul - proprietăți referitoare la laturi, unghiuri, diagonale",
                            "Dreptunghiul",
                            "Rombul",
                            "Pătratul"

                        ]
                    },
                    {
                        title: 'Patrulaterul convex',
                        id: uuidv4(),
                        options: [
                            "Suma măsurilor unghiurilor unui patrulater convex",
                            "Trapezul",
                            "Linia mijlocie în trapez"
                        ]
                    },
                    {
                        title: 'Perimetre și arii',
                        id: uuidv4(),
                        options: [
                            "Perimetrul triunghiului",
                            "Aria triunghiului",
                            "Perimetrul patrulaterului",
                            "Aria dreptunghiului",
                            "Aria pătratului",
                            "Aria paralelogramului",
                            "Aria rombului",
                            "Aria trapezului",
                        ]
                    },
                    {
                        title: 'Triunghiul dreptunghic',
                        id: uuidv4(),
                        options: [
                            "Proiecţii pe o dreaptă",
                            "Teorema înălţimii",
                            "Teorema catetei",
                            "Teorema lui Pitagora",
                            "Reciproca teoremei lui Pitagora",
                            "Rapoarte trigonometrice: sin, cos, tg, ctg",
                            "Rezolvarea triunghiului dreptunghic",
                            "Proprietăţi ale triunghiului dreptunghic - cateta opusă unghiului de 30 de grade",
                            "Proprietăţi ale triunghiului dreptunghic - mediana corespunzătoare ipotenuzei",
                        ]
                    },
                    {
                        title: 'Produs cartezian',
                        id: uuidv4(),
                        options: [
                            "Produsul cartezian a două mulţimi nevide",
                            "Distanța dintre două puncte din plan",
                            "Reprezentarea într-un sistem de axe ortogonale",
                            "Reprezentarea și interpretarea unor dependențe funcționale printabele, diagrame şi grafice"
                        ]
                    },
                ]
            },
            {
                title: 'Clasa a 8-a',
                id: uuidv4(),
                items: [
                    {
                        title: 'Cercul',
                        id: uuidv4(),
                        options: [
                            "Cercul și discul",
                            "Elementele cercului",
                            "Unghi la centru.Măsura unui arc de cerc",
                            "Unghi înscris în cerc", 
                            "Arce şi coarde în cerc",
                            "Lungimea cercului",
                            "Aria discului",
                            "Lungimea arcului de cerc",
                            "Aria secorului circular",
                            "Triunghiul echilateral",
                            "Pătratul",
                            "Hexagonul"
                        ]
                    },
                    {
                        id: uuidv4(),
                        title: 'Paralelism în spaţiu',
                        options: [
                            "Paralelism: drepte paralele",
                            "Unghiul a două drepte",
                            "Dreapta paralelă cu un plan",
                            "Plane paralele",
                            "Secţiuni paralele cu baza în corpurile geometrice studiate; trunchiul de piramidă şi trunchiul de con circular drept"
                        ]
                    },
                    {
                        title: 'Corpuri geometrice',
                        id: uuidv4(),
                        options: [
                            "Piramida, piramida regulată, tetraedrul regulat; reprezentare, elemente caracteristice, desfășurări",
                            "Prisma dreaptă, paralelipiped dreptunghic, cub; reprezentare, elemente caracteristice,desfășurări",
                            "Cilindru circular drept; reprezentare, elemente caracteristice, desfășurări",
                            "Con circular drept; reprezentare, elemente caracteristice, desfășurări",
                        ]
                    },
                    {
                        title: 'Perpendicularitate în spaţiu',
                        id: uuidv4(),
                        options: [
                            "Perpendicularitate: Drepte perpendiculare în spaţiu",
                            "Dreapta perpendiculară pe un plan",
                            "Plane perpendiculare",
                            "înălțimea unei piramide, înălțimea unui con circular drept",
                            "Distanţa dintre două plane paralele",
                            "Înălţimea prismei drepte, a paralelipipedului dreptunghic, a cilindrului circular drept, a trunchiului de piramidă/concircular drept",

                        ]
                    },
                    {
                        title: 'Calcul algebric',
                        id: uuidv4(),
                        options: [
                            "Valoarea numerică a unei expresii",
                            "Reducerea termenilor asemenea",
                            "Operații cu numere reale reprezentate prin litere (adunare, scădere, înmulţire, împărțire, ridicare la putere)",
                            "Formule de calcul prescurtat: (a:b)p=a2+2ab+b2, unde a,beR",
                            "Formule de calcul prescurtat: (a - b)(a + b)=a2 - be, unde a.beR",
                            "Descompunerea utilizând factor comun",
                            "Descompunerea utilizând formule de calcul prescurtat",
                            "Descompunerea utilizând grupare de termeni"
                        ]
                    },
                    {
                        title: 'Ordinea operaţiilor şi folosirea parantezelor',
                        id: uuidv4(),
                        options: [
                            'ordinea efectuării operaţiilor şi folosirea parantezelor',
                        ]
                    },
                    {
                        title: 'Elementele geometriei spaţiu',
                        id: uuidv4(),
                        options: [
                            "Punct, dreaptă, plan. Notaţii",
                            "Poziţiile relative ale unui punct fată de un plan. Puncte coplanare",
                            "Poziţiile relative a două drepte în spaţiu",
                            "Poziţiile relative ale unei drepte faţă de un plan",
                            "Poziţiile relative a două plane. Plane intersectate",
                            "Prin trei puncte necoliniare trece un singur plan",

                        ]
                    },
                    {
                        title: 'Teorema celor trei perpendiculare',
                        id: uuidv4(),
                        options: [
                            'Teorema celor trei perpendiculare',
                            'Calculul distanței de la un punct la o dreaptă',
                            'Calculul distanței de la un punct la un plan',
                            'Calculul distanței dintre două plane paralele',
                        ]
                    },
                    {
                        title: 'Fracţii algebrice',
                        id: uuidv4(),
                        options: [
                            'Precizarea mulţimii de definiţie a unei expresii algebrice',
                            'Amplificare și simplificare',
                            'Valoarea numerică',
                            'Operații cu fracții algebrice (adunare, scădere, înmulțire, împărțire, ridicare la putere',
                        ]
                    },
                    {
                        title: 'Ecuaţii, inecuaţii,sisteme',
                        id: uuidv4(),
                        options: [
                            'Transformarea unei egalități într-o egalitate echivalentă. Identități',
                            'Ecuații de forma ax+b=0, unde  a,bϵR.  Mulțimea soluțiilor unei ecuații. Ecuații echivalente',
                            'Ecuații de forma  ax²+bx+c=0, unde  a,b,cϵR;',
                            'Inecuații de forma ax+b≥0, (≤,<,>), unde  a,bϵR;',
                            'Sisteme de două ecuații liniare cu două necunoscute.',
                            'Probleme care se rezolvă cu ajutorul ecuațiilor sau a sistemelor de ecuații liniare',
                            'Rezolvarea sistemelor prin metoda substituției.',
                            'Rezolvarea sistemelor prin metoda reducerii.',
                        ]
                    },
                    {
                        title: 'Unghiuri în spaţiu',
                        id: uuidv4(),
                        options: [
                            'Unghiul dintre o dreaptă și un plan',
                            'Proiecții de puncte, de segmente și de drepte pe un plan',
                            'Lungimea proiecției unui segment',
                            'Unghi diedru,unghi plan corespunzător diedrului',
                            'Unghiul a două plane',
                            'Secțiuni diagonale, secțiuni axiale în corpurile studiate (Aria proiecției)',
                        ]
                    },
                    {
                        title: 'Arii şi volume',
                        id: uuidv4(),
                        options: [
                            'Arii și volume: prismă dreaptă (cu baza triunghi echilateral, pătrat sau hexagon regulat), paralelipiped dreptunghic, cub',
                            ' Arii și volume: piramida regulată (cu baza triunghi echilateral, pătrat sau hexagon regulat)',
                            'Arii și volume: trunchi de piramidă regulată',
                            'Arii și volume: cilindru circular drept',
                            'Sfera: arie, volum',
                            'Arii și volume: con circular drept',
                            'Arii și volume: trunchi de con circular drept',
                        ]
                    },
                    {
                        title: 'Statistică',
                        id: uuidv4(),
                        options: [
                            'Date statistice organizate în grafice cu bare și/sau cu linii',
                            'Elemente de organizare a datelor. Reprezentarea datelor prin grafice. Poligonul      frecvențelor',
                            'Date statistice organizate în tabele',
                            'Probabilități (aplicație la rapoarte)',
                            'Elemente de statistică: indicatorii tendinței centrale (frecvență, medie, mediană, mod și amplitudine a unui set de date)',

                        ]
                    },
                    {
                        title: 'Funcţii',
                        id: uuidv4(),
                        options: [
                            'Funcții definite pe mulțimi finite, exprimate cu ajutorul unor diagrame, tabele, formule',
                            'Graficul unei funcții',
                            ' Funcții de forma f : D → R, f(x) = ax + b, unde a și b sunt numere reale și D este o mulțime finită de numere reale sau un interval nedegenerat',
                            'Funcții de forma f : D → R, f(x) = ax + b, interpretare geometrică',
                            'Funcții de forma f : D → R, f(x) = ax + b, lecturi grafice',
                        ]
                    },
                ]
            },
        ]
    },
    { 
        id: uuidv4(),title: 'By Classes', type: 'classes', filters: ['Clasa a 5-a', 'Clasa a 6-a', 'Clasa a 7-a', 'Clasa a 8-a'] },
    { 
        id: uuidv4(),title: 'By Difficulty', type: 'difficulty', filters: ['Usor', 'Mediu', 'Greu', 'Foarte Greu'] },
]

export const examItems = {
    items: Array.from(Array(100).keys()).map(i => {
        return {
            "id": "Mat05C01P01I01" + Math.random(),
            "enabled": true,
            "iteractionType": "choice",
            "curriculum": "MAT",
            "grade": 5,
            "chapter": 5,
            "notion": "NOT14C13",
            "difficulty": 1,
            "body": {
                "content": "<p>Avem $A=\\left\\{ 1,3,4,5 \\right\\}$ şi $B=\\left\\{ 0,1,2,3,6 \\right\\}$.</p>",
                "interaction": {
                    "responseIdentifier": "RESPONSE",
                    "shuffle": true,
                    "minChoices": 1,
                    "maxChoices": 1,
                    "type": "formula"
                }
            }
        }
    }),
    "total_count": 100,
    "size": 10,
    "start_index": 0
}

export const exerciseErrors = [
    'Part of the statement of the exercise is missing.',
    'An image does not look right.',
    'An image is missing.',
    'Something else is not working properly.'
]

export const mathJaxConfig = {
    loader: { load: ["[tex]/html"] },
    tex: {
        packages: { "[+]": ["html"] },
        inlineMath: [["$", "$"]],
        displayMath: [["$$", "$$"]]
    }
};

export const studentList = [
    'rei',
    'john',
    'ben',
]

export const classList = [
    '5th grade A',
    '5th grade B',
    '6th grade A',
    '6th grade B',
    '7th grade A',
    '8th grade B',

]