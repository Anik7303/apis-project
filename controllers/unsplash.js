const { nextTick } = require("process");
const unsplash = require("../services/unsplash");

exports.getPhotos = async (req, res, next) => {
    const { query, per_page } = req.query;
    try {
        const response = await unsplash.get("/search/photos", {
            params: { query: query || "", per_page: per_page || 10 },
        });
        res.status(200).json(JSON.stringify(response.data));
    } catch (error) {
        next(error);
    }
};
