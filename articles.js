/*

    Article Handler

*/

var _articles = {};

function cacheArticles() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "api.json", false ); // false for synchronous request
    xmlHttp.send( null );
    _articles = JSON.parse(xmlHttp.responseText).articles;
    console.log(_articles);
}

function getRandomArticle() {
    console.log(Object.keys(_articles));

    return _articles[Object.keys(_articles)[Math.floor(Math.random() * Object.keys(_articles).length)]];
}

function getArticle(id) {
    return _articles[id];
}

function query(q) {
    let out = [];
    for(let key in _articles) {
        if(_articles[key].name.startsWith(q)) {
            out.push(key);
        }
    }
}