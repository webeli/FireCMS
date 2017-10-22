import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: 60%;
  min-height: ${props => `calc(100vh - ${props.theme.header.height})`};
  padding: ${props => props.theme.spacing.medium};
`

export default (props) => (
  <Content>
    Content
  </Content>
)