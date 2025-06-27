"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Users, Award, GraduationCap, Star, Globe, BookOpen, Target, Heart, Lightbulb, Shield, ArrowRight, Mail, Phone, MapPin, Calendar, Trophy, Building2 } from "lucide-react";
import { colors, theme } from "@/utils/colors";

const leadershipTeam = [
  {
    name: "Dr. Margaret Adebayo, PhD",
    role: "Founder & Executive Chairman",
    image: "/images/testimonials/sarah.jpg",
    qualifications: ["PhD Educational Psychology (Cambridge)", "MEd Curriculum Development (Oxford)", "BSc Psychology (University of Lagos)"],
    experience: "30+ years of educational leadership",
    description: "Dr. Adebayo brings over 30 years of educational leadership experience to EduLand. A Cambridge University alumna with a PhD in Educational Psychology, she previously served as Academic Director at prestigious international schools in London and Singapore before returning to Nigeria to establish EduLand.",
    achievements: ["Cambridge International School status", "IB World School authorization", "Multiple educational awards"],
    color: colors.mint[600]
  },
  {
    name: "Mr. James Richardson, MA",
    role: "Principal & Chief Academic Officer",
    image: "/images/testimonials/michael.jpg",
    qualifications: ["MA Educational Leadership (University of Melbourne)", "PGCE Secondary Education (University of London)", "BSc Mathematics (Imperial College London)"],
    experience: "25 years of international education",
    description: "With 25 years of international education experience across four continents, Mr. Richardson joined EduLand in 2015. His expertise in curriculum development and school leadership has been instrumental in achieving our 98% university acceptance rate.",
    achievements: ["98% university acceptance rate", "IB and Cambridge programme implementation", "International school leadership"],
    color: colors.mint[500]
  },
  {
    name: "Mrs. Sarah Chen, MEd",
    role: "Vice Principal, Academic Affairs",
    image: "/images/testimonials/emily.jpg",
    qualifications: ["MEd International Education (University of Edinburgh)", "PGCE Primary Education (University of Cambridge)", "BSc Child Development (National University of Singapore)"],
    experience: "20 years of international education",
    description: "Mrs. Chen oversees our comprehensive academic program from Early Years through College Preparation. Her 20 years of experience in international education includes curriculum development roles with Cambridge International and the International Baccalaureate Organization.",
    achievements: ["Curriculum development expertise", "Assessment and learning analytics", "International education standards"],
    color: colors.mint[400]
  }
];

const academicDirectors = [
  {
    name: "Mrs. Patricia Okafor, MEd",
    role: "Director of Early Years (Creche - Year 2)",
    image: "/images/testimonials/david.jpg",
    qualifications: ["MEd Early Childhood Education (University of Ibadan)", "Montessori Diploma (London Montessori Centre)", "BSc Psychology (University of Nigeria, Nsukka)"],
    experience: "18 years of early childhood education",
    description: "A Montessori-trained educator with 18 years of experience in early childhood education. Mrs. Okafor has developed our award-winning Early Years program that seamlessly blends play-based learning with academic readiness.",
    achievements: ["Award-winning Early Years program", "Montessori methodology integration", "Play-based learning expertise"],
    color: colors.mint[300]
  },
  {
    name: "Dr. Ahmed Hassan, PhD",
    role: "Director of Primary Education (Years 3-6)",
    image: "/images/testimonials/james.jpg",
    qualifications: ["PhD Science Education (University of Cape Town)", "MEd Primary Education (American University of Beirut)", "BSc Physics (University of Alexandria)"],
    experience: "22 years of primary education",
    description: "Dr. Hassan brings 22 years of primary education experience, including 10 years as a Cambridge Primary programme trainer. His innovative approach to STEM education has earned recognition from the British Council.",
    achievements: ["Cambridge Primary programme trainer", "STEM education innovation", "British Council recognition"],
    color: colors.mint[400]
  },
  {
    name: "Mr. David Thompson, MA",
    role: "Director of Secondary Education (Years 7-11)",
    image: "/images/testimonials/michael.jpg",
    qualifications: ["MA Educational Leadership (University of Toronto)", "PGCE Secondary Science (University of Birmingham)", "BSc Chemistry (University of Manchester)"],
    experience: "20 years of international secondary education",
    description: "With 20 years of experience in international secondary education, Mr. Thompson oversees our IGCSE programme. His expertise in differentiated instruction ensures every student achieves their potential.",
    achievements: ["IGCSE programme leadership", "Differentiated instruction expertise", "Student achievement optimization"],
    color: colors.mint[500]
  },
  {
    name: "Dr. Priya Sharma, PhD",
    role: "Director of College Preparation (Years 12-13)",
    image: "/images/testimonials/emily.jpg",
    qualifications: ["PhD Educational Assessment (Stanford University)", "MEd International Education (Harvard Graduate School of Education)", "BSc Mathematics (Delhi University)"],
    experience: "15 years of university preparation",
    description: "Dr. Sharma leads our A-Level and IB Diploma programmes with 15 years of experience in university preparation. Her students consistently achieve places at top global universities, including Oxford, Cambridge, Harvard, and MIT.",
    achievements: ["Top university placements", "A-Level and IB leadership", "Global university partnerships"],
    color: colors.mint[600]
  }
];

