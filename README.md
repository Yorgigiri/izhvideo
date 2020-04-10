# izhvideo

Сборка осуществляется с помощью Parcel (https://parceljs.org/)

# разворачивание локального сервера с главной страницей
yarn start
# разворачивание локального сервера страницы с проектами
yarn start_portfolio: "parcel src/pages/portfolioPage/index.pug --open",

# разворачивание локального сервера страницы со списком статей блога
yarn start_bloglist: "parcel src/pages/blogListPage/index.pug --open",

# разворачивание локального сервера страницы статьи
yarn start_blogpage: "parcel src/pages/blogPage/index.pug --open",

# разворачивание локального сервера страницы проекта
yarn start_projectpage: "parcel src/pages/projectPage/index.pug --open",

# создание билда проекта с минификацией и вот этим вот всем...
yarn build: "parcel build src/pages/homePage/index.pug -d docs --public-url ./"
