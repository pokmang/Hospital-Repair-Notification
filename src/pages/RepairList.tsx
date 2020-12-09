import React from 'react'
import styled from 'styled-components';
import Topbar from '../components/Topbar';



const StyledWrapper = styled.div`

`
const RepairList = () => {
    return (
        <StyledWrapper>
            <Topbar title={"รายการแจ้งซ่อม"}/>
        </StyledWrapper>
    )
}

export default RepairList
