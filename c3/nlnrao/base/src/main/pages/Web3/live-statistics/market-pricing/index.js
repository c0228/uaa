import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Icon, Hover } from "e-ui-react";
import "./index.css";
import {
  formatCurrencyNumber,
  formatAbbreviatedNumber,
  formatSignedNumber,
} from "./../utils/utility.js";

const MARKET_TREND_API =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

const POLL_INTERVAL_MS = 110000; // 110 seconds
const FLUCTUATING_FIELDS = [
  "current_price",
  "price_change_24h",
  "price_change_percentage_24h",
  "market_cap_change_24h",
  "market_cap_change_percentage_24h",
];

// Utility to apply +/- 2% fluctuation
// Shared state to track direction for each coin
const fluctuationState = {};

const applyFluctuations = (data) => {
  return data.map((coin) => {
    const fluctuatedCoin = { ...coin };
    const coinId = coin.id;

    // Initialize fluctuation state per coin
    if (!fluctuationState[coinId]) {
      fluctuationState[coinId] = {
        direction: true // true = forward, false = backward
      };
    }

    FLUCTUATING_FIELDS.forEach((field) => {
      if (typeof fluctuatedCoin[field] === "number") {
        const randomDelta = Math.random() * 0.05; // range: 0.00 to 0.05
        const signedDelta = fluctuationState[coinId].direction
            ? randomDelta
            : -randomDelta;
        fluctuatedCoin[field] += signedDelta;
      }
    });

    // Toggle direction for next fluctuation
    fluctuationState[coinId].direction = !fluctuationState[coinId].direction;

    return fluctuatedCoin;
  });
};


const ChangeDisplayer = ({ val, label }) => {
  return (
    <span style={{ paddingLeft: "2px" }}>
      (
      <span style={{ fontSize: "12px", color: val?.color, paddingRight: "2px" }}>
        {label} {val?.text}%
      </span>
      <Icon
        type="FontAwesome"
        color={val?.color}
        size={11}
        name={val?.color === "green" ? "fa-arrow-up" : "fa-arrow-down"}
      />
      )
    </span>
  );
};

const SectionDesc = () => (
  <div
    align="center"
    style={{ color: "#777", fontSize: "13px", marginBottom: "10px" }}
  >
    (<u>Note</u>: Here, the Prices / Rates of all the Cryptocurrencies are
    mentioned in USD.)
  </div>
);

