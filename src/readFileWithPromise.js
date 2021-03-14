const lineReader = require('line-reader');
const path = require('path')

async function readFile(){
    const filenameFullPath = path.resolve(
        __dirname,
        '..',
        'tmp',
        'import_template.csv',
      );

    const res = []
    
    lineReader.eachLine(filenameFullPath, (line) => {
        const promise = new Promise((resolve, reject) => {
            console.log('line: ', line);
            res.push(line);
            resolve(line);
        });

        promises.push(promise)
    })
        
    console.log(promises)
    return await Promise.all(promises)
}

readFile().then(res => console.log("RES ", res))