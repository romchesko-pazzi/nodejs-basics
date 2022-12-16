import { appendFile } from 'fs/promises';
import path from 'path';
import { __dirname } from './utils.js';

const create = async () => {
    const pathToFile = path.join(__dirname, 'files/fresh.txt');

    try {
        await appendFile(pathToFile, 'I am fresh and young', { flag: 'wx' });
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await create();