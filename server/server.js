const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

//components
const Connection = require("./database/db");
const DefaultData = require("./default");
const Routes = require("./routes/route");

dotenv.config();

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

// const PORT =  8000;
const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL = `mongodb://${username}:${password}@flipkartclone-shard-00-00.zm437.mongodb.net:27017,flipkartclone-shard-00-01.zm437.mongodb.net:27017,flipkartclone-shard-00-02.zm437.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-10s6k6-shard-0&authSource=admin&retryWrites=true&w=majority`;

// Connection(username, password);
Connection(process.env.MONGODB_URI || URL);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () =>
  console.log(`Server is successfully running on ${PORT}`)
);

// send default data to database
DefaultData();

let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
let paytmParams = {};
(paytmParams["MID"] = process.env.PAYTM_MID),
  (paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE),
  (paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID),
  (paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID),
  (paytmParams["ORDER_ID"] = uuidv4()),
  (paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID),
  (paytmParams["TXN_AMOUNT"] = "100"),
  (paytmParams["CALLBACK_URL"] = "http://localhost:8000/callback");
paytmParams["EMAIL"] = "sourabhchavan00@gmail.com";
paytmParams["MOBILE_NO"] = "1234567890";

module.exports = { paytmMerchantkey, paytmParams };
