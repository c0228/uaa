import React from "react";

const PollPreviewTitleHeader = ()=>{
  const [toggleFlowToPreview, setToggleFlowToPreview] = useState('FLOW_MODE');
    return (<div className="list-group-item">
        <div className="createArticle-pollPreview-headerSection">
        <div className="createArticle-pollPreview-headerSection-rightSide">
            {toggleFlowToPreview==='FLOW_MODE' && (<>
                <div className="createArticle-pollPreview-headerSection-title"><b>Question Flow Preview 
                    <span className="createArticle-pollPreview-headerSection-badge">Auto-generated</span></b>
                </div>
                <div className="createArticle-pollPreview-headerSection-subTitle">
                    Live map of how respondents move through your questions based on their answers.
                </div>
            </>)}
            {toggleFlowToPreview==='PREVIEW_MODE' && (<>
                <div className="createArticle-pollPreview-headerSection-title"><b>Respondent View 
                    <span className="createArticle-pollPreview-headerSection-badge">Poll Preview</span></b>
                </div>
                <div className="createArticle-pollPreview-headerSection-subTitle">
                    Live preview of how users respond to your questions based on their answers
                </div>
            </>)}
        </div>
        <div align="right" className="createArticle-pollPreview-headerSection-leftSide">
            {toggleFlowToPreview==='FLOW_MODE' && (<>
            <Button type="primary" size={11} onClick={()=>setToggleFlowToPreview('PREVIEW_MODE')}><b>
                <Icon type="FontAwesome" name="fa-eye" size={10} className="marginRight5p" />
                 Preview Poll</b>
            </Button>
            </>)}
            {toggleFlowToPreview==='PREVIEW_MODE' && (<>
            <Button type="primary" size={11} onClick={()=>setToggleFlowToPreview('FLOW_MODE')}><b>
                <Icon type="FontAwesome" name="fa-eye" size={10} className="marginRight5p" />
                  Flow Preview</b>
            </Button>
            </>)}
        </div>
    </div>
  </div>);
 };

 export default PollPreviewTitleHeader;