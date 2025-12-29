import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import MapSection from "./MapSection";

export default function ContactSection() {
  return (
    <div className="relative isolate mt-4 mb-8 rounded-2xl">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE - Contact Info */}
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              Get in touch
            </h2>
            <p className="mt-6 text-lg text-black-400">
              Have questions, bookings, or just want to say hello? Reach out to us
              — we’d love to hear from you.
            </p>

            <dl className="mt-10 space-y-4 text-base text-black-300">
              <div className="flex gap-x-4">
                <BuildingOffice2Icon className="h-7 w-6 text-black-400" />
                <dd>
                  545 Mavis Island
                  <br />
                  Nairobi, KE 99191
                </dd>
              </div>
              <div className="flex gap-x-4">
                <PhoneIcon className="h-7 w-6 text-black-400" />
                <dd>
                  <a href="tel:+1 (555) 234-5678" className="hover:text-white">
                    +254791061920
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <EnvelopeIcon className="h-7 w-6 text-black-400" />
                <dd>
                  <a href="mailto:hello@example.com" className="hover:text-white">
                    njerijadline@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* RIGHT SIDE - Map */}
        <div className="h-[500px] lg:h-auto w-full">
          <MapSection />
        </div>
      </div>
    </div>
  );
}
