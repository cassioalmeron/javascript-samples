async function myAsyncDouble(number){
    return number * 2;
}

async function calculate(){
    const promises = []
    for(let i = 1; i <= 10; i++)
        promises.push(new Promise((resolve, reject) => resolve(myAsyncDouble(i))))
    
    return await Promise.all(promises);
}

const v = calculate().then(v => console.log(v))
