exports.index = function (request, response) {
    response.send("Главная страница");
};
exports.about = function (request, response) {
    response.send("О сайте");
};