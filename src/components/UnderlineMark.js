import React from 'react'
import styled from 'styled-components'

const styledSpan = styled.span `
    textDecoration: 'underline
`
const UnderlineMark = (props) => {
    return (
        <styledSpan>{props.children}</styledSpan>
    )
}

export default UnderlineMark;
