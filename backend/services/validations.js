const validateBid = (bid, exeptions) => {
    for (let i in bid) {
        if (~exeptions.indexOf(bid[i])) {
            continue;
        }
        if (typeof bid[i] !== 'string' || bid[i].length < 3) {
            return false;
        }
    }

    return true;
};

module.exports = {
    validateBid: validateBid,
};