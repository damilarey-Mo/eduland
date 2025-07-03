import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import EducationLevels from "@/components/home/EducationLevels";
import SuccessStories from "@/components/home/SuccessStories";
import CampusLife from "@/components/home/CampusLife";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Stats from "@/components/home/Stats";
import News from "@/components/home/News";
import CTA from "@/components/home/CTA";
import ScrollAnimation from "@/components/ScrollAnimation";
import { colors, theme } from '@/utils/colors';



export default function Home() {
  return (
    <Layout>
      <main>
        <ScrollAnimation direction="fade" delay={0}>
          <section
            className="my-8 m"
            style={{
              border: `2px solid ${theme.alpha(colors.mint[400], 0.18)}`,
              background: theme.alpha(colors.vanilla[400], 0.02),
              boxShadow: `0 4px 24px ${theme.alpha(colors.mint[400], 0.10)}`,
              overflow: 'hidden',
            }}
          >
            <Hero />
          </section>
        </ScrollAnimation>
        <ScrollAnimation direction="up" delay={200}>
          <section
            className="my-8 -mt-10"
            style={{
              border: `2px solid ${theme.alpha(colors.mint[500], 0.18)}`,
              background: theme.alpha(colors.vanilla[400], 0.02),
              boxShadow: `0 4px 24px ${theme.alpha(colors.mint[500], 0.10)}`,
              overflow: 'hidden',
            }}
          >
            <About />
          </section>
        </ScrollAnimation>
        <ScrollAnimation direction="up" delay={400}>
          <section
       className="my-8 -mt-10"
          style={{
            border: `2px solid ${theme.alpha(colors.mint[600], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[600], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <EducationLevels />
        </section>
        </ScrollAnimation>
        <ScrollAnimation direction="left" delay={600}>
          <section
       className="my-8 -mt-10"
          style={{
           
            border: `2px solid ${theme.alpha(colors.mint[300], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[300], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <Stats />
        </section>
        </ScrollAnimation>
        <ScrollAnimation direction="right" delay={800}>
          <section
       className="my-8 -mt-10"
          style={{
           
            border: `2px solid ${theme.alpha(colors.mint[400], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[400], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <SuccessStories />
        </section>
        </ScrollAnimation>
        <ScrollAnimation direction="up" delay={1000}>
          <section
       className="my-8 -mt-10"
          style={{
           
            border: `2px solid ${theme.alpha(colors.mint[500], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[500], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <CampusLife />
        </section>
        </ScrollAnimation>
        <ScrollAnimation direction="down" delay={1200}>
          <section
       className="my-8 -mt-10"
          style={{
           
            border: `2px solid ${theme.alpha(colors.mint[600], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[600], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <Testimonials />
        </section>
        </ScrollAnimation>
        <ScrollAnimation direction="fade" delay={1400}>
          <section
          className="my-8"
          style={{
           
            border: `2px solid ${theme.alpha(colors.mint[300], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[300], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <News />
        </section>
        </ScrollAnimation>
        <ScrollAnimation direction="up" delay={1600}>
          <section
          className="my-8"
          style={{
           
            border: `2px solid ${theme.alpha(colors.mint[400], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[400], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <CTA />
        </section>
        </ScrollAnimation>
      </main>
    </Layout>
  );
}
