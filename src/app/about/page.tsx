import Layout from "@/components/layout/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-primary-700 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
              About EduLand
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Empowering students to excel in academics, character, and leadership
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Our Story
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Founded in 1999, EduLand began with a vision to create an educational institution that not only focuses on academic excellence but also nurtures character development and leadership skills. What started as a small school with just 50 students has grown into a premier educational institution serving over 1,500 students from kindergarten through high school.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Over the years, we have continuously evolved our curriculum and teaching methodologies to stay at the forefront of educational innovation while maintaining our core values of integrity, excellence, and community.
            </p>
            
            <h2 className="mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At EduLand, our mission is to provide a nurturing and stimulating environment where students develop a lifelong love of learning, critical thinking skills, and the confidence to pursue their dreams. We are committed to educating the whole child—intellectually, physically, socially, and emotionally—and preparing them to be responsible global citizens.
            </p>
            
            <h2 className="mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Our Vision
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our vision is to be recognized as a leading educational institution that inspires and empowers students to reach their full potential and make meaningful contributions to society. We strive to create an inclusive community where diversity is celebrated and every student feels valued and supported.
            </p>
            
            <h2 className="mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Core Values
            </h2>
            <ul className="mt-6 text-lg leading-8 text-gray-600 list-disc list-inside space-y-3">
              <li><strong>Excellence:</strong> We strive for excellence in all aspects of education and personal development.</li>
              <li><strong>Integrity:</strong> We uphold the highest standards of honesty, ethics, and respect in all interactions.</li>
              <li><strong>Innovation:</strong> We embrace creativity and forward-thinking approaches to education.</li>
              <li><strong>Inclusivity:</strong> We celebrate diversity and create a sense of belonging for all members of our community.</li>
              <li><strong>Responsibility:</strong> We foster a sense of personal and social responsibility in our students.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
} 