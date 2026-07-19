import React from "react";
import { ContainerFluid, Row, Col, Card, Icon, Badge, Button } from "e-ui-react";

const SubjectsList = ({ data }) =>{
 return (<div>
    <div><h4><b>Indian Polity</b></h4><hr/></div>
    <div className="mtop15p">
        <Row>
        <Col md={6}>
        {/* */}
            <Card padding={15} backgroundColor="#fffdfd" style={{ border:'1px solid #000'}}>
                <div style={{ display:'flex', flex:1 }}>
                    <div style={{ width:'20%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
                        <div align="center" style={{ border:'1px solid #000', padding:'15px', borderRadius:'8px' }}>
                            <Icon type="FontAwesome" name="fa-university" size={42} />
                        </div>
                    </div>
                    <div style={{ width:'80%', paddingLeft:'15px' }}>
                        <div><h5><b>The Constitution of India</b></h5></div>
                        <div style={{ color:'#555' }}>24 Chapters | 184 Topics</div>
                        <div style={{ marginTop:'12px', fontSize:'12px' }}>
                            <span style={{ color:'#000', border:'1px solid #000', backgroundColor:'#eee', padding:'5px', borderRadius:'8px' }}>
                                <Icon type="FontAwesome" name="fa-clock-o" size={13} style={{ marginRight:'5px' }} />
                                Est. <b>220</b> Study Hours
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mtop10p">
                    {["CAPF", "CDS", "CGSE", "CMS", "CSE", "ESE", "IES/ISS", "IFoS", "NDA", "RT", "SCRA"]?.map((e,i)=>{
                       /* const colors= [{ dark:'#ec3d0e', light:'#ffd9d9' },
                                { dark:'#065fc5', light:'#dcecff' },
                                { dark:'#07850c', light:'#e0ffe1' },
                                { dark:'#451797', light:'#e2daf1' },
                                { dark:'#d37f03', light:'#ffe6c0' },
                                { dark:'#000', light:'#efefef' },
                                { dark:'#009688', light:'#dcfffc' }];
                        const index = i%colors?.length;
                        return (<div key={i} style={{ display:'inline-block', marginBottom:'5px', border:'1px solid '+colors[index]?.dark, borderRadius:'8px', color: colors[index]?.dark,
                            padding:'5px', backgroundColor:colors[index]?.light, fontSize:'11px', marginRight:'5px' }}><b>#{e}</b></div>);
                            */
                        return (<div key={i} style={{ display:'inline-block', marginBottom:'5px', border:'1px solid #000', borderRadius:'8px', color: '#000',
                            padding:'5px', backgroundColor:'#fff', fontSize:'11px', marginRight:'5px' }}><b>#{e}</b></div>);
                    })}
                </div>
                <div align="right" className="mtop5p">
                    <Button type="dark" size={12}>
                        <Icon type="FontAwesome" name="fa-play-circle" size={13} style={{ marginRight:'5px' }} />
                        <b>Start Learning</b>   
                    </Button>
                </div>
            </Card>
        {/* */}
        </Col>
        </Row>
    </div>
 </div>);
};
  export default SubjectsList;