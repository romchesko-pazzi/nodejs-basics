import { createGzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputFile = path.join(__dirname, 'files/fileToCompress.txt');
const outputFile = path.join(__dirname, 'files/outputFile.gz');

const inp = createReadStream(inputFile);
const out = createWriteStream(outputFile);

const compress = async () => {
    await pipeline(inp, createGzip(), out);
};

await compress();