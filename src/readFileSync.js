 const path = require('path')

const filenameFullPath = path.resolve(
    __dirname,
    '..',
    'tmp',
    'import_template.csv',
  );

var readlines = require('n-readlines');
var liner = new readlines(filenameFullPath);

var edges = [];
var next;
while (next = liner.next()) {
    edges.push(next.toString('utf8'));
}

console.log(edges)