import { readFile } from 'fs/promises';
import path from 'path';
import { __dirname } from './utils.js';

const read = async () => {
    const pathToFile = path.join(__dirname, 'files/fileToRead.txt');

    try {
        const response = await readFile(pathToFile, { encoding: 'utf-8' });
        console.log(response);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await read();