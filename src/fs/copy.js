import { cp } from 'fs/promises';
import { __dirname } from './utils.js';
import path from 'path';

const copy = async () => {
    const from = path.join(__dirname, 'files');
    const to = path.join(__dirname, 'files_copy');

    try {
        await cp(from, to, { recursive: true, force: false, errorOnExist: true });
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await copy();