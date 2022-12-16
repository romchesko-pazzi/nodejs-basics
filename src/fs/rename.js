import fsp from 'fs/promises';
import path from 'path';
import { __dirname } from './utils.js';

const rename = async () => {
    const oldPath = path.join(__dirname, 'files/wrongFilename.txt');
    const newPath = path.join(__dirname, 'files/properFilename.md');

    try {
        await fsp.rename(oldPath, newPath);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await rename();