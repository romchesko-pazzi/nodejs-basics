import path from 'path';
import { __dirname } from './utils.js';
import { readdir } from 'fs/promises';

const list = async () => {
    const pathToFile = path.join(__dirname, 'files');

    try {
        const res = await readdir(pathToFile);
        console.log(res);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await list();