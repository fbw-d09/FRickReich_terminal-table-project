# terminalTableExample

## Usage

Import and initialize a new table.
```js
const table = new Table();
```

create an array for your tables columns, including the key, to connect the rows to, 
the title of the column and the width of the column.

```js
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
        title: 'Group',
        width: 15
    },
    {
        key: 'role',
        title: 'Role',
        width: 50
    }
]
```

Create an array for the rows, including all columns as keys.
```js
const rows =
[
    {
        id: 1,
        name: 'Thingy 1',
        group: 'this',
        role: 'Admin'
    },
    {
        id: 2,
        name: 'Thingy 2',
        group: 'other',
        role: 'Admin'
    },
    {
        id: 3,
        name: 'Thingy 3',
        group: 'this',
        role: 'Moderator'
    }
];
```

add the arrays to your table
```js
table.setColumns(columns);
table.setRows(rows);
```

you can set the table name with 
```js
table.setTitle("Unsere Tabelle");
```

you can set the width of the table*
```js
table.setWidth(70);
```

(*) if you do not define the width, the table will be fluid and take the whole width of the terminal.

at last, use the method `.showTable();` to show the finished table in the terminal.
```js
table.showTable();
```
