import crypto from 'crypto';
import { readFile } from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const fileBuffer = await readFile(pathToFile);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    const hex = hashSum.digest('hex');
    console.log(hex);
};

await calculateHash();