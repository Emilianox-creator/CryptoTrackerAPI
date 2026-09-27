import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try{
        const[resPrices, resMarketGlobal, resListCoins] = await Promise.all([
            axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"),
            axios.get("https://api.coingecko.com/api/v3/global"),
            axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1")
        ]);
        const prices = await resPrices.data;
        const marketGlobal = await resMarketGlobal.data;
        const listCoins = await resListCoins.data;
        let cont = 1;
        res.render("index",{
            btc: prices.bitcoin,
            eth: prices.ethereum,
            global: marketGlobal.data,
            coins: listCoins
        });
    }
    catch(error){
        console.error("Error al obtener los datos de la API:", error);
        res.status(500).send("Error al obtener los datos de la API");
    }
});



//PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});