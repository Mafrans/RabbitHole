/*

    Article Handler

*/

var _articles = {};

function cacheArticles() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "../api/articles.json", false ); // false for synchronous request
    xmlHttp.send( null );
    var articles = JSON.parse(xmlHttp.responseText).articles;

    for(let key in articles) {
        let article = articles[key];
        article["id"] = key;
        article["img"] = "../api/images/" + article["img"];
        _articles[key] = article;
    }
    
}

function getRandomArticle() {
    return _articles[Object.keys(_articles)[Math.floor(Math.random() * Object.keys(_articles).length)]];
}

function getArticle(id) {
    return _articles[id];
}

function generateRandomArticles(template, amount) {
    let out = "";
    for(let i = 0; i < amount; i++) {
        let __article = getRandomArticle();
        let __html = template;
        
        __html = __html.replace(/{{title}}/g, __article.title);
        __html = __html.replace(/{{img}}/g, __article.img);
        __html = __html.replace(/{{id}}/g, __article.id);

        let content = __article.content;

        if (content.length > 300) content = content.substring(0, 100) + "...";
        __html = __html.replace(/{{content}}/g, content);

        out += __html;
    }

    return out;
}

function query(q) {
    let out = [];
    for(let key in _articles) {
        if(_articles[key].name.startsWith(q)) {
            out.push(key);
        }
    }
}