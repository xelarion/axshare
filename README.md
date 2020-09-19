# axshare

A web platform for hosting and sharing Axure RP prototypes based on [PanJiaChen/vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) 

Server API Project: https://github.com/XanderCheung/axshare-go

![axures-demo](https://github.com/XanderCheung/axshare/blob/master/src/assets/images/axures-example.jpg)

![config-demo](https://github.com/XanderCheung/axshare/blob/master/src/assets/images/axures-config.jpg)

## Build Setup

```bash
# clone the project
git clone git@github.com:XanderCheung/axshare.git

# enter the project directory
cd axshare

# install dependency
npm install
# npm install --registry=https://registry.npm.taobao.org

# develop
npm run dev

# change api url? change the file `axshare/public/static/config.js`
window.cj = {
  api_url: `http://localhost:10524/api/v1/`
}
```

Now Visit http://localhost:9666

## Build

```bash
# build for test environment
npm run build:stage

# build for production environment
npm run build:prod
```

## Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix
```

## Dockerize axshare
```bash
docker build -t xandercheung/axshare .
docker run \
  -v /your-directory/config.js:/usr/share/nginx/html/static/config.js \
  -p 9666:80 \
  -d --rm --name axshare xandercheung/axshare

# change nginx config?
-v /your-directory/nginx.conf:/etc/nginx/conf.d/default.conf
```

Now Visit http://localhost:9666
