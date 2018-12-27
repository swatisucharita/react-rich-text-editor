import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
    text-decoration: underline;
`
const UnderlineMark = (props) => {
    return (
        <StyledSpan>{props.children}</StyledSpan>
    )
}

export default UnderlineMark;
