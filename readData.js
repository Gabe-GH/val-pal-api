import { promises as fs } from 'fs';

const readData = async () => {
    try{
        const jsonData = await fs.readFile('./db.json', 'utf8');

        const parseData = JSON.parse(jsonData);

        return parseData
    
    }catch{
        console.error(`Error reading data`);
    }

}



export default readData;