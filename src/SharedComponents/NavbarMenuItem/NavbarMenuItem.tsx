import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './NavbarMenuItem.scss'

interface NavbarMenuItemProps {
  children?: React.ReactNode
  title?: string
  commandName?: string
  clickHandler?: (commandName: string | null) => void
}

const NavbarMenuItem = (props: NavbarMenuItemProps) => {
  return (
    <div
      className="NavbarMenuItem d-flex align-items-center justify-content-start"
      onClick={() =>
        props.clickHandler
          ? props.commandName
            ? props.clickHandler(props.commandName)
            : props.clickHandler(null)
          : null
      }
    >
      <div className="NavbarMenuItem__icon">{props.children}</div>
      {props.title && <div className="NavbarMenuItem__title">{props.title}</div>}
    </div>
  )
}

export default NavbarMenuItem
