import { ChevronDownIcon } from '@heroicons/react/16/solid'
// import DatePicker from './DatePicker'
import { Datepicker } from "flowbite-react";
import BookingDatePicker from './DatePicker';
import { useForm,Controller} from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { createClient } from '../Services/addClients';
import toast from 'react-hot-toast';

export default function BookingData() {
  const {register,getValues,formState : {errors},handleSubmit,control,reset} = useForm()

  // const{mutate,isLoading} = useMutation({

  // })
   const { mutate, isLoading, isError, isSuccess } = useMutation({
    mutationFn: createClient,
    onSuccess: () => {
      toast.success('Booking submitted successfully! 🎉');
      reset();
    },
  });

  function handleformsubmission(data) {
    mutate(data);
  }
 

 


return (
     <form
     onSubmit={handleSubmit(handleformsubmission)}
      className="py-12 px-6 sm:px-12 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] rounded-2xl shadow-lg max-w-4xl mx-auto"> <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2> <p className="mt-1 text-sm text-gray-600">
Use a permanent address where you can receive mail. </p>

  <div className="mt-10 space-y-6">
    {/* First Name */}
    <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-2 sm:py-4">
      <label htmlFor="first-name" className="block text-sm font-medium text-gray-800">
        First name
      </label>
      <div className="sm:col-span-2">
        <input
          id="first-name"
          name="first-name"
          type="text"
          autoComplete="given-name"
          {...register('firstname',{required :'This field is required'})}
        
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
        />
      </div>
      {errors.firstname && (
  <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>
)}
    </div>

    {/* Last Name */}
    <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-2 sm:py-4">
      <label htmlFor="last-name" className="block text-sm font-medium text-gray-800">
        Last name
      </label>
      <div className="sm:col-span-2">
        <input
          id="last-name"
          name="last-name"
          type="text"
          autoComplete="family-name"
          {...register('lastname',{required : 'This field is required'})}
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
        />
      </div>
      {errors.lastname && (
  <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>
)}
    </div>

    {/* Email */}
    <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-2 sm:py-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-800">
        Email address
      </label>
      <div className="sm:col-span-2">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          {...register('email',{required : 'This field is required'})}
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:max-w-md sm:text-sm"
        />
      </div>
      {errors.email && (
  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
)}
    </div>

    {/* Phone number */}

      <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-2 sm:py-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-800">
        Phone Number
      </label>
      <div className="sm:col-span-2">
        <input
          id="tel"
          name="tel"
          type="tel"
          autoComplete="tel"
          {...register('phonenumber',{required :"This value is required"})}
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:max-w-md sm:text-sm"
        />
      </div>
      {errors.phonenumber && (
  <p className="text-red-500 text-sm mt-1">{errors.phonenumber.message}</p>
)}
    </div>

    {/* Country */}
    <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-2 sm:py-4">
      <label htmlFor="country" className="block text-sm font-medium text-gray-800">
        Preferred Stylist
      </label>
      <div className="sm:col-span-2 relative sm:max-w-xs">
        <select
          id="stylist"
          name="stylist"
          autoComplete="stylist-name"
          {...register('preferredstylist',{required :"This value is required"})}
          className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
        >
          <option>Jane</option>
          <option>Ivy</option>
          <option>Maria</option>
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-2.5 h-5 w-5 text-gray-400"
        />
      </div>
      {errors.preferredstylist && (
  <p className="text-red-500 text-sm mt-1">{errors.preferredstylist.message}</p>
)}
    </div>
        <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-2 sm:py-4">
      <label htmlFor="region" className="block text-sm font-medium text-gray-800">
        Booking Date
      </label>
    <Controller
  name="bookingDate"
  control={control} // from useForm
  defaultValue={null} // or new Date() if you want
  rules={{ required: "Booking date is required" }}
  render={({ field }) => (
    <BookingDatePicker
      selected={field.value}
      onChange={field.onChange}
    />
  )}
/>
{errors.bookingDate && (
  <p className="text-red-500 text-sm mt-1">{errors.bookingDate.message}</p>
)}



      {/* <div className="sm:col-span-2">
        <input
          id="region"
          name="region"
          type="text"
          autoComplete="address-level1"
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
        />
      </div> */}
    </div>
     <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="about" className="block text-sm/6 font-medium text-black sm:pt-1.5">
                Notes/Special Requests
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  {...register('notes')}
                  className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:max-w-2xl sm:text-sm/6"
                  defaultValue={''}
                />
                <p className="mt-3 text-sm/6 text-gray-400">Give more information</p>
              </div>
            </div>

    {/* Street Address */}
    {/* <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-2 sm:py-4">
      <label htmlFor="street-address" className="block text-sm font-medium text-gray-800">
        Street address
      </label>
      <div className="sm:col-span-2">
        <input
          id="street-address"
          name="street-address"
          type="text"
          autoComplete="street-address"
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:max-w-xl sm:text-sm"
        />
      </div>
    </div> */}

    {/* City */}
    {/* <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-2 sm:py-4">
      <label htmlFor="city" className="block text-sm font-medium text-gray-800">
        City
      </label>
      <div className="sm:col-span-2">
        <input
          id="city"
          name="city"
          type="text"
          autoComplete="address-level2"
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
        />
      </div>
    </div> */}

    {/* State / Province */}


    {/* Postal Code */}
    {/* <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-2 sm:py-4">
      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-800">
        ZIP / Postal code
      </label>
      <div className="sm:col-span-2">
        <input
          id="postal-code"
          name="postal-code"
          type="text"
          autoComplete="postal-code"
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
        />
      </div>
    </div> */}
  </div>

  {/* Buttons */}
  <div className="mt-10 flex items-center justify-end gap-x-6">
    <button type="button" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
      Cancel
    </button>
    <button
      type="submit"
      className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Submit
    </button>
  </div>
</form>


)
}
