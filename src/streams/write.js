import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fileToWrite = path.join(__dirname, 'files/fileToWrite.txt');

const writableStream = createWriteStream(fileToWrite);

const write = async () => {
    await pipeline(process.stdin, writableStream);
};

await write();