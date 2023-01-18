# weather-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Backend Setup

For this project, you need both the front-end
and back-end running at the same time. You will
also need an API key:

- In the `backend` folder, rename `.env.sample` to .env
- Generate an API key at https://openweathermap.org/ 
- Generate an API key at https://docs.mapbox.com/
- Add your API key to `backend/.env`

### Install dependencies

```
cd backend
npm install
```

### Launch the backend
```
nodemon index.js
```
