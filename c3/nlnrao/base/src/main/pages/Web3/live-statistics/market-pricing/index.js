import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { Row, Col, Icon } from "e-ui-react";
import './index.css';
import { formatCurrencyNumber, formatAbbreviatedNumber, formatSignedNumber } from './utils/utility.js';

const MARKET_TREND_API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';

const MarketPricing = () =>{
 const [ marketTrendData, setMarketTrendData ] = useState();
 const FetchData = () =>{
    axios.get(MARKET_TREND_API)
        .then(response => { // handle success
            setMarketTrendData( response.data );
            console.log("GET Request Success:", response.data);
            // setTimeout(()=>{ FetchData(); }, 10000);
        })
        .catch(error => {
            // handle error
            console.error("GET Request Error:", error);
        })
        .finally(() => {
            // always executed
            console.log("GET request finished.");
        });
 };
 useEffect(()=>{
    FetchData();
 },[]);

 const ChangeDisplayer = ({ val }) =>{
    return (<span style={{ paddingLeft:'2px' }}>( <span style={{ fontSize:'12px', color: val?.color, paddingRight:'2px' }}>{val?.text}%</span>
    <Icon type="FontAwesome" color={val?.color} size={11} name={val?.color==='green'?'fa-arrow-up':'fa-arrow-down'} /> )</span>);
 };

 const SectionDesc = () =>{
    return (<div align="center" style={{ color:'#777', fontSize:'13px', marginBottom:'10px' }}>
        (<u>Note</u>: Here, the Prices / Rates of all the Cryptocurrencies are mentioned in USD.)
    </div>);
 };

 const MarketSectionHeader = ({ trendData }) =>{
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

    return (<div>
        <Row>
            <Col md={12}>
                <div style={{ paddingLeft:'15px', backgroundColor:'#eee' }}>
                    <h5 className="blog-head">
                    <b>{title?.toUpperCase()}</b>
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
                    <Col md={6}>
                        <div style={{ paddingTop:'5px' }}>
                            <div className="web3-market-trends-stat-label">Current Price</div>
                            <div style={{ fontSize:'15px' }}><b>$. {currentPrice}</b></div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div align="right" style={{ paddingTop:'5px' }}>
                            <div className="web3-market-trends-stat-label">24h Change</div>
                            <div style={{ fontSize:'13px', color:'#555' }}>
                                <b>$. {currentPriceChange24h} <ChangeDisplayer val={currentPriceChange24hPercent} /></b>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div style={{ paddingTop:'15px' }}>
                            <div className="web3-market-trends-stat-label">24h High / Low Price</div>
                            <div style={{ fontSize:'15px' }}>
                                <b><span style={{ color:'#555' }}>$. {high24h}</span> / 
                                <span style={{ color:'#555', paddingLeft:'5px' }}>$. {low24h}</span>
                                </b></div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        </div>
        <Row>
            <Col md={12}>
                <div align="center" style={{ borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc', 
                    backgroundColor:'#eee', padding:'8px' }}><b>Market Capitalization</b></div>
            </Col>
        </Row>
        <div style={{ paddingLeft:'15px', paddingTop:'15px', paddingRight:'15px' }}>
            <Row>
                <Col md={4}>
                    <div>
                        <div className="web3-market-trends-stat-label">Capital (Cap.) Value</div>
                        <div style={{ fontSize:'15px', color:'#555' }}><b>$. {marketCap}</b></div>
                    </div>
                </Col>
                <Col md={3}>
                    <div>
                        <div className="web3-market-trends-stat-label">Total Volume</div>
                        <div style={{ fontSize:'15px', color:'#555' }}><b>$. {totalVolume}</b></div>
                    </div>
                </Col>
                <Col md={5}>
                    <div align="right">
                        <div className="web3-market-trends-stat-label">24h Change (.in Cap)</div>
                        <div style={{ fontSize:'15px', color:'#555' }}>
                            <b>$. {marketCapChange24h} <ChangeDisplayer val={markCapChange24hPercent} /></b>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <div style={{ paddingLeft:'15px',  paddingTop:'15px', paddingRight:'15px', paddingBottom:'15px' }}>
            <Row>
                <Col md={3}>
                    <div>
                        <div className="web3-market-trends-stat-label">Cir. Supply</div>
                        <div style={{ fontSize:'15px', color:'#555' }}><b>$. {circulatingSupply}</b></div>
                    </div>
                </Col>
                <Col md={3}>
                    <div>
                        <div className="web3-market-trends-stat-label">Total Supply</div>
                        <div style={{ fontSize:'15px', color:'#555' }}><b>$. {totalSupply}</b></div>
                    </div>
                </Col>
                <Col md={3}>
                    <div>
                        <div className="web3-market-trends-stat-label">Max. Supply</div>
                        <div style={{ fontSize:'15px', color:'#555' }}><b>$. {maxSupply}</b></div>
                    </div>
                </Col>
                <Col md={3}>
                    <div>
                        <div className="web3-market-trends-stat-label">Diluted Value</div>
                        <div style={{ fontSize:'15px', color:'#555' }}><b>$. {dilutedValue}</b></div>
                    </div>
                </Col>
            </Row>
        </div>

          
    </div>);
 };

 return (<div>
    {/* JSON.stringify(marketTrendData)*/}
    <SectionDesc />
    <Row>
    {marketTrendData?.map((trendData)=>{
        return (<Col md={6}>
            <div style={{ border:'1px solid #ccc', marginBottom:'15px' }}>
                <MarketSectionHeader trendData={trendData} />
            </div>
        </Col>);
    })}
    </Row>
 </div>);
};

export default MarketPricing;