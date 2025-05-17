import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    id: '01',
    name: 'Inquiry',
    description: 'Fill out our online inquiry form to express your interest and provide basic information about your child.',
  },
  {
    id: '02',
    name: 'Campus Tour',
    description: 'Schedule a visit to tour our campus, meet faculty, and get a feel for our learning environment.',
  },
  {
    id: '03',
    name: 'Application',
    description: 'Complete the formal application with all required documentation and pay the application fee.',
  },
  {
    id: '04',
    name: 'Assessment',
    description: 'Students participate in academic assessments and interviews appropriate for their grade level.',
  },
  {
    id: '05',
    name: 'Decision',
    description: "Admissions decisions are made based on the student's assessment, interview, and space availability.",
  },
  {
    id: '06',
    name: 'Enrollment',
    description: "Upon acceptance, complete the enrollment contract and make the enrollment deposit to secure your child's place.",
  },
];

export default function AdmissionsPage() {
  return (
    <Layout>
      <div className="bg-primary-700 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
              Admissions
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              We welcome students who are eager to learn, ready to contribute to our community, and prepared to meet our academic standards.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Admissions Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our admissions process is designed to identify students who will thrive in our educational environment and contribute positively to our school community.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
            <ol className="space-y-10 lg:flex lg:space-y-0 lg:space-x-8">
              {steps.map((step) => (
                <li key={step.id} className="lg:flex-1">
                  <div className="flex flex-col border-l-4 border-primary-600 pl-6 lg:border-l-0 lg:border-t-4 lg:pb-0 lg:pl-0 lg:pt-6">
                    <span className="text-sm font-medium text-primary-600">Step {step.id}</span>
                    <span className="text-xl font-semibold text-gray-900">{step.name}</span>
                    <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
                Tuition & Financial Aid
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are committed to making an EduLand education accessible to qualified students from diverse socioeconomic backgrounds.
              </p>
              
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Need-based financial aid</strong> is available for families who demonstrate financial need.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Merit scholarships</strong> are awarded to exceptional students based on academic achievement.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Payment plans</strong> are available to help families manage tuition payments.
                  </span>
                </li>
              </ul>
              
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/admissions/tuition"
                  className="rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  View Tuition Rates
                </Link>
                <Link
                  href="/admissions/financial-aid"
                  className="text-base font-semibold leading-6 text-primary-600 hover:text-primary-500"
                >
                  Learn about Financial Aid <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 font-display">Ready to Apply?</h3>
              <p className="mt-4 text-lg text-gray-600">
                We're excited that you're considering EduLand for your child's education. Our admissions team is here to guide you through each step of the process.
              </p>
              
              <div className="mt-6 space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-base font-semibold text-gray-900">Application Deadlines</h4>
                  <dl className="mt-4 space-y-4 text-sm">
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-900">Early Decision</dt>
                      <dd>December 15</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-900">Regular Decision</dt>
                      <dd>February 1</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-900">Rolling Admissions</dt>
                      <dd>As space permits</dd>
                    </div>
                  </dl>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/admissions/apply"
                    className="flex-1 rounded-md bg-primary-600 px-4 py-3 text-base font-semibold text-white text-center shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Apply Now
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 rounded-md bg-white px-4 py-3 text-base font-semibold text-gray-900 text-center shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Contact Admissions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 