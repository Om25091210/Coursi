import React, { useState } from "react";

const DetailsForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email: "",
    phone: "",
    college:"",
    start:"",
    end:"",
    consent:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      console.log('Form data submitted successfully');
      const response = await fetch('https://script.google.com/macros/s/AKfycbzz9_GJFH_3XNUQkqnGDN9uTfPMbIcoT6oq3VFV2tVmPlOJWJQpAG9x4rzf4HNKNAQ/exec', {
        redirect: "follow",  
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('Form data submitted successfully');
      } else {
        // Handle error, e.g., show an error message
        console.error('Error submitting form data');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Network error:', error);
    }
  };

  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
            <div className="sm:col-span-12">
              <h2 className="text-lg font-body text-gray-800 dark:text-gray-200">
                Submit your application
              </h2>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-full-name"
                className="inline-block text-sm font-body text-gray-500 mt-2.5"
              >
                Full name
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <input
                  id="af-submit-application-first-name"
                  type="text"
                  name="firstName"
                  value={formData.firstName} // Bind the 'value' to the state
                  onChange={handleInputChange}
                  className="py-2 px-3 pr-11 block w-full border border-gray-300 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
                <input
                  id="af-submit-application-last-name"
                  type="text"
                  name="lastName"
                  value={formData.lastName} // Bind the 'value' to the state
                  onChange={handleInputChange}
                  className="py-2 px-3 pr-11 block w-full border border-gray-300 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-email"
                className="inline-block text-sm font-body text-gray-500 mt-2.5"
              >
                Email
              </label>
            </div>

            <div className="sm:col-span-9">
              <input
                id="af-submit-application-email"
                type="email"
                name="email"
                value={formData.email} // Bind the 'value' to the state
                onChange={handleInputChange}
                className="py-2 px-3 pr-11 block w-full border border-gray-300 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              />
            </div>

            <div className="sm:col-span-3">
              <div className="inline-block">
                <label
                  htmlFor="af-submit-application-phone"
                  className="inline-block text-sm font-body text-gray-500 mt-2.5"
                >
                  Phone
                </label>
              </div>
            </div>

            <div className="sm:col-span-9">
              <input
                id="af-submit-application-phone"
                type="text"
                name="phone"
                value={formData.phone} // Bind the 'value' to the state
                onChange={handleInputChange}
                className="py-2 px-3 pr-11 block w-full border border-gray-300 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              />
            </div>

            <div className="sm:col-span-3">
              <div className="inline-block">
                <label
                  htmlFor="af-submit-application-current-company"
                  className="inline-block text-sm font-body text-gray-500 mt-2.5"
                >
                  College Institute
                </label>
              </div>
            </div>

            <div className="sm:col-span-9">
              <input
                id="af-submit-application-current-company"
                type="text"
                name="college"
                value={formData.college} // Bind the 'value' to the state
                onChange={handleInputChange}
                className="py-2 px-3 pr-11 block w-full border border-gray-300 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
            <div className="sm:col-span-12">
              <h2 className="text-lg font-body text-gray-800 dark:text-gray-200">
                Before sending your application, please let us know...
              </h2>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-desired-salary"
                className="inline-block text-sm font-body text-gray-500 mt-2.5"
              >
                Start-Date
              </label>
            </div>

            <div className="sm:col-span-9">
              <input
                id="af-submit-application-desired-salary"
                type="text"
                name="start"
                value={formData.start} // Bind the 'value' to the state
                onChange={handleInputChange}
                className="py-2 px-3 pr-11 block w-full border border-gray-300 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-available-start-date"
                className="inline-block text-sm font-body text-gray-500 mt-2.5"
              >
                End-Date
              </label>
            </div>

            <div className="sm:col-span-9">
              <input
                id="af-submit-application-available-start-date"
                type="text"
                name="end"
                value={formData.end} // Bind the 'value' to the state
                onChange={handleInputChange}
                className="py-2 px-3 pr-11 block w-full border border-gray-300 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              />
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-body text-gray-800 dark:text-gray-200">
              Submit application
            </h2>
            <p className="mt-3 text-sm text-gray-600 font-body dark:text-gray-400">
              In order to contact you with future jobs that you may be
              interested in, we need to store your personal data.
            </p>
            <p className="mt-2 text-sm text-gray-600 font-body dark:text-gray-400">
              If you are happy for us to do so please click the checkbox below.
            </p>

            <div className="mt-5 flex">
              <input
                type="checkbox"
                value={formData.consent} // Bind the 'value' to the state
                onChange={handleInputChange}
                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="af-submit-application-privacy-check"
              />
              <label
                htmlFor="af-submit-application-privacy-check"
                className="text-sm text-gray-500 ml-2 font-body dark:text-gray-400"
              >
                Allow us to process your personal information.
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="py-3 px-4 w-full  inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-body bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          >
            Submit application
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailsForm;
