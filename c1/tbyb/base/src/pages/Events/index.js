import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, getDaysOfWeekInMonth, formatDate } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Contact from './../Home/Components/Contact/index.js';
import Footer from '@Templates/Footer/index.js';
import BarEventData from '@Assets/static-data/events.json';

// Function to remove previous dates from movableEvents
const removePreviousDates = (events) => {
    const today = new Date(); // Get today's date
    const todayString = today.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format

    // Create a new object with filtered dates
    const filteredEvents = Object.fromEntries(
        Object.entries(events).filter(([date]) => date >= todayString)
    );

    return filteredEvents;
};

function mergeEvents(year, month, fixedEvents, movableEvents) {
 const dayOfWeeks = Object.keys(fixedEvents);
 console.log(dayOfWeeks);
 const events = {};
 dayOfWeeks.map((dayOfWeek,index)=>{
    const eventDates = getDaysOfWeekInMonth(year, month, dayOfWeek,'AFTER');
    eventDates?.map((eventDate,index)=>{
        events[eventDate] = fixedEvents?.[dayOfWeek];
    });
 });
 console.log(events);
 const latestMovableEvents = removePreviousDates(movableEvents);
 for (const date in latestMovableEvents) {
    if (events[date]) {
        // If the date exists in both, concatenate the arrays
        events[date] = [...events[date], ...movableEvents[date]];
    } else {
        // If the date only exists in movableEvents, add it
        events[date] = movableEvents[date];
    }
 }
 console.log(events);
  // Convert the object into an array of [key, value] pairs
  const entries = Object.entries(events);

  // Sort the array by the date (key)
  entries.sort((a, b) => new Date(a[0]) - new Date(b[0]));

  // Convert the sorted array back into an object
  return Object.fromEntries(entries);
}


const Events = () =>{
 const [eventList, setEventList] = useState({});
 useEffect(()=>{ 
    document.body.style.backgroundColor='#fffbd5';
    const finalEvents = mergeEvents('2024', '10', BarEventData?.["fixed"], BarEventData?.["movable"]);
    console.log("finalEvents", finalEvents);
    setEventList(finalEvents);
 },[]);

 return (<div>
    <div style={{ position:'absolute', top:'40px' }}>
        <img src={"./assets/images/logo.png"} style={{ padding:'5px', width:'100px', height:'auto' }} />
    </div>
    <Header menulinks={HeaderMenu} activeId="Events" />
    <div style={{ marginBottom:'35px' }}>
    <ContainerFluid>
        <Row>
            <Col xxl={12} xl={12}>
                <div align="center" className="heading-title"><b>Events</b></div>
            </Col>
        </Row>
            <div style={{  paddingLeft:'12px', paddingRight:'15px' }}>
            <Row>
            {eventList && Object.keys(eventList)?.map((eventDate,index)=>{
                const todayEventDate = eventDate+'T00:00:00';
                return (<div key={index} style={{ marginBottom:'35px' }}>
                    <Row>
                        <Col md={12}>
                            <div style={{ letterSpacing:'1px', color:'#fff', padding:'10px', textTransform:'uppercase', 
                                backgroundColor:'#333' }}><b>{formatDate(todayEventDate, { weekday: 'long' })},{" "}
                                {formatDate(todayEventDate, { day: '2-digit', month: 'long', year: 'numeric' })}</b></div>
                        </Col>
                    </Row>
                    <Row>
                        {eventList?.[eventDate]?.map((d,i)=>{
                            return (<Col key={i} md={3}>
                                <img src={process.env.PROJECT_URL+'assets/events/'+d} 
                          style={{ height:'500px', marginTop:'25px', borderRadius:'8px', border:'3px solid #333' }} />
                                </Col>);
                        })}
                    </Row>
                </div>);
            })}
            
            </Row>
            </div>
    </ContainerFluid>
    </div>
 <Footer />
 </div>);
};

export default Events;