const { StatusCodes } = require("http-status-codes");

const get = (req, res) => {
    return res.status(StatusCodes.OK).json({
        message: 'Hello World Today!'
    });
};

module.exports = {
    get
};