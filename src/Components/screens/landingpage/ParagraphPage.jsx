import React from 'react'
import styled from 'styled-components';


function ParagraphPage() {
  return (
    <>
        <FindTrendContainer>
            <FindtrendWrapper>
                <FindContent>
                Findtrend helps youto increase your<br/> productivity and reduce your computer's<br/>
                    memory load,<GreyText> an application that can <br/> fullfill your daily browsing needs.</GreyText> 
                </FindContent>
            </FindtrendWrapper>
        </FindTrendContainer>
    </>
  )
}

export default ParagraphPage;

const FindTrendContainer = styled.div`

`;
const FindtrendWrapper = styled.div`

`;const FindContent  = styled.h4`
    text-align: center;
    font-size: 50px;
`;
const GreyText = styled.span`
  color: #60625D;
`;