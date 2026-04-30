import React from 'react'
import { createRoot } from 'react-dom/client'
import InquiryForm from './InquiryForm'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InquiryForm />
  </React.StrictMode>
)
