import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { BarChart } from "e-ui-react";
import { formatCurrencyNumber } from "./../utils/utility.js";
import RightRoundedHeader from "@MainComponents/header-rounded-right/index.js";

const MarketTrends = () => {
  const HIGH_TRADING = [{ id: "bitcoin", label: "Bitcoin", symbol:"BTC" }, 
                    { id: "wrapped-bitcoin", label:"Wrapped Bitcoin", symbol:"WBTC" }];
  const MEDIUM_TRADING_01 = [{ id: "ethereum", label:"Ethereum", symbol:"ETH" }, 
                            { id: "staked-ether", label:"Lido Staked Ether", symbol: "STETH" }, 
                            { id: "wrapped-steth", label:"Wrapped Steth", symbol:"WSTETH" }];
  const MEDIUM_TRADING_02 = [{ id: "binancecoin", label:"Binance Coin", symbol:"BNB" }, 
                            { id: "solana", label: "Solana", symbol:"SOL" }, 
                            { id: "bitcoin-cash", label:"Bitcoin Cash", symbol:"BCH" }];
  const MEDIUM_TRADING_03 = [{ id: "hyperliquid", label:"HyperLiquid", symbol:"HYPE" }, 
                            { id: "sui", label:"SUI", symbol:"SUI" }, 
                            { id: "chainlink", label:"ChainLink", symbol:"LINK" },
                            { id: "leo-token", label:"Leo Token", symbol:"LEO" }, 
                            { id: "avalanche-2", label:"Avalanche", symbol:"AVAX" }];
  const MEDIUM_TRADING_04 = [{ id: "tether", label:"Tether", symbol:"USDT" }, 
                            { id: "ripple", label:"XRP", symbol:"XRP" },
                            { id: "usd-coin", label:"USDC", symbol:"USDC" }];
  const UPCOMING_TRADING = [{ id: "tron", label:"Tron", symbol:"TRX" }, 
                            { id: "dogecoin", label:"DogeCoin", symbol:"DOGE" }, 
                            { id: "cardano", label:"Cardano", symbol:"ADA" },
                            { id: "stellar", label:"Stellar", symbol:"XLM" }];

  const ALL_COINS = [
    ...HIGH_TRADING,
    ...MEDIUM_TRADING_01,
    ...MEDIUM_TRADING_02,
    ...MEDIUM_TRADING_03,
    ...MEDIUM_TRADING_04,
    ...UPCOMING_TRADING
  ];

  const [marketData, setMarketData] = useState({
    high: [],
    medium01: [],
    medium02: [],
    medium03: [],
    medium04: [],
    upcoming: [],
  });

  const fetchMarketData = async () => {
    try {
      const ids = ALL_COINS.map((coin) => coin.id).join(',');
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
      );

      const data = response.data;

      const mapToChartData = (coins) =>
        coins.map((coin) => ({
          name: coin.symbol || coin.label || coin.id,
          price: data?.[coin.id]?.usd ?? 0,
        }));

      setMarketData({
        high: mapToChartData(HIGH_TRADING),
        medium01: mapToChartData(MEDIUM_TRADING_01),
        medium02: mapToChartData(MEDIUM_TRADING_02),
        medium03: mapToChartData(MEDIUM_TRADING_03),
        medium04: mapToChartData(MEDIUM_TRADING_04),
        upcoming: mapToChartData(UPCOMING_TRADING),
      });
    } catch (error) {
      console.error("Error fetching market data:", error);
    }
  };

useEffect(() => {
  fetchMarketData(); // Initial load
}, []);



  const CustomTooltip = ({ active, payload, label }) => {

  if (active && payload && payload.length > 0) {
    const yAxisData = ALL_COINS?.filter((coin)=>coin.symbol===label)[0];
    const title = yAxisData?.label+' ('+yAxisData?.symbol+')';
    const xAxisValue = payload[0].value; // This is the X value (e.g., price)
    
    return (
      <div style={{ background: '#fff', border: '1px solid #ccc', padding: 10 }}>
        <div><strong>{title.toUpperCase()}</strong></div>
        <div style={{ color:'#555' }}>USD($). {formatCurrencyNumber(xAxisValue)}</div>
      </div>
    );
  }

  return null;
 };


 const highChart = useMemo(() => (
  marketData.high.length > 0 && (
    <BarChart
      type="vertical"
      height={150}
      data={marketData.high}
      dataKeys={[{ label: "price", color: "#4A90E2" }]}
      showLegend={false}
      customToolTip={<CustomTooltip />}
    />
  )
), [marketData.high]);

const medium01Chart = useMemo(()=>(
  marketData.medium01.length > 0 && (
        <BarChart
          type="vertical"
          height={180}
          data={marketData.medium01}
          dataKeys={[{ label: "price", color: "#50E3C2" }]}
          showLegend={false}
          animationDuration={800}
        />
  )
),[marketData.medium01]);

const medium02Chart = useMemo(()=>(
  marketData.medium02.length > 0 && (
        <BarChart
          type="vertical"
          height={180}
          data={marketData.medium02}
          dataKeys={[{ label: "price", color: "#F5A623" }]}
          showLegend={false}
        />
  )
),[marketData.medium02]);

const medium03Chart = useMemo(()=>(
  marketData.medium03.length > 0 && (
        <BarChart
          type="vertical"
          height={220}
          data={marketData.medium03}
          dataKeys={[{ label: "price", color: "#9013FE" }]}
          showLegend={false}
          animationDuration={800}
        />
  )
),[marketData.medium03]);

const medium04Chart = useMemo(()=>(
  marketData.medium04.length > 0 && (
        <BarChart
          type="vertical"
          height={180}
          data={marketData.medium04}
          dataKeys={[{ label: "price", color: "#2CBBAC" }]}
          showLegend={false}
          animationDuration={800}
        />
  )
),[marketData.medium04]);

const upcomingChart = useMemo(()=>(
  marketData.upcoming.length > 0 && (
        <BarChart
          type="vertical"
          height={200}
          data={marketData.upcoming}
          dataKeys={[{ label: "price", color: "#FF6F61" }]}
          showLegend={false}
          animationDuration={800}
        />
  )
),[marketData.upcoming]);

const now = new Date();

  return (<div>
    {marketData?.high?.length>0 && marketData?.medium01?.length>0 && marketData?.medium02?.length>0 &&
    marketData?.medium03?.length>0 && marketData?.medium04?.length>0 && marketData?.upcoming?.length>0 && (<div>
      <RightRoundedHeader label="Graphical Representation" />
      <div style={{ padding: '15px' }}>
        <div style={{ color:'#777' }}>The Data was last updated 
          at [<i>{` ${now.toDateString()} ${now.toLocaleTimeString()} `}</i>]</div>
        {highChart}
        {medium01Chart}
        {medium02Chart}
        {medium03Chart}
        {medium04Chart}
        {upcomingChart}
      </div>
    </div>)}
  </div>);
};

export default MarketTrends;
