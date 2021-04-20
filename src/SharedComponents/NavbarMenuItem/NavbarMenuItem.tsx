import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './NavbarMenuItem.scss'

interface NavbarMenuItemProps {
  children?: React.ReactNode
  title?: string
}

const NavbarMenuItem = (props: NavbarMenuItemProps) => {
  return (
    <div className="NavbarMenuItem d-flex align-items-center justify-content-between">
      <div className="NavbarMenuItem__icon">{props.children}</div>
      {props.title && (<div className="NavbarMenuItem__title">{props.title}</div>)}      
    </div>
  )
}

export default NavbarMenuItem
