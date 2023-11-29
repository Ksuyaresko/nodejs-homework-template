const validateContactFavorite = (req, res, next) => {
    if (req.body.favorite === undefined) {
        res.status(400).json({ message: "missing field favorite" });
    }
    next()
};

module.exports = validateContactFavorite