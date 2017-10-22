import React from 'react'
import styled from 'styled-components'

const Sidebar = styled.div`
  width: 40%;
  min-height: ${props => `calc(100vh - ${props.theme.header.height})`};
  padding: ${props => props.theme.spacing.medium};
`

export default (props) => (
  <Sidebar>
    Sidebar
  </Sidebar>
)