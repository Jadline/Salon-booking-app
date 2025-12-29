
import ServicesTabs from './ServicesTabs'
const hairstyles = [
  {
    name: "Knotless Braids",
    description: "A protective hairstyle with natural-looking, lightweight braids that start with your own hair without knots.",
    duration: "6-8 hours",
    price: 12000, // price in KES
  },
  {
    name: "Passion Twists",
    description: "Soft, bohemian twists with a romantic vibe that are perfect for a casual or elegant look.",
    duration: "5-7 hours",
    price: 11000,
  },
  {
    name: "Box Braids",
    description: "Classic, versatile braids that can be styled in various ways, offering a low-maintenance protective style.",
    duration: "6-9 hours",
    price: 10000,
  },
  {
    name: "Cornrows",
    description: "Tightly braided style close to the scalp, perfect for intricate designs or traditional looks.",
    duration: "2-4 hours",
    price: 4000,
  },
  {
    name: "Faux Locs",
    description: "Imitation locs that give a natural dreadlock look without the long-term commitment.",
    duration: "5-8 hours",
    price: 13000,
  },
  {
    name: "Twist Out",
    description: "A natural hairstyle where twists are unraveled for defined, bouncy curls.",
    duration: "2-3 hours",
    price: 3000,
  },
  {
    name: "Senegalese Twists",
    description: "Sleek rope-like twists that offer a polished, long-lasting protective style.",
    duration: "6-8 hours",
    price: 12000,
  }
];

const makeupServices = [
  {
    name: "Bridal Makeup",
    description: "Full makeup for brides, including foundation, eye makeup, contouring, and lip color, designed to last all day.",
    duration: "2-3 hours",
    price: 15000, // price in KES
  },
  {
    name: "Party/Evening Makeup",
    description: "Glamorous makeup suitable for parties or evening events, emphasizing eyes and lips for a striking look.",
    duration: "1.5-2 hours",
    price: 8000,
  },
  {
    name: "Natural/Day Makeup",
    description: "Soft, minimalistic makeup for daytime or casual occasions, enhancing natural features.",
    duration: "1-1.5 hours",
    price: 5000,
  },
  {
    name: "Photoshoot Makeup",
    description: "Professional makeup tailored for photography, ensuring flawless skin, highlights, and long-lasting coverage.",
    duration: "1.5-2.5 hours",
    price: 10000,
  },
  {
    name: "Glam Makeup",
    description: "Bold and dramatic makeup with full contouring, smokey eyes, and statement lips for special occasions.",
    duration: "2 hours",
    price: 9000,
  },
  {
    name: "Makeup Lessons",
    description: "One-on-one session teaching makeup techniques, from foundation application to eye makeup artistry.",
    duration: "2 hours",
    price: 7000,
  },
  {
    name: "Airbrush Makeup",
    description: "High-definition, long-lasting airbrush makeup for a flawless finish, ideal for weddings and photoshoots.",
    duration: "1.5-2 hours",
    price: 12000,
  }
];

const massageServices = [
  {
    name: "Swedish Massage",
    description: "A gentle, relaxing full-body massage using smooth, gliding strokes to relieve tension and improve circulation.",
    duration: "60 minutes",
    price: 4000, // price in KES
  },
  {
    name: "Deep Tissue Massage",
    description: "Focused massage targeting deeper layers of muscles to relieve chronic pain, stiffness, and knots.",
    duration: "60-90 minutes",
    price: 6000,
  },
  {
    name: "Hot Stone Massage",
    description: "Relaxing massage using warm stones placed on key points of the body to ease tension and stress.",
    duration: "60-90 minutes",
    price: 6500,
  },
  {
    name: "Aromatherapy Massage",
    description: "Massage combined with essential oils to enhance relaxation, improve mood, and rejuvenate the senses.",
    duration: "60 minutes",
    price: 5000,
  },
  {
    name: "Reflexology",
    description: "Focused massage on feet and hands to stimulate pressure points, promoting overall wellness and balance.",
    duration: "45 minutes",
    price: 3500,
  },
  {
    name: "Sports Massage",
    description: "Targeted massage designed for athletes to prevent injuries, improve flexibility, and enhance performance.",
    duration: "60-75 minutes",
    price: 5500,
  },
  {
    name: "Couples Massage",
    description: "Relaxing massage for two people simultaneously in a shared room, ideal for bonding or special occasions.",
    duration: "60-90 minutes",
    price: 8000,
  }
];


const nailServices = [
  {
    name: "Classic Manicure",
    description: "Basic nail shaping, cuticle care, and polish application for neat and healthy nails.",
    duration: "45 minutes",
    price: 2000, // price in KES
  },
  {
    name: "Classic Pedicure",
    description: "Foot care including soaking, exfoliation, nail shaping, cuticle care, and polish application.",
    duration: "60 minutes",
    price: 2500,
  },
  {
    name: "Gel Manicure",
    description: "Long-lasting gel polish that stays chip-free for weeks, combined with nail shaping and cuticle care.",
    duration: "60 minutes",
    price: 3500,
  },
  {
    name: "Gel Pedicure",
    description: "Durable gel polish on toenails, including foot care and exfoliation for a polished look.",
    duration: "75 minutes",
    price: 4000,
  },
  {
    name: "Nail Art (Simple)",
    description: "Creative designs on nails, such as patterns, stripes, or small decorations for a fun, personalized look.",
    duration: "30-45 minutes",
    price: 1500,
  },
  {
    name: "Nail Art (Complex)",
    description: "Intricate designs including 3D decorations, hand-painted art, and unique styles for a standout manicure.",
    duration: "60-90 minutes",
    price: 3000,
  },
  {
    name: "Acrylic Nails",
    description: "Artificial nails applied for extra length and durability, customizable with polish or nail art.",
    duration: "90 minutes",
    price: 5000,
  },
  {
    name: "Dip Powder Nails",
    description: "Long-lasting colored nails using dip powder technique, lightweight and chip-resistant.",
    duration: "60-75 minutes",
    price: 4000,
  }
];


export default function OfferedServices({selectedService}) {
  let services = []
  if(selectedService === 'Hair Styling') services = hairstyles
  else if(selectedService === 'Make Up') services = makeupServices
  else if(selectedService === 'Spa Massage') services = massageServices
  else if(selectedService === 'Nail Art') services = nailServices
  

  return (
    <section >     
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300 text-white"
            >
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <p>{service.duration}</p>
              <span className="font-bold text-pink-300">ksh {service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

