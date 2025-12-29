// function MapSection() {
//   return (
//     <div className="w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">
//       <iframe
//         title="Salon Location"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.862156880309!2d36.82194631475338!3d-1.292065999055785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173a05b23a5b%3A0x9a0c1a7eeb8f30a1!2sNairobi!5e0!3m2!1sen!2ske!4v1700000000000"
//         className="w-full h-full border-0"
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       ></iframe>
//     </div>
//   );
// }

// export default MapSection;

export default function MapSection() {
  return (
    <div className="w-full h-[35rem] mt-20">
      <iframe
        title="Salon Location"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.862156880309!2d36.82194631475338!3d-1.292065999055785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173a05b23a5b%3A0x9a0c1a7eeb8f30a1!2sNairobi!5e0!3m2!1sen!2ske!4v1700000000000"
        className="w-full h-full border-0 rounded-none lg:rounded-l-2xl"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

