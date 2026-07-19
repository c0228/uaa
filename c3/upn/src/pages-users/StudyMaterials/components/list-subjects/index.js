import React from "react";
import { ContainerFluid, Row, Col, Card, Icon, Badge, Button } from "e-ui-react";
import { useParams } from "react-router-dom";

const SubjectsList = ({ data }) =>{
 const { lang } = useParams();
 const sections = data && Object.keys(data);
 return (<div>
    {sections?.map((section,i1)=>{
        const label = data?.[section]?.[lang+"Label"];
        const icon = data?.[section]?.icon;
        const subjects = data?.[section]?.subjects;
        const subjectList = subjects && Object.keys(subjects);
        console.log("subjects: ", subjects);
        return (<div key={i1}>
        <div><h4><b>{label}</b></h4><hr/></div>
            <div className="mtop15p">
            <Row>
                {subjectList?.map((s,i2)=>{
                    const icon = subjects[s]?.icon;
                    const label = subjects[s]?.[lang+"Label"];
                    const chapters = subjects[s]?.chapters;
                    const topics = subjects[s]?.topics;
                    const studyHours = subjects[s]?.study_hours;
                    const tags = subjects[s]?.[lang+"Tags"];
                    return (<Col md={6}>
                {/* */}
                <Card padding={15} backgroundColor="#fffdfd" style={{ border:'1px solid #000'}}>
                <div style={{ display:'flex', flex:1 }}>
                    <div style={{ width:'20%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
                        <div align="center" style={{ border:'1px solid #000', padding:'15px', borderRadius:'8px' }}>
                            <Icon type="FontAwesome" name={icon} size={42} />
                        </div>
                    </div>
                    <div style={{ width:'80%', paddingLeft:'15px' }}>
                        <div><h5><b>{label}</b></h5></div>
                        <div style={{ color:'#555' }}>
                            {lang==='hi'?(<>{chapters} अध्याय | {topics} विषय</>):
                                (<>{chapters} Chapters | {topics} Topics</>)} 
                        </div>
                        <div style={{ marginTop:'12px', fontSize:'12px' }}>
                            <span style={{ color:'#000', border:'1px solid #000', backgroundColor:'#eee', padding:'5px', borderRadius:'8px' }}>
                                <Icon type="FontAwesome" name="fa-clock-o" size={13} style={{ marginRight:'5px' }} />
                                 {lang==='hi'?(<>अनुमानित. <b>{studyHours}</b> पढ़ाई के घंटे</>):(<>Est. <b>{studyHours}</b> Study Hours</>)}
                                
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mtop10p">
                    {tags?.map((e,i)=>{
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
                        <b>{lang==='hi'?'सीखना शुरू करें':'Start Learning'}</b>   
                    </Button>
                </div>
            </Card>
            {/* */}
            </Col>);
                })}
            </Row>
        </div>
        </div>);
    })}
 </div>);
};
  export default SubjectsList;