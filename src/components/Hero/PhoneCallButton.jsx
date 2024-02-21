import React from 'react'

const PhoneCallButton = ({phoneNumber}) => {

    const handleMakePhoneCall = () => {
        window.open(`tel:+91${phoneNumber}`)
    }


  return (
    <div onClick={handleMakePhoneCall} className='transition-transform transform hover:scale-150 bg-red-900 rounded-md text-white cursor-pointer p-2' >
        Call Us
    </div>
  )
}

export default PhoneCallButton