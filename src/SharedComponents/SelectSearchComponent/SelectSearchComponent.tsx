import React, { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import SelectSearch, { fuzzySearch, SelectSearchOption } from 'react-select-search'
import './SelectSearchComponent.scss'

interface SelectSearchComponentProps {
  options: SelectSearchOption[]
  emptyMessage?: string
  value?: string

  title: string
  controlChangeHandler: (value: string) => void
}

const SelectSearchComponent = (props: SelectSearchComponentProps) => {
  // useEffect(() => {
  //   console.log(props.options)
  // }, [])

  return (
    <Container fluid className="SelectSearchComponent">
      <Form.Label>{props.title}</Form.Label>
      <SelectSearch
        options={props.options}
        emptyMessage={props.emptyMessage ? props.emptyMessage : 'нет записей'}
        search={true}
        value={props.value && props.value}
        filterOptions={fuzzySearch}
        onChange={(value) => props.controlChangeHandler(value.toString())}
      />
    </Container>
  )
}

export default SelectSearchComponent
