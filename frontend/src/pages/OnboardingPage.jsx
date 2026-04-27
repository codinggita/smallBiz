import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaCheckCircle } from 'react-icons/fa';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      industry: '',
      teamSize: '',
      primaryGoal: '',
    },
    validationSchema: Yup.object({
      industry: Yup.string().required('Please select your industry'),
      teamSize: Yup.string().required('Please select your team size'),
      primaryGoal: Yup.string().required('Please select your primary goal'),
    }),
    onSubmit: (values) => {
      console.log('Onboarding Complete:', values);
      navigate('/dashboard');
    },
  });

  const nextStep = async () => {
    const fieldsToValidate = step === 1 ? ['industry'] : step === 2 ? ['teamSize'] : ['primaryGoal'];
    const errors = await formik.validateForm();
    
    let hasError = false;
    fieldsToValidate.forEach(field => {
      formik.setFieldTouched(field, true);
      if (errors[field]) {
        hasError = true;
      }
    });

    if (!hasError) {
      if (step < 3) setStep(step + 1);
      else formik.handleSubmit();
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <FaCheckCircle className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to SmallBiz!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Let's get your workspace set up in a few simple steps.
          </p>
        </div>
        
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${step >= item ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 text-gray-500'} font-semibold text-sm transition-all`}>
                    {item}
                  </div>
                  {item < 3 && (
                    <div className={`w-20 h-1 mx-2 rounded transition-all ${step > item ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span className={step >= 1 ? 'font-medium text-blue-600' : ''}>Industry</span>
              <span className={step >= 2 ? 'font-medium text-blue-600' : ''}>Team Size</span>
              <span className={step >= 3 ? 'font-medium text-blue-600' : ''}>Goals</span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {step === 1 && (
              <div className="animate-fade-in-up">
                <label className="block text-lg font-medium text-gray-900 mb-4 text-center">
                  What industry are you in?
                </label>
                <div className="space-y-3">
                  {['Retail', 'Services', 'Manufacturing', 'Technology', 'Other'].map((ind) => (
                    <label key={ind} className={`block border rounded-lg p-4 cursor-pointer transition-colors ${formik.values.industry === ind ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <input
                        type="radio"
                        name="industry"
                        value={ind}
                        onChange={formik.handleChange}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${formik.values.industry === ind ? 'text-blue-700' : 'text-gray-900'}`}>{ind}</span>
                        {formik.values.industry === ind && <FaCheckCircle className="text-blue-600" />}
                      </div>
                    </label>
                  ))}
                </div>
                {formik.touched.industry && formik.errors.industry ? (
                  <div className="text-red-500 text-sm mt-2 text-center">{formik.errors.industry}</div>
                ) : null}
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in-up">
                <label className="block text-lg font-medium text-gray-900 mb-4 text-center">
                  How many people work at your company?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Just me', '2-5', '6-10', '11-25', '26-50', '50+'].map((size) => (
                    <label key={size} className={`block border rounded-lg p-4 cursor-pointer transition-colors text-center ${formik.values.teamSize === size ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <input
                        type="radio"
                        name="teamSize"
                        value={size}
                        onChange={formik.handleChange}
                        className="sr-only"
                      />
                      <span className={`font-medium ${formik.values.teamSize === size ? 'text-blue-700' : 'text-gray-900'}`}>{size}</span>
                    </label>
                  ))}
                </div>
                {formik.touched.teamSize && formik.errors.teamSize ? (
                  <div className="text-red-500 text-sm mt-2 text-center">{formik.errors.teamSize}</div>
                ) : null}
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in-up">
                <label className="block text-lg font-medium text-gray-900 mb-4 text-center">
                  What's your primary goal?
                </label>
                <div className="space-y-3">
                  {[
                    'Manage customer messages on WhatsApp',
                    'Track sales and invoices',
                    'Automate marketing campaigns',
                    'Just exploring'
                  ].map((goal) => (
                    <label key={goal} className={`block border rounded-lg p-4 cursor-pointer transition-colors ${formik.values.primaryGoal === goal ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <input
                        type="radio"
                        name="primaryGoal"
                        value={goal}
                        onChange={formik.handleChange}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${formik.values.primaryGoal === goal ? 'text-blue-700' : 'text-gray-900'}`}>{goal}</span>
                        {formik.values.primaryGoal === goal && <FaCheckCircle className="text-blue-600" />}
                      </div>
                    </label>
                  ))}
                </div>
                {formik.touched.primaryGoal && formik.errors.primaryGoal ? (
                  <div className="text-red-500 text-sm mt-2 text-center">{formik.errors.primaryGoal}</div>
                ) : null}
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Back
                </button>
              ) : <div></div>}
              <button
                type="button"
                onClick={nextStep}
                className="py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                {step === 3 ? 'Go to Dashboard' : 'Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
