/*

*/
import postal from 'postal';

const generatedChannel = postal.channel('generated');

generatedChannel.subscribe('request', ({request}) => {
    if (request === 'test') {
        generatedChannel.publish('response', {data: 'ok!'});
    }
});

export default generatedChannel;
