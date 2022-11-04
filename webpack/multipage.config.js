const path = require('path');

result = {}

result.entry = {
    'main': path.join(__dirname, '../src/main.js'),
    // 'articles': path.join(__dirname, '../src/articles.js'),
    // 'users': path.join(__dirname, '../src/users.js'),
}

result.pages = [
    { chunks: ['main'], page: 'index.html', template: path.join(__dirname, '../src/index.html'), },
    // { chunks: ['users'], page: 'pages/users.html', template: path.join(__dirname, '../src/pages/users.html') },
    // { chunks: ['articles'], page: 'pages/articles.html', template: path.join(__dirname, '../src/pages/articles.html') },
]

module.exports = result;