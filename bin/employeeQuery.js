#!/usr/bin/env node

import searchFor from '../lib/searchFor.js';
import listGenerator from '../lib/listGenerator.js';
import fs from 'fs';

fs.readFile('./data/employees.csv', 'utf8', (error, data) => { 
    if (error) console.error(error.message);

    const content = data.toString().split('\n').map(line => line.split(','));
    const query = process.argv.slice(2) 
    const list = listGenerator(content);

    console.log(searchFor(query, list));
});

