import path from 'path';
import { __dirname } from './utils.js';
import { unlink } from 'fs/promises';

const remove = async () => {
    const pathToFile = path.join(__dirname, 'files/fileToRemove.txt');

    try {
        await unlink(pathToFile);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await remove();