import React from 'react'
import { createRoot } from 'react-dom/client'
import InquiryForm from './InquiryForm'
import config from './config'
import './styles.css'

document.title = config.pageTitle

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InquiryForm />
  </React.StrictMode>
)
