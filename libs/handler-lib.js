export default function handler(lambda) {
    return async function(event, context) {
        let statusCode;
        let body;

        try {
            body = await lambda(event, context);
            statusCode = 200;
        } catch (e) {
            body = { error: e.message };
            statusCode = 500;
        }

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