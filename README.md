# jineye

## Build docker
### Image
```
docker build -f Dockerfile.dev -t jineye .
```
### Run
```
docker run -v$(pwd):/app -v /app/node_modules -p 8080:8080 -d --name jineye jineye
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
