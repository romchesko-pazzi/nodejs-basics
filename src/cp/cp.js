import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToScript = path.join(__dirname, 'files/script.js');

const spawnChildProcess = async (args) => {
    // создаём дочерний процесс в файле script.js
    const childProcess = fork(pathToScript, args, { silent: true });

    // данные которые вводим в этом процессе (master), подхватываются в дочернем процессе
    process.stdin.pipe(childProcess.stdin);
    // делаем так, чтобы данные которые выводятся в дочернем процессе, выводились в этом (master)
    childProcess.stdout.pipe(process.stdout);
};

await spawnChildProcess();