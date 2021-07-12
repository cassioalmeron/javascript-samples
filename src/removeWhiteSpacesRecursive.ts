export function removeWhiteSpacesRecursive(obj: object) : object{
    for (const k in obj) {

        console.log(typeof obj[k])

        if (typeof obj[k] === 'string' || obj[k] instanceof String){
            obj[k] = obj[k].trim();
            while (obj[k].includes("  "))
            obj[k] = obj[k].replace("  ", " ");
        }
        else if (typeof obj[k] === 'object')
            obj[k] = removeWhiteSpacesRecursive(obj[k]);
    }

    return obj;
}