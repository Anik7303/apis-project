const errorHandler = (error, req, res, next) => {
    res.status(error.status || 500).json({
        error: { message: error.message || "something went wrong!" },
    });
};

module.exports = errorHandler;
