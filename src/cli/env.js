const parseEnv = () => {
    let data = '';
    for (const key in process.env) {
        if (key.startsWith('RSS_')) {
            data += `${key}=${process.env[key]}; `;
        }
    }
    console.log(data);
};

parseEnv();