const SectionHeader = ({ title }) =>{
    return (<Row>
        <Col md={12}>
            <div align="center" style={{ borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc', 
                backgroundColor:'#eee', padding:'8px' }}><b>{title}</b></div>
        </Col>
    </Row>);
 };

 /** Definitions */
 const DefCurrentPrice = () =>{
  return (<div>
    <div><b>Current Price</b></div>
    <div style={{ paddingTop:'8px' }}>The most recent trading price of the cryptocurrency on the market. It reflects the last matched buy/sell order.</div>
  </div>);
 };

 const Def24hChange = () =>{
  return (<div align="left">
    <div><b>24h Change</b></div>
    <div style={{ paddingTop:'8px' }}>The percentage increase or decrease in the price of the cryptocurrency over the past 24 hours.</div>
  </div>);
 };

 const Def24hHighLowPrice = () =>{
   return (<div>
    <div><b>24h High Price</b></div>
    <div style={{ paddingTop:'8px' }}>The highest price reached by the cryptocurrency in the last 24 hours.</div>
    <div style={{ paddingTop:'15px' }}><b>24h Low Price</b></div>
    <div style={{ paddingTop:'8px' }}>The lowest price reached in the last 24 hours.</div>
   </div>);
 };

 const DefCapitalValue = () =>{
   return (<div>
    <div><b>Market Capitalization [Capital (Cap.) Value]</b></div>
    <div style={{ paddingTop:'8px' }}>Total value of all coins currently in circulation.</div>
    <div style={{ paddingTop:'8px' }}><b>Formula: </b> Current Price x Circulating Supply</div>
   </div>);
 };

 const DefTotalVolume = () =>{
    return (<div>
      <div><b>Total Volume</b></div>
      <div style={{ paddingTop:'8px' }}>The total trading volume (in USD or native currency) of the cryptocurrency across all 
      exchanges in the last 24 hours.</div>
    </div>);
 };

 const Def24hCapChange = () =>{
  return (<div align="left">
    <div><b>24h Change (in Cap.) [Market Capitalization Change in 24h]</b></div>
    <div style={{ paddingTop:'8px' }}>The percentage change in the market capitalization (Capital Value) over the 
    past 24 hours.</div>
  </div>);
 };

 const DefCirculatingSupply = () =>{
  return (<div>
    <div><b>Circulating Supply</b></div>
    <div style={{ paddingTop:'8px'}}>The number of coins or tokens currently available and circulating in the market.</div>
  </div>);
 };

 const DefTotalSupply = () =>{
  return (<div>
    <div><b>Total Supply</b></div>
    <div style={{ paddingTop:'8px' }}>The total number of coins that currently exist (including locked, reserved, and 
    circulating coins), but excluding those yet to be mined or created.</div>
  </div>);
 };

 const DefMaxSupply = () =>{
  return (<div>
    <div><b>Max Supply</b></div>
    <div style={{ paddingTop:'8px' }}>The maximum number of coins that will ever exist for that cryptocurrency (as coded 
    into its protocol).</div>
    <div style={{ paddingTop:'8px' }}><b>Example:</b> Bitcoin has a max supply of 21 million</div>
  </div>);
 };

 const DefDilutedValue = () =>{
  return (<div align="left">
    <div><b>Diluted Value [ Fully Diluted Valuation (FDV) ]</b></div>
    <div style={{ paddingTop:'8px'}}>The market cap assuming all possible coins (max supply) are already in circulation.</div>
    <div style={{ paddingTop:'8px' }}><b>Formula:</b> Current Price x Max Supply</div>
    <div style={{ paddingTop:'8px' }}>Indicates the future potential value if all tokens are released.</div>
  </div>);
 };

 const DefAllTimeHigh = () =>{
  return (<div>
    <div><b>All-Time High (ATH)</b></div>
    <div style={{ paddingTop:'8px' }}>The highest price that a cryptocurrency has ever reached in its entire trading history, across 
    all exchanges.</div>
    <div style={{ paddingTop:'8px' }}><b>Example:</b> If Bitcoin reached $69,000 on November 10, 2021, that is considered its ATH 
    until it’s surpassed.</div>
  </div>);
 };

 const DefAllTimeLow = () =>{
  return (<div align="left">
    <div><b>All-Time Low (ATL)</b></div>
    <div style={{ paddingTop:'8px' }}>The lowest price that a cryptocurrency has ever recorded since it began trading.</div>
    <div style={{ paddingTop:'8px' }}><b>Example:</b> If Ethereum once dropped to $0.42 in its early days, that would be its ATL 
    unless a new lower price is hit.</div>
  </div>);
 };

 const MarketSection = ({ trendData }) =>{
    const title = trendData?.name+' ('+trendData?.symbol+')';
    const img = trendData?.image;
    const imgAlt = trendData?.name+' Logo';
    const currentPrice = formatCurrencyNumber(trendData?.current_price);
    const currentPriceChange24h = formatCurrencyNumber(trendData?.price_change_24h);
    const currentPriceChange24hPercent = formatSignedNumber(trendData?.price_change_percentage_24h);
    const high24h = formatCurrencyNumber(trendData?.high_24h);
    const low24h = formatCurrencyNumber(trendData?.low_24h)
    
    const marketCap = formatAbbreviatedNumber(trendData?.market_cap);
    const totalVolume = formatAbbreviatedNumber(trendData?.total_volume);
    const marketCapChange24h = formatAbbreviatedNumber(trendData?.market_cap_change_24h);
    const markCapChange24hPercent = formatSignedNumber(trendData?.market_cap_change_percentage_24h);

    const circulatingSupply = formatAbbreviatedNumber(trendData?.circulating_supply);
    const totalSupply = formatAbbreviatedNumber(trendData?.total_supply);
    const maxSupply = formatAbbreviatedNumber(trendData?.max_supply);
    const dilutedValue = formatAbbreviatedNumber(trendData?.fully_diluted_valuation);

    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit',
                            minute: '2-digit', second: '2-digit', hour12: true };
    const lastUpdated = trendData?.last_updated;
    const lastUpdatedObject = new Date(lastUpdated);
    const formatedLastUpdated = lastUpdatedObject.toLocaleString('en-US', options).replace(',', '');

    const ath = formatCurrencyNumber(trendData?.ath);
    const athChangePercent = formatSignedNumber(trendData?.ath_change_percentage);
    const athDate = trendData?.ath_date;
    const athDateObject = new Date(athDate);
    const formatedAthDate = athDateObject.toLocaleDateString();

    const atl = formatCurrencyNumber(trendData?.atl);
    const atlChangePercent = formatSignedNumber(trendData?.atl_change_percentage);
    const atlDate = trendData?.atl_date;
    const atlDateObject = new Date(atlDate);
    const formatedAtlDate = atlDateObject.toLocaleDateString();

    return (<div>
        <Row>
            <Col md={12}>
                <div style={{ paddingLeft:'15px', paddingRight:'15px', backgroundColor:'#eee' }}>
                    <h5 className="blog-head">
                    <b>{title?.toUpperCase()}</b>
                    <span className="pull-right" style={{ fontSize:'12px', color:'#777' }}>
                        <b><u>Cap. Rank</u>: <span style={{ color:'#000', fontSize:'14px' }}>#{trendData?.market_cap_rank}</span></b>
                    </span>
                    </h5>
                </div>
            </Col>
        </Row>
        <div style={{ paddingLeft:'15px', paddingRight:'15px', paddingTop:'5px', paddingBottom:'15px' }}>
        <Row>
            <Col md={3}>
                <div align="center">
                    <img src={img} alt={imgAlt} className="web3-market-trends-crypto-img" />
                </div>
            </Col>
            <Col md={9}>
                <Row>
                    <Col md={5}>
                        <div style={{ paddingTop:'5px' }}>
                          <Hover type="tooltip" placement="top" hoverContent={<DefCurrentPrice />}>
                            <div><span className="web3-market-trends-stat-label">Current Price</span></div>
                            <div style={{ fontSize:'15px' }}><b>$. {currentPrice}</b></div>
                          </Hover>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div align="right" style={{ paddingTop:'5px' }}>
                          <Hover type="tooltip" placement="top" hoverContent={<Def24hChange />}>
                            <div><span className="web3-market-trends-stat-label">24h Change</span></div>
                            <div style={{ fontSize:'13px', color:'#555' }}>
                                <b>$. {currentPriceChange24h} <ChangeDisplayer val={currentPriceChange24hPercent} /></b>
                            </div>
                          </Hover>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div style={{ paddingTop:'15px' }}>
                          <Hover type="tooltip" placement="top" hoverContent={<Def24hHighLowPrice />}>
                            <div><span className="web3-market-trends-stat-label">24h High / Low Price</span></div>
                            <div style={{ fontSize:'15px' }}>
                                <b><span style={{ color:'#555' }}>$. {high24h}</span> / 
                                <span style={{ color:'#555', paddingLeft:'5px' }}>$. {low24h}</span>
                                </b></div>
                          </Hover>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        </div>
        <SectionHeader title="Market Capitalization" />
        <div style={{ paddingLeft:'15px', paddingTop:'15px', paddingRight:'15px' }}>
            <Row>
                <Col md={4}>
                  <Hover type="tooltip" placement="top" hoverContent={<DefCapitalValue />}>
                    <div>
                        <div><span className="web3-market-trends-stat-label">Capital (Cap.) Value</span></div>
                        <div style={{ fontSize:'15px', color:'#555' }}><b>$. {marketCap}</b></div>
                    </div>
                  </Hover>
                </Col>
                <Col md={3}>
                  <Hover type="tooltip" placement="top" hoverContent={<DefTotalVolume />}>
                    <div>
                        <div><span className="web3-market-trends-stat-label">Total Volume</span></div>
                        <div style={{ fontSize:'15px', color:'#555' }}><b>$. {totalVolume}</b></div>
                    </div>
                  </Hover>
                </Col>
                <Col md={5}>
                    <div align="right">
                      <Hover type="tooltip" placement="top" hoverContent={<Def24hCapChange />}>
                        <div><span className="web3-market-trends-stat-label">24h Change (.in Cap)</span></div>
                        <div style={{ fontSize:'15px', color:'#555' }}>
                            <b>$. {marketCapChange24h} <ChangeDisplayer val={markCapChange24hPercent} /></b>
                        </div>
                      </Hover>
                    </div>
                </Col>
            </Row>
        </div>
        <div style={{ paddingLeft:'15px',  paddingTop:'15px', paddingRight:'15px', paddingBottom:'15px' }}>
            <Row>
                <Col md={3}>
                  <Hover type="tooltip" placement="top" hoverContent={<DefCirculatingSupply />}>
                    <div>
                        <div><span className="web3-market-trends-stat-label">Cir. Supply</span></div>
                        <div style={{ fontSize:'15px', color:'#555' }}><b>$. {circulatingSupply}</b></div>
                    </div>
                  </Hover>
                </Col>
                <Col md={3}>
                  <Hover type="tooltip" placement="top" hoverContent={<DefTotalSupply />}>
                    <div>
                        <div><span className="web3-market-trends-stat-label">Total Supply</span></div>
                        <div style={{ fontSize:'15px', color:'#555' }}><b>$. {totalSupply}</b></div>
                    </div>
                  </Hover>
                </Col>
                <Col md={3}>
                  <Hover type="tooltip" placement="top" hoverContent={<DefMaxSupply />}>
                    <div>
                        <div><span className="web3-market-trends-stat-label">Max. Supply</span></div>
                        <div style={{ fontSize:'15px', color:'#555' }}><b>$. {maxSupply}</b></div>
                    </div>
                  </Hover>
                </Col>
                <Col md={3}>
                  <Hover type="tooltip" placement="top" hoverContent={<DefDilutedValue />}>
                    <div>
                        <div><span className="web3-market-trends-stat-label">Diluted Value</span></div>
                        <div style={{ fontSize:'15px', color:'#555' }}><b>$. {dilutedValue}</b></div>
                    </div>
                  </Hover>
                </Col>
            </Row>
        </div>
        <SectionHeader title="Market Extremes Points" />
        <div style={{ padding:'15px' }}>
            <Row>
                <Col md={6}>
                  <Hover type="tooltip" placement="top" hoverContent={<DefAllTimeHigh />}>
                    <div>
                        <div><span className="web3-market-trends-stat-label">All-Time High</span></div>
                        <div style={{ fontSize:'13px', color:'#555' }}>
                            <b>$. {ath} <ChangeDisplayer val={athChangePercent} label="L:" /></b>
                        </div>
                        <div style={{ fontSize:'11px', color:'#888'}}>(Reached on <u>{formatedAthDate}</u>)</div>
                    </div>
                  </Hover>
                </Col>
                <Col md={6}>
                    <div align="right">
                      <Hover type="tooltip" placement="top" hoverContent={<DefAllTimeLow />}>
                        <div><span className="web3-market-trends-stat-label">All-Time Low</span></div>
                        <div style={{ fontSize:'13px', color:'#555' }}><b>$. {atl} <ChangeDisplayer val={atlChangePercent} label="P:" /></b></div>
                        <div style={{ fontSize:'11px', color:'#888'}}>(Reached on <u>{formatedAtlDate}</u>)</div>
                      </Hover>
                    </div>
                </Col>
            </Row>
        </div>

          
    </div>);
 };

