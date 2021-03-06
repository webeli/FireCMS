import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: ${props => props.theme.header.height};
	padding: ${props => props.theme.spacing.medium};
	background: #000;
	color: #FFF;
`

export default (props) => (
  <Header>
    <h1>FireCMS</h1>
    <span>Firebase Realtime Database Content Management System</span>
  </Header>
)