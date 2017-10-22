import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: ${props => `calc(${props.theme.content.width} - (${props.theme.spacing.medium} * 2))`};
  min-height: ${props => `calc(100vh - ${props.theme.header.height} - (${props.theme.spacing.medium} * 4))`};
  padding: ${props => props.theme.spacing.medium};
  box-shadow: inset 0px 0px 1px #CCC;
`

export default (props) => (
  <Content>
    Content
  </Content>
)