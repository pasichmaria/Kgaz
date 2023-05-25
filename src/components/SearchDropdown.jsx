import React, { useState } from 'react'
import { Document, Input, Label } from './base/'

export const SearchDropdown = ({ acts, formik }) => {
  const [selectedDocument, setSelectedDocument] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (event) => {
    const value = event.target.value
    setSearchTerm(value)
    setSelectedDocument(
      acts.find((act) => act.actNumber.toLowerCase() === value.toLowerCase())
    )
    formik.setFieldValue('selectedDoc', value) // Update the formik field value
  }

  return (
    <div>
      <Label className='block font-medium text-gray-500'>Виберіть документ</Label>
      <Input
        id='selectedDoc'
        name='selectedDoc'
        type='text'
        placeholder='Пошук...'
        value={searchTerm}
        onChange={handleInputChange}
        list='Акти'
        onBlur={formik.handleBlur} />

      <datalist id='Акти'>
        {acts.map((act) => (
          <option key={act.actNumber} value={act.actNumber} />
        ))}
      </datalist>
      <div className='mt-4'>
        {selectedDocument && <Document act={selectedDocument} />}
      </div>
      <Input
        rounded='lg'
        size='lg'
        type='hidden'
        name='documentLink'
        value={selectedDocument?.link || ''}
      />
    </div>
  )
}
