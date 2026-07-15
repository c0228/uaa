import React from "react";
import { useParams } from "react-router-dom";
import { Card, Icon } from "e-ui-react";
import { AppColors } from "@Utils/AppColorManager.js"; 

const DykData = {
  "title":{
    "en": "Fact You Should Know!",
    "hi": "क्या आप जानते हैं?"
  },
  "data":[{
    "en": (<i>
        <div align="center">
            <span style={{ padding:'5px', border:'1px solid #000' }}><b>We need to change this System</b></span>
        </div>
        <div className="mtop15p">America is the <b>richest country</b> in the world. But American schools <b>issue books to students</b> in the beginning 
        of the Year and the students <b>return the books</b> to the schools <b>after exams,</b> so that <b>other Students</b> can use them.</div> 
        <div className="mtop15p">But in <b>India,</b> many <b>poor and middle class students</b> are forced to 
        spend <b>huge money on books every year</b> and they <b>sell their books in garbage</b> to scrap dealers <b>after their exams.</b></div>
        <div className="mtop15p"><b>Crores of Rupees</b> are spent, <b>countless trees</b> are cut to make 
        papers and <b>brokers get benefits</b>.</div> 
        </i>),
    "hi": (<i>
        <div align="center">
            <span style={{ padding:'5px', border:'1px solid #000' }}><b>हमें इस सिस्टम को बदलने की ज़रूरत है।</b></span>
        </div>
        <div className="mtop15p">अमेरिका दुनिया का <b>सबसे अमीर देश</b> है। लेकिन वहाँ के स्कूलों में <b>छात्रों को</b> साल की शुरुआत में <b>किताबें दी जाती हैं</b> और <b>परीक्षा
             के बाद</b> छात्र उन्हें <b>स्कूल में लौटा देते हैं,</b> ताकि <b>दूसरे छात्र उनका इस्तेमाल कर सकें।</b></div> 
        <div className="mtop15p">लेकिन <b>भारत में,</b> कई <b>गरीब और मध्यम वर्ग के छात्रों</b> को हर साल <b>किताबों पर बहुत सारा पैसा खर्च करना पड़ता है</b> और परीक्षा 
            के बाद वे अपनी <b>किताबें कबाड़ वालों को बेच देते हैं।</b></div>
        <div className="mtop15p">कागज़ बनाने के लिए <b>करोड़ों रुपये</b> खर्च किए जाते हैं और <b>अनगिनत पेड़</b> काटे जाते हैं, जिससे <b>दलालों को फ़ायदा होता</b> है।</div> 
        </i>)
}]
};
export const DykTip = () =>{ // Do you know - Tips
 const { lang } = useParams();
 return (<div className="mtop15p">
  <div><h2 className="fw-bold">
        <Icon type="FontAwesome" name="fa-lightbulb-o" size={20} style={{ marginRight:'8px' }} />
        {DykData?.title?.[lang]}</h2><hr/></div>
  <div className="mtop15p">
    <Card padding={15} backgroundColor={AppColors?.["primary"]?.["bg-light"]}>
        <div>{DykData?.data?.[0]?.[lang]}</div>    
    </Card>
  </div>
 </div>);
};