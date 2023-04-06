// Wir importieren unsere Table klasse
const Table = require('./src/Table');

// wir erstellen unsere spalten
const columns = 
[
    {
        key: 'id',
        title: '#',
        width: 10
    },
    {
        key: 'name',
        title: 'Name',
        width: 25
    },
    {
        key: 'group',
        title: 'Gruppe',
        width: 15
    },
    {
        key: 'role',
        title: 'Rolle',
        width: 50
    }
];

// wir erstellen unsere rows
const rows = 
[
    {
        id: 1,
        name: 'Pawel',
        group: 'Klasse',
        role: 'Schüler'
    },
    {
        id: 2,
        name: 'Benni',
        group: 'Klasse',
        role: 'Schüler'
    },
    {
        id: 3,
        name: 'Paul',
        group: 'Management',
        role: 'Class Manager'
    },
    {
        id: 4,
        name: 'Mandy',
        group: 'Klasse',
        role: 'Assistant'
    }
];

// Wir erstellen eine instanz von Table
const table = new Table({
    title: 'Unsere Tabelle',
    width: 100,
    columns,
    rows
});

// wir erwarten dass die table klasse ausgegeben wird
// console.log(table);

// wir erwarten dass der titel in der mitte ausgegeben wird
// console.log(table.createTitle());

// wir erwarten, dass uns eine spalte ausgegeben wird
// console.log(table.createColumn('Hallo Welt', 35));
// console.log(table.createColumn('Hallo Klasse :D', 35));
// console.log(table.createColumn('Alle meine entchen', 35));

// wir erwarten, dass uns eine ganze zeile ausgegeben wird
// console.log(table.createRow(rows[0]));

// console.log("=".repeat(process.stdout.columns));

table.showTable();
