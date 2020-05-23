import * as debug from './debug-lib';

export default function handler(lambda) {
    return async function(event, context) {
        let statusCode;
        let body;

        try {
            debug.init(event, context);
            body = await lambda(event, context);
            statusCode = 200;
        } catch (e) {
            body = { error: e.message };
            statusCode = 500;
        }

        debug.end();

        return {
            statusCode: statusCode,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(body)
        };
    };
}