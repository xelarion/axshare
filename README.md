# axshare

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build:prod
```

***

Dockerize axshare

    chmod +x docker.sh
    docker build -t ervincheung/axshare .
    docker run -it -p 8080:80 -d --rm --name dockerize-axshare ervincheung/axshare
