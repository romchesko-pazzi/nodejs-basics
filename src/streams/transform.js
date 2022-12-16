import { Transform } from 'stream';
import { pipeline } from 'stream/promises'

const transform = async () => {
    const readable = process.stdin;
    const writable = process.stdout;
    const reverse = (str) => str.split('').reverse().join('');

    const instanceOfTransform = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, reverse(chunk.toString().trim()) + '\n');
        }
    });
    await pipeline(readable, instanceOfTransform, writable);
};

await transform();