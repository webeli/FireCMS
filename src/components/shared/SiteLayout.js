import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default () => (
  <div>
    <Wrapper>
      <Header />      
      <Sidebar />
      <Content />
    </Wrapper>
  </div>
)