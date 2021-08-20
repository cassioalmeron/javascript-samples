import Axios from 'axios';
import fs from 'fs';  
import path from 'path';  

export async function saveFileFromUrl() {
    const url = 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/0377a0a599807e98190ee201b01e5abf';

    const filePath = path.resolve(__dirname, '..', 'tmp', 'code.jpg')
    const writer = fs.createWriteStream(filePath)

    const response = await Axios({
        url,
        method: 'GET',
        responseType: 'stream'
    })

    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
    })
}