const departmentHeads = [
  {
    name: "Mr. Robert Kim, MSc",
    role: "Mathematics Department",
    experience: "15 years experience",
    specialization: "Advanced mathematics and competition preparation",
    image: "/images/testimonials/david.jpg",
    color: colors.mint[400]
  },
  {
    name: "Ms. Emma Watson, MA",
    role: "English & Literature Department",
    experience: "18 years experience",
    specialization: "Cambridge English Language trainer",
    image: "/images/testimonials/emily.jpg",
    color: colors.mint[500]
  },
  {
    name: "Dr. Yusuf Abdullahi, PhD",
    role: "Sciences Department",
    experience: "20 years experience",
    specialization: "Former university lecturer and research scientist",
    image: "/images/testimonials/james.jpg",
    color: colors.mint[600]
  },
  {
    name: "Mrs. Grace Nwosu, MA",
    role: "Humanities Department",
    experience: "16 years experience",
    specialization: "African and world history",
    image: "/images/testimonials/sarah.jpg",
    color: colors.mint[400]
  },
  {
    name: "Mme. Claire Dubois, MA",
    role: "Modern Languages Department",
    experience: "14 years experience",
    specialization: "Native French speaker with international teaching background",
    image: "/images/testimonials/emily.jpg",
    color: colors.mint[500]
  },
  {
    name: "Mr. Anthony Rodriguez, MFA",
    role: "Arts & Creative Department",
    experience: "12 years experience",
    specialization: "Professional artist and art educator",
    image: "/images/testimonials/david.jpg",
    color: colors.mint[600]
  },
  {
    name: "Coach Michael Johnson, BSc",
    role: "Physical Education & Sports",
    experience: "18 years experience",
    specialization: "Former professional athlete and sports psychologist",
    image: "/images/testimonials/michael.jpg",
    color: colors.mint[400]
  },
  {
    name: "Mr. Raj Patel, MSc",
    role: "Information Technology",
    experience: "10 years experience",
    specialization: "Computer science specialist and coding instructor",
    image: "/images/testimonials/james.jpg",
    color: colors.mint[500]
  }
];

