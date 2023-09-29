const mysql = require("mysql2/promise");
const fs = require("fs");
const ddlScript = fs?.readFileSync(`${__dirname}/DDL.sql`, "utf8");

// Database configuration
const dbConfig = {
  host: "marketchat.c5v54pjgwoo3.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "QcWQ*B+9q!qc?M4",
  database: "marketchat",
};

// Create MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Define table schemas
const createTables = async () => {
  const connection = await pool.getConnection();
  try {
    // Create  tables
    await connection.query(ddlScript);

    console?.log("Tables created successfully.");
  } catch (error) {
    console?.error("Error creating tables: " + error.message);
  } finally {
    connection.release();
  }
};

// Function to insert data into the database
const insertData = async () => {
  const jsonDataArray = [
        {
            "ticker": "AU:CCR",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "financial",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-29T00:00:00",
                "company": "Credit Clear Limited",
                "ticker": "AU:CCR",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.010,
                "lastEps": -0.023,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 82508448,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110215,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -3831000.0,
                "totalRevenue": 17577000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230830/pdf/05t84qk3c0cnxq.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-23T00:00:00",
                "company": "Credit Clear Limited",
                "ticker": "AU:CCR",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 82508448,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110215,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "fd212ff1",
            "companyName": "Credit Clear Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -6.756,
            "stockId": 110215,
            "high52Weeks": 0.510,
            "low52Weeks": 0.175,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.9166
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 19
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 82508448,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.41
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.23
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.44
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Credit Clear Limited"
        },
        {
            "ticker": "AU:SHM",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "industrials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": {
                "ticker": "AU:SHM",
                "company": "Shriro Holdings Ltd.",
                "exDate": "2023-12-19T00:00:00",
                "payDate": "2023-12-29T00:00:00",
                "amount": 0.185,
                "yield": 9.09,
                "consensus": null,
                "bpConsensus": null,
                "dividendDateType": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 81471246,
                "marketCapCurrencyId": 4,
                "sector": 17348,
                "recDate": "2023-12-20T00:00:00",
                "stockId": 110623,
                "eps": 0.075,
                "growthSinceDate": "2023-03-15T00:00:00",
                "sectorYield": 0.01639,
                "payoutRatio": 0.8421052631578947368421052632,
                "annualizedPayout": 0.249,
                "payoutInterval": 1,
                "stockTypeId": 12,
                "announceDate": null,
                "currencyTypeID": 4,
                "isSpecialDividend": false,
                "smartScore": null
            },
            "lastReportedEps": {
                "date": "2023-08-24T00:00:00",
                "company": "Shriro Holdings Ltd.",
                "ticker": "AU:SHM",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.010,
                "lastEps": 0.056,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 81471246,
                "marketCapCurrencyId": 4,
                "sector": 17348,
                "stockId": 110623,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 937000.0,
                "totalRevenue": 41114000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://www.asx.com.au/asxpdf/20230223/pdf/45lyrdkcz143c2.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Shriro Holdings Ltd.",
                "ticker": "AU:SHM",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.066,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 81471246,
                "marketCapCurrencyId": 4,
                "sector": 17348,
                "stockId": 110623,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "513ade07",
            "companyName": "Shriro Holdings Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.185,
            "dividendYield": 0.0909,
            "peRatio": 11.251,
            "stockId": 110623,
            "high52Weeks": 0.932,
            "low52Weeks": 0.605,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 3
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 81471246,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.69
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.63
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.62
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Shriro Holdings Ltd."
        },
        {
            "ticker": "AU:HHR",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-03-14T00:00:00",
                "company": "Hartshead Resources NL",
                "ticker": "PGNYF",
                "periodEnding": "Dec 2022",
                "eps": null,
                "reportedEPS": -0.00127459978,
                "lastEps": -0.00063729989,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 51909210,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 90016,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2022-12-31T00:00:00",
                "totalIncome": -1939627.31361412,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://www.asx.com.au/asxpdf/20230315/pdf/45mnqt2q672gg4.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-09-29T00:00:00",
                "company": "Hartshead Resources NL",
                "ticker": "PGNYF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.00063729989,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 51909210,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 90016,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "76975686",
            "companyName": "Hartshead Resources NL",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -25.000,
            "stockId": 90016,
            "high52Weeks": 0.060,
            "low52Weeks": 0.011,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 5,
                "bullishCount": 45
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 84260462,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.02
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.04
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.03
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Hartshead Resources NL"
        },
        {
            "ticker": "AU:GEN",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-13T00:00:00",
                "company": "Genmin Ltd.",
                "ticker": "AU:GEN",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.024,
                "lastEps": -0.009,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 81275985,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110710,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -10156122.739237899,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230913/pdf/05tvbkw0p41cth.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-27T00:00:00",
                "company": "Genmin Ltd.",
                "ticker": "AU:GEN",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 81275985,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110710,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "898307ea",
            "companyName": "Genmin Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -4.245,
            "stockId": 110710,
            "high52Weeks": 0.280,
            "low52Weeks": 0.125,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 5
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 81275985,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.20
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.16
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.22
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Genmin Ltd."
        },
        {
            "ticker": "AU:HNG",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "utilities",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-05-23T00:00:00",
                "company": "Hancock & Gore Limited",
                "ticker": "AU:HNG",
                "periodEnding": "Mar 2023",
                "eps": null,
                "reportedEPS": 0.010,
                "lastEps": 0.012,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 81130444,
                "marketCapCurrencyId": 4,
                "sector": 17351,
                "stockId": 110462,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-03-31T00:00:00",
                "totalIncome": 2204000.0,
                "totalRevenue": 3924000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230523/pdf/05pz3p5l7ljvv3.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-11-22T00:00:00",
                "company": "Hancock & Gore Limited",
                "ticker": "AU:HNG",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.014,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 81130444,
                "marketCapCurrencyId": 4,
                "sector": 17351,
                "stockId": 110462,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "791c5acb",
            "companyName": "Hancock & Gore Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.004,
            "dividendYield": 0.04054,
            "peRatio": 15.189,
            "stockId": 110462,
            "high52Weeks": 0.395,
            "low52Weeks": 0.250,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7946
            },
            "bloggerSentimentData": null,
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 81130444,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.28
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.30
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.28
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Hancock & Gore Limited"
        },
        {
            "ticker": "AU:MLG",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "realestate",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-22T00:00:00",
                "company": "MLG Oz Ltd",
                "ticker": "AU:MLG",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.020,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 80736789,
                "marketCapCurrencyId": 4,
                "sector": 60463,
                "stockId": 110249,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230823/pdf/05sxnx0npxpwl0.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 183600000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-20T00:00:00",
                "company": "MLG Oz Ltd",
                "ticker": "AU:MLG",
                "periodEnding": "Dec 2023",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.018,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 80736789,
                "marketCapCurrencyId": 4,
                "sector": 60463,
                "stockId": 110249,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 193900000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "03e46bef",
            "companyName": "MLG Oz Ltd",
            "priceTarget": 0.98,
            "bestPriceTarget": null,
            "dividend": 0.017,
            "dividendYield": null,
            "peRatio": 14.397,
            "stockId": 110249,
            "high52Weeks": 0.750,
            "low52Weeks": 0.360,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 3,
                "rating": 3,
                "bearishCount": 1,
                "bullishCount": 0
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 80736789,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.40
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.58
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.50
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "MLG Oz Ltd"
        },
        {
            "ticker": "AU:CCX",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "consumercyclical",
            "analystConsensus": {
                "consensus": "neutral",
                "rawConsensus": 3,
                "distribution": {
                    "buy": 1.0,
                    "hold": 6.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-29T00:00:00",
                "company": "City Chic Collective Limited",
                "ticker": "AU:CCX",
                "periodEnding": "Jun 2023",
                "eps": -0.086,
                "reportedEPS": -0.129,
                "lastEps": 0.061,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 80185796,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "stockId": 110634,
                "stockTypeId": 12,
                "surprise": -0.3333333333333333333333333333,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -72548000.0,
                "totalRevenue": 99869000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://static1.squarespace.com/static/5c08ac985b409b84d9c4451a/t/64ee7b67ab54af14ba1553d6/1693350759875/FY23+Full+Year+Results+Announcement.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 132625000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-22T00:00:00",
                "company": "City Chic Collective Limited",
                "ticker": "AU:CCX",
                "periodEnding": "Dec 2023",
                "eps": -0.085,
                "reportedEPS": null,
                "lastEps": -0.117,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 80185796,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "stockId": 110634,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 115700000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "aecf78ac",
            "companyName": "City Chic Collective Limited",
            "priceTarget": 0.50,
            "bestPriceTarget": null,
            "dividend": 0.014,
            "dividendYield": null,
            "peRatio": -0.796,
            "stockId": 110634,
            "high52Weeks": 1.525,
            "low52Weeks": 0.300,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 38
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 80185796,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.48
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.33
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 1.35
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "City Chic Collective Limited"
        },
        {
            "ticker": "AU:IMA",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-05T00:00:00",
                "company": "Image Resources NL",
                "ticker": "DE:I5R",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.00242432028,
                "lastEps": 0.01030336119,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48587186,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 103841,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 2801302.08354,
                "totalRevenue": 49128850.4742,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230905/pdf/05tjmvkqmhqrwt.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-27T00:00:00",
                "company": "Image Resources NL",
                "ticker": "DE:I5R",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48587186,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 103841,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "e50f6011",
            "companyName": "Image Resources NL",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.019,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 103841,
            "high52Weeks": 0.098,
            "low52Weeks": 0.035,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 9
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 83416265,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.08
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.04
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.08
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Image Resources NL"
        },
        {
            "ticker": "AU:AUT",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-03-13T00:00:00",
                "company": "Auteco Minerals Limited",
                "ticker": "MNXMF",
                "periodEnding": "Dec 2022",
                "eps": null,
                "reportedEPS": -0.03823799340,
                "lastEps": -0.05735699010,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 50852619,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 89064,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2022-12-31T00:00:00",
                "totalIncome": -854526.74400595,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://www.asx.com.au/asxpdf/20230314/pdf/45mmbmtvbft3ty.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-09-29T00:00:00",
                "company": "Auteco Minerals Limited",
                "ticker": "MNXMF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.00063729989,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 50852619,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 89064,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "66e2c957",
            "companyName": "Auteco Minerals Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.000,
            "dividendYield": null,
            "peRatio": -31.818,
            "stockId": 89064,
            "high52Weeks": 0.072,
            "low52Weeks": 0.000,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 33
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 79793861,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.03
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.02
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.01
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Auteco Minerals Limited"
        },
        {
            "ticker": "AU:3DA",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-25T00:00:00",
                "company": "Amaero International Ltd",
                "ticker": "AU:3DA",
                "periodEnding": "Jun 2023",
                "eps": -0.020,
                "reportedEPS": -0.020,
                "lastEps": -0.024,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 79200590,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110366,
                "stockTypeId": 12,
                "surprise": 0.0,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -5886928.0,
                "totalRevenue": 305301.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://www.asx.com.au/asx/statistics/displayAnnouncement.do?display=pdf&idsId=02702874",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 0.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Amaero International Ltd",
                "ticker": "AU:3DA",
                "periodEnding": "Dec 2023",
                "eps": -0.020,
                "reportedEPS": null,
                "lastEps": -0.024,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 79200590,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110366,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 0.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "bce87002",
            "companyName": "Amaero International Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -5.000,
            "stockId": 110366,
            "high52Weeks": 0.230,
            "low52Weeks": 0.063,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 5,
                "bullishCount": 21
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 79200590,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.16
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.10
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.12
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Amaero International Ltd"
        },
        {
            "ticker": "AU:TIG",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-30T00:00:00",
                "company": "Tigers Realm Coal Limited",
                "ticker": "DE:0TR",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.00060608007,
                "lastEps": -0.00060608007,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 47516807,
                "marketCapCurrencyId": 3,
                "sector": 18555,
                "stockId": 104357,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 6863250.71268,
                "totalRevenue": 21455840.55807,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05t9zxly7y89vk.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-27T00:00:00",
                "company": "Tigers Realm Coal Limited",
                "ticker": "DE:0TR",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.00303040035,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 47516807,
                "marketCapCurrencyId": 3,
                "sector": 18555,
                "stockId": 104357,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "e4f6dffc",
            "companyName": "Tigers Realm Coal Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 104357,
            "high52Weeks": 0.013,
            "low52Weeks": 0.009,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 3
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 78400214,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.01
                },
                "threeMonthsAgo": null,
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.01
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Tigers Realm Coal Limited"
        },
        {
            "ticker": "AU:CVV",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-27T00:00:00",
                "company": "Caravel Minerals Limited",
                "ticker": "DE:STC",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.01090944126,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 47456715,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 105905,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230928/pdf/05vcv28894xvr6.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-13T00:00:00",
                "company": "Caravel Minerals Limited",
                "ticker": "DE:STC",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 47456715,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 105905,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "8f54313b",
            "companyName": "Caravel Minerals Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 105905,
            "high52Weeks": 0.180,
            "low52Weeks": 0.079,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 17
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 83521131,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.15
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.12
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.13
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Caravel Minerals Limited"
        },
        {
            "ticker": "AU:VEE",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-23T00:00:00",
                "company": "Veem Ltd",
                "ticker": "AU:VEE",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.017,
                "lastEps": 0.007,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 78038683,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110381,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 2286669.0,
                "totalRevenue": 32178438.999999996,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230824/pdf/05szhg28dp4300.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-22T00:00:00",
                "company": "Veem Ltd",
                "ticker": "AU:VEE",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.014,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 78038683,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110381,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "1970ee24",
            "companyName": "Veem Ltd",
            "priceTarget": 0.84,
            "bestPriceTarget": null,
            "dividend": 0.005,
            "dividendYield": 0.0106,
            "peRatio": 18.976,
            "stockId": 110381,
            "high52Weeks": 0.690,
            "low52Weeks": 0.376,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 2
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 78038683,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.54
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.40
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.52
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Veem Ltd"
        },
        {
            "ticker": "AU:MNB",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-13T00:00:00",
                "company": "Minbos Resources Limited",
                "ticker": "AU:MNB",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.003,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 77541200,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110785,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -2180643.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230913/pdf/05tvjk04hccmy2.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-12T00:00:00",
                "company": "Minbos Resources Limited",
                "ticker": "AU:MNB",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 77541200,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110785,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "12c01a26",
            "companyName": "Minbos Resources Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -13.802,
            "stockId": 110785,
            "high52Weeks": 0.175,
            "low52Weeks": 0.070,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 97
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 77541200,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.10
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.12
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.10
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Minbos Resources Limited"
        },
        {
            "ticker": "AU:ASH",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "industrials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-29T00:00:00",
                "company": "Ashley Services Group Ltd.",
                "ticker": "AU:ASH",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.032,
                "lastEps": 0.038,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 77027114,
                "marketCapCurrencyId": 4,
                "sector": 17348,
                "stockId": 110955,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 4679000.0,
                "totalRevenue": 286859000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230830/pdf/05t7qx3m3vq9y0.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-23T00:00:00",
                "company": "Ashley Services Group Ltd.",
                "ticker": "AU:ASH",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.042,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 77027114,
                "marketCapCurrencyId": 4,
                "sector": 17348,
                "stockId": 110955,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "524d4b92",
            "companyName": "Ashley Services Group Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.029,
            "dividendYield": 0.11320000000000001,
            "peRatio": 7.133,
            "stockId": 110955,
            "high52Weeks": 0.762,
            "low52Weeks": 0.490,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 10
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 77027114,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.64
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.67
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.63
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Ashley Services Group Ltd."
        },
        {
            "ticker": "AU:GTN",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "industrials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-28T00:00:00",
                "company": "GTN Ltd.",
                "ticker": "AU:GTN",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.002,
                "lastEps": 0.001,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 76555120,
                "marketCapCurrencyId": 4,
                "sector": 17348,
                "stockId": 110825,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -359000.0,
                "totalRevenue": 86706000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230829/pdf/05t64vvp7wyct4.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 87600000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "GTN Ltd.",
                "ticker": "AU:GTN",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.014,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 76555120,
                "marketCapCurrencyId": 4,
                "sector": 17348,
                "stockId": 110825,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "e4416b2c",
            "companyName": "GTN Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.014,
            "dividendYield": 0.06428,
            "peRatio": 30.241,
            "stockId": 110825,
            "high52Weeks": 0.588,
            "low52Weeks": 0.353,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 2
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 76555120,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.39
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.45
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.40
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "GTN Ltd."
        },
        {
            "ticker": "AU:MSV",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "industrials",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-23T00:00:00",
                "company": "Mitchell Services Limited",
                "ticker": "AU:MSV",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.034,
                "lastEps": -0.005,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 76416304,
                "marketCapCurrencyId": 4,
                "sector": 17348,
                "stockId": 110296,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 7422613.0,
                "totalRevenue": 122912912.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230824/pdf/05szhj29bmxw2l.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 65800000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Mitchell Services Limited",
                "ticker": "AU:MSV",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.001,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 76416304,
                "marketCapCurrencyId": 4,
                "sector": 17348,
                "stockId": 110296,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "b3fedd0f",
            "companyName": "Mitchell Services Limited",
            "priceTarget": 0.56,
            "bestPriceTarget": 0.56,
            "dividend": 0.010,
            "dividendYield": 0.05942,
            "peRatio": 10.349,
            "stockId": 110296,
            "high52Weeks": 0.424,
            "low52Weeks": 0.279,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 8
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 76416304,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.39
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.37
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.34
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Mitchell Services Limited"
        },
        {
            "ticker": "AU:RTR",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 1.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": "neutral",
                "rawConsensus": 3,
                "distribution": {
                    "buy": 0.0,
                    "hold": 1.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-03-14T00:00:00",
                "company": "Rumble Resources Limited",
                "ticker": "AU:RTR",
                "periodEnding": "Dec 2022",
                "eps": null,
                "reportedEPS": -0.003,
                "lastEps": -0.003,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 76376395,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 110732,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2022-12-31T00:00:00",
                "totalIncome": -1982125.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://www.asx.com.au/asxpdf/20230314/pdf/45mnbcc6nm2zxc.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-09-29T00:00:00",
                "company": "Rumble Resources Limited",
                "ticker": "AU:RTR",
                "periodEnding": "Jun 2023",
                "eps": -0.003,
                "reportedEPS": -0.003,
                "lastEps": -0.002,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 76376395,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 110732,
                "stockTypeId": 12,
                "surprise": 0.0,
                "timeOfDay": 4,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 0.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "9ef1c78e",
            "companyName": "Rumble Resources Limited",
            "priceTarget": 0.27,
            "bestPriceTarget": 0.14,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -20.754,
            "stockId": 110732,
            "high52Weeks": 0.280,
            "low52Weeks": 0.100,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 47
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 76376395,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.22
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.18
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.26
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Rumble Resources Limited"
        },
        {
            "ticker": "AU:LMG",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-27T00:00:00",
                "company": "Latrobe Magnesium Limited",
                "ticker": "AU:LMG",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.001,
                "lastEps": -0.001,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 76076349,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110774,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1309158.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230927/pdf/05vc261f9nvjh3.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-12T00:00:00",
                "company": "Latrobe Magnesium Limited",
                "ticker": "AU:LMG",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 76076349,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110774,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "05a41180",
            "companyName": "Latrobe Magnesium Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -29.333,
            "stockId": 110774,
            "high52Weeks": 0.087,
            "low52Weeks": 0.042,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 3,
                "bullishCount": 46
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 76076349,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.08
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.05
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.08
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Latrobe Magnesium Limited"
        },
        {
            "ticker": "AU:HAV",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-04-14T00:00:00",
                "company": "Havilah Resources Limited",
                "ticker": "AU:HAV",
                "periodEnding": "Jan 2023",
                "eps": null,
                "reportedEPS": 0.004,
                "lastEps": -0.004,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 75993411,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110514,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-01-31T00:00:00",
                "totalIncome": 1376772.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://www.asx.com.au/asxpdf/20230414/pdf/45nnvjv7zv8d4x.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-11-01T00:00:00",
                "company": "Havilah Resources Limited",
                "ticker": "AU:HAV",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.005,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 75993411,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110514,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "2b7076bf",
            "companyName": "Havilah Resources Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -342.857,
            "stockId": 110514,
            "high52Weeks": 0.420,
            "low52Weeks": 0.200,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 15
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 75993411,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.33
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.20
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.28
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Havilah Resources Limited"
        },
        {
            "ticker": "AU:PPK",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "industrials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-23T00:00:00",
                "company": "PPK Group Limited",
                "ticker": "PLPKF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.01338329769,
                "lastEps": -0.04142449285,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48405391,
                "marketCapCurrencyId": 1,
                "sector": 17348,
                "stockId": 90091,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1205134.09199,
                "totalRevenue": 3751784.45243,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230824/pdf/05szj931pf3z23.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-13T00:00:00",
                "company": "PPK Group Limited",
                "ticker": "PLPKF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.04206179274,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48405391,
                "marketCapCurrencyId": 1,
                "sector": 17348,
                "stockId": 90091,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "2aa42d81",
            "companyName": "PPK Group Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.151,
            "dividendYield": null,
            "peRatio": -9.047,
            "stockId": 90091,
            "high52Weeks": 2.970,
            "low52Weeks": 0.490,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 30
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 71956294,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 2.97
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 2.97
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 2.97
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "PPK Group Limited"
        },
        {
            "ticker": "AU:EVS",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "utilities",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 2.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-21T00:00:00",
                "company": "EnviroSuite Ltd",
                "ticker": "AU:EVS",
                "periodEnding": "Jun 2023",
                "eps": 0.000,
                "reportedEPS": -0.003,
                "lastEps": -0.006,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 75708001,
                "marketCapCurrencyId": 4,
                "sector": 17351,
                "stockId": 110329,
                "stockTypeId": 12,
                "surprise": -1.0,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -4130000.0,
                "totalRevenue": 30175000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230822/pdf/05swcm525b5x90.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 6800000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-22T00:00:00",
                "company": "EnviroSuite Ltd",
                "ticker": "AU:EVS",
                "periodEnding": "Dec 2023",
                "eps": -0.003,
                "reportedEPS": null,
                "lastEps": -0.005,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 75708001,
                "marketCapCurrencyId": 4,
                "sector": 17351,
                "stockId": 110329,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 30700000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "54d91ea8",
            "companyName": "EnviroSuite Ltd",
            "priceTarget": 0.16,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -7.407,
            "stockId": 110329,
            "high52Weeks": 0.150,
            "low52Weeks": 0.060,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 12
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 75708001,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.13
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.08
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.14
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "EnviroSuite Ltd"
        },
        {
            "ticker": "AU:VYS",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "communicationservices",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-24T00:00:00",
                "company": "Vysarn Ltd",
                "ticker": "AU:VYS",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.010,
                "lastEps": 0.001,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 75595169,
                "marketCapCurrencyId": 4,
                "sector": 20703,
                "stockId": 105028,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 3927833.0,
                "totalRevenue": 35874033.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230825/pdf/05t1k2d1hn94jf.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 37100000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-21T00:00:00",
                "company": "Vysarn Ltd",
                "ticker": "AU:VYS",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.010,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 75595169,
                "marketCapCurrencyId": 4,
                "sector": 20703,
                "stockId": 105028,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "11e15471",
            "companyName": "Vysarn Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": 18.877,
            "stockId": 105028,
            "high52Weeks": 0.205,
            "low52Weeks": 0.076,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 14
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 75595169,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": null,
                "threeMonthsAgo": null,
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.08
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Vysarn Ltd"
        },
        {
            "ticker": "AU:TWD",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "realestate",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-22T00:00:00",
                "company": "Tamawood Limited",
                "ticker": "AU:TWD",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.036,
                "lastEps": 0.016,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 74417152,
                "marketCapCurrencyId": 4,
                "sector": 60463,
                "stockId": 110577,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 1294000.0,
                "totalRevenue": 38841000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230822/pdf/05swvwjy0fzx22.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-08T00:00:00",
                "company": "Tamawood Limited",
                "ticker": "AU:TWD",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 74417152,
                "marketCapCurrencyId": 4,
                "sector": 60463,
                "stockId": 110577,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "b73787c8",
            "companyName": "Tamawood Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.129,
            "dividendYield": 0.11428,
            "peRatio": 34.883,
            "stockId": 110577,
            "high52Weeks": 2.520,
            "low52Weeks": 1.980,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 5
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 74417152,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 2.31
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 2.15
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 1.99
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Tamawood Limited"
        },
        {
            "ticker": "AU:POS",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-22T00:00:00",
                "company": "Poseidon Nickel Limited",
                "ticker": "PSDNF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00127459978,
                "lastEps": -0.00127459978,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 47264424,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 90252,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -3512159.69379,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230922/pdf/05v668bm042wxw.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-07T00:00:00",
                "company": "Poseidon Nickel Limited",
                "ticker": "PSDNF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 47264424,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 90252,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "b36bd02c",
            "companyName": "Poseidon Nickel Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -4.166,
            "stockId": 90252,
            "high52Weeks": 0.070,
            "low52Weeks": 0.010,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 28,
                "bullishCount": 86
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 74163553,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.02
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.02
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.03
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Poseidon Nickel Limited"
        },
        {
            "ticker": "AU:RND",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-13T00:00:00",
                "company": "Rand Mining Limited",
                "ticker": "DE:014",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.01818240210,
                "lastEps": 0.03454656399,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 44812801,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 104743,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 1037969.09140158,
                "totalRevenue": 7198140.2553585,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230913/pdf/05tvdxznt69jt9.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-05T00:00:00",
                "company": "Rand Mining Limited",
                "ticker": "DE:014",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 44812801,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 104743,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "d782a38a",
            "companyName": "Rand Mining Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.100,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 104743,
            "high52Weeks": 1.004,
            "low52Weeks": 0.695,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 1
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 73938747,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.96
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.78
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 1.00
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Rand Mining Limited"
        },
        {
            "ticker": "AU:KGL",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-21T00:00:00",
                "company": "KGL Resources Limited",
                "ticker": "KGLLF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00128264986,
                "lastEps": -0.00256529972,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 46999554,
                "marketCapCurrencyId": 1,
                "sector": 18555,
                "stockId": 88330,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -619025.42085897,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230921/pdf/05v4j1xn66hx6n.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-08-21T00:00:00",
                "company": "KGL Resources Limited",
                "ticker": "KGLLF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 46999554,
                "marketCapCurrencyId": 1,
                "sector": 18555,
                "stockId": 88330,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "f9a38ed9",
            "companyName": "KGL Resources Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -25.428,
            "stockId": 88330,
            "high52Weeks": 0.262,
            "low52Weeks": 0.026,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 6
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 68075023,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.14
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.10
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.19
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "KGL Resources Limited"
        },
        {
            "ticker": "AU:ABY",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "consumercyclical",
            "analystConsensus": {
                "consensus": "neutral",
                "rawConsensus": 3,
                "distribution": {
                    "buy": 0.0,
                    "hold": 2.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-22T00:00:00",
                "company": "Adore Beauty Group Ltd.",
                "ticker": "AU:ABY",
                "periodEnding": "Jun 2023",
                "eps": -0.004,
                "reportedEPS": -0.005,
                "lastEps": 0.004,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 73717289,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "stockId": 110061,
                "stockTypeId": 12,
                "surprise": -0.2,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -469000.0,
                "totalRevenue": 87012000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230823/pdf/05sxz3b6ghh8st.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 86500000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-19T00:00:00",
                "company": "Adore Beauty Group Ltd.",
                "ticker": "AU:ABY",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 73717289,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "stockId": 110061,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "f7ff59e1",
            "companyName": "Adore Beauty Group Ltd.",
            "priceTarget": 1.20,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -133.050,
            "stockId": 110061,
            "high52Weeks": 1.800,
            "low52Weeks": 0.780,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 3
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 73717289,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 1.03
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.82
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 1.28
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Adore Beauty Group Ltd."
        },
        {
            "ticker": "AU:AUC",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-27T00:00:00",
                "company": "Ausgold Limited",
                "ticker": "DE:AU4",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00060273352,
                "lastEps": 0.00000000000,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 44532659,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 104004,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1375439.09810704,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02717239-6A1170655?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-15T00:00:00",
                "company": "Ausgold Limited",
                "ticker": "DE:AU4",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 44532659,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 104004,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "1e6d344a",
            "companyName": "Ausgold Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 104004,
            "high52Weeks": 0.039,
            "low52Weeks": 0.015,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 41
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 75772664,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.03
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.02
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.02
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Ausgold Limited"
        },
        {
            "ticker": "AU:OCC",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "Orthocell Ltd",
                "ticker": "AU:OCC",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.011,
                "lastEps": -0.023,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 73002143,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 89790,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -2191583.0,
                "totalRevenue": 3396210.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05tcj3jbsglvbn.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 2200000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-27T00:00:00",
                "company": "Orthocell Ltd",
                "ticker": "AU:OCC",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.021,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 73002143,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 89790,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "9d91c818",
            "companyName": "Orthocell Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -11.526,
            "stockId": 89790,
            "high52Weeks": 0.505,
            "low52Weeks": 0.320,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 3,
                "bullishCount": 51
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 73002143,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": null,
                "threeMonthsAgo": null,
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.40
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Orthocell Ltd"
        },
        {
            "ticker": "AU:PEX",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-27T00:00:00",
                "company": "Peel Mining Limited",
                "ticker": "DE:W5E",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.00303040035,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 43998980,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 104424,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230928/pdf/05vcvg8m48w4zx.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Peel Mining Limited",
                "ticker": "DE:W5E",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 43998980,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 104424,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "9bda160c",
            "companyName": "Peel Mining Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 104424,
            "high52Weeks": 0.122,
            "low52Weeks": 0.051,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 10
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 75499822,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.09
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.06
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.09
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Peel Mining Limited"
        },
        {
            "ticker": "AU:SSL",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "utilities",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-05-22T00:00:00",
                "company": "Sietel Limited",
                "ticker": "AU:SSL",
                "periodEnding": "Mar 2023",
                "eps": null,
                "reportedEPS": 0.073,
                "lastEps": 0.182,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 72067308,
                "marketCapCurrencyId": 4,
                "sector": 17351,
                "stockId": 110029,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-03-31T00:00:00",
                "totalIncome": 587907.0,
                "totalRevenue": 6441581.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230522/pdf/05pxmrgklym3p9.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-11-30T00:00:00",
                "company": "Sietel Limited",
                "ticker": "AU:SSL",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.235,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 72067308,
                "marketCapCurrencyId": 4,
                "sector": 17351,
                "stockId": 110029,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "dbcb0f33",
            "companyName": "Sietel Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": 29.154,
            "stockId": 110029,
            "high52Weeks": 9.500,
            "low52Weeks": 7.000,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7946
            },
            "bloggerSentimentData": null,
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 72067308,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 8.31
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 7.79
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 7.40
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Sietel Limited"
        },
        {
            "ticker": "AU:SPL",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-23T00:00:00",
                "company": "Starpharma Holdings Limited",
                "ticker": "SPHRF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.01147139802,
                "lastEps": -0.01210869791,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 45781257,
                "marketCapCurrencyId": 1,
                "sector": 17347,
                "stockId": 91300,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -4691164.49029,
                "totalRevenue": 1180916.69617,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230824/pdf/05t0c0c97cdllr.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-26T00:00:00",
                "company": "Starpharma Holdings Limited",
                "ticker": "SPHRF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 45781257,
                "marketCapCurrencyId": 1,
                "sector": 17347,
                "stockId": 91300,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "e1249d5e",
            "companyName": "Starpharma Holdings Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -4.280,
            "stockId": 91300,
            "high52Weeks": 0.504,
            "low52Weeks": 0.080,
            "hedgeFundSentimentData": {
                "rating": 1,
                "score": 0.5
            },
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 14,
                "bullishCount": 26
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 65678890,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-03T00:00:00",
                    "d": "3/1/23",
                    "p": 0.36
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.19
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.38
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Starpharma Holdings Limited"
        },
        {
            "ticker": "AU:S2R",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-20T00:00:00",
                "company": "S2 Resources Ltd.",
                "ticker": "AU:S2R",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.009,
                "lastEps": -0.008,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 71766015,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 91374,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -3358987.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230920/pdf/05v34l3lrpjyb6.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-13T00:00:00",
                "company": "S2 Resources Ltd.",
                "ticker": "AU:S2R",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.010,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 71766015,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 91374,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "cb09bd1b",
            "companyName": "S2 Resources Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -9.668,
            "stockId": 91374,
            "high52Weeks": 0.205,
            "low52Weeks": 0.110,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 25
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 71766015,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": null,
                "threeMonthsAgo": null,
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.14
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "S2 Resources Ltd."
        },
        {
            "ticker": "AU:GSS",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "Genetic Signatures Ltd.",
                "ticker": "AU:GSS",
                "periodEnding": "Jun 2023",
                "eps": -0.056,
                "reportedEPS": -0.053,
                "lastEps": -0.011,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 71703003,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110530,
                "stockTypeId": 12,
                "surprise": 0.0566037735849056603773584906,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -7572000.0,
                "totalRevenue": 6534000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05tbvvgf92h0j3.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 6500000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Genetic Signatures Ltd.",
                "ticker": "AU:GSS",
                "periodEnding": "Dec 2023",
                "eps": -0.037,
                "reportedEPS": null,
                "lastEps": -0.045,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 71703003,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110530,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 8900000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "bcfcd364",
            "companyName": "Genetic Signatures Ltd.",
            "priceTarget": 2.19,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -5.102,
            "stockId": 110530,
            "high52Weeks": 0.995,
            "low52Weeks": 0.435,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 5
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 71703003,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.88
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.52
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.82
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Genetic Signatures Ltd."
        },
        {
            "ticker": "AU:MVP",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-30T00:00:00",
                "company": "Medical Developments International Limited",
                "ticker": "AU:MVP",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.096,
                "lastEps": -0.069,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 71633332,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110287,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -8266999.9999999991,
                "totalRevenue": 18412000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02705315-3A624920?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 16000000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-22T00:00:00",
                "company": "Medical Developments International Limited",
                "ticker": "AU:MVP",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 71633332,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110287,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "9022f89d",
            "companyName": "Medical Developments International Limited",
            "priceTarget": 1.60,
            "bestPriceTarget": null,
            "dividend": 0.019,
            "dividendYield": null,
            "peRatio": -13.070,
            "stockId": 110287,
            "high52Weeks": 1.850,
            "low52Weeks": 0.705,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 35
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 71633332,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 1.48
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.78
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 1.56
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Medical Developments International Limited"
        },
        {
            "ticker": "AU:RDN",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-21T00:00:00",
                "company": "Raiden Resources Limited",
                "ticker": "DE:YM4",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.00000000000,
                "lastEps": -0.00060608007,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 43014344,
                "marketCapCurrencyId": 3,
                "sector": 18555,
                "stockId": 105307,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -297767.138391,
                "totalRevenue": 185115.0357801,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230922/pdf/05v4yb0whdc0j0.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-14T00:00:00",
                "company": "Raiden Resources Limited",
                "ticker": "DE:YM4",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 43014344,
                "marketCapCurrencyId": 3,
                "sector": 18555,
                "stockId": 105307,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "62c692e5",
            "companyName": "Raiden Resources Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -7.391,
            "stockId": 105307,
            "high52Weeks": 0.026,
            "low52Weeks": 0.012,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 4,
                "bullishCount": 86
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 73260793,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-08-24T00:00:00",
                    "d": "24/8/23",
                    "p": 0.02
                },
                "threeMonthsAgo": {
                    "date": "2023-08-24T00:00:00",
                    "d": "24/8/23",
                    "p": 0.02
                },
                "yearAgo": {
                    "date": "2023-08-24T00:00:00",
                    "d": "24/8/23",
                    "p": 0.02
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Raiden Resources Limited"
        },
        {
            "ticker": "AU:G1A",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-23T00:00:00",
                "company": "Galena Mining Ltd.",
                "ticker": "AU:G1A",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.045,
                "lastEps": -0.010,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 70741452,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110850,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -33900346.0,
                "totalRevenue": 29100315.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230823/pdf/05sz460wv7vm66.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-21T00:00:00",
                "company": "Galena Mining Ltd.",
                "ticker": "AU:G1A",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.010,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 70741452,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110850,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "3acb76e0",
            "companyName": "Galena Mining Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -1.807,
            "stockId": 110850,
            "high52Weeks": 0.300,
            "low52Weeks": 0.081,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 15,
                "bullishCount": 30
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 70741452,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.25
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.11
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.14
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Galena Mining Ltd."
        },
        {
            "ticker": "AU:CSS",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "consumerdefensive",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-28T00:00:00",
                "company": "Clean Seas Seafood Limited",
                "ticker": "CTUNF",
                "periodEnding": "Jun 2023",
                "eps": 0.01911899670,
                "reportedEPS": 0.00000000000,
                "lastEps": 0.01274599780,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 44823243,
                "marketCapCurrencyId": 1,
                "sector": 18731,
                "stockId": 85948,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 6030768.85907,
                "totalRevenue": 22420210.1302,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://wcsecure.weblink.com.au/pdf/CSS/02703804.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 42000000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-20T00:00:00",
                "company": "Clean Seas Seafood Limited",
                "ticker": "CTUNF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.01338329769,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 44823243,
                "marketCapCurrencyId": 1,
                "sector": 18731,
                "stockId": 85948,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "ffa0b251",
            "companyName": "Clean Seas Seafood Limited",
            "priceTarget": 0.5962656000,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": 12.601,
            "stockId": 85948,
            "high52Weeks": 0.480,
            "low52Weeks": 0.300,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 4
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 76125179,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.41
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.31
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.40
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Clean Seas Seafood Limited"
        },
        {
            "ticker": "AU:NWC",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-03-16T00:00:00",
                "company": "New World Resources Limited",
                "ticker": "DE:C5W",
                "periodEnding": "Dec 2022",
                "eps": null,
                "reportedEPS": -0.00060608007,
                "lastEps": -0.00484864056,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 42494697,
                "marketCapCurrencyId": 3,
                "sector": 18555,
                "stockId": 106180,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2022-12-31T00:00:00",
                "totalIncome": -615505.82724864,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://www.asx.com.au/asxpdf/20230316/pdf/45mrqgk6s5c944.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-10-03T00:00:00",
                "company": "New World Resources Limited",
                "ticker": "DE:C5W",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.00060608007,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 42494697,
                "marketCapCurrencyId": 3,
                "sector": 18555,
                "stockId": 106180,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "6aadd808",
            "companyName": "New World Resources Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 106180,
            "high52Weeks": 0.035,
            "low52Weeks": 0.013,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 56
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 72375746,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.02
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.02
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.02
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "New World Resources Limited"
        },
        {
            "ticker": "AU:MAM",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "financial",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-15T00:00:00",
                "company": "Microequities Asset Management Group Ltd.",
                "ticker": "AU:MAM",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.019,
                "lastEps": 0.004,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 69980487,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110127,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 2500516.0,
                "totalRevenue": 6559607.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230816/pdf/05sp6mz4r3f980.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-15T00:00:00",
                "company": "Microequities Asset Management Group Ltd.",
                "ticker": "AU:MAM",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.024,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 69980487,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110127,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "b4787553",
            "companyName": "Microequities Asset Management Group Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.014,
            "dividendYield": 0.06226,
            "peRatio": 12.355,
            "stockId": 110127,
            "high52Weeks": 0.749,
            "low52Weeks": 0.525,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 4
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 69980487,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.64
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.59
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.56
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Microequities Asset Management Group Ltd."
        },
        {
            "ticker": "AU:SOM",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-30T00:00:00",
                "company": "Somnomed Limited",
                "ticker": "SOMNF",
                "periodEnding": "Jun 2023",
                "eps": -0.01218517367,
                "reportedEPS": -0.01218517367,
                "lastEps": -0.01026119888,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 44588123,
                "marketCapCurrencyId": 1,
                "sector": 17347,
                "stockId": 91270,
                "stockTypeId": 1,
                "surprise": 0.0,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -2728292.4509595,
                "totalRevenue": 27997121.908741038,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02705512-2A1470645?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 23477000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-20T00:00:00",
                "company": "Somnomed Limited",
                "ticker": "SOMNF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 44588123,
                "marketCapCurrencyId": 1,
                "sector": 17347,
                "stockId": 91270,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "662a907b",
            "companyName": "Somnomed Limited",
            "priceTarget": 1.9143264000,
            "bestPriceTarget": 1.9143264000,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -6.290,
            "stockId": 91270,
            "high52Weeks": 1.090,
            "low52Weeks": 0.362,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 1.0000
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 3
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 60565947,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.81
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.60
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.83
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Somnomed Limited"
        },
        {
            "ticker": "AU:RKN",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": "sell",
                "rawConsensus": 2,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 1.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-14T00:00:00",
                "company": "Reckon Limited",
                "ticker": "DE:UVW",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.02242496259,
                "lastEps": 0.01090944126,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 42219878,
                "marketCapCurrencyId": 3,
                "sector": 17349,
                "stockId": 103663,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 2545536.294,
                "totalRevenue": 17072063.41176,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230815/pdf/05sml256dwxq13.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-13T00:00:00",
                "company": "Reckon Limited",
                "ticker": "DE:UVW",
                "periodEnding": "Dec 2023",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.01090944126,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 42219878,
                "marketCapCurrencyId": 3,
                "sector": 17349,
                "stockId": 103663,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 25500000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "b18afdf0",
            "companyName": "Reckon Limited",
            "priceTarget": 0.4454856900,
            "bestPriceTarget": null,
            "dividend": 0.025,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 103663,
            "high52Weeks": 0.440,
            "low52Weeks": 0.238,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 6
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 70226907,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.36
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.29
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.38
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Reckon Limited"
        },
        {
            "ticker": "AU:EPY",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-23T00:00:00",
                "company": "EarlyPay Limited",
                "ticker": "AU:EPY",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.008,
                "lastEps": 0.028,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 69582882,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110756,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -2319000.0,
                "totalRevenue": 28888000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://wcsecure.weblink.com.au/pdf/EPY/02701701.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 25100000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-22T00:00:00",
                "company": "EarlyPay Limited",
                "ticker": "AU:EPY",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 69582882,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110756,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "bc4f025a",
            "companyName": "EarlyPay Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.017,
            "dividendYield": 0.133333,
            "peRatio": -8.955,
            "stockId": 110756,
            "high52Weeks": 0.450,
            "low52Weeks": 0.145,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 3,
                "bullishCount": 10
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 69582882,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.20
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.18
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.43
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "EarlyPay Limited"
        },
        {
            "ticker": "AU:EOF",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-21T00:00:00",
                "company": "Ecofibre Ltd.",
                "ticker": "EOFBF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.04206179274,
                "lastEps": -0.01529519736,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 44062091,
                "marketCapCurrencyId": 1,
                "sector": 17347,
                "stockId": 86421,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -14214974.04645,
                "totalRevenue": 10233124.33373,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230822/pdf/05sw413vpxbb7r.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-07T00:00:00",
                "company": "Ecofibre Ltd.",
                "ticker": "EOFBF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 44062091,
                "marketCapCurrencyId": 1,
                "sector": 17347,
                "stockId": 86421,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "3362ac1d",
            "companyName": "Ecofibre Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -1.500,
            "stockId": 86421,
            "high52Weeks": 0.850,
            "low52Weeks": 0.059,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 2
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 67319270,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.13
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.17
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.85
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Ecofibre Ltd."
        },
        {
            "ticker": "AU:CUP",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "financial",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-29T00:00:00",
                "company": "Countplus Limited",
                "ticker": "AU:CUP",
                "periodEnding": "Jun 2023",
                "eps": 0.010,
                "reportedEPS": 0.017,
                "lastEps": 0.014,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 68617445,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110224,
                "stockTypeId": 12,
                "surprise": -0.4117647058823529411764705882,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 5226000.0,
                "totalRevenue": 46767000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230830/pdf/05t7zngrvjpf97.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 43000000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-21T00:00:00",
                "company": "Countplus Limited",
                "ticker": "AU:CUP",
                "periodEnding": "Dec 2023",
                "eps": 0.020,
                "reportedEPS": null,
                "lastEps": -0.110,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 68617445,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110224,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 46700000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "5db4dbd2",
            "companyName": "Countplus Limited",
            "priceTarget": 1.05,
            "bestPriceTarget": null,
            "dividend": 0.022,
            "dividendYield": 0.056909999999999995,
            "peRatio": 13.606,
            "stockId": 110224,
            "high52Weeks": 0.714,
            "low52Weeks": 0.486,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7946
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 3
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 68617445,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.63
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.50
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.70
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Countplus Limited"
        },
        {
            "ticker": "AU:SRL",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": "neutral",
                "rawConsensus": 3,
                "distribution": {
                    "buy": 0.0,
                    "hold": 1.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-21T00:00:00",
                "company": "Sunrise Energy Metals Limited",
                "ticker": "SREMF",
                "periodEnding": "Jun 2023",
                "eps": -0.05098399120,
                "reportedEPS": -0.05098399120,
                "lastEps": -0.01274599780,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 43701502,
                "marketCapCurrencyId": 1,
                "sector": 18555,
                "stockId": 80475,
                "stockTypeId": 1,
                "surprise": 0.0,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -3188411.34967,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230822/pdf/05swf1mkt13jjf.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": -5802000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-22T00:00:00",
                "company": "Sunrise Energy Metals Limited",
                "ticker": "SREMF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 43701502,
                "marketCapCurrencyId": 1,
                "sector": 18555,
                "stockId": 80475,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "ed1264c0",
            "companyName": "Sunrise Energy Metals Limited",
            "priceTarget": 1.1611488000,
            "bestPriceTarget": null,
            "dividend": 0.039,
            "dividendYield": null,
            "peRatio": -7.096,
            "stockId": 80475,
            "high52Weeks": 1.670,
            "low52Weeks": 0.457,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 5,
                "bullishCount": 37
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 68572900,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": null,
                "threeMonthsAgo": null,
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 1.77
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Sunrise Energy Metals Limited"
        },
        {
            "ticker": "AU:RHY",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "Rhythm Biosciences Ltd.",
                "ticker": "AU:RHY",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.021,
                "lastEps": -0.021,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 68554204,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110043,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -4538171.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05tcnf0c6xsxp1.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-22T00:00:00",
                "company": "Rhythm Biosciences Ltd.",
                "ticker": "AU:RHY",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.017,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 68554204,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110043,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "7a8722bc",
            "companyName": "Rhythm Biosciences Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -8.179,
            "stockId": 110043,
            "high52Weeks": 1.310,
            "low52Weeks": 0.300,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 4,
                "bullishCount": 41
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 68554204,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.99
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.42
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 1.20
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Rhythm Biosciences Ltd."
        },
        {
            "ticker": "AU:ALA",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "Arovella Therapeutics Limited",
                "ticker": "AU:ALA",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.008,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 68549321,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110964,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05tbtgc6y523q2.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Arovella Therapeutics Limited",
                "ticker": "AU:ALA",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.006,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 68549321,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110964,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "f1c3df5e",
            "companyName": "Arovella Therapeutics Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -5.714,
            "stockId": 110964,
            "high52Weeks": 0.105,
            "low52Weeks": 0.020,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.8608
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 3,
                "bullishCount": 38
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 68549321,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.02
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.05
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.03
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Arovella Therapeutics Limited"
        },
        {
            "ticker": "AU:PTL",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "consumerdefensive",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "Pental Ltd.",
                "ticker": "DE:81B",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.00545472063,
                "lastEps": 0.00727296084,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 41324843,
                "marketCapCurrencyId": 3,
                "sector": 18731,
                "stockId": 103880,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 929120.74731,
                "totalRevenue": 30851899.88328,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05tbt5r9k3lhd3.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-15T00:00:00",
                "company": "Pental Ltd.",
                "ticker": "DE:81B",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.01212160140,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 41324843,
                "marketCapCurrencyId": 3,
                "sector": 18731,
                "stockId": 103880,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "20ecd415",
            "companyName": "Pental Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.009,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 103880,
            "high52Weeks": 0.243,
            "low52Weeks": 0.170,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 6
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 67331506,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.20
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.18
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.23
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Pental Ltd."
        },
        {
            "ticker": "AU:CPV",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-30T00:00:00",
                "company": "ClearVue Technologies Ltd.",
                "ticker": "CVUEF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.01147139802,
                "lastEps": -0.00573569901,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 43191562,
                "marketCapCurrencyId": 1,
                "sector": 17349,
                "stockId": 85996,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -2517681.25664016,
                "totalRevenue": 701.029879,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230830/pdf/05t9d1h85n9573.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-26T00:00:00",
                "company": "ClearVue Technologies Ltd.",
                "ticker": "CVUEF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.01083409813,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 43191562,
                "marketCapCurrencyId": 1,
                "sector": 17349,
                "stockId": 85996,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "352be76c",
            "companyName": "ClearVue Technologies Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -8.547,
            "stockId": 85996,
            "high52Weeks": 0.270,
            "low52Weeks": 0.082,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 42
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 72145180,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.10
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.11
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.16
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "ClearVue Technologies Ltd."
        },
        {
            "ticker": "AU:CRR",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "industrials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-13T00:00:00",
                "company": "Critical Resources Ltd",
                "ticker": "DE:9S70",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00121216014,
                "lastEps": -0.00060608007,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 40934227,
                "marketCapCurrencyId": 3,
                "sector": 17348,
                "stockId": 104734,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1230359.51234196,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230913/pdf/05tv98hd6w0d2f.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-29T00:00:00",
                "company": "Critical Resources Ltd",
                "ticker": "DE:9S70",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 40934227,
                "marketCapCurrencyId": 3,
                "sector": 17348,
                "stockId": 104734,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "42f96411",
            "companyName": "Critical Resources Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 104734,
            "high52Weeks": 0.053,
            "low52Weeks": 0.012,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 4,
                "bullishCount": 118
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 65761959,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.02
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.01
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.04
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Critical Resources Ltd"
        },
        {
            "ticker": "AU:DME",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-27T00:00:00",
                "company": "Dome Gold Mines Ltd.",
                "ticker": "AU:DME",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.003,
                "lastEps": -0.003,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 67110680,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 109995,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1082883.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230927/pdf/05vbnzvbm76jtd.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-14T00:00:00",
                "company": "Dome Gold Mines Ltd.",
                "ticker": "AU:DME",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 67110680,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 109995,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "8bfd5334",
            "companyName": "Dome Gold Mines Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -22.352,
            "stockId": 109995,
            "high52Weeks": 0.250,
            "low52Weeks": 0.050,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 3,
                "stockScore": 0.2916
            },
            "bloggerSentimentData": null,
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 67110680,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.23
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.20
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.23
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Dome Gold Mines Ltd."
        },
        {
            "ticker": "AU:AHX",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-27T00:00:00",
                "company": "Apiam Animal Health Ltd.",
                "ticker": "AU:AHX",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.004,
                "lastEps": 0.021,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 66602016,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110720,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -621000.0,
                "totalRevenue": 98038000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230828/pdf/05t3vqcxvw036q.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-22T00:00:00",
                "company": "Apiam Animal Health Ltd.",
                "ticker": "AU:AHX",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 66602016,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110720,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "79c0e049",
            "companyName": "Apiam Animal Health Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.004,
            "dividendYield": 0.0427297,
            "peRatio": 28.461,
            "stockId": 110720,
            "high52Weeks": 0.795,
            "low52Weeks": 0.350,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 4
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 66602016,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.64
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.50
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.80
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Apiam Animal Health Ltd."
        },
        {
            "ticker": "AU:SEQ",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "financial",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "Sequoia Financial Group Ltd.",
                "ticker": "AU:SEQ",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.024,
                "lastEps": 0.023,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 66176691,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110924,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -3260941.0,
                "totalRevenue": 37352319.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05tc8t8gpyc7pm.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-15T00:00:00",
                "company": "Sequoia Financial Group Ltd.",
                "ticker": "AU:SEQ",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 66176691,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110924,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "7d2a4728",
            "companyName": "Sequoia Financial Group Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.039,
            "dividendYield": 0.03076,
            "peRatio": -24.974,
            "stockId": 110924,
            "high52Weeks": 0.581,
            "low52Weeks": 0.414,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 13
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 66176691,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.54
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.49
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.50
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Sequoia Financial Group Ltd."
        },
        {
            "ticker": "AU:IRD",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-18T00:00:00",
                "company": "Iron Road Ltd",
                "ticker": "IRNRF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.00000000000,
                "lastEps": -0.00127459978,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 42167013,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 88091,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -63103.52320813,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230918/pdf/05v0n39rk402ws.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-08T00:00:00",
                "company": "Iron Road Ltd",
                "ticker": "IRNRF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 42167013,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 88091,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "7efc7de2",
            "companyName": "Iron Road Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -135.000,
            "stockId": 88091,
            "high52Weeks": 0.111,
            "low52Weeks": 0.040,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.9166
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 6
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 66165103,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.09
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.05
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.09
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Iron Road Ltd"
        },
        {
            "ticker": "AU:TMT",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-26T00:00:00",
                "company": "Technology Metals Australia Ltd.",
                "ticker": "AU:TMT",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.000,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 66114352,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110913,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-12T00:00:00",
                "company": "Technology Metals Australia Ltd.",
                "ticker": "AU:TMT",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 66114352,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110913,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "390c9585",
            "companyName": "Technology Metals Australia Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -22.222,
            "stockId": 110913,
            "high52Weeks": 0.450,
            "low52Weeks": 0.210,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 5,
                "bullishCount": 68
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 66114352,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.35
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.30
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.34
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Technology Metals Australia Ltd."
        },
        {
            "ticker": "AU:EXR",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-16T00:00:00",
                "company": "Elixir Energy Limited",
                "ticker": "ELXPF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00127459978,
                "lastEps": -0.00063729989,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 42001261,
                "marketCapCurrencyId": 1,
                "sector": 18555,
                "stockId": 86491,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1134115.94144796,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230816/pdf/05spkfz0wxqkl0.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-14T00:00:00",
                "company": "Elixir Energy Limited",
                "ticker": "ELXPF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.00063729989,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 42001261,
                "marketCapCurrencyId": 1,
                "sector": 18555,
                "stockId": 86491,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "f769f56d",
            "companyName": "Elixir Energy Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.002,
            "dividendYield": null,
            "peRatio": -22.727,
            "stockId": 86491,
            "high52Weeks": 0.110,
            "low52Weeks": 0.050,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 8,
                "bullishCount": 121
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 63845483,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-03T00:00:00",
                    "d": "3/1/23",
                    "p": 0.10
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.11
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.10
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Elixir Energy Limited"
        },
        {
            "ticker": "AU:VRX",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-03-13T00:00:00",
                "company": "VRX Silica Ltd.",
                "ticker": "AU:VRX",
                "periodEnding": "Dec 2022",
                "eps": null,
                "reportedEPS": -0.005,
                "lastEps": -0.590,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 65883848,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110658,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2022-12-31T00:00:00",
                "totalIncome": -2621638.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://www.asx.com.au/asxpdf/20230313/pdf/45mm2xc20zqbz6.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-09-28T00:00:00",
                "company": "VRX Silica Ltd.",
                "ticker": "AU:VRX",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.003,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 65883848,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110658,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230928/pdf/05vdwvwzvxxn2y.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "622419d9",
            "companyName": "VRX Silica Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -14.556,
            "stockId": 110658,
            "high52Weeks": 0.180,
            "low52Weeks": 0.093,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 3,
                "bullishCount": 70
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 65883848,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.14
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.13
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.14
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "VRX Silica Ltd."
        },
        {
            "ticker": "AU:ANP",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-25T00:00:00",
                "company": "Antisense Therapeutics Limited",
                "ticker": "ATHJF",
                "periodEnding": "Jun 2023",
                "eps": -0.00955949835,
                "reportedEPS": -0.00955949835,
                "lastEps": -0.00254919956,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 41367924,
                "marketCapCurrencyId": 1,
                "sector": 17347,
                "stockId": 84582,
                "stockTypeId": 1,
                "surprise": 0.0,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -3891808.16046146,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://www.asx.com.au/asx/statistics/displayAnnouncement.do?display=pdf&idsId=02702940",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 0.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Antisense Therapeutics Limited",
                "ticker": "ATHJF",
                "periodEnding": "Dec 2023",
                "eps": -0.00892219846,
                "reportedEPS": null,
                "lastEps": -0.00509839912,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 41367924,
                "marketCapCurrencyId": 1,
                "sector": 17347,
                "stockId": 84582,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 0.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "2eb073d0",
            "companyName": "Antisense Therapeutics Limited",
            "priceTarget": 0.2981328000,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -3.947,
            "stockId": 84582,
            "high52Weeks": 0.109,
            "low52Weeks": 0.033,
            "hedgeFundSentimentData": {
                "rating": 1,
                "score": 0.5
            },
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7946
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 68
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 64911236,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.06
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.04
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.08
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Antisense Therapeutics Limited"
        },
        {
            "ticker": "AU:3DP",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "Pointerra Ltd.",
                "ticker": "PTRRF",
                "periodEnding": "Jun 2023",
                "eps": 0.00000000000,
                "reportedEPS": -0.00127459978,
                "lastEps": 0.00063729989,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 41280369,
                "marketCapCurrencyId": 1,
                "sector": 17349,
                "stockId": 90326,
                "stockTypeId": 1,
                "surprise": -1.0,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -826674.82691328,
                "totalRevenue": 2238140.49398979,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://www.asx.com.au/asx/statistics/displayAnnouncement.do?display=pdf&idsId=02706123",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 7500000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-27T00:00:00",
                "company": "Pointerra Ltd.",
                "ticker": "PTRRF",
                "periodEnding": "Dec 2023",
                "eps": -0.00127459978,
                "reportedEPS": null,
                "lastEps": -0.00318649945,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 41280369,
                "marketCapCurrencyId": 1,
                "sector": 17349,
                "stockId": 90326,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 6800000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "079c4f90",
            "companyName": "Pointerra Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -3.636,
            "stockId": 90326,
            "high52Weeks": 0.170,
            "low52Weeks": 0.016,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 12,
                "bullishCount": 69
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 63350254,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.15
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.07
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.17
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Pointerra Ltd."
        },
        {
            "ticker": "AU:AMA",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "consumercyclical",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-06T00:00:00",
                "company": "Ama Group Limited",
                "ticker": "AU:AMA",
                "periodEnding": "Jun 2023",
                "eps": 0.000,
                "reportedEPS": 0.000,
                "lastEps": -0.022,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 64006192,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "stockId": 110864,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -118698000.0,
                "totalRevenue": 441234000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230907/pdf/05tmgh0glc71ty.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 455800000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-29T00:00:00",
                "company": "Ama Group Limited",
                "ticker": "AU:AMA",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.024,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 64006192,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "stockId": 110864,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "3d350103",
            "companyName": "Ama Group Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.022,
            "dividendYield": null,
            "peRatio": -0.345,
            "stockId": 110864,
            "high52Weeks": 0.250,
            "low52Weeks": 0.035,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.8608
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 4,
                "bullishCount": 8
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 64006192,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.19
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.09
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.21
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Ama Group Limited"
        },
        {
            "ticker": "AU:AAR",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-25T00:00:00",
                "company": "Astral Resources NL",
                "ticker": "AU:AAR",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.002,
                "lastEps": -0.002,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 63982767,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 105934,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1648307.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230925/pdf/05v81zzy9dhdg1.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-15T00:00:00",
                "company": "Astral Resources NL",
                "ticker": "AU:AAR",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.003,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 63982767,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 105934,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "0d2e4267",
            "companyName": "Astral Resources NL",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -14.210,
            "stockId": 105934,
            "high52Weeks": 0.099,
            "low52Weeks": 0.050,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.8608
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 18
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 63982767,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": null,
                "threeMonthsAgo": null,
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.08
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Astral Resources NL"
        },
        {
            "ticker": "AU:BMT",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 2.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-23T00:00:00",
                "company": "Beamtree Holdings Ltd",
                "ticker": "AU:BMT",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.011,
                "lastEps": -0.011,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 63955487,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110044,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -2782000.0,
                "totalRevenue": 12268000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02701562-2A1468612?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-29T00:00:00",
                "company": "Beamtree Holdings Ltd",
                "ticker": "AU:BMT",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.017,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 63955487,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110044,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "dfa479af",
            "companyName": "Beamtree Holdings Ltd",
            "priceTarget": 0.67,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -8.571,
            "stockId": 110044,
            "high52Weeks": 0.385,
            "low52Weeks": 0.185,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 17
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 63955487,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.34
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.24
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.22
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Beamtree Holdings Ltd"
        },
        {
            "ticker": "AU:MCP",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "consumercyclical",
            "analystConsensus": {
                "consensus": "neutral",
                "rawConsensus": 3,
                "distribution": {
                    "buy": 0.0,
                    "hold": 2.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-23T00:00:00",
                "company": "Mcpherson'S Limited",
                "ticker": "DE:M5C",
                "periodEnding": "Jun 2023",
                "eps": 0.00484864056,
                "reportedEPS": 0.00666688077,
                "lastEps": 0.01151552133,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 38387670,
                "marketCapCurrencyId": 3,
                "sector": 20301,
                "stockId": 105215,
                "stockTypeId": 12,
                "surprise": -0.2727272727272727272727272727,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -3117069.80001,
                "totalRevenue": 59534639.19603,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230824/pdf/05t0tcckmymz52.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 106000000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-20T00:00:00",
                "company": "Mcpherson'S Limited",
                "ticker": "DE:M5C",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 38387670,
                "marketCapCurrencyId": 3,
                "sector": 20301,
                "stockId": 105215,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "c7e25033",
            "companyName": "Mcpherson'S Limited",
            "priceTarget": 0.5279830400,
            "bestPriceTarget": null,
            "dividend": 0.009,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 105215,
            "high52Weeks": 0.482,
            "low52Weeks": 0.215,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 2
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 61178387,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.39
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.25
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.47
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Mcpherson'S Limited"
        },
        {
            "ticker": "AU:JGH",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-12T00:00:00",
                "company": "Jade Gas Holdings Limited",
                "ticker": "AU:JGH",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.002,
                "lastEps": -0.001,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 63073363,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 110494,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -2303936.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230912/pdf/05tt0vf5rj14g6.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-21T00:00:00",
                "company": "Jade Gas Holdings Limited",
                "ticker": "AU:JGH",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.001,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 63073363,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 110494,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "b604d868",
            "companyName": "Jade Gas Holdings Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -13.793,
            "stockId": 110494,
            "high52Weeks": 0.062,
            "low52Weeks": 0.028,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 10
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 63073363,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.05
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.04
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.06
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Jade Gas Holdings Limited"
        },
        {
            "ticker": "AU:MWY",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "consumerdefensive",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-23T00:00:00",
                "company": "Midway Ltd",
                "ticker": "DE:MI6",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.04121344476,
                "lastEps": -0.06485056749,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 38111579,
                "marketCapCurrencyId": 3,
                "sector": 18731,
                "stockId": 105828,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -3609206.81685,
                "totalRevenue": 48553680.48777,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230824/pdf/05szmvsr9s1y44.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-22T00:00:00",
                "company": "Midway Ltd",
                "ticker": "DE:MI6",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 38111579,
                "marketCapCurrencyId": 3,
                "sector": 18731,
                "stockId": 105828,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "ec46087a",
            "companyName": "Midway Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.090,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 105828,
            "high52Weeks": 0.650,
            "low52Weeks": 0.336,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 2,
                "rating": 2,
                "bearishCount": 1,
                "bullishCount": 1
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 60261997,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.58
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.40
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.60
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Midway Ltd"
        },
        {
            "ticker": "AU:BRK",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-13T00:00:00",
                "company": "Brookside Energy",
                "ticker": "RDFEF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.00063729989,
                "lastEps": 0.00063729989,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 39947116,
                "marketCapCurrencyId": 1,
                "sector": 18555,
                "stockId": 90515,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 3245475.81912049,
                "totalRevenue": 17080085.711122561,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230913/pdf/05tv0ndm5rfg00.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-28T00:00:00",
                "company": "Brookside Energy",
                "ticker": "RDFEF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 39947116,
                "marketCapCurrencyId": 1,
                "sector": 18555,
                "stockId": 90515,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "7956206b",
            "companyName": "Brookside Energy",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": 5.238,
            "stockId": 90515,
            "high52Weeks": 0.016,
            "low52Weeks": 0.007,
            "hedgeFundSentimentData": {
                "rating": 1,
                "score": 0.5
            },
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 7,
                "bullishCount": 42
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 60174545,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-11T00:00:00",
                    "d": "11/1/23",
                    "p": 0.01
                },
                "threeMonthsAgo": {
                    "date": "2023-08-22T00:00:00",
                    "d": "22/8/23",
                    "p": 0.02
                },
                "yearAgo": {
                    "date": "2023-01-11T00:00:00",
                    "d": "11/1/23",
                    "p": 0.01
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Brookside Energy"
        },
        {
            "ticker": "AU:AIM",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-29T00:00:00",
                "company": "Ai-Media Technologies Limited",
                "ticker": "AU:AIM",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.014,
                "lastEps": -0.012,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 62644215,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110379,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -2897900.0,
                "totalRevenue": 32044770.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230830/pdf/05t7ry8pfd5kh6.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 30600000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-20T00:00:00",
                "company": "Ai-Media Technologies Limited",
                "ticker": "AU:AIM",
                "periodEnding": "Dec 2023",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.005,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 62644215,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110379,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 30900000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "ae01583a",
            "companyName": "Ai-Media Technologies Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -15.544,
            "stockId": 110379,
            "high52Weeks": 0.400,
            "low52Weeks": 0.215,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 6
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 62644215,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.36
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.26
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.32
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Ai-Media Technologies Limited"
        },
        {
            "ticker": "AU:OIL",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-30T00:00:00",
                "company": "Optiscan Imaging Limited",
                "ticker": "DE:O5S",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00180820056,
                "lastEps": -0.00241093408,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 37957622,
                "marketCapCurrencyId": 3,
                "sector": 17347,
                "stockId": 89818,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1196061.98615392,
                "totalRevenue": 741842.60821544,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05t9zlg9crnyj6.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-26T00:00:00",
                "company": "Optiscan Imaging Limited",
                "ticker": "DE:O5S",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.00241093408,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 37957622,
                "marketCapCurrencyId": 3,
                "sector": 17347,
                "stockId": 89818,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "30351c37",
            "companyName": "Optiscan Imaging Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 89818,
            "high52Weeks": 0.083,
            "low52Weeks": 0.038,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 21
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 62628065,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": null,
                "threeMonthsAgo": null,
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.06
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Optiscan Imaging Limited"
        },
        {
            "ticker": "AU:VMT",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "consumercyclical",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-30T00:00:00",
                "company": "Vmoto Limited",
                "ticker": "DE:O9C",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.00924232568,
                "lastEps": 0.01732936065,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 37820405,
                "marketCapCurrencyId": 3,
                "sector": 20301,
                "stockId": 104742,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 3059839.47724011,
                "totalRevenue": 25379189.584642261,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230830/pdf/05t974h2hz2xg4.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Vmoto Limited",
                "ticker": "DE:O9C",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 37820405,
                "marketCapCurrencyId": 3,
                "sector": 20301,
                "stockId": 104742,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "0c441547",
            "companyName": "Vmoto Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 104742,
            "high52Weeks": 0.260,
            "low52Weeks": 0.102,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 47
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 60950460,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.25
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.13
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.22
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Vmoto Limited"
        },
        {
            "ticker": "AU:MX1",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-29T00:00:00",
                "company": "Micro-X Ltd.",
                "ticker": "AU:MX1",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.013,
                "lastEps": -0.018,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 61970997,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110437,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -6843000.0,
                "totalRevenue": 6976000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02704499-3A624761?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Micro-X Ltd.",
                "ticker": "AU:MX1",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.008,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 61970997,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110437,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "34ca33d7",
            "companyName": "Micro-X Ltd.",
            "priceTarget": 0.27,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -5.581,
            "stockId": 110437,
            "high52Weeks": 0.175,
            "low52Weeks": 0.085,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 13
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 61970997,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.13
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.12
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.16
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Micro-X Ltd."
        },
        {
            "ticker": "AU:ANO",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-18T00:00:00",
                "company": "Advance ZincTek Limited",
                "ticker": "AU:ANO",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.006,
                "lastEps": 0.018,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 61807400,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110920,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 392000.0,
                "totalRevenue": 7074000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-05T00:00:00",
                "company": "Advance ZincTek Limited",
                "ticker": "AU:ANO",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 61807400,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110920,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "6d26d7f4",
            "companyName": "Advance ZincTek Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.059,
            "dividendYield": 0.060606099999999996,
            "peRatio": 36.666,
            "stockId": 110920,
            "high52Weeks": 2.612,
            "low52Weeks": 0.810,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 11
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 61807400,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 2.32
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 1.59
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 2.09
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Advance ZincTek Limited"
        },
        {
            "ticker": "AU:LEL",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-11T00:00:00",
                "company": "Lithium Energy Ltd.",
                "ticker": "AU:LEL",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.017,
                "lastEps": -0.007,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 61806004,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 110572,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1739723.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230911/pdf/05trmxq8gdgbf0.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-08T00:00:00",
                "company": "Lithium Energy Ltd.",
                "ticker": "AU:LEL",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 61806004,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 110572,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "c03cf48f",
            "companyName": "Lithium Energy Ltd.",
            "priceTarget": 1.96,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -4.811,
            "stockId": 110572,
            "high52Weeks": 1.420,
            "low52Weeks": 0.520,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 99
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 61806004,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.77
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.81
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.74
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Lithium Energy Ltd."
        },
        {
            "ticker": "AU:CHZ",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-20T00:00:00",
                "company": "Chesser Resources Ltd",
                "ticker": "AU:CHZ",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.004,
                "lastEps": -0.004,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 61803143,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 110377,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -2524164.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230921/pdf/05v3ptl9457gp2.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-15T00:00:00",
                "company": "Chesser Resources Ltd",
                "ticker": "AU:CHZ",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 61803143,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 110377,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "0bc77f4e",
            "companyName": "Chesser Resources Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.139,
            "dividendYield": null,
            "peRatio": -12.500,
            "stockId": 110377,
            "high52Weeks": 0.130,
            "low52Weeks": 0.065,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 16
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 61803143,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.08
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.11
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.08
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Chesser Resources Ltd"
        },
        {
            "ticker": "AU:BC8",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "consumercyclical",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-03-15T00:00:00",
                "company": "Black Cat Syndicate Ltd.",
                "ticker": "AU:BC8",
                "periodEnding": "Dec 2022",
                "eps": null,
                "reportedEPS": -0.026,
                "lastEps": -0.011,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 61652342,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "stockId": 110200,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2022-12-31T00:00:00",
                "totalIncome": -5662579.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://www.investi.com.au/api/announcements/bc8/12cb6948-8cb.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-09-29T00:00:00",
                "company": "Black Cat Syndicate Ltd.",
                "ticker": "AU:BC8",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 61652342,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "stockId": 110200,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "663e059a",
            "companyName": "Black Cat Syndicate Ltd.",
            "priceTarget": 0.83,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -4.951,
            "stockId": 110200,
            "high52Weeks": 0.535,
            "low52Weeks": 0.205,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 59
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 61652342,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.36
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.38
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.32
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Black Cat Syndicate Ltd."
        },
        {
            "ticker": "AU:MEA",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "industrials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-21T00:00:00",
                "company": "McGrath Ltd.",
                "ticker": "AU:MEA",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.027,
                "lastEps": 0.030,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 61624713,
                "marketCapCurrencyId": 4,
                "sector": 17348,
                "stockId": 110320,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 4381000.0,
                "totalRevenue": 40471000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02699494-2A1467469?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-19T00:00:00",
                "company": "McGrath Ltd.",
                "ticker": "AU:MEA",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 61624713,
                "marketCapCurrencyId": 4,
                "sector": 17348,
                "stockId": 110320,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "dc292b45",
            "companyName": "McGrath Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.009,
            "dividendYield": 0.05194,
            "peRatio": 9.846,
            "stockId": 110320,
            "high52Weeks": 0.425,
            "low52Weeks": 0.303,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 1
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 61624713,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.35
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.32
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.37
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "McGrath Ltd."
        },
        {
            "ticker": "AU:GAL",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-28T00:00:00",
                "company": "Galileo Mining Ltd.",
                "ticker": "AU:GAL",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.004,
                "lastEps": -0.003,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 60275603,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110721,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -740180.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230828/pdf/05t5btc3h0y6q2.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-07T00:00:00",
                "company": "Galileo Mining Ltd.",
                "ticker": "AU:GAL",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 60275603,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110721,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "4a3da266",
            "companyName": "Galileo Mining Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -39.102,
            "stockId": 110721,
            "high52Weeks": 1.575,
            "low52Weeks": 0.285,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 6,
                "bullishCount": 73
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 60275603,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.86
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.58
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 1.18
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Galileo Mining Ltd."
        },
        {
            "ticker": "AU:SEG",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "consumercyclical",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "Sports Entertainment Group Limited",
                "ticker": "AU:SEG",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.031,
                "lastEps": 0.005,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 60055768,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "stockId": 90265,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -8132999.9999999991,
                "totalRevenue": 56534000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05tcd2bc87sfqx.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Sports Entertainment Group Limited",
                "ticker": "AU:SEG",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 60055768,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "stockId": 90265,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "47f1ca2a",
            "companyName": "Sports Entertainment Group Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.006,
            "dividendYield": null,
            "peRatio": -6.460,
            "stockId": 90265,
            "high52Weeks": 0.280,
            "low52Weeks": 0.110,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 2
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 60055768,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": null,
                "threeMonthsAgo": null,
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.25
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Sports Entertainment Group Limited"
        },
        {
            "ticker": "AU:NTI",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-30T00:00:00",
                "company": "Neurotech International Ltd.",
                "ticker": "AU:NTI",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.005,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 59997050,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 89546,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -4253504.0,
                "totalRevenue": 2971.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02705173-6A1165684?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-27T00:00:00",
                "company": "Neurotech International Ltd.",
                "ticker": "AU:NTI",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 59997050,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 89546,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "b5ad892d",
            "companyName": "Neurotech International Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -6.938,
            "stockId": 89546,
            "high52Weeks": 0.130,
            "low52Weeks": 0.031,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 13
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 59997050,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": null,
                "threeMonthsAgo": null,
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.08
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Neurotech International Ltd."
        },
        {
            "ticker": "AU:MCM",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-21T00:00:00",
                "company": "MC Mining Ltd",
                "ticker": "GB:MCM",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.57707320000,
                "lastEps": -6.76749480000,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 31450375,
                "marketCapCurrencyId": 5,
                "sector": 17343,
                "stockId": 61423,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 7,
                "epsCurrencyTypeID": 7,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -236076265.00408456,
                "totalRevenue": 2387942483.1827631,
                "revenueIncomeCurrencyID": 7,
                "urlReport": "https://senspdf.jse.co.za/documents/2023/jse/isse/mcze/fy2023.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-14T00:00:00",
                "company": "MC Mining Ltd",
                "ticker": "GB:MCM",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 31450375,
                "marketCapCurrencyId": 5,
                "sector": 17343,
                "stockId": 61423,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 7,
                "epsCurrencyTypeID": 7,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 7,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "bc5b979f",
            "companyName": "MC Mining Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -8.590,
            "stockId": 61423,
            "high52Weeks": 22.090,
            "low52Weeks": 7.000,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 1
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 59949781,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 17.00
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 8.00
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 21.71
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "MC Mining Ltd"
        },
        {
            "ticker": "AU:ADO",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-29T00:00:00",
                "company": "AnteoTech Ltd",
                "ticker": "AU:ADO",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.004,
                "lastEps": -0.004,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 59303946,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110065,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -9109185.0,
                "totalRevenue": 77941.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://ado.irmau.com/site/pdf/1d802314-855a-487c-8acd-f1cf15390ec0/2023-Annual-Report.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-23T00:00:00",
                "company": "AnteoTech Ltd",
                "ticker": "AU:ADO",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.002,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 59303946,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110065,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "88e86a79",
            "companyName": "AnteoTech Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -4.285,
            "stockId": 110065,
            "high52Weeks": 0.065,
            "low52Weeks": 0.026,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.9166
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 11,
                "bullishCount": 81
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 59303946,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.06
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.04
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.05
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "AnteoTech Ltd"
        },
        {
            "ticker": "AU:BSX",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-03-15T00:00:00",
                "company": "Blackstone Minerals Ltd",
                "ticker": "AU:BSX",
                "periodEnding": "Dec 2022",
                "eps": null,
                "reportedEPS": -0.042,
                "lastEps": -0.033,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 59211113,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110011,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2022-12-31T00:00:00",
                "totalIncome": -19833179.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://www.asx.com.au/asxpdf/20230315/pdf/45mpp9p7d98xld.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-09-28T00:00:00",
                "company": "Blackstone Minerals Ltd",
                "ticker": "AU:BSX",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 59211113,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110011,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "176f0b7b",
            "companyName": "Blackstone Minerals Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -1.440,
            "stockId": 110011,
            "high52Weeks": 0.215,
            "low52Weeks": 0.105,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 5,
                "bullishCount": 49
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 59211113,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.14
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.12
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.17
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Blackstone Minerals Ltd"
        },
        {
            "ticker": "AU:DSK",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "consumercyclical",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-29T00:00:00",
                "company": "Dusk Group Ltd.",
                "ticker": "AU:DSK",
                "periodEnding": "Jun 2023",
                "eps": -0.018,
                "reportedEPS": -0.028,
                "lastEps": 0.053,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 59154470,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "stockId": 110009,
                "stockTypeId": 12,
                "surprise": -0.3571428571428571428571428571,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1729000.0,
                "totalRevenue": 51505000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230830/pdf/05t81ncg0gp8yl.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 50000000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-21T00:00:00",
                "company": "Dusk Group Ltd.",
                "ticker": "AU:DSK",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 59154470,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "stockId": 110009,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "bb3c175c",
            "companyName": "Dusk Group Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.029,
            "dividendYield": 0.19147999999999998,
            "peRatio": 5.104,
            "stockId": 110009,
            "high52Weeks": 2.045,
            "low52Weeks": 0.800,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 4,
                "bullishCount": 36
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 59154470,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 1.63
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 1.03
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 1.76
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Dusk Group Ltd."
        },
        {
            "ticker": "AU:TPC",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "utilities",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-25T00:00:00",
                "company": "TPC Consolidated Limited",
                "ticker": "DE:T7P",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.25394754933,
                "lastEps": 0.27758467206,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 35817082,
                "marketCapCurrencyId": 3,
                "sector": 17351,
                "stockId": 106017,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 2887070.89856598,
                "totalRevenue": 37505465.680222169,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://app.sharelinktechnologies.com/announcement/asx/9f1174aa4ea2ccb2ac798e8484dd9db8",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-27T00:00:00",
                "company": "TPC Consolidated Limited",
                "ticker": "DE:T7P",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.64365703434,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 35817082,
                "marketCapCurrencyId": 3,
                "sector": 17351,
                "stockId": 106017,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "ddeb4342",
            "companyName": "TPC Consolidated Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.300,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 106017,
            "high52Weeks": 4.460,
            "low52Weeks": 1.089,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 1
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 63520000,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 1.60
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 2.54
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 1.73
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "TPC Consolidated Limited"
        },
        {
            "ticker": "AU:ADN",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-03-15T00:00:00",
                "company": "Andromeda Metals Limited",
                "ticker": "AU:ADN",
                "periodEnding": "Dec 2022",
                "eps": null,
                "reportedEPS": -0.001,
                "lastEps": -0.002,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 59055106,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110338,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2022-12-31T00:00:00",
                "totalIncome": -4117507.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://www.asx.com.au/asxpdf/20230315/pdf/45mq4fsl5jm1g5.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-09-29T00:00:00",
                "company": "Andromeda Metals Limited",
                "ticker": "AU:ADN",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.002,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 59055106,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110338,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "7ebe5b89",
            "companyName": "Andromeda Metals Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.001,
            "dividendYield": null,
            "peRatio": -6.333,
            "stockId": 110338,
            "high52Weeks": 0.065,
            "low52Weeks": 0.019,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 20,
                "bullishCount": 148
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 59055106,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.04
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.04
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.04
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Andromeda Metals Limited"
        },
        {
            "ticker": "AU:DBF",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "realestate",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "Duxton Farms Limited",
                "ticker": "AU:DBF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.168,
                "lastEps": -0.094,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 58766599,
                "marketCapCurrencyId": 4,
                "sector": 60463,
                "stockId": 110461,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -7019000.0,
                "totalRevenue": 4051999.9999999995,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05tcxjjclqqcbd.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-27T00:00:00",
                "company": "Duxton Farms Limited",
                "ticker": "AU:DBF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 58766599,
                "marketCapCurrencyId": 4,
                "sector": 60463,
                "stockId": 110461,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "72690112",
            "companyName": "Duxton Farms Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.061,
            "dividendYield": null,
            "peRatio": -5.831,
            "stockId": 110461,
            "high52Weeks": 1.800,
            "low52Weeks": 1.300,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 3,
                "rating": 3,
                "bearishCount": 2,
                "bullishCount": 0
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 58766599,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 1.63
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 1.34
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 1.66
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Duxton Farms Limited"
        },
        {
            "ticker": "AU:FBM",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-27T00:00:00",
                "company": "Auroch Minerals Ltd.",
                "ticker": "DE:T590",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00121216014,
                "lastEps": -0.00727296084,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 35540046,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 104669,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -390484.05533946,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230927/pdf/05vc1thtshnns5.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-11T00:00:00",
                "company": "Auroch Minerals Ltd.",
                "ticker": "DE:T590",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 35540046,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 104669,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "3ed6c0d8",
            "companyName": "Auroch Minerals Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 104669,
            "high52Weeks": 0.086,
            "low52Weeks": 0.024,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 44
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 58639192,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.03
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.07
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.04
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Auroch Minerals Ltd."
        },
        {
            "ticker": "AU:PLT",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-05-23T00:00:00",
                "company": "Plenti Group Ltd.",
                "ticker": "AU:PLT",
                "periodEnding": "Mar 2023",
                "eps": -0.029,
                "reportedEPS": -0.095,
                "lastEps": 0.007,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 58534454,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110536,
                "stockTypeId": 12,
                "surprise": -0.6947368421052631578947368421,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-03-31T00:00:00",
                "totalIncome": -16166000.0,
                "totalRevenue": 79707000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02668959-2A1450816?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 42300000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-11-15T00:00:00",
                "company": "Plenti Group Ltd.",
                "ticker": "AU:PLT",
                "periodEnding": "Sep 2023",
                "eps": -0.043,
                "reportedEPS": null,
                "lastEps": 0.015,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 58534454,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110536,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-09-30T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 97400000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "cc27beb7",
            "companyName": "Plenti Group Ltd.",
            "priceTarget": 1.10,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -4.282,
            "stockId": 110536,
            "high52Weeks": 0.635,
            "low52Weeks": 0.300,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 6
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 58534454,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.46
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.35
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.55
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Plenti Group Ltd."
        },
        {
            "ticker": "AU:BLG",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-08T00:00:00",
                "company": "Bluglass Limited",
                "ticker": "BUGLF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00254919956,
                "lastEps": -0.00254919956,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 37005285,
                "marketCapCurrencyId": 1,
                "sector": 17349,
                "stockId": 85113,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -4071845.37938646,
                "totalRevenue": 407533.52335841,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230908/pdf/05tnx3x6fzq92f.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-19T00:00:00",
                "company": "Bluglass Limited",
                "ticker": "BUGLF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 37005285,
                "marketCapCurrencyId": 1,
                "sector": 17349,
                "stockId": 85113,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "443fc443",
            "companyName": "Bluglass Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -1.724,
            "stockId": 85113,
            "high52Weeks": 0.020,
            "low52Weeks": 0.010,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 12
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 59593782,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.01
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.01
                },
                "yearAgo": {
                    "date": "2022-10-14T00:00:00",
                    "d": "14/10/22",
                    "p": 0.01
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Bluglass Limited"
        },
        {
            "ticker": "AU:IRI",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-24T00:00:00",
                "company": "Integrated Research Limited",
                "ticker": "IREHF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.11981237932,
                "lastEps": -0.00063729989,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 36721761,
                "marketCapCurrencyId": 1,
                "sector": 17349,
                "stockId": 88083,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -20675920.33127,
                "totalRevenue": 20006755.44677,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230825/pdf/05t1lflx0mgrg7.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 31300000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-14T00:00:00",
                "company": "Integrated Research Limited",
                "ticker": "IREHF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 36721761,
                "marketCapCurrencyId": 1,
                "sector": 17349,
                "stockId": 88083,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "a3f2c031",
            "companyName": "Integrated Research Limited",
            "priceTarget": 0.5962656000,
            "bestPriceTarget": null,
            "dividend": 0.037,
            "dividendYield": null,
            "peRatio": -1.846,
            "stockId": 88083,
            "high52Weeks": 0.497,
            "low52Weeks": 0.171,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 4
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 58493892,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-03T00:00:00",
                    "d": "3/1/23",
                    "p": 0.31
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.24
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.25
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Integrated Research Limited"
        },
        {
            "ticker": "AU:SIO",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "industrials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-28T00:00:00",
                "company": "Simonds Group Ltd.",
                "ticker": "AU:SIO",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.030,
                "lastEps": -0.068,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 57585028,
                "marketCapCurrencyId": 4,
                "sector": 17348,
                "stockId": 110247,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -10633000.0,
                "totalRevenue": 340213000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02703470-3A624573?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-21T00:00:00",
                "company": "Simonds Group Ltd.",
                "ticker": "AU:SIO",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 57585028,
                "marketCapCurrencyId": 4,
                "sector": 17348,
                "stockId": 110247,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "39fbcf4d",
            "companyName": "Simonds Group Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.052,
            "dividendYield": null,
            "peRatio": -1.461,
            "stockId": 110247,
            "high52Weeks": 0.253,
            "low52Weeks": 0.085,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 3,
                "rating": 3,
                "bearishCount": 1,
                "bullishCount": 0
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 57585028,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.12
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.16
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.18
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Simonds Group Ltd."
        },
        {
            "ticker": "AU:IVR",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-15T00:00:00",
                "company": "Investigator Resources Ltd",
                "ticker": "DE:VOP",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00060608007,
                "lastEps": -0.00181824021,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 34841604,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 106304,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1081006.83717228,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230915/pdf/05txxb8pcj94dk.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-07T00:00:00",
                "company": "Investigator Resources Ltd",
                "ticker": "DE:VOP",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 34841604,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 106304,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "ed4d0212",
            "companyName": "Investigator Resources Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 106304,
            "high52Weeks": 0.048,
            "low52Weeks": 0.016,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 55
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 58923973,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.02
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.02
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.02
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Investigator Resources Ltd"
        },
        {
            "ticker": "AU:TOE",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-26T00:00:00",
                "company": "Toro Energy Limited",
                "ticker": "TOEYF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.00000000000,
                "lastEps": -0.00127459978,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 36565444,
                "marketCapCurrencyId": 1,
                "sector": 18555,
                "stockId": 91861,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1472507.52514049,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230926/pdf/05v9xfxt0fs01v.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-15T00:00:00",
                "company": "Toro Energy Limited",
                "ticker": "TOEYF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.00063729989,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 36565444,
                "marketCapCurrencyId": 1,
                "sector": 18555,
                "stockId": 91861,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "870eb50e",
            "companyName": "Toro Energy Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -12.500,
            "stockId": 91861,
            "high52Weeks": 0.020,
            "low52Weeks": 0.007,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 32
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 52594271,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-06T00:00:00",
                    "d": "6/1/23",
                    "p": 0.01
                },
                "threeMonthsAgo": {
                    "date": "2023-09-07T00:00:00",
                    "d": "7/9/23",
                    "p": 0.02
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.01
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Toro Energy Limited"
        },
        {
            "ticker": "AU:IXU",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "utilities",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "IXUP Ltd.",
                "ticker": "AU:IXU",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.005,
                "lastEps": -0.008,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 57325257,
                "marketCapCurrencyId": 4,
                "sector": 17351,
                "stockId": 110045,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -5192866.0,
                "totalRevenue": 904479.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05tcglrr7yhzst.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-29T00:00:00",
                "company": "IXUP Ltd.",
                "ticker": "AU:IXU",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.022,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 57325257,
                "marketCapCurrencyId": 4,
                "sector": 17351,
                "stockId": 110045,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "c0f77e6a",
            "companyName": "IXUP Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -1.927,
            "stockId": 110045,
            "high52Weeks": 0.068,
            "low52Weeks": 0.019,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7946
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 5
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 57325257,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.03
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.05
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.04
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "IXUP Ltd."
        },
        {
            "ticker": "AU:ELS",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-27T00:00:00",
                "company": "Elsight Ltd.",
                "ticker": "AU:ELS",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.019,
                "lastEps": -0.022,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 57121440,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110064,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -2874086.5177465,
                "totalRevenue": 881671.651574683,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230828/pdf/05t4cj4x8kr0x3.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-27T00:00:00",
                "company": "Elsight Ltd.",
                "ticker": "AU:ELS",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.019,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 57121440,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110064,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "6f718367",
            "companyName": "Elsight Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -9.595,
            "stockId": 110064,
            "high52Weeks": 0.500,
            "low52Weeks": 0.245,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 16
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 57121440,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.34
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.28
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.38
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Elsight Ltd."
        },
        {
            "ticker": "AU:PH2",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-03-16T00:00:00",
                "company": "Pure Hydrogen Corporation Limited Registered Shs",
                "ticker": "AU:PH2",
                "periodEnding": "Dec 2022",
                "eps": null,
                "reportedEPS": 0.012,
                "lastEps": -0.002,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 56825941,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 112272,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2022-12-31T00:00:00",
                "totalIncome": 4285000.00000658,
                "totalRevenue": 10000.0000000152,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://www.asx.com.au/asxpdf/20230316/pdf/45mr1zdbb5qkyh.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": null,
            "stockUid": "9ef757cc",
            "companyName": "Pure Hydrogen Corporation Limited Registered Shs",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": 10.126,
            "stockId": 112272,
            "high52Weeks": 0.290,
            "low52Weeks": 0.120,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 25
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 56825941,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.18
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.18
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.24
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Pure Hydrogen Corporation Limited Registered Shs"
        },
        {
            "ticker": "AU:PCK",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-30T00:00:00",
                "company": "PainChek Ltd",
                "ticker": "AU:PCK",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.003,
                "lastEps": -0.003,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 56252909,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110928,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -4468977.0,
                "totalRevenue": 1172678.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05tbhhzfjk364s.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "PainChek Ltd",
                "ticker": "AU:PCK",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.002,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 56252909,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110928,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "206da6a4",
            "companyName": "PainChek Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -6.896,
            "stockId": 110928,
            "high52Weeks": 0.046,
            "low52Weeks": 0.024,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 4,
                "bullishCount": 41
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 56252909,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.03
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.02
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.03
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "PainChek Ltd"
        },
        {
            "ticker": "AU:AMN",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-27T00:00:00",
                "company": "Agrimin Limited",
                "ticker": "DE:3CL",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00121216014,
                "lastEps": 0.00060608007,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 34079117,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 105960,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -432093.27038517,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-13T00:00:00",
                "company": "Agrimin Limited",
                "ticker": "DE:3CL",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.00121216014,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 34079117,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 105960,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "f338a54d",
            "companyName": "Agrimin Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 105960,
            "high52Weeks": 0.271,
            "low52Weeks": 0.106,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": null,
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 56228737,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.27
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.27
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.27
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Agrimin Limited"
        },
        {
            "ticker": "AU:BRU",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-08T00:00:00",
                "company": "Buru Energy Limited",
                "ticker": "BRNGF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00637299890,
                "lastEps": -0.01147139802,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 35706669,
                "marketCapCurrencyId": 1,
                "sector": 18555,
                "stockId": 85041,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -3821887.44033,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230908/pdf/05tpnc5f59v3q5.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 6800000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-13T00:00:00",
                "company": "Buru Energy Limited",
                "ticker": "BRNGF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 35706669,
                "marketCapCurrencyId": 1,
                "sector": 18555,
                "stockId": 85041,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "8eac272f",
            "companyName": "Buru Energy Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -1.696,
            "stockId": 85041,
            "high52Weeks": 0.091,
            "low52Weeks": 0.050,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 4,
                "bullishCount": 38
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 55432009,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.08
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.06
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.07
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Buru Energy Limited"
        },
        {
            "ticker": "AU:ARR",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-27T00:00:00",
                "company": "American Rare Earths",
                "ticker": "ARRNF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.00191189967,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 35650820,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 85009,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230927/pdf/05vcb08vzfyr3t.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-14T00:00:00",
                "company": "American Rare Earths",
                "ticker": "ARRNF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 35650820,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 85009,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "ba51cfec",
            "companyName": "American Rare Earths",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -23.684,
            "stockId": 85009,
            "high52Weeks": 0.226,
            "low52Weeks": 0.070,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 72
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 58178029,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-03T00:00:00",
                    "d": "3/1/23",
                    "p": 0.14
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.09
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.15
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "American Rare Earths"
        },
        {
            "ticker": "AU:TYX",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-27T00:00:00",
                "company": "Tyranna Resources Limited",
                "ticker": "AU:TYX",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.000,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 55869233,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110146,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-14T00:00:00",
                "company": "Tyranna Resources Limited",
                "ticker": "AU:TYX",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 55869233,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110146,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "3ed44dc2",
            "companyName": "Tyranna Resources Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -7.727,
            "stockId": 110146,
            "high52Weeks": 0.052,
            "low52Weeks": 0.016,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 7,
                "bullishCount": 39
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 55869233,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.02
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.02
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.04
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Tyranna Resources Limited"
        },
        {
            "ticker": "AU:CNW",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-03T00:00:00",
                "company": "Cirrus Networks Holdings Ltd",
                "ticker": "DE:LG4",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.00060608007,
                "lastEps": 0.00181824021,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 33819498,
                "marketCapCurrencyId": 3,
                "sector": 17349,
                "stockId": 88730,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 485644.68713016,
                "totalRevenue": 33625896.847506359,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230804/pdf/05sb10zqg6gbk0.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 58900000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-26T00:00:00",
                "company": "Cirrus Networks Holdings Ltd",
                "ticker": "DE:LG4",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.00060608007,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 33819498,
                "marketCapCurrencyId": 3,
                "sector": 17349,
                "stockId": 88730,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "8bfffd07",
            "companyName": "Cirrus Networks Holdings Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 88730,
            "high52Weeks": 0.034,
            "low52Weeks": 0.015,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 8
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 55800380,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": null,
                "threeMonthsAgo": null,
                "yearAgo": null
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Cirrus Networks Holdings Ltd"
        },
        {
            "ticker": "AU:RMY",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "consumerdefensive",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-30T00:00:00",
                "company": "RMA Global Ltd.",
                "ticker": "AU:RMY",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.003,
                "lastEps": -0.006,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 55794264,
                "marketCapCurrencyId": 4,
                "sector": 18731,
                "stockId": 110438,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1908558.0,
                "totalRevenue": 9232466.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230830/pdf/05t8nrvqr0df6f.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-22T00:00:00",
                "company": "RMA Global Ltd.",
                "ticker": "AU:RMY",
                "periodEnding": "Dec 2023",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.006,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 55794264,
                "marketCapCurrencyId": 4,
                "sector": 18731,
                "stockId": 110438,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 9400000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "fad57740",
            "companyName": "RMA Global Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -10.526,
            "stockId": 110438,
            "high52Weeks": 0.161,
            "low52Weeks": 0.056,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.6893
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 9
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 55794264,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.09
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.08
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.15
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "RMA Global Ltd."
        },
        {
            "ticker": "AU:APW",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "realestate",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "AIMS Property Securities Fund",
                "ticker": "AU:APW",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.353,
                "lastEps": 0.052,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 55648851,
                "marketCapCurrencyId": 4,
                "sector": 60463,
                "stockId": 110666,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 15724000.0,
                "totalRevenue": 966000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05td5jzqw4h1n4.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "AIMS Property Securities Fund",
                "ticker": "AU:APW",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.019,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 55648851,
                "marketCapCurrencyId": 4,
                "sector": 60463,
                "stockId": 110666,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "cfc4525e",
            "companyName": "AIMS Property Securities Fund",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.007,
            "dividendYield": null,
            "peRatio": 3.738,
            "stockId": 110666,
            "high52Weeks": 1.340,
            "low52Weeks": 1.010,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 1
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 55648851,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 1.20
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 1.16
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 1.26
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "AIMS Property Securities Fund"
        },
        {
            "ticker": "AU:STM",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-05T00:00:00",
                "company": "Sunstone Metals Limited",
                "ticker": "DE:AL9",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.00000000000,
                "lastEps": -0.00060608007,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 33622734,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 91465,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -434463.64953894,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://www.sunstonemetals.com.au/site/pdf/69993680-65a2-42ca-85e5-0952caee8618/Annual-Report-to-shareholders.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-14T00:00:00",
                "company": "Sunstone Metals Limited",
                "ticker": "DE:AL9",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.00000000000,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 33622734,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 91465,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "09e6959b",
            "companyName": "Sunstone Metals Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 91465,
            "high52Weeks": 0.032,
            "low52Weeks": 0.010,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 57
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 49311764,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": null,
                "threeMonthsAgo": null,
                "yearAgo": null
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Sunstone Metals Limited"
        },
        {
            "ticker": "AU:AHC",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-24T00:00:00",
                "company": "Austco Healthcare Limited",
                "ticker": "AU:AHC",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.003,
                "lastEps": 0.003,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 55250130,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110179,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 879000.0,
                "totalRevenue": 21436000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230824/pdf/05t0z9w2rw0gm2.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-27T00:00:00",
                "company": "Austco Healthcare Limited",
                "ticker": "AU:AHC",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.005,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 55250130,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110179,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "cc421cc8",
            "companyName": "Austco Healthcare Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.001,
            "dividendYield": 0.025670000000000002,
            "peRatio": 24.359,
            "stockId": 110179,
            "high52Weeks": 0.200,
            "low52Weeks": 0.098,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 2
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 55250130,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.12
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.18
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.12
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Austco Healthcare Limited"
        },
        {
            "ticker": "AU:CE1",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-13T00:00:00",
                "company": "Calima Energy Ltd",
                "ticker": "CLMEF",
                "periodEnding": "Jun 2023",
                "eps": 0.02086772933,
                "reportedEPS": 0.00192397479,
                "lastEps": 0.00769589916,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 35091916,
                "marketCapCurrencyId": 1,
                "sector": 18555,
                "stockId": 90629,
                "stockTypeId": 1,
                "surprise": 4.6666666666666666666666666667,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 1065240.70873,
                "totalRevenue": 30573242.06296,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230913/pdf/05ttzhy94vj09r.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 11926000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-28T00:00:00",
                "company": "Calima Energy Ltd",
                "ticker": "CLMEF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.022,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 35091916,
                "marketCapCurrencyId": 1,
                "sector": 18555,
                "stockId": 90629,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "d7cf2627",
            "companyName": "Calima Energy Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.004,
            "dividendYield": 0.06038,
            "peRatio": 4.878,
            "stockId": 90629,
            "high52Weeks": 0.160,
            "low52Weeks": 0.014,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7946
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 9,
                "bullishCount": 42
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 55689149,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.08
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.07
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.07
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Calima Energy Ltd"
        },
        {
            "ticker": "AU:TGN",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-22T00:00:00",
                "company": "Tungsten Mining NL",
                "ticker": "AU:TGN",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.001,
                "lastEps": -0.002,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 55048997,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110420,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1081674.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230922/pdf/05v6bhcq8bw7b8.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-08T00:00:00",
                "company": "Tungsten Mining NL",
                "ticker": "AU:TGN",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 55048997,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110420,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "1477bf5e",
            "companyName": "Tungsten Mining NL",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -18.918,
            "stockId": 110420,
            "high52Weeks": 0.150,
            "low52Weeks": 0.065,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 2
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 55048997,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.10
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.10
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.10
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Tungsten Mining NL"
        },
        {
            "ticker": "AU:PGL",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "financial",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-29T00:00:00",
                "company": "Prospa Group Ltd.",
                "ticker": "AU:PGL",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.243,
                "lastEps": 0.008,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 55017184,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110228,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -39674000.0,
                "totalRevenue": 150247000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230830/pdf/05t81d2y5jltsx.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-22T00:00:00",
                "company": "Prospa Group Ltd.",
                "ticker": "AU:PGL",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 55017184,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110228,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "2c96a398",
            "companyName": "Prospa Group Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -1.237,
            "stockId": 110228,
            "high52Weeks": 0.780,
            "low52Weeks": 0.270,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 3
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 55017184,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.62
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.34
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.74
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Prospa Group Ltd."
        },
        {
            "ticker": "AU:PPG",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-23T00:00:00",
                "company": "Pro-Pac Packaging Limited",
                "ticker": "AU:PPG",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.027,
                "lastEps": -0.350,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 54482920,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110021,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -4859000.0,
                "totalRevenue": 155813000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://www.ppgaust.com.au/files/65/2023/1155/Confirmation-of-Release---PPG---FY2023-Results-announcement.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 79900000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-23T00:00:00",
                "company": "Pro-Pac Packaging Limited",
                "ticker": "AU:PPG",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 54482920,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110021,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "305ee71c",
            "companyName": "Pro-Pac Packaging Limited",
            "priceTarget": 0.38,
            "bestPriceTarget": null,
            "dividend": 0.030,
            "dividendYield": null,
            "peRatio": -4.273,
            "stockId": 110021,
            "high52Weeks": 0.395,
            "low52Weeks": 0.180,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 3,
                "rating": 3,
                "bearishCount": 1,
                "bullishCount": 0
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 54482920,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.33
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.22
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.30
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Pro-Pac Packaging Limited"
        },
        {
            "ticker": "AU:FML",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-11T00:00:00",
                "company": "Focus Minerals Ltd",
                "ticker": "FCSUF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.02931579494,
                "lastEps": -0.00764759868,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 34698522,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 86759,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -8310390.5656,
                "totalRevenue": 3011241.98025,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02710373-6A1167685?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-28T00:00:00",
                "company": "Focus Minerals Ltd",
                "ticker": "FCSUF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 34698522,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 86759,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "abfea4f7",
            "companyName": "Focus Minerals Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -3.416,
            "stockId": 86759,
            "high52Weeks": 0.170,
            "low52Weeks": 0.110,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 15
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 54446144,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.11
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.11
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.17
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Focus Minerals Ltd"
        },
        {
            "ticker": "AU:VML",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-07-26T00:00:00",
                "company": "Vital Metals Ltd",
                "ticker": "AU:VML",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.000,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 53061498,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110618,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 1,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-09-29T00:00:00",
                "company": "Vital Metals Ltd",
                "ticker": "AU:VML",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 53061498,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110618,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "531746cc",
            "companyName": "Vital Metals Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -7.142,
            "stockId": 110618,
            "high52Weeks": 0.036,
            "low52Weeks": 0.008,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 21,
                "bullishCount": 82
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 53061498,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.02
                },
                "threeMonthsAgo": {
                    "date": "2023-07-05T00:00:00",
                    "d": "5/7/23",
                    "p": 0.01
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.03
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Vital Metals Ltd"
        },
        {
            "ticker": "AU:HMY",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "financial",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-24T00:00:00",
                "company": "Harmoney Corp Ltd",
                "ticker": "DE:6DR",
                "periodEnding": "Jun 2023",
                "eps": 0.01386287096,
                "reportedEPS": 0.01386287096,
                "lastEps": 0.00361640112,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 32135187,
                "marketCapCurrencyId": 3,
                "sector": 17346,
                "stockId": 103643,
                "stockTypeId": 12,
                "surprise": 0.0,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -2530275.3169763945,
                "totalRevenue": 34082169.62214078,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230825/pdf/05t1msx73zxw21.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 57400000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-19T00:00:00",
                "company": "Harmoney Corp Ltd",
                "ticker": "DE:6DR",
                "periodEnding": "Dec 2023",
                "eps": 0.00542460168,
                "reportedEPS": null,
                "lastEps": -0.01808200560,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 32135187,
                "marketCapCurrencyId": 3,
                "sector": 17346,
                "stockId": 103643,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 62600000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "f2bd9139",
            "companyName": "Harmoney Corp Ltd",
            "priceTarget": 0.8414729700,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 103643,
            "high52Weeks": 0.430,
            "low52Weeks": 0.176,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7946
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 1
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 53021356,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.26
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.18
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.41
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Harmoney Corp Ltd"
        },
        {
            "ticker": "AU:TTM",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-13T00:00:00",
                "company": "Titan Minerals Ltd",
                "ticker": "TTTNF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.00063729989,
                "lastEps": -0.00063729989,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 33772051,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 92012,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 511309.25233379891,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230913/pdf/05tv5ksq3myd5s.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-29T00:00:00",
                "company": "Titan Minerals Ltd",
                "ticker": "TTTNF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 33772051,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 92012,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "ba01dbb3",
            "companyName": "Titan Minerals Ltd",
            "priceTarget": 0.2039856000,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -50.000,
            "stockId": 92012,
            "high52Weeks": 0.110,
            "low52Weeks": 0.001,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 11
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 52992401,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.05
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.02
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.04
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Titan Minerals Ltd"
        },
        {
            "ticker": "AU:KAI",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-03-15T00:00:00",
                "company": "Kairos Minerals",
                "ticker": "KAIFF",
                "periodEnding": "Dec 2022",
                "eps": null,
                "reportedEPS": 0.00000000000,
                "lastEps": -0.00063729989,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 33406142,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 89097,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2022-12-31T00:00:00",
                "totalIncome": -506965.6894961,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://www.asx.com.au/asxpdf/20230315/pdf/45mpzp4kgxkmk2.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-09-29T00:00:00",
                "company": "Kairos Minerals",
                "ticker": "KAIFF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 33406142,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 89097,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "ad9fbdf8",
            "companyName": "Kairos Minerals",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -17.500,
            "stockId": 89097,
            "high52Weeks": 0.030,
            "low52Weeks": 0.008,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.9658
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 6,
                "bullishCount": 64
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 55039159,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.02
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.01
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.02
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Kairos Minerals"
        },
        {
            "ticker": "AU:SDV",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-28T00:00:00",
                "company": "SciDev Ltd",
                "ticker": "AU:SDV",
                "periodEnding": "Jun 2023",
                "eps": -0.100,
                "reportedEPS": -0.100,
                "lastEps": 0.009,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 52195967,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110116,
                "stockTypeId": 12,
                "surprise": 0.0,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -366000.0,
                "totalRevenue": 40246000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02703994-2A1469895?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 19200000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "SciDev Ltd",
                "ticker": "AU:SDV",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.000,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 52195967,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110116,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "82567d30",
            "companyName": "SciDev Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -152.777,
            "stockId": 110116,
            "high52Weeks": 0.455,
            "low52Weeks": 0.240,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 10
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 52195967,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.38
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.32
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.26
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "SciDev Ltd"
        },
        {
            "ticker": "AU:ETM",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-13T00:00:00",
                "company": "Greenland Minerals Limited",
                "ticker": "GDLNF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00127459978,
                "lastEps": -0.00127459978,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 32832588,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 87118,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1585602.12632,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230913/pdf/05tv2p70ckjcl5.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-27T00:00:00",
                "company": "Greenland Minerals Limited",
                "ticker": "GDLNF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 32832588,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 87118,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "e4b7ab1c",
            "companyName": "Greenland Minerals Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -8.000,
            "stockId": 87118,
            "high52Weeks": 0.055,
            "low52Weeks": 0.020,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 3,
                "bullishCount": 19
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 48806783,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-03T00:00:00",
                    "d": "3/1/23",
                    "p": 0.04
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.03
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.04
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Greenland Minerals Limited"
        },
        {
            "ticker": "AU:WAK",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-03-15T00:00:00",
                "company": "WA Kaolin Ltd.",
                "ticker": "AU:WAK",
                "periodEnding": "Dec 2022",
                "eps": null,
                "reportedEPS": -0.007,
                "lastEps": -0.014,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 51467676,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110190,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2022-12-31T00:00:00",
                "totalIncome": -2477156.0,
                "totalRevenue": 902755.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://www.asx.com.au/asxpdf/20230315/pdf/45mpfbxbtjvsz6.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-09-29T00:00:00",
                "company": "WA Kaolin Ltd.",
                "ticker": "AU:WAK",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.011,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 51467676,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110190,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "e4d6c585",
            "companyName": "WA Kaolin Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -7.303,
            "stockId": 110190,
            "high52Weeks": 0.210,
            "low52Weeks": 0.120,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 3,
                "bullishCount": 13
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 51467676,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.15
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.13
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.20
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "WA Kaolin Ltd."
        },
        {
            "ticker": "AU:AVC",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "financial",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-17T00:00:00",
                "company": "Auctus Investment Group Limited",
                "ticker": "AU:AVC",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.006,
                "lastEps": 0.006,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 51361588,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110099,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -459000.0,
                "totalRevenue": 5374000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02698988-3A623610?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Auctus Investment Group Limited",
                "ticker": "AU:AVC",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.002,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 51361588,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110099,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "e2006288",
            "companyName": "Auctus Investment Group Limited",
            "priceTarget": 1.15,
            "bestPriceTarget": 1.15,
            "dividend": 0.050,
            "dividendYield": null,
            "peRatio": -178.947,
            "stockId": 110099,
            "high52Weeks": 1.030,
            "low52Weeks": 0.660,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 1
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 51361588,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.86
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.88
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 1.02
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Auctus Investment Group Limited"
        },
        {
            "ticker": "AU:CAN",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-27T00:00:00",
                "company": "Cann Group Ltd.",
                "ticker": "CNGGF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.02437034734,
                "lastEps": -0.03270757143,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 32599732,
                "marketCapCurrencyId": 1,
                "sector": 17347,
                "stockId": 85687,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -9585242.40378,
                "totalRevenue": 5103663.79294,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230828/pdf/05t4l5nvt4bv4c.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-21T00:00:00",
                "company": "Cann Group Ltd.",
                "ticker": "CNGGF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.03399022129,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 32599732,
                "marketCapCurrencyId": 1,
                "sector": 17347,
                "stockId": 85687,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "3b98f419",
            "companyName": "Cann Group Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -1.300,
            "stockId": 85687,
            "high52Weeks": 0.195,
            "low52Weeks": 0.078,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7946
            },
            "bloggerSentimentData": {
                "ratingIfExists": 2,
                "rating": 2,
                "bearishCount": 8,
                "bullishCount": 10
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 52218579,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.13
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.08
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.16
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Cann Group Ltd."
        },
        {
            "ticker": "AU:EBG",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "realestate",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-28T00:00:00",
                "company": "Eumundi Group Limited",
                "ticker": "AU:EBG",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.024,
                "lastEps": 0.079,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 51036259,
                "marketCapCurrencyId": 4,
                "sector": 60463,
                "stockId": 110764,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1073000.0,
                "totalRevenue": 11344000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230828/pdf/05t4yp34m84kdw.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-27T00:00:00",
                "company": "Eumundi Group Limited",
                "ticker": "AU:EBG",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 51036259,
                "marketCapCurrencyId": 4,
                "sector": 60463,
                "stockId": 110764,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "c2105eaa",
            "companyName": "Eumundi Group Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.035,
            "dividendYield": 0.06422,
            "peRatio": 32.732,
            "stockId": 110764,
            "high52Weeks": 1.327,
            "low52Weeks": 0.837,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": null,
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 51036259,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 1.00
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 1.11
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 1.04
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Eumundi Group Limited"
        },
        {
            "ticker": "AU:KLL",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-14T00:00:00",
                "company": "Kalium Lakes Ltd",
                "ticker": "AU:KLL",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 50792808,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110925,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-21T00:00:00",
                "company": "Kalium Lakes Ltd",
                "ticker": "AU:KLL",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 50792808,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110925,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "4e3313a5",
            "companyName": "Kalium Lakes Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -0.312,
            "stockId": 110925,
            "high52Weeks": 0.052,
            "low52Weeks": 0.022,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 16,
                "bullishCount": 30
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 50792808,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.03
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.02
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.04
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Kalium Lakes Ltd"
        },
        {
            "ticker": "AU:ODA",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-28T00:00:00",
                "company": "Orcoda Limited",
                "ticker": "AU:ODA",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.005,
                "lastEps": -0.004,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 50747120,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 104116,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 871662.0,
                "totalRevenue": 10722698.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230829/pdf/05t5x9qkz3mxwd.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 5300000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-26T00:00:00",
                "company": "Orcoda Limited",
                "ticker": "AU:ODA",
                "periodEnding": "Dec 2023",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.003,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 50747120,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 104116,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 10900000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "fc92b67f",
            "companyName": "Orcoda Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": 125.000,
            "stockId": 104116,
            "high52Weeks": 0.345,
            "low52Weeks": 0.054,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 11
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 50747120,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": null,
                "threeMonthsAgo": null,
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.06
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Orcoda Limited"
        },
        {
            "ticker": "AU:MEK",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "realestate",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-27T00:00:00",
                "company": "Meeka Gold Limited",
                "ticker": "DE:1KX0",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.00000000000,
                "lastEps": -0.00180820056,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 30729234,
                "marketCapCurrencyId": 3,
                "sector": 60463,
                "stockId": 103638,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -221413.55583848,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230928/pdf/05vcvx915sxxmp.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-12T00:00:00",
                "company": "Meeka Gold Limited",
                "ticker": "DE:1KX0",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 30729234,
                "marketCapCurrencyId": 3,
                "sector": 60463,
                "stockId": 103638,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "dd86c7c3",
            "companyName": "Meeka Gold Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -11.818,
            "stockId": 103638,
            "high52Weeks": 0.047,
            "low52Weeks": 0.016,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 3,
                "bullishCount": 27
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 54008233,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.04
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.02
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.04
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Meeka Gold Limited"
        },
        {
            "ticker": "AU:RFX",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-30T00:00:00",
                "company": "Redflow Limited",
                "ticker": "REFXF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.02612929549,
                "lastEps": -0.03568879384,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 32224497,
                "marketCapCurrencyId": 1,
                "sector": 17349,
                "stockId": 90537,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -4741085.46527348,
                "totalRevenue": 375962.3241077,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02705556-2A1470675?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Redflow Limited",
                "ticker": "REFXF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 32224497,
                "marketCapCurrencyId": 1,
                "sector": 17349,
                "stockId": 90537,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": null,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "63852dbc",
            "companyName": "Redflow Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -2.619,
            "stockId": 90537,
            "high52Weeks": 0.297,
            "low52Weeks": 0.101,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.8608
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 5,
                "bullishCount": 47
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 47714172,
            "marketCapCurrencyId": 4,
            "newsSentiment": 5,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.16
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.15
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.30
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Redflow Limited"
        },
        {
            "ticker": "AU:MME",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "financial",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-30T00:00:00",
                "company": "MoneyMe Ltd.",
                "ticker": "AU:MME",
                "periodEnding": "Jun 2023",
                "eps": 0.021,
                "reportedEPS": 0.024,
                "lastEps": -0.154,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 50404946,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110844,
                "stockTypeId": 12,
                "surprise": -0.125,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 3489000.0,
                "totalRevenue": 117786000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02705648-2A1470742?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 118400000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-27T00:00:00",
                "company": "MoneyMe Ltd.",
                "ticker": "AU:MME",
                "periodEnding": "Dec 2023",
                "eps": 0.002,
                "reportedEPS": null,
                "lastEps": 0.033,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 50404946,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110844,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 116600000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "149e6100",
            "companyName": "MoneyMe Ltd.",
            "priceTarget": 0.26,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": 1.649,
            "stockId": 110844,
            "high52Weeks": 0.505,
            "low52Weeks": 0.061,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 9,
                "bullishCount": 21
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 50404946,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.24
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.08
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.35
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "MoneyMe Ltd."
        },
        {
            "ticker": "AU:EGR",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-03-08T00:00:00",
                "company": "EcoGraf",
                "ticker": "DE:FMK",
                "periodEnding": "Dec 2022",
                "eps": null,
                "reportedEPS": -0.00484864056,
                "lastEps": -0.00363648042,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 30173761,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 88300,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2022-12-31T00:00:00",
                "totalIncome": -2289770.50446,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://www.ecograf.com.au/wp-content/uploads/2023/03/2523802.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-09-29T00:00:00",
                "company": "EcoGraf",
                "ticker": "DE:FMK",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.00666688077,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 30173761,
                "marketCapCurrencyId": 3,
                "sector": 17343,
                "stockId": 88300,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "4d7307e4",
            "companyName": "EcoGraf",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 88300,
            "high52Weeks": 0.244,
            "low52Weeks": 0.064,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 16,
                "bullishCount": 49
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 49785107,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": null,
                "threeMonthsAgo": null,
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.20
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "EcoGraf"
        },
        {
            "ticker": "AU:IMB",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-30T00:00:00",
                "company": "Intelligent Monitoring Group Limited",
                "ticker": "AU:IMB",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.055,
                "lastEps": -0.028,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 49496811,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 109970,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -7276000.0,
                "totalRevenue": 16995000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230830/pdf/05t9k10mcbkh7n.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-29T00:00:00",
                "company": "Intelligent Monitoring Group Limited",
                "ticker": "AU:IMB",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.035,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 49496811,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 109970,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "c5848ffc",
            "companyName": "Intelligent Monitoring Group Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -2.324,
            "stockId": 109970,
            "high52Weeks": 0.235,
            "low52Weeks": 0.039,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7946
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 3
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 49496811,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.13
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.16
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.06
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Intelligent Monitoring Group Limited"
        },
        {
            "ticker": "AU:CAF",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "financial",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-22T00:00:00",
                "company": "Centrepoint Alliance Limited",
                "ticker": "AU:CAF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.017,
                "lastEps": 0.031,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 49470474,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110727,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 3310000.0,
                "totalRevenue": 137954000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02700681-2A1468127?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-23T00:00:00",
                "company": "Centrepoint Alliance Limited",
                "ticker": "AU:CAF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 49470474,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110727,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "843960f3",
            "companyName": "Centrepoint Alliance Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.019,
            "dividendYield": 0.06122,
            "peRatio": 7.739,
            "stockId": 110727,
            "high52Weeks": 0.300,
            "low52Weeks": 0.182,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": null,
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 49470474,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.18
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.21
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.19
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Centrepoint Alliance Limited"
        },
        {
            "ticker": "AU:DUB",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "Dubber Corporation Limited",
                "ticker": "AU:DUB",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.104,
                "lastEps": -0.171,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 49051365,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110772,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -32127221.0,
                "totalRevenue": 16352264.000000002,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05tcqsg5hl3q9m.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 8800000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-27T00:00:00",
                "company": "Dubber Corporation Limited",
                "ticker": "AU:DUB",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.120,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 49051365,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110772,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "f06ede54",
            "companyName": "Dubber Corporation Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -0.579,
            "stockId": 110772,
            "high52Weeks": 0.605,
            "low52Weeks": 0.110,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 13,
                "bullishCount": 32
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 49051365,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.48
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.20
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.50
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Dubber Corporation Limited"
        },
        {
            "ticker": "AU:TIP",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "financial",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-28T00:00:00",
                "company": "Teaminvest Private Group Ltd",
                "ticker": "AU:TIP",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.015,
                "lastEps": -0.136,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48865058,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 109914,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 2044000.0,
                "totalRevenue": 51874000.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230828/pdf/05t5471cprlbbq.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-20T00:00:00",
                "company": "Teaminvest Private Group Ltd",
                "ticker": "AU:TIP",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.015,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48865058,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 109914,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "309291d7",
            "companyName": "Teaminvest Private Group Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.003,
            "dividendYield": 0.015969999999999998,
            "peRatio": 12.000,
            "stockId": 109914,
            "high52Weeks": 0.527,
            "low52Weeks": 0.297,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": null,
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 48865058,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.40
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.34
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.49
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Teaminvest Private Group Ltd"
        },
        {
            "ticker": "AU:FFI",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "consumercyclical",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": {
                "ticker": "AU:FFI",
                "company": "F.F.I. Holdings Ltd.",
                "exDate": "2023-09-29T00:00:00",
                "payDate": "2023-10-12T00:00:00",
                "amount": 0.100,
                "yield": 2.222,
                "consensus": null,
                "bpConsensus": null,
                "dividendDateType": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48852068,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "recDate": "2023-10-02T00:00:00",
                "stockId": 110364,
                "eps": 0.162,
                "growthSinceDate": "2022-03-14T00:00:00",
                "sectorYield": 0.00992,
                "payoutRatio": null,
                "annualizedPayout": 0.100,
                "payoutInterval": 9,
                "stockTypeId": 12,
                "announceDate": null,
                "currencyTypeID": 4,
                "isSpecialDividend": false,
                "smartScore": null
            },
            "lastReportedEps": {
                "date": "2023-08-14T00:00:00",
                "company": "F.F.I. Holdings Ltd.",
                "ticker": "AU:FFI",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.118,
                "lastEps": 0.002,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48852068,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "stockId": 110364,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": 1277376.0,
                "totalRevenue": 22540194.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02697013-6A1163067?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-09T00:00:00",
                "company": "F.F.I. Holdings Ltd.",
                "ticker": "AU:FFI",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48852068,
                "marketCapCurrencyId": 4,
                "sector": 20301,
                "stockId": 110364,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "f5f52469",
            "companyName": "F.F.I. Holdings Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.100,
            "dividendYield": 0.02222,
            "peRatio": 28.024,
            "stockId": 110364,
            "high52Weeks": 5.050,
            "low52Weeks": 3.400,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 1
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 48852068,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 4.50
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 3.70
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 5.00
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "F.F.I. Holdings Ltd."
        },
        {
            "ticker": "AU:IIQ",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-29T00:00:00",
                "company": "Inoviq Ltd",
                "ticker": "AU:IIQ",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.037,
                "lastEps": -0.169,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48769908,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110967,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -3382680.0,
                "totalRevenue": 233803.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02704638-3A624794?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 100000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Inoviq Ltd",
                "ticker": "AU:IIQ",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.061,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48769908,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110967,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "7e2bf674",
            "companyName": "Inoviq Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -5.435,
            "stockId": 110967,
            "high52Weeks": 0.990,
            "low52Weeks": 0.460,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 34
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 48769908,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.64
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.82
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.56
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Inoviq Ltd"
        },
        {
            "ticker": "AU:CAY",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-03-14T00:00:00",
                "company": "Canyon Resources Limited",
                "ticker": "AU:CAY",
                "periodEnding": "Dec 2022",
                "eps": null,
                "reportedEPS": -0.003,
                "lastEps": -0.013,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48756791,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110739,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2022-12-31T00:00:00",
                "totalIncome": -2778107.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://www.asx.com.au/asxpdf/20230314/pdf/45mmyqtg61qz5x.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-09-29T00:00:00",
                "company": "Canyon Resources Limited",
                "ticker": "AU:CAY",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48756791,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110739,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "d33ace70",
            "companyName": "Canyon Resources Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -5.581,
            "stockId": 110739,
            "high52Weeks": 0.080,
            "low52Weeks": 0.039,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 6,
                "bullishCount": 29
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 48756791,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.06
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.07
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.04
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Canyon Resources Limited"
        },
        {
            "ticker": "AU:PVE",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-11T00:00:00",
                "company": "Po Valley Energy Limited",
                "ticker": "DE:OXK",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00060608007,
                "lastEps": 0.00000000000,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 29501789,
                "marketCapCurrencyId": 3,
                "sector": 18555,
                "stockId": 103585,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -387066.91043374833,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230911/pdf/05trr02dc12n3f.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-28T00:00:00",
                "company": "Po Valley Energy Limited",
                "ticker": "DE:OXK",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 29501789,
                "marketCapCurrencyId": 3,
                "sector": 18555,
                "stockId": 103585,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "4fcfe92b",
            "companyName": "Po Valley Energy Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.011,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 103585,
            "high52Weeks": 0.058,
            "low52Weeks": 0.010,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 11
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 48676389,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.04
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.01
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.04
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Po Valley Energy Limited"
        },
        {
            "ticker": "AU:AVA",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "financial",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-27T00:00:00",
                "company": "Ava Risk Group Ltd.",
                "ticker": "AU:AVA",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48602528,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110213,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230828/pdf/05t4cn8wq763cf.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-23T00:00:00",
                "company": "Ava Risk Group Ltd.",
                "ticker": "AU:AVA",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48602528,
                "marketCapCurrencyId": 4,
                "sector": 17346,
                "stockId": 110213,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "c1185689",
            "companyName": "Ava Risk Group Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.000,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 110213,
            "high52Weeks": 0.270,
            "low52Weeks": 0.175,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 14
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 48602528,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.24
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.20
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.20
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Ava Risk Group Ltd."
        },
        {
            "ticker": "AU:PRL",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-27T00:00:00",
                "company": "Province Resources Ltd",
                "ticker": "AU:PRL",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.004,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48441221,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 110953,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230927/pdf/05vc7dtd655gx8.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-13T00:00:00",
                "company": "Province Resources Ltd",
                "ticker": "AU:PRL",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.002,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48441221,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 110953,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "bd1cf4e9",
            "companyName": "Province Resources Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -6.612,
            "stockId": 110953,
            "high52Weeks": 0.093,
            "low52Weeks": 0.032,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 6,
                "bullishCount": 51
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 48441221,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.06
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.04
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.08
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Province Resources Ltd"
        },
        {
            "ticker": "AU:MCE",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "industrials",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "Matrix Composites & Engineering Ltd",
                "ticker": "DE:8ME",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00484864056,
                "lastEps": -0.00363648042,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 29320619,
                "marketCapCurrencyId": 3,
                "sector": 17348,
                "stockId": 103590,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -802450.01268,
                "totalRevenue": 21428566.95492,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230831/pdf/05tcs0pc07222b.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-23T00:00:00",
                "company": "Matrix Composites & Engineering Ltd",
                "ticker": "DE:8ME",
                "periodEnding": "Dec 2023",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.03091008357,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 29320619,
                "marketCapCurrencyId": 3,
                "sector": 17348,
                "stockId": 103590,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": "2023-12-31T00:00:00",
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": 12000000.000,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "b2e19311",
            "companyName": "Matrix Composites & Engineering Ltd",
            "priceTarget": 0.3464888700,
            "bestPriceTarget": 0.3464888700,
            "dividend": 0.009,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 103590,
            "high52Weeks": 0.227,
            "low52Weeks": 0.089,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 0,
                "bullishCount": 5
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 49326044,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.15
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.13
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.11
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Matrix Composites & Engineering Ltd"
        },
        {
            "ticker": "AU:AQC",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "energy",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-03-16T00:00:00",
                "company": "Australian Pacific Coal Limited",
                "ticker": "AU:AQC",
                "periodEnding": "Dec 2022",
                "eps": null,
                "reportedEPS": -0.044,
                "lastEps": -0.123,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48349345,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 84719,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2022-12-31T00:00:00",
                "totalIncome": -8224361.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://www.asx.com.au/asxpdf/20230316/pdf/45mrsb23mx7mmv.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2023-09-28T00:00:00",
                "company": "Australian Pacific Coal Limited",
                "ticker": "AU:AQC",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.101,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48349345,
                "marketCapCurrencyId": 4,
                "sector": 18555,
                "stockId": 84719,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "1f0ab06d",
            "companyName": "Australian Pacific Coal Limited",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -0.807,
            "stockId": 84719,
            "high52Weeks": 0.432,
            "low52Weeks": 0.085,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 3,
                "rating": 3,
                "bearishCount": 2,
                "bullishCount": 1
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 48349345,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": null,
                "threeMonthsAgo": null,
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.38
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Australian Pacific Coal Limited"
        },
        {
            "ticker": "AU:ICI",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "technology",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "iCandy Interactive Ltd",
                "ticker": "AU:ICI",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.003,
                "lastEps": 0.001,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48319398,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110963,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -4364794.0,
                "totalRevenue": 11989736.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02706340-6A1166106?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "iCandy Interactive Ltd",
                "ticker": "AU:ICI",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48319398,
                "marketCapCurrencyId": 4,
                "sector": 17349,
                "stockId": 110963,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "b8a070ea",
            "companyName": "iCandy Interactive Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -6.923,
            "stockId": 110963,
            "high52Weeks": 0.083,
            "low52Weeks": 0.035,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 8,
                "bullishCount": 47
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 48319398,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.05
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.04
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.07
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "iCandy Interactive Ltd"
        },
        {
            "ticker": "AU:NRZ",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "realestate",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-31T00:00:00",
                "company": "NeuRizer Ltd",
                "ticker": "AU:NRZ",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.015,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48237334,
                "marketCapCurrencyId": 4,
                "sector": 60463,
                "stockId": 103936,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-14T00:00:00",
                "company": "NeuRizer Ltd",
                "ticker": "AU:NRZ",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.010,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48237334,
                "marketCapCurrencyId": 4,
                "sector": 60463,
                "stockId": 103936,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "13dcf94d",
            "companyName": "NeuRizer Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -1.696,
            "stockId": 103936,
            "high52Weeks": 0.135,
            "low52Weeks": 0.035,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 11,
                "bullishCount": 41
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 48237334,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": null,
                "threeMonthsAgo": null,
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.13
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "NeuRizer Ltd"
        },
        {
            "ticker": "AU:BOL",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "industrials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-24T00:00:00",
                "company": "Boom Logistics Ltd",
                "ticker": "DE:GJY",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.00848512098,
                "lastEps": 0.00121216014,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 29167361,
                "marketCapCurrencyId": 3,
                "sector": 17348,
                "stockId": 105375,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -3600721.69587,
                "totalRevenue": 64469949.20604,
                "revenueIncomeCurrencyID": 3,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230825/pdf/05t1m4rlptfvsz.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-22T00:00:00",
                "company": "Boom Logistics Ltd",
                "ticker": "DE:GJY",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": 0.002,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 29167361,
                "marketCapCurrencyId": 3,
                "sector": 17348,
                "stockId": 105375,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 3,
                "epsCurrencyTypeID": 3,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 3,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "7ee66df5",
            "companyName": "Boom Logistics Ltd",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": 0.004,
            "dividendYield": null,
            "peRatio": null,
            "stockId": 105375,
            "high52Weeks": 0.196,
            "low52Weeks": 0.059,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7946
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 15
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 48124600,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.20
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.06
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.20
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Boom Logistics Ltd"
        },
        {
            "ticker": "AU:LGP",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "healthcare",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-08-28T00:00:00",
                "company": "Little Green Pharma Ltd.",
                "ticker": "AU:LGP",
                "periodEnding": "Mar 2023",
                "eps": null,
                "reportedEPS": -0.004,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48014921,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110024,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-03-31T00:00:00",
                "totalIncome": -1061191.0,
                "totalRevenue": 10699578.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Little Green Pharma Ltd.",
                "ticker": "AU:LGP",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.033,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 48014921,
                "marketCapCurrencyId": 4,
                "sector": 17347,
                "stockId": 110024,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "113fcec8",
            "companyName": "Little Green Pharma Ltd.",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -4.610,
            "stockId": 110024,
            "high52Weeks": 0.290,
            "low52Weeks": 0.155,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 4,
                "bullishCount": 17
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 48014921,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.18
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.16
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.25
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Little Green Pharma Ltd."
        },
        {
            "ticker": "AU:AZY",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-21T00:00:00",
                "company": "Antipa Minerals Limited",
                "ticker": "AU:AZY",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": 0.000,
                "lastEps": -0.001,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 47780004,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110412,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 1,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -1180372.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230922/pdf/05v588zgp09pzf.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-12T00:00:00",
                "company": "Antipa Minerals Limited",
                "ticker": "AU:AZY",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 47780004,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110412,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "4feed79b",
            "companyName": "Antipa Minerals Limited",
            "priceTarget": 0.06,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -13.333,
            "stockId": 110412,
            "high52Weeks": 0.028,
            "low52Weeks": 0.011,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 1,
                "bullishCount": 52
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 47780004,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.02
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.01
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.02
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Antipa Minerals Limited"
        },
        {
            "ticker": "AU:NVA",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-11T00:00:00",
                "company": "Nova Minerals",
                "ticker": "NVAAF",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.01720709703,
                "lastEps": -0.19182726689,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 30240034,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 90447,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -3585579.19031756,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 1,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02710348-3A625884?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-15T00:00:00",
                "company": "Nova Minerals",
                "ticker": "NVAAF",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.02039359648,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 30240034,
                "marketCapCurrencyId": 1,
                "sector": 17343,
                "stockId": 90447,
                "stockTypeId": 1,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 1,
                "epsCurrencyTypeID": 1,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 1,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "4a5585d8",
            "companyName": "Nova Minerals",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -9.160,
            "stockId": 90447,
            "high52Weeks": 1.350,
            "low52Weeks": 0.050,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 12,
                "bullishCount": 86
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 50613591,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.45
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.53
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.43
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Nova Minerals"
        },
        {
            "ticker": "AU:CY5",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": "buy",
                "rawConsensus": 4,
                "distribution": {
                    "buy": 1.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-13T00:00:00",
                "company": "Cygnus Gold Ltd.",
                "ticker": "AU:CY5",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.010,
                "lastEps": -0.005,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 47131926,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110137,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -7963601.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://announcements.asx.com.au/asxpdf/20230913/pdf/05tvk3zhtwz2s6.pdf",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-03-28T00:00:00",
                "company": "Cygnus Gold Ltd.",
                "ticker": "AU:CY5",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": null,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 47131926,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110137,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "e91fc402",
            "companyName": "Cygnus Gold Ltd.",
            "priceTarget": 0.50,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -7.431,
            "stockId": 110137,
            "high52Weeks": 0.625,
            "low52Weeks": 0.160,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": {
                "rating": 1,
                "stockScore": 0.7083
            },
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 35
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 47131926,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.38
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.23
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.25
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Cygnus Gold Ltd."
        },
        {
            "ticker": "AU:KIN",
            "stockType": "stock",
            "stockTypeId": 1,
            "sectorId": "basicmaterials",
            "analystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "bestAnalystConsensus": {
                "consensus": null,
                "rawConsensus": null,
                "distribution": {
                    "buy": 0.0,
                    "hold": 0.0,
                    "sell": 0.0
                }
            },
            "nextDividendDate": null,
            "lastReportedEps": {
                "date": "2023-09-21T00:00:00",
                "company": "Kin Mining NL",
                "ticker": "AU:KIN",
                "periodEnding": "Jun 2023",
                "eps": null,
                "reportedEPS": -0.003,
                "lastEps": -0.004,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 47126019,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110665,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 2,
                "isConfirmed": true,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 4,
                "fiscalYear": 2023,
                "fiscalQuarterEndingDate": "2023-06-30T00:00:00",
                "totalIncome": -3927054.0,
                "totalRevenue": 0.0,
                "revenueIncomeCurrencyID": 4,
                "urlReport": "https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-02714763-6A1169619?access_token=83ff96335c2d45a094df02a206a39ff4",
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "nextEarningsReport": {
                "date": "2024-02-28T00:00:00",
                "company": "Kin Mining NL",
                "ticker": "AU:KIN",
                "periodEnding": "",
                "eps": null,
                "reportedEPS": null,
                "lastEps": -0.005,
                "consensus": null,
                "bpConsensus": null,
                "ratingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "bpRatingsAndPT": {
                    "priceTarget": null,
                    "numBuys": null,
                    "numHolds": null,
                    "numSells": null
                },
                "marketCap": 47126019,
                "marketCapCurrencyId": 4,
                "sector": 17343,
                "stockId": 110665,
                "stockTypeId": 12,
                "surprise": null,
                "timeOfDay": 4,
                "isConfirmed": false,
                "currencyTypeID": 4,
                "epsCurrencyTypeID": 4,
                "fiscalPeriod": 2,
                "fiscalYear": 2024,
                "fiscalQuarterEndingDate": null,
                "totalIncome": null,
                "totalRevenue": null,
                "revenueIncomeCurrencyID": 4,
                "urlReport": null,
                "lowEstimate": null,
                "highEstimate": null,
                "salesEstimate": null,
                "salesLowEstimate": null,
                "salesHighEstimate": null,
                "smartScore": null
            },
            "stockUid": "f812af3d",
            "companyName": "Kin Mining NL",
            "priceTarget": null,
            "bestPriceTarget": null,
            "dividend": null,
            "dividendYield": null,
            "peRatio": -4.761,
            "stockId": 110665,
            "high52Weeks": 0.084,
            "low52Weeks": 0.028,
            "hedgeFundSentimentData": null,
            "insiderSentimentData": null,
            "bloggerSentimentData": {
                "ratingIfExists": 1,
                "rating": 1,
                "bearishCount": 2,
                "bullishCount": 9
            },
            "shouldAddLinkToStockPage": true,
            "expenseRatio": null,
            "marketCap": 47126019,
            "marketCapCurrencyId": 4,
            "newsSentiment": 3,
            "landmarkPrices": {
                "yearToDate": {
                    "date": "2023-01-02T00:00:00",
                    "d": "2/1/23",
                    "p": 0.06
                },
                "threeMonthsAgo": {
                    "date": "2023-06-29T00:00:00",
                    "d": "29/6/23",
                    "p": 0.03
                },
                "yearAgo": {
                    "date": "2022-09-28T00:00:00",
                    "d": "28/9/22",
                    "p": 0.07
                }
            },
            "priceTargetCurrencyId": 4,
            "marketCountryId": 26,
            "companyFullName": "Kin Mining NL"
        }
    ];

  const connection = await pool.getConnection();
  let c = 0;
  const sector_id = new Set();

  for (const jsonData of jsonDataArray) {
    sector_id.add(jsonData.analystConsensus.rawConsensus);
    try {
      const transformedData = transformData(jsonData);
      const query = "INSERT INTO stocks SET ?";
      connection.query(query, transformedData, (err, result) => {
        if (err) throw err;
        console?.log("Data inserted:", result);
      });
      //console?.log("Data inserted successfully.");
    } catch (error) {
      console?.error("Error inserting data: " + error.message);
    }
  }
  console.log("finished", c);
  console.log("finished", sector_id);
  // Insert data into the Stock table and get the inserted stockId
};

function transformData(inputData) {
  return {
    ticker: inputData?.ticker || null,
    stock_type: inputData?.stockType || null,
    stock_type_id: inputData?.stockTypeId || null,
    sector_id: inputData?.sectorId || null,
    analyst_consensus: inputData?.analystConsensus?.consensus || null,
    raw_consensus: inputData?.analystConsensus?.rawConsensus || null,
    buy_distribution: inputData?.analystConsensus?.distribution?.buy || null,
    hold_distribution: inputData?.analystConsensus?.distribution?.hold || null,
    sell_distribution: inputData?.analystConsensus?.distribution?.sell || null,
    best_analyst_consensus: inputData?.bestAnalystConsensus?.consensus || null,
    best_analyst_raw_consensus:inputData?.bestAnalystConsensus?.rawConsensus || null,
    best_buy_distribution:inputData?.bestAnalystConsensus?.distribution?.buy || null,
    best_hold_distribution:inputData?.bestAnalystConsensus?.distribution?.hold || null,
    best_sell_distribution:inputData?.bestAnalystConsensus?.distribution?.sell || null,
    next_dividend_ex_date: inputData?.nextDividendDate?.exDate? new Date(inputData.nextDividendDate.exDate): null,
    next_dividend_pay_date: inputData?.nextDividendDate?.payDate? new Date(inputData.nextDividendDate.payDate): null,
    next_dividend_amount: inputData?.nextDividendDate?.amount || null,
    next_dividend_yield: inputData?.nextDividendDate?.yield || null,
    next_dividend_consensus: inputData?.nextDividendDate?.consensus || null,
    next_dividend_bp_consensus:inputData?.nextDividendDate?.bpConsensus || null,
    next_dividend_date_type:inputData?.nextDividendDate?.dividendDateType || null,
    next_dividend_price_target:inputData?.nextDividendDate?.ratingsAndPT?.priceTarget || null,
    next_dividend_num_buys:inputData?.nextDividendDate?.ratingsAndPT?.numBuys || null,
    next_dividend_num_holds:inputData?.nextDividendDate?.ratingsAndPT?.numHolds || null,
    next_dividend_num_sells:inputData?.nextDividendDate?.ratingsAndPT?.numSells || null,
    next_dividend_bp_price_target:inputData?.nextDividendDate?.bpRatingsAndPT?.priceTarget || null,
    next_dividend_bp_num_buys:inputData?.nextDividendDate?.bpRatingsAndPT?.numBuys || null,
    next_dividend_bp_num_holds:inputData?.nextDividendDate?.bpRatingsAndPT?.numHolds || null,
    next_dividend_bp_num_sells:inputData?.nextDividendDate?.bpRatingsAndPT?.numSells || null,
    next_dividend_rec_date: inputData?.nextDividendDate?.recDate? new Date(inputData.nextDividendDate.recDate): null,
    next_dividend_eps: inputData?.nextDividendDate?.eps || null,
    next_dividend_growth_since_date: inputData?.nextDividendDate?.growthSinceDate? new Date(inputData.nextDividendDate.growthSinceDate): null,
    next_dividend_sector_yield:inputData?.nextDividendDate?.sectorYield || null,
    next_dividend_payout_ratio:inputData?.nextDividendDate?.payoutRatio || null,
    next_dividend_annualized_payout:inputData?.nextDividendDate?.annualizedPayout || null,
    next_dividend_payout_interval:inputData?.nextDividendDate?.payoutInterval || null,
    next_dividend_announce_date: inputData?.nextDividendDate?.announceDate? new Date(inputData.nextDividendDate.announceDate): null,
    next_dividend_is_special_dividend:inputData?.nextDividendDate?.isSpecialDividend || null,
    last_reported_eps_date: inputData?.lastReportedEps?.date || null,
    last_reported_eps_company: inputData?.lastReportedEps?.company || null,
    last_reported_eps_ticker: inputData?.lastReportedEps?.ticker || null,
    last_reported_eps_period_ending: inputData?.lastReportedEps?.periodEnding? convertMonthYearToDate(inputData.lastReportedEps.periodEnding): null,
    last_reported_eps: inputData?.lastReportedEps?.eps || null,
    reported_eps: inputData?.lastReportedEps?.reportedEPS || null,
    last_eps: inputData?.lastReportedEps?.lastEps || null,
    market_cap: inputData?.lastReportedEps?.marketCap || null,
    market_cap_currency_id:inputData?.lastReportedEps?.marketCapCurrencyId || null,
    sector: inputData?.lastReportedEps?.sector || null,
    stock_id: inputData?.lastReportedEps?.stockId || null,
    surprise: inputData?.lastReportedEps?.surprise || null,
    time_of_day: inputData?.lastReportedEps?.timeOfDay || null,
    is_confirmed: inputData?.lastReportedEps?.isConfirmed || null,
    currency_type_id: inputData?.lastReportedEps?.currencyTypeID || null,
    eps_currency_type_id: inputData?.lastReportedEps?.epsCurrencyTypeID || null,
    fiscal_period: inputData?.lastReportedEps?.fiscalPeriod || null,
    fiscal_year: inputData?.lastReportedEps?.fiscalYear || null,
    fiscal_quarter_ending_date:
      inputData?.lastReportedEps?.fiscalQuarterEndingDate || null,
    total_income: inputData?.lastReportedEps?.totalIncome || null,
    total_revenue: inputData?.lastReportedEps?.totalRevenue || null,
    revenue_income_currency_id:
      inputData?.lastReportedEps?.revenueIncomeCurrencyID || null,
    revenue_per_share: inputData?.lastReportedEps?.revenuePerShare || null,
    revenue_per_share_currency_id:
      inputData?.lastReportedEps?.revenuePerShareCurrencyID || null,
    p_e_ratio: inputData?.lastReportedEps?.peRatio || null,
    p_e_ratio_date: inputData?.lastReportedEps?.peRatioDate
      ? convertMonthYearToDate(inputData.lastReportedEps.peRatioDate)
      : null,
    net_income: inputData?.lastReportedEps?.netIncome || null,
    net_income_currency_id:
      inputData?.lastReportedEps?.netIncomeCurrencyID || null,
    income_per_share: inputData?.lastReportedEps?.incomePerShare || null,
    income_per_share_currency_id:
      inputData?.lastReportedEps?.incomePerShareCurrencyID || null,
    is_surprise: inputData?.lastReportedEps?.isSurprise || null,
    is_surprise_percent: inputData?.lastReportedEps?.isSurprisePercent || null,
    last_reported_eps_fiscal_period:
      inputData?.lastReportedEps?.lastReportedEpsFiscalPeriod || null,
    last_reported_eps_fiscal_year:
      inputData?.lastReportedEps?.lastReportedEpsFiscalYear || null,
    last_reported_eps_fiscal_quarter_ending_date:
      inputData?.lastReportedEps?.lastReportedEpsFiscalQuarterEndingDate ||
      null,
    last_reported_eps_currency_type_id:
      inputData?.lastReportedEps?.lastReportedEpsCurrencyTypeID || null,
    last_reported_eps_announce_date: inputData?.lastReportedEps
      ?.lastReportedEpsAnnounceDate
      ? new Date(inputData.lastReportedEps.lastReportedEpsAnnounceDate)
      : null,
    last_reported_eps_announce_time_of_day:
      inputData?.lastReportedEps?.lastReportedEpsAnnounceTimeOfDay || null,
    last_reported_eps_is_confirmed:
      inputData?.lastReportedEps?.lastReportedEpsIsConfirmed || null,
    last_reported_eps_reported_eps:
      inputData?.lastReportedEps?.lastReportedEpsReportedEps || null,
    last_reported_eps_surprise:
      inputData?.lastReportedEps?.lastReportedEpsSurprise || null,
    last_reported_eps_is_surprise:
      inputData?.lastReportedEps?.lastReportedEpsIsSurprise || null,
    last_reported_eps_is_surprise_percent:
      inputData?.lastReportedEps?.lastReportedEpsIsSurprisePercent || null,
    next_earning_date: inputData?.nextEarningDate?.date || null,
    next_earning_announce_date: inputData?.nextEarningDate?.announceDate
      ? new Date(inputData.nextEarningDate.announceDate)
      : null,
    next_earning_announce_time_of_day:
      inputData?.nextEarningDate?.announceTimeOfDay || null,
    next_earning_is_confirmed: inputData?.nextEarningDate?.isConfirmed || null,
    next_earning_period_ending: inputData?.nextEarningDate?.periodEnding
      ? convertMonthYearToDate(inputData.nextEarningDate.periodEnding)
      : null,
    next_earning_stock_id: inputData?.nextEarningDate?.stockId || null,
    next_earning_ticker: inputData?.nextEarningDate?.ticker || null,
    last_trade_price: inputData?.lastTradePrice?.price || null,
    last_trade_time_of_day: inputData?.lastTradePrice?.timeOfDay || null,
    last_trade_date: inputData?.lastTradePrice?.date
      ? new Date(inputData.lastTradePrice.date)
      : null,
    last_trade_stock_id: inputData?.lastTradePrice?.stockId || null,
    last_trade_ticker: inputData?.lastTradePrice?.ticker || null,
    last_trade_price_type_id: inputData?.lastTradePrice?.priceTypeID || null,
    last_trade_currency_type_id:
      inputData?.lastTradePrice?.currencyTypeID || null,
    stock_price_change: inputData?.stockPriceChange?.change || null,
    stock_price_change_currency_type_id:
      inputData?.stockPriceChange?.currencyTypeID || null,
    stock_price_change_date: inputData?.stockPriceChange?.date
      ? new Date(inputData.stockPriceChange.date)
      : null,
    stock_price_change_time_of_day:
      inputData?.stockPriceChange?.timeOfDay || null,
    stock_price_change_stock_id: inputData?.stockPriceChange?.stockId || null,
    stock_price_change_ticker: inputData?.stockPriceChange?.ticker || null,
    stock_price_change_type_id:
      inputData?.stockPriceChange?.changeTypeID || null,
    // current_price: inputData?.currentPrice?.price || null,
    // current_price_time_of_day: inputData?.currentPrice?.timeOfDay || null,
    // current_price_date: inputData?.currentPrice?.date
    //   ? new Date(inputData.currentPrice.date)
    //   : null,
    // current_price_stock_id: inputData?.currentPrice?.stockId || null,
    // current_price_ticker: inputData?.currentPrice?.ticker || null,
    // current_price_type_id: inputData?.currentPrice?.priceTypeID || null,
    // current_price_currency_type_id:
    //   inputData?.currentPrice?.currencyTypeID || null,
    // current_price_change: inputData?.currentPrice?.change || null,
    // current_price_change_percent:
    //   inputData?.currentPrice?.changePercent || null,
    // current_price_last_reported_eps:
    //   inputData?.currentPrice?.lastReportedEps || null,
    // current_price_next_earning_date:
    //   inputData?.currentPrice?.nextEarningDate || null,
    // current_price_next_dividend_date:
    //   inputData?.currentPrice?.nextDividendDate || null,
    // current_price_stock_type: inputData?.currentPrice?.stockType || null,
    // current_price_stock_type_id: inputData?.currentPrice?.stockTypeId || null,
    // current_price_sector_id: inputData?.currentPrice?.sectorId || null,
    // current_price_last_trade_price:
    //   inputData?.currentPrice?.lastTradePrice || null,
    // current_price_last_trade_time_of_day:
    //   inputData?.currentPrice?.lastTradeTimeOfDay || null,
    // current_price_last_trade_date: inputData?.currentPrice?.lastTradeDate
    //   ? new Date(inputData.currentPrice.lastTradeDate)
    //   : null,
    // current_price_stock_price_change:
    //   inputData?.currentPrice?.stockPriceChange || null,
    // current_price_stock_price_change_percent:
    //   inputData?.currentPrice?.stockPriceChangePercent || null,
    // current_price_stock_price_change_date: inputData?.currentPrice
    //   ?.stockPriceChangeDate
    //   ? new Date(inputData.currentPrice.stockPriceChangeDate)
    //   : null,
    // current_price_stock_price_change_time_of_day:
    //   inputData?.currentPrice?.stockPriceChangeTimeOfDay || null,
    // current_price_stock_price_change_stock_id:
    //   inputData?.currentPrice?.stockPriceChangeStockId || null,
    // current_price_stock_price_change_ticker:
    //   inputData?.currentPrice?.stockPriceChangeTicker || null,
    // current_price_stock_price_change_type_id:
    //   inputData?.currentPrice?.stockPriceChangeTypeID || null,
    next_dividend_date_consensus: inputData?.nextDividendDate?.consensus,
    last_reported_eps_date: inputData?.lastReportedEps?.date,
    last_reported_eps: inputData?.lastReportedEps?.eps,
    reported_eps: inputData?.lastReportedEps?.reportedEPS,
    last_eps: inputData?.lastReportedEps?.lastEps,
    fiscal_period: inputData?.lastReportedEps?.fiscalPeriod,
    fiscal_year: inputData?.lastReportedEps?.fiscalYear,
    fiscal_quarter_ending_date: inputData?.lastReportedEps?.fiscalQuarterEndingDate,
    total_income: inputData?.lastReportedEps?.totalIncome,
    total_revenue: inputData?.lastReportedEps?.totalRevenue,
    last_reported_eps_url_report: inputData?.lastReportedEps?.urlReport,
    next_earnings_report_date: inputData?.nextEarningsReport?.date,
    //next_earnings_report_eps: inputData?.nextEarningsReport?.eps,
    //next_fiscal_period: inputData?.nextEarningsReport?.fiscalPeriod,
    //next_fiscal_year: inputData?.nextEarningsReport?.fiscalYear,
    //next_fiscal_quarter_ending_date:inputData?.nextEarningsReport?.fiscalQuarterEndingDate,
    stock_uid: inputData?.stockUid,
    company_name: inputData?.companyName,
    price_target: inputData?.priceTarget,
    best_price_target: inputData?.bestPriceTarget,
    dividend: inputData?.dividend,
    dividend_yield: inputData?.dividendYield,
    pe_ratio: inputData?.peRatio,
    high_52_weeks: inputData?.high52Weeks,
    low_52_weeks: inputData?.low52Weeks,
    hedge_fund_sentiment_rating: inputData?.hedgeFundSentimentinputData?.rating,
    hedge_fund_sentiment_score: inputData?.hedgeFundSentimentinputData?.score,
    insider_sentiment_rating: inputData?.insiderSentimentinputData?.rating,
    //insider_sentiment_stock_score: inputData?.insiderSentimentinputData?.stockScore,
    blogger_sentiment_rating: inputData?.bloggerSentimentinputData?.rating,
    //bearish_count: inputData?.bloggerSentimentinputData?.bearishCount,
    //bullish_count: inputData?.bloggerSentimentinputData?.bullishCount,
    should_add_link_to_stock_page: inputData?.shouldAddLinkToStockPage,
    market_cap: inputData?.marketCap,
    news_sentiment: inputData?.newsSentiment,
    //year_to_date_date: inputData?.landmarkPrices?.yearToDate?.date,
    //year_to_date_price: inputData?.landmarkPrices?.yearToDate?.p,
    //three_months_ago_date: inputData?.landmarkPrices?.threeMonthsAgo?.date,
    //three_months_ago_price: inputData?.landmarkPrices?.threeMonthsAgo?.p,
    //year_ago_date: inputData?.landmarkPrices?.yearAgo?.date,
    //year_ago_price: inputData?.landmarkPrices?.yearAgo?.p,
    //price_target_currency_id: inputData?.priceTargetCurrencyId,
    market_country_id: inputData?.marketCountryId,
    company_full_name: inputData?.companyFullName,
  };
}

insertData();
function convertMonthYearToDate(monthYear) {
  if (!monthYear) return null;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [monthStr, year] = monthYear.split(" ");
  const month = months?.indexOf(monthStr) + 1;
  return `${year}-${month.toString().padStart(2, "0")}-01`;
}
