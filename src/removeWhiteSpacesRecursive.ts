export function removeWhiteSpacesRecursive(obj: any) : any{
    for (const k in obj) {
        const value = obj[k];
        
        if (typeof value === 'string' || value instanceof String){
            let strValue = value;
            strValue = strValue.trim();
            strValue = strValue.trim();
            while (strValue.includes("  "))
                strValue = strValue.replace("  ", " ");

            obj[k] = strValue;
        }
        else if (typeof value === 'object')
            obj[k] = removeWhiteSpacesRecursive(value);
    }

    return obj;
}