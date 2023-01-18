# weather-app

**The common functionalities are:
* The user can see weather for various cities
* The user can track and untrack the weather for saved cities
* The user can see the hourly/weekly/daily forecast for cities

I'm using [openweather Api](url) to get weather metrics and [Mabbox API](url) to get coordinates for cities bases of city names

**Built With
* Vue
* Node js
* Express js
* Tailwind css

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
