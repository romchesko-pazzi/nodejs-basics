import { createUnzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputFile = path.join(__dirname, 'files/outputFile.gz');
const outputFile = path.join(__dirname, 'files/fromDecompress.txt');

const inp = createReadStream(inputFile);
const out = createWriteStream(outputFile);

const decompress = async () => {
    await pipeline(inp, createUnzip(), out);
};

await decompress();