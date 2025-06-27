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
import { colors, theme } from '@/utils/colors';

// Color test component - kept for reference but not rendered
function ColorTest() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8 bg-white">
      <h2 className="text-2xl font-bold mb-4">Color Theme Test</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Vanilla Colors</h3>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-9">
          {Object.entries(colors.vanilla).map(([shade, color]) => {
            // Skip entries that aren't valid color shades (like methods or non-string values)
            if (typeof color !== 'string' || !shade) return null;
            
            return (
              <div key={shade} className="flex flex-col items-center">
                <div 
                  className="h-16 w-full rounded-md mb-2 border border-gray-200 flex items-center justify-center"
                  style={{ backgroundColor: color }}
                >
                  <span style={{ 
                    color: parseInt(shade) > 300 ? '#ffffff' : '#000000',
                    fontWeight: 'bold'
                  }}>
                    {shade}
                  </span>
                </div>
                <span className="text-xs">{color}</span>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Mint Colors</h3>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-9">
          {Object.entries(colors.mint).map(([shade, color]) => {
            // Skip entries that aren't valid color shades (like methods or non-string values)
            if (typeof color !== 'string' || !shade) return null;
            
            return (
              <div key={shade} className="flex flex-col items-center">
                <div 
                  className="h-16 w-full rounded-md mb-2 border border-gray-200 flex items-center justify-center"
                  style={{ backgroundColor: color }}
                >
                  <span style={{ 
                    color: parseInt(shade) > 300 ? '#ffffff' : '#000000',
                    fontWeight: 'bold'
                  }}>
                    {shade}
                  </span>
                </div>
                <span className="text-xs">{color}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <main>
        <section
          className="my-8"
          style={{
            borderRadius: '1.25rem',
            border: `2px solid ${theme.alpha(colors.mint[400], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[400], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <Hero />
        </section>
        <section
          className="my-8"
          style={{
            borderRadius: '1.25rem',
            border: `2px solid ${theme.alpha(colors.mint[500], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[500], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <About />
        </section>
        <section
          className="my-8"
          style={{
            borderRadius: '1.25rem',
            border: `2px solid ${theme.alpha(colors.mint[600], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[600], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <EducationLevels />
        </section>
        <section
          className="my-8"
          style={{
            borderRadius: '1.25rem',
            border: `2px solid ${theme.alpha(colors.mint[300], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[300], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <Stats />
        </section>
        <section
          className="my-8"
          style={{
            borderRadius: '1.25rem',
            border: `2px solid ${theme.alpha(colors.mint[400], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[400], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <SuccessStories />
        </section>
        <section
          className="my-8"
          style={{
            borderRadius: '1.25rem',
            border: `2px solid ${theme.alpha(colors.mint[500], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[500], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <CampusLife />
        </section>
        <section
          className="my-8"
          style={{
            borderRadius: '1.25rem',
            border: `2px solid ${theme.alpha(colors.mint[600], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[600], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <Testimonials />
        </section>
        <section
          className="my-8"
          style={{
            borderRadius: '1.25rem',
            border: `2px solid ${theme.alpha(colors.mint[300], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[300], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <News />
        </section>
        <section
          className="my-8"
          style={{
            borderRadius: '1.25rem',
            border: `2px solid ${theme.alpha(colors.mint[400], 0.18)}`,
            background: theme.alpha(colors.vanilla[400], 0.02),
            boxShadow: `0 4px 24px ${theme.alpha(colors.mint[400], 0.10)}`,
            overflow: 'hidden',
          }}
        >
          <CTA />
        </section>
      </main>
    </Layout>
  );
}
