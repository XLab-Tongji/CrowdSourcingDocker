# mart

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

cd mart-vue

# Build Docker

npm install

npm run build

cd ..

mv mart-vue/dist/ dist/

docker build -t nee11235/crowdsourcing-mart-frontend .

docker run -d -p 80:80 nee11235/crowdsourcing-mart-frontend