import { SectionHeader } from '@/components/ui/section-header'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeader
          title="About Bradford Arnold"
          description="Designer, fabricator, and educator with a passion for bridging traditional craftsmanship and modern technology."
        />

        <div className="mt-16 prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed">
            Hello! I'm Bradford Arnold, a volunteer at the University of Texas at Arlington FabLab 
            where I help students learn digital pattern drafting and sustainable garment construction.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            My goal is to empower students to use technology such as laser cutters and CAD software 
            to create high-quality garments while minimizing waste. With a background in fashion and 
            a passion for sustainability, I guide them through the entire process—from drafting to 
            sewing, using quilted seams and other techniques.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            Beyond teaching, I'm actively seeking sponsorships to provide materials like denim at 
            low or no cost. This initiative aims to increase retention and give every student the 
            opportunity to succeed.
          </p>
        </div>
      </div>
    </div>
  )
}