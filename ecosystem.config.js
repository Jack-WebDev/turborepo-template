const dotenv = require('dotenv');
const fs = require('fs');

const globalEnvConfig = dotenv.parse(fs.readFileSync('.env'));

module.exports = {
    apps: [
        {
            name: 'web',
            cwd: './apps/web',
            script: 'yarn',
            args: 'run start',
            interpreter: 'node',
            instances: 1,
            max_memory_restart: '1G',
            env: {
                ...globalEnvConfig,
                NODE_ENV: 'production',
            },
            error_file: './logs/web-error.log',
            out_file: './logs/web-out.log',
            log_date_format: 'YYYY-MM-DD HH:mm Z',
        },
        {
            name: 'api',
            cwd: './apps/api',
            script: 'yarn',
            args: 'run start',
            interpreter: 'node',
            instances: 'max',
            exec_mode: 'cluster',
            autorestart: true,
            watch: true,
            max_memory_restart: '1G',
            env: {
                ...globalEnvConfig,
                NODE_ENV: 'production',
                API_PORT: 4000,
            },
            error_file: './logs/api-error.log',
            out_file: './logs/api-out.log',
            log_date_format: 'YYYY-MM-DD HH:mm Z',
        },
    ],
};
