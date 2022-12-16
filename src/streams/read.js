import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fileToRead = path.join(__dirname, 'files/fileToRead.txt');

const readStream = createReadStream(fileToRead);

const read = async () => {
    readStream.pipe(process.stdout);
};

await read();