const MarketPricing = () => {
  const [marketTrendData, setMarketTrendData] = useState([]);
  const [fluctuatedData, setFluctuatedData] = useState([]);

  // API Fetch with polling
  const FetchData = async () => {
    try {
      const response = await axios.get(MARKET_TREND_API);
      setMarketTrendData(response.data);
      setFluctuatedData(response.data); // initial render
    } catch (error) {
      console.error("GET Request Error:", error);
    }
  };

  useEffect(() => {
    FetchData();

    const apiInterval = setInterval(() => {
      FetchData();
    }, POLL_INTERVAL_MS);

    const fluctuationInterval = setInterval(() => {
      setFluctuatedData((prevData) => applyFluctuations(prevData));
    }, 1000); // every 5 sec, simulate change

    return () => {
      clearInterval(apiInterval);
      clearInterval(fluctuationInterval);
    };
  }, []);

  const LoadingSpinnerRow = () => (
  <div align="center" style={{ padding: '15px' }}>
    {[...Array(5)].map((_, index) => (
      <span key={index} style={{ padding: '5px' }}>
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </span>
    ))}
  </div>
);

  return (
    <div>
      <SectionDesc />
      <Row>
        {fluctuatedData?.map((trendData) => (
          <Col md={6} key={trendData.id}>
            <div
              style={{
                border: "1px solid #ccc",
                marginBottom: "20px",
                boxShadow: "1.2px 1.2px 1.2px 1.2px #eee",
              }}
            >
              <MarketSection trendData={trendData} />
            </div>
          </Col>
        ))}
        {fluctuatedData?.length===0 && (<LoadingSpinnerRow />)}
      </Row>
    </div>
  );
};

export default MarketPricing;
