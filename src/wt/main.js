import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToWorker = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    const calcFib = (workerData) => {
        return new Promise((resolve) => {
            const worker = new Worker(pathToWorker, { workerData }); // создаёт отдельный поток при инициализации и запускает скрипт

            worker.on('message', (msg) => {
                resolve({value: msg, status: 'resolved'});
            })
            worker.on('error', () => {
                resolve({value: null, status: 'error'});
            })
        });
    }

    const startNumber = 10;
    const arrayOfPromises = [];
    const CPUcores = cpus().length;

    for (let i = 0; i < CPUcores; i++) {
        arrayOfPromises.push(calcFib(i + startNumber)); // на каждой итерации создаём поток, и пушим в массив промисы
    }

    const result = await Promise.all(arrayOfPromises); // дожидаемся пока всё промисы в массиве не зарезолвятся

    console.log(result);
};

await performCalculations();