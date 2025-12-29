import { Link } from "react-router-dom"

function CallToAction(){
    return (
         <div className="bg-[#923993] mt-4">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-wide text-white sm:text-5xl">
         Ready for your next look?
          <br />
          Check out our latest styles and book your spot today.
         
        </h2>
       
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <Link
            to="/booking"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            {' '}
            Book now{' '}
          </Link>
          <Link to="/gallery" className="text-sm/6 font-semibold text-gray-100">
            See our work
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
    )
}
export default CallToAction