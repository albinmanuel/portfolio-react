import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';

function Contact() {
  return (
    <div>
        <div className='row m-4'>
          <div className='col-6  shadow mt-5'>
             <img src="https://cdn.pixabay.com/photo/2016/05/31/10/52/contact-us-1426589_1280.png" alt="" height={'600px'} />
          </div>
          <div className='col-6 mt-5'>
            <form className='p-5 text-center shadow'>
               <h3 className='mt-5 mb-5'>Type Here</h3>
               <MDBInput label="Name" id="form3" type="text" className='mb-3' />
               <MDBInput label="Phone Number" id="form4" type="text" className='mb-3' />
               <MDBInput label="Email" id="form1" type="text" className='mb-3' />
               <MDBInput
    wrapperClass='mb-4'
    id='form4Example3'
    label='Message'
    style={{ minHeight: '180px' }}
  />
               
               <button className='btn btn-primary'>Send</button>
               
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact