// Wir schreiben ein programm zum anzeigen von tabellen in der konsole.

// wir benötigen eine klasse, die die komplette applikation beinhaltet.
/**
 * @class Table
 * @description Ein programm zum erstellen von tabellen in der konsole
 * @example
 * const table = new Table();
 */
class Table
{
    // Wir nennen die klasse Table, da wir eine Tabelle damit erstellen wollen, und das der sinnvollste name (laut konvention) ist.

    tableTitle;
    tableWidth;
    tableColumns;
    tableRows;

    /**
     * @constructor
     */
    constructor({ title, width, columns, rows } = {})
    {   
        // Die klasse sollte ein konfigurationsobjekt in den constructor bekommen, um dynamisch einstellbar zu sein
        // wir brauchen eine property, die den namen der tabelle angibt, denn wir wollen diesen über der tabelle stehen haben.
        // wir brauchen eine property die die breite der tabelle angibt, der default wert sollte die breite der konsole sein.
        // wir brauchen eine property die alle columns der tabelle, und dessen werte beinhaltet
        // wir brauchen eine property die alle rows der tabelle beinhaltet.

        this.tableTitle = title || 'Default Table';
        this.tableWidth = width || process.stdout.columns; // der default gibt uns die breite des terminals in zeichen zurück.
        this.tableColumns = columns || [];
        this.tableRows = rows || [];
    }

    // die klasse sollte getter und setter haben, um diese einstellungen gegebenenfalles ändern zu können
        // wir brauchen getter/setter für den tabellen titel
        // wir brauchen getter/setter für die tabellen breite
        // wir brachen getter/setter für die columns
        // wir brachen getter/setter für die rows
    get title() { return this.tableTitle }
    get width() { return this.tableWidth }
    get columns() { return this.tableColumns }
    get rows() { return this.tableRows }

    set title(input) { this.tableTitle = input }
    set width(input) { this.tableWidth = input }
    set columns(input) { this.tableColumns = input }
    set rows(input) { this.tableRows = input }

    // die klasse sollte methoden haben, um einige berechnungen zu machen
        // wir brauchen eine methode, die den titel anzeigt, und dafür sorgt, das dieser in horizontal zentriert über der tabelle steht
    
    /**
     * @method createTitle
     * @description erstellt den zentrierten titel über der tabelle
     * @returns { string }
     */
    createTitle = () =>
    {
        // für die anderen:         this.getWidth() - this.getTitle().length
        const padding = Math.round((this.width - this.title.length) / 2);

        // wir erwarten das padding eine zahl ausgibt, diese zahl sollte die hälfte der breite des terminals minus die hälfte der länge des titels sein.
        // console.log(padding);

        return `\n${ ' '.repeat(padding) }${ this.title }${ ' '.repeat(padding) }`;
    }

        // wir brauchen eine methode, die eine spalte erstellt
    /**
     * @method createColumn
     * @description Erstellt eine spalte in der angegebenen breite, mit dem text, der in dieser spalte stehen soll
     * @param { string } text 
     * @param { number } width
     * @returns { string } 
     */
    createColumn = (text, width) =>
    {
        // wir erstellen eine berechnung um die spaltenbreite dadurch zu bekommen, das wir die angegebene spaltenbreite minus dem inhalt der spalte rechnen.
        const columnWidth = width - text.toString().length;

        // AAAAAAAAAAAAAAAAAAAAAAAAA = width
        // AAAAAAAAAAAAAAA           = width - textlänge
        // AAAAAAAAAAAA              = width - textlänge - 3
        // HALLO WELT                = text
        //  HALLO WELTAAAAAAAAAAAA | = ergebnis
        return ' ' + text.toString() + ' '.repeat(columnWidth - 3) + '|';

    }

        // wir brauchen eine methode, die eine zeile erstellt, und die jeweiligen spalten dort einfügt
    /**
     * @method createRow
     * @descripion erstellt eine zeile die die jeweiligen spalten nacheinander darstellt
     * @param { object } rows
     * @returns { string }
     */
    createRow = (rows) =>
    {
        // wir erstellen eine variable, in die wir die inhalte der zeile speichern, und beginnen sie mit der linken pipe.
        let tempString = '|';

        for(let row in rows)
        {
            // row = schlüssel
            // rows = die sammlung
            // rows[row] = schlüssel von sammlung = value

            let width = this.width;

            this.columns.forEach((column, i) =>
            {
                if(column.key === row)
                {
                    // die letzte spalte
                    if(this.columns.length === i + 1)
                    {
                        tempString += this.createColumn(rows[row], width + 2);
                    }
                    // die ersten spalten
                    else
                    {
                        tempString += this.createColumn(rows[row], column.width);
                    }
                }

                width -= column.width;
            });
        }

        return tempString;
    }

        // wir brauchen eine methode, die den tabellen header erstellt, also die schlüssel über dem spalteninhalt
    /**
     * @method createHeader
     * @description erstellt den header
     * @returns { string }
     */
    createHeader = () =>
    {
        let tempString = "|";
        let width = this.width;

        this.columns.forEach((column, i) =>
        {
            if(this.columns.length === i + 1)
            {
                tempString += this.createColumn(column.title, width + 2);
            }
            else
            {
                tempString += this.createColumn(column.title, column.width);
            }

            width -= column.width;
        });

        return tempString;
    }
    
        // wir brauchen eine methode, die den divider erstellt
    /**
     * @method createDivider
     * @description erstellt den divider, mit den definieren längen der spalten
     * @returns { string }
     */
    createDivider = () =>
    {
        let tempString = '|';
        let width = this.width;

        this.columns.forEach((column, i) =>
        {
            if(this.columns.length === i + 1)
            {
                tempString += '-'.repeat(width) + '|';
            }
            else
            {
                tempString += '-'.repeat(column.width - 2) + '|';
            }

            width -= column.width;
        });

        return tempString;
    }

        // wir brauchen eine methode, die die tabelle anzeigt
    /**
     * @method showTable
     * @description fügt alles zusammen und gibt es im terminal aus
     */
    showTable = () =>
    {
        // wir geben den titel der tabelle aus
        console.log(this.createTitle());

        // wir geben die headerzeile aus
        console.log(this.createHeader());

        // wir geben den divider aus
        console.log(this.createDivider());

        // wir geben jede zeile der tabelle aus
        this.rows.forEach((row, i) =>
        {
            console.log(this.createRow(row));
        });

        // am ende fügen wir noch eine leere zeile ein
        console.log();
    }
}

// Wir müssen die klasse exportieren, um an ihre inhalte zu kommen, und das programm zu starten
module.exports = Table;