const facultyStats = [
  { label: "Advanced Degrees", value: "85%", icon: GraduationCap, color: colors.mint[500] },
  { label: "International Experience", value: "70%", icon: Globe, color: colors.mint[600] },
  { label: "Countries Represented", value: "15+", icon: MapPin, color: colors.mint[400] },
  { label: "Years Average Experience", value: "18", icon: Calendar, color: colors.mint[500] }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function AboutFacultyPage() {
  return (
    <Layout>
      <div style={{ backgroundColor: theme.background }}>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-0 right-0 -z-10 h-[800px] w-[800px] -translate-y-1/3 translate-x-1/4 transform opacity-10"
              style={{ 
                background: `radial-gradient(circle, ${theme.alpha(theme.secondary, 0.3)} 0%, transparent 70%)`
              }}
            />
            <div 
              className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] -translate-x-1/4 translate-y-1/3 transform opacity-10"
              style={{ 
                background: `radial-gradient(circle, ${theme.alpha(colors.mint[400], 0.2)} 0%, transparent 70%)`
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center space-x-3 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border mb-8"
                style={{ 
                  backgroundColor: theme.alpha(colors.vanilla[400], 0.15),
                  borderColor: theme.alpha(theme.secondary, 0.3),
                  boxShadow: `0 4px 12px ${theme.alpha(theme.secondary, 0.2)}`
                }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full" 
                  style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.3) }}>
                  <Users className="h-4 w-4" style={{ color: theme.primary }} />
                </span>
                <span className="text-sm font-semibold" style={{ color: theme.primary }}>
                  World-Class Faculty
                </span>
              </motion.div>

              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display mb-6"
                style={{ color: theme.text }}
              >
                Our Leadership Team
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-8 max-w-4xl mx-auto mb-8"
                style={{ color: theme.textMuted }}
              >
                Meet the exceptional educators and leaders who drive EduLand's commitment to academic excellence and student success.
              </motion.p>

              {/* Faculty Stats */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {facultyStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-xl border-2 transition-all transform-gpu hover:scale-105"
                      style={{ 
                        borderColor: theme.alpha(stat.color, 0.2),
                        backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                        boxShadow: `0 2px 8px ${theme.alpha(stat.color, 0.1)}`
                      }}
                    >
                      <div className="flex justify-center mb-3">
                        <div 
                          className="flex h-12 w-12 items-center justify-center rounded-full"
                          style={{ backgroundColor: theme.alpha(stat.color, 0.15) }}
                        >
                          <IconComponent className="h-6 w-6" style={{ color: stat.color }} />
                        </div>
                      </div>
                      <div 
                        className="text-2xl font-bold mb-1"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </div>
                      <div 
                        className="text-sm font-medium"
                        style={{ color: theme.textMuted }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display mb-6"
                style={{ color: theme.text }}
              >
                Executive Leadership
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                The visionary leaders who guide EduLand's mission and ensure our continued success
              </motion.p>
            </motion.div>

            <motion.div 
              className="space-y-12"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {leadershipTeam.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  variants={cardVariants}
                  className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div 
                      className="aspect-square rounded-2xl overflow-hidden border-2"
                      style={{ 
                        borderColor: theme.alpha(leader.color, 0.2),
                        boxShadow: `0 10px 40px ${theme.alpha(leader.color, 0.1)}`
                      }}
                    >
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${leader.image}')`,
                          filter: 'brightness(0.9)'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-xl font-bold">{leader.name}</div>
                        <div className="text-sm opacity-90">{leader.role}</div>
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 
                          className="text-2xl font-bold mb-2"
                          style={{ color: theme.text }}
                        >
                          {leader.name}
                        </h3>
                        <p 
                          className="text-lg font-semibold mb-4"
                          style={{ color: leader.color }}
                        >
                          {leader.role}
                        </p>
                        <p 
                          className="text-base leading-relaxed mb-4"
                          style={{ color: theme.textMuted }}
                        >
                          {leader.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 
                            className="text-sm font-semibold mb-2"
                            style={{ color: theme.text }}
                          >
                            Qualifications:
                          </h4>
                          <ul className="space-y-1">
                            {leader.qualifications.map((qual, idx) => (
                              <li 
                                key={idx}
                                className="flex items-center space-x-2 text-sm"
                                style={{ color: theme.textMuted }}
                              >
                                <div 
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: leader.color }}
                                />
                                <span>{qual}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 
                            className="text-sm font-semibold mb-2"
                            style={{ color: theme.text }}
                          >
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {leader.achievements.map((achievement, idx) => (
                              <li 
                                key={idx}
                                className="flex items-center space-x-2 text-sm"
                                style={{ color: theme.textMuted }}
                              >
                                <div 
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: leader.color }}
                                />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center space-x-2 text-sm font-medium">
                          <Calendar className="h-4 w-4" style={{ color: leader.color }} />
                          <span style={{ color: theme.textMuted }}>{leader.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Academic Directors */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display mb-6"
                style={{ color: theme.text }}
              >
                Academic Directors
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                Specialized leaders who oversee our comprehensive educational programs across all levels
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {academicDirectors.map((director, index) => (
                <motion.div
                  key={director.name}
                  variants={cardVariants}
                  className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105"
                  style={{ 
                    borderColor: theme.alpha(director.color, 0.2),
                    backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                    boxShadow: `0 4px 12px ${theme.alpha(director.color, 0.1)}`
                  }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: `0 20px 40px ${theme.alpha(director.color, 0.2)}`
                  }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-20 h-20 rounded-full overflow-hidden border-2"
                        style={{ borderColor: theme.alpha(director.color, 0.3) }}
                      >
                        <div 
                          className="w-full h-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url('${director.image}')`,
                            filter: 'brightness(0.9)'
                          }}
                  />
                </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-bold mb-2"
                        style={{ color: theme.text }}
                      >
                        {director.name}
                      </h3>
                      <p 
                        className="text-sm font-semibold mb-3"
                        style={{ color: director.color }}
                      >
                        {director.role}
                      </p>
                      <p 
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: theme.textMuted }}
                      >
                        {director.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-xs">
                          <Calendar className="h-3 w-3" style={{ color: director.color }} />
                          <span style={{ color: theme.textMuted }}>{director.experience}</span>
                        </div>
                        
                        <div className="space-y-1">
                          {director.achievements.slice(0, 2).map((achievement, idx) => (
                            <div 
                              key={idx}
                              className="flex items-center space-x-2 text-xs"
                              style={{ color: theme.textMuted }}
                            >
                              <div 
                                className="w-1 h-1 rounded-full"
                                style={{ backgroundColor: director.color }}
                              />
                              <span>{achievement}</span>
              </div>
            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Department Heads */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display mb-6"
                style={{ color: theme.text }}
              >
                Department Heads
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                Expert educators leading our specialized academic departments
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {departmentHeads.map((head, index) => (
                <motion.div
                  key={head.name}
                  variants={cardVariants}
                  className="group text-center p-6 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105"
                  style={{ 
                    borderColor: theme.alpha(head.color, 0.2),
                    backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                    boxShadow: `0 4px 12px ${theme.alpha(head.color, 0.1)}`
                  }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: `0 20px 40px ${theme.alpha(head.color, 0.2)}`
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div 
                      className="w-16 h-16 rounded-full overflow-hidden border-2"
                      style={{ borderColor: theme.alpha(head.color, 0.3) }}
                    >
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${head.image}')`,
                          filter: 'brightness(0.9)'
                        }}
                      />
            </div>
            </div>
                  
                  <h3 
                    className="text-lg font-bold mb-2"
                    style={{ color: theme.text }}
                  >
                    {head.name}
                  </h3>
                  <p 
                    className="text-sm font-semibold mb-3"
                    style={{ color: head.color }}
                  >
                    {head.role}
                  </p>
                  <p 
                    className="text-xs mb-2"
                    style={{ color: theme.textMuted }}
                  >
                    {head.experience}
                  </p>
                  <p 
                    className="text-xs leading-relaxed"
                    style={{ color: theme.textMuted }}
                  >
                    {head.specialization}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display mb-6"
                style={{ color: theme.text }}
              >
                Join Our Faculty
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto mb-8"
                style={{ color: theme.textMuted }}
              >
                Be part of our exceptional team of educators and help shape the future of international education
              </motion.p>
              <motion.button 
                className="group relative overflow-hidden rounded-full px-8 py-4 text-base font-semibold shadow-lg hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all transform-gpu hover:scale-105"
                style={{ 
                  backgroundColor: theme.secondary,
                  color: theme.backgroundDark,
                  boxShadow: `0 4px 12px ${theme.alpha(theme.secondary, 0.3)}`
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>View Career Opportunities</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span 
                  className="absolute inset-0 -z-10 translate-y-[105%] transition duration-300 group-hover:translate-y-0" 
                  style={{ backgroundColor: theme.secondaryDark }}
                ></span>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 