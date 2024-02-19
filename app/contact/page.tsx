'use client';
// import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// export const metadata = {
//   title: 'Contact',
//   description: 'contact next js',
// }

export default function Contact() {

  const steps = [{
    id: 'Step 1',
    name: 'Personal Info',
    fields: ['firstName', 'lastName', 'email']
  },
  {
    id: 'Step 2',
    name: 'Address',
    fields: ['country', 'state', 'city']
  },{
    id: 'Step 3',
    name: 'Complete',
    fields: []
  }]

  const [currStep, setCurrStep] = useState(0)

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: '',
    country: '',
    state: ''
  };
  const errorMessage = {
    firstName: "",
    lastName: "",
    email: '',    
    country: '',
    state: '',
    // city: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessages, setErrorMessages] = useState(errorMessage);

  const processForm = (e) =>{
    e.preventDefault()
    console.log('#ERR CC1 processForm',formData)
    // reset()
  }

  const handleNext = (e) =>{
    // e.preventDefault()
    if (currStep === steps.length - 1) {
      console.log('#ERR CC1 calling processForm')
      processForm(e)
      // return
    }
    else handleSubmit(e)
    // if(Object.keys(errorMessages).length === 0 && currStep < steps.length - 1) {
    //   console.log('#ERR CC1',currStep)
    //  setCurrStep(prev => prev + 1)
    // }
  }

  const handlePrev = (e) =>{
    e.preventDefault()
    currStep !== 0 && setCurrStep(prev => prev - 1)
  }


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = (formValues) => {
    let error = {
    //   firstName: "",
    // lastName: "",
    // email: '',
    // country: '',
    // state: ''
    };
    if (currStep === 0) {if (!formValues.firstName) {
      error.firstName = "Firstname is required";
    } else if (formValues.firstName.length < 3) {
      error.firstName = "Firstname should be minimum 3 characters.";
    } else {
      // error.firstName = "";
    }
    if (!formValues.lastName) {
      error.lastName = "lastNam is required";
    } else {
      // error.lastName = "";
    }
    if (!formValues.email) {
      error.email = "Email is required";
    } else {
      // error.email = "";
    }}
    
    if (currStep === 1) {if (!formValues.country) {
      error.country = "country is required";
    } else {
      // error.country = "";
    }
    if (!formValues.state) {
      error.state = "state is required";
    } else {
      // error.state = "";
    }
    if (!formValues.city) {
      error.city = "city is required";
    }  
  }
    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessages(validate(formData));
  };

  

  useEffect(() => {
    console.log('#ERR CC1',errorMessages)
     if(Object.keys(errorMessages).length === 0 && currStep < steps.length - 1) {
      console.log('#ERR CC1',currStep)
     setCurrStep(prev => prev + 1)
    }
  }, [errorMessages])
  

  return (
    <>
    <div>Contact page</div>    
    <nav aria-label='Progress' className='my-3.5'>
        <ol role='list' className='space-y-4 md:flex md:space-x-8 md:space-y-0'>
          {steps.map((step, index) => {
            // console.log('#ERR CC1',currStep,index, currStep >= index)
            return (
              <li key={step.name} className='md:flex-1'>
                   {currStep >= index ? <>
                    <div className='flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'
                  aria-current='step'>
                  <span className='text-xl font-medium text-sky-600'>
                    {step.id}
                  </span>
                  <span className='text-xl font-medium'>{step.name}</span>
                </div>
                   </> :  <div className='group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                  <span className='text-xl font-medium text-gray-500 transition-colors'>
                    {step.id}
                  </span>
                  <span className='text-xl font-medium'>{step.name}</span>
                </div>}
                </li>)})}
        </ol>
      </nav>
    <div className='contact-container'> 
    {/* <Image src="/bird-portrait.jpg" alt="BIRD" width="500" height="500"/> */}    
    <form className="w-full max-w-lg">
       <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <h2 className='text-base font-semibold leading-7 text-xl my-3.5'>
              {steps[currStep]?.name}
            </h2>            
               {steps[currStep]?.fields.length > 0 ? steps[currStep]?.fields.map((field,ind) => (
                <div key={field}>
                <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                        {field}
                </label>
                <input type="text" name={field} value={formData[field]}
                       placeholder={`Enter ${field}`} 
            // value={todo?.name}
                       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                       onChange={handleChange}/>
              {Object.keys(errorMessages).length > 0 && Object.keys(errorMessages).includes(field) && 
               <span className="text-red-500 text-lg italic">{errorMessages[field]}</span>}
              </div>)) : 
              <div>Thankyou for your information</div>}             
            </div>   
        </div>
          <div style={{marginTop: '30px'}}>
            <div className="inline-flex">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                      disabled={currStep === 0} onClick={handlePrev}>
                                    Prev
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                      onClick={handleNext}>
                        {currStep === steps?.length - 1 ? 'SUBMIT' : 'Next'}
              </button>
            </div>
          </div>
    </form>   
    </div>
  </>
  )
}
