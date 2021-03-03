import { apiPostRequest } from './index';

export const firebaseNotificationApi = (req) => {
        return new Promise((resolve, reject) => {
                apiPostRequest(req).then(res => {
                        resolve(res);
                }).catch(err => {
                        reject(err);
                });
        });
};