import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ReactDatePicker from 'react-datepicker'
import pt from 'date-fns/locale/pt'
import { useField } from '@rocketseat/unform'
import 'react-datepicker/dist/react-datepicker.css'

export default function DatePicker({ name, placeholder }) {
  const ref = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)
  const [selected, setSelected] = useState(defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear()
      },
    })
  }, [ref.current, fieldName]); // eslint-disable-line
  return (
    <>
      <ReactDatePicker
        locale={pt}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="dd/MM/yyyy  HH:mm"
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        placeholderText={placeholder}
      />
      {error && <span>{error}</span>}
    </>
  )
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}
