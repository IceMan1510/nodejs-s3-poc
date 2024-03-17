const AWS = require('aws-sdk');
const { accessKeyId, secretAccessKey } = require('./config');

export const s3 = new AWS.S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
});


