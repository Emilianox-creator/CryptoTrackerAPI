# CriptoTracker

CriptoTracker is a small Express and EJS dashboard that displays Bitcoin and Ethereum prices, global cryptocurrency market statistics, and the top 10 cryptocurrencies by market capitalization. Data is fetched from the CoinGecko API when the page is loaded.

## Requirements

- Node.js and npm
- An internet connection to reach the CoinGecko API

## Run locally

From this project directory, install dependencies and start the server:

```sh
npm install
node index.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Stop the server with `Ctrl+C`.

## Project structure

- `index.js` - Express server and CoinGecko API requests
- `views/index.ejs` - Dashboard template
- `public/styles/main.css` - Dashboard styles

The server listens on port `3000`. The dashboard requires the CoinGecko API to be reachable; if a request fails, the server responds with an error instead of rendering market data.