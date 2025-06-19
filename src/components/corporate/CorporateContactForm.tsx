import React from 'react'
import HoneyBookForm from '@/components/HoneyBookForm'

const CorporateContactForm: React.FC = () => (
  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 md:p-8">
    <h2 className="font-header mb-6 text-center">
      Corporate Event Inquiry
    </h2>
    <p className="text-gray-600 mb-8 text-center font-body">
      Tell us a bit about your event and our team will be in touch shortly.
    </p>
    <HoneyBookForm placementId="7" />
  </div>
)

export default CorporateContactForm
