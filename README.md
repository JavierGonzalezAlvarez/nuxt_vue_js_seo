## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

----------------------------------------
instalar npm y node
----------------------------------------
sudo apt install nodejs npm

en desarrollo
-------------------------------
sudo npm run dev

en producción
-------------------------------
1. sudo npm install
2. sudo npm run build => genera carpeta en .nuxt/dist para producción
3. sudo npm start 

nuxt.config.js con server y port por defecto => http:/localhost:3000
en nuxt.config.js por defecto al hacer => sudo npm run start escucha en http://localhost:3000
-------------------------------------------------------------------------------------------------
 server: {
    // port: 80, // default: 3000
    // host: '0.0.0.0', // default: localhost,
    // timing: false
  }



