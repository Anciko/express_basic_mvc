const path = require('path');

function getMessages(req, res) {
    const absolute =  path.join(__dirname,'..', "public", 'skimountain.jpg' );
    // const absolute = path.resolve(__dirname,'..' ,'public', 'skimountain.jpg');
    res.sendFile(absolute);
}

function postMessage (req, res) {
    console.log("Updating message");
}

module.exports = {
    getMessages,
    postMessage
};