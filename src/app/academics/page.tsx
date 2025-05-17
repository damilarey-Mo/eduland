import Layout from "@/components/layout/Layout";
import { BookOpen, Users, Brain, Award, Globe, Rocket } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    name: "Elementary School (K-5)",
    description: "A strong foundation in reading, writing, mathematics, science, and social studies with a focus on developing curiosity and love for learning.",
    icon: BookOpen,
    href: "/academics/elementary",
  },
  {
    name: "Middle School (6-8)",
    description: "A rigorous curriculum designed to develop critical thinking skills, responsibility, and self-awareness during these formative years.",
    icon: Brain,
    href: "/academics/middle-school",
  },
  {
    name: "High School (9-12)",
    description: "College preparatory curriculum with advanced courses, AP and honors options, and extensive electives to prepare students for higher education.",
    icon: Award,
    href: "/academics/high-school",
  },
  {
    name: "STEM Program",
    description: "Innovative courses in science, technology, engineering, and mathematics with hands-on projects and real-world applications.",
    icon: Rocket,
    href: "/academics/stem",
  },
  {
    name: "Arts Program",
    description: "Comprehensive visual and performing arts education fostering creativity, self-expression, and appreciation for diverse art forms.",
    icon: Users,
    href: "/academics/arts",
  },
  {
    name: "Global Studies",
    description: "Courses and programs focused on developing global awareness, cultural competence, and foreign language proficiency.",
    icon: Globe,
    href: "/academics/global-studies",
  },
];

export default function AcademicsPage() {
  return (
    <Layout>
      <div className="bg-primary-700 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
              Academics
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Our comprehensive academic programs are designed to challenge, inspire, and prepare students for success.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Academic Excellence
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At EduLand, we offer a comprehensive, challenging curriculum that encourages critical thinking, problem-solving, and a lifelong love of learning. Our academic programs are designed to meet the diverse needs and interests of our students while preparing them for future success.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {programs.map((program) => (
                <div key={program.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                    <program.icon
                      className="h-6 w-6 flex-none text-primary-600"
                      aria-hidden="true"
                    />
                    {program.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{program.description}</p>
                    <p className="mt-6">
                      <Link
                        href={program.href}
                        className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Our Approach to Education
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our educational philosophy combines academic rigor with innovative teaching methods to create engaging learning experiences.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Student-Centered Learning</h3>
              <p className="mt-4">
                We recognize that each student has unique strengths, interests, and learning styles. Our teachers utilize differentiated instruction to ensure that all students are appropriately challenged and supported in their learning journey.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Technology Integration</h3>
              <p className="mt-4">
                Technology is thoughtfully integrated throughout our curriculum to enhance learning, develop digital literacy, and prepare students for an increasingly digital world.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Project-Based Learning</h3>
              <p className="mt-4">
                Students engage in meaningful projects that require critical thinking, collaboration, and creativity, allowing them to apply their knowledge to real-world situations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Global Perspective</h3>
              <p className="mt-4">
                Our curriculum incorporates global perspectives, encouraging students to understand diverse cultures, think critically about global issues, and develop as responsible global citizens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 