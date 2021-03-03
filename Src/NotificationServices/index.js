export * from './notification';

const FIREBASE_API_KEY = 'AAAAtyh75PQ:APA91bGb4aVHvKze1SNvk44egpQzLSRAvTTVUXbYItKkwgEpxq41WWMgZNUXuF8CasCoAsiQYKgisNZVp4jbOyznt8QS2oZWbpBiF9DyjyoPZ0HXND1nFoR2xOVWfbrNb48COIPGBJNn'


export const apiPostRequest = async (endPoint, data) => {
        var headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // Authorization: "key=" + FIREBASE_API_KEY,
                Authorization: `Bearer ${FIREBASE_API_KEY}`
        };
        console.log('%c API ' + endPoint, 'background: #33AAFF; color: #FFF', headers, data);
        return new Promise((resolve, reject) => {
                fetch("https://fcm.googleapis.com/fcm/send", {
                        method: 'POST',
                        headers,
                        body: JSON.stringify(data),
                })
                        .then((res) => {
                                console.log('res,', res);
                                const contentType = res.headers.get('content-type');
                                if (contentType && contentType.indexOf('application/json') !== -1) {
                                        return res.json();
                                }
                                else {
                                        return {};
                                }
                        })
                        .then(res => {
                                if (!res.errors) {
                                        console.log('%c API res ' + endPoint, 'background: #009944; color: #FFF', res);
                                        resolve(res);
                                } else {
                                        console.log('%c API res error ' + endPoint, 'background: #FF6600; color: #FFF', res.errors);
                                        reject(res.errors);
                                }
                        })
                        .catch(error => {
                                console.log('%c API error ' + endPoint, 'background: #DD0000; color: #FFF', error);
                                reject(error);
                        });
        });
};



