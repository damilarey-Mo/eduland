import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout>
      <div className="bg-primary-700 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              We'd love to hear from you. Reach out with any questions about admissions, programs, or campus visits.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-display">Get in touch</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Have questions about our programs, admissions process, or anything else? Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <form className="mt-10 space-y-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-display">Contact information</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Visit our campus or reach out directly using the information below. We look forward to hearing from you!
              </p>
              
              <dl className="mt-10 space-y-6 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <MapPin className="h-7 w-6 text-primary-600" aria-hidden="true" />
                  </dt>
                  <dd>
                    123 Education Street<br />
                    Knowledge City, KN 12345<br />
                    United States
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <Phone className="h-7 w-6 text-primary-600" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-primary-600" href="tel:+1-555-123-4567">
                      +1 (555) 665-4567
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <Mail className="h-7 w-6 text-primary-600" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-primary-600" href="mailto:info@eduland.edu">
                      info@eduland.edu
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Hours</span>
                    <Clock className="h-7 w-6 text-primary-600" aria-hidden="true" />
                  </dt>
                  <dd>
                    <strong>Office Hours:</strong><br />
                    Monday to Friday: 8:00 AM - 4:30 PM<br />
                    Weekends: Closed
                  </dd>
                </div>
              </dl>
              
              <div className="mt-10 rounded-lg overflow-hidden h-80 bg-gray-100">
                {/* Map placeholder - in a real project, you would integrate with Google Maps or similar */}
                <div className="h-full w-full flex items-center justify-center bg-gray-200">
                  <p className="text-gray-500 font-semibold">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 