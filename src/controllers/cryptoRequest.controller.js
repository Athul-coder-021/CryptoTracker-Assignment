import axios from "axios";

const COINGECKO_URL = "https://api.coingecko.com/api/v3/simple/price";

export const fetchCryptoData = async () => {
  try {
    const response = await axios.get(COINGECKO_URL, {
      params: {
        ids: "bitcoin,matic-network,ethereum",
        vs_currencies: "usd",
        include_market_cap: "true",
        include_24hr_change: "true",
      },
    });


    return response.data;
  } catch (error) {
    console.error("Error fetching data from CoinGecko:", error.message);
    throw error;
  }
};
