import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export default function ResumePage() {
  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeader
          title="Resume"
          subtitle="Experience in design, fabrication, teaching, and sustainable manufacturing practices."
        />

        <div className="mt-16 mb-8 text-center">
          <Button className="bg-brand-yellow hover:bg-brand-yellow-600 text-black">
            <Download className="mr-2 h-4 w-4" />
            Download PDF Resume
          </Button>
        </div>

        <div className="resume-container bg-white rounded-lg border p-8 print:p-0 print:border-0 print:rounded-none">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center border-b pb-6">
              <h1 className="text-3xl font-bold text-gray-900">Bradford Arnold</h1>
              <p className="text-lg text-gray-600 mt-2">Pattern Designer • Fabricator • Educator</p>
              <p className="text-gray-500 mt-2">
                Dallas-Fort Worth, TX • bradford@example.com • Available by appointment
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-brand-yellow pl-4">
                Education
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-gray-900">Fashion Design & Technology</h3>
                  <p className="text-gray-600">University of Texas at Arlington</p>
                  <p className="text-sm text-gray-500">Focus on sustainable manufacturing and CAD systems</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-brand-yellow pl-4">
                Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Technical</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• CAD software for pattern design</li>
                    <li>• Laser cutting and CNC machining</li>
                    <li>• Sustainable fabrication methods</li>
                    <li>• Historical garment construction</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Teaching</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• One-on-one tutoring</li>
                    <li>• Workshop facilitation</li>
                    <li>• Curriculum development</li>
                    <li>• Assessment and analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-brand-yellow pl-4">
                Featured Projects
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Button-fly 501s Pattern Recreation</h3>
                  <p className="text-sm text-gray-600">
                    Historical research and CAD recreation of classic Levi's pattern with sustainable laser cutting practices.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Aquaponics Sensor Suite with AI Coach</h3>
                  <p className="text-sm text-gray-600">
                    IoT monitoring system with machine learning recommendations for optimal growing conditions.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Seamly2D Web Application</h3>
                  <p className="text-sm text-gray-600">
                    Browser-based pattern drafting tool for students without laptop access.
                  </p>
                </div>
              </div>
            </div>

            {/* Teaching */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-brand-yellow pl-4">
                Teaching & Volunteering
              </h2>
              <div>
                <h3 className="font-medium text-gray-900">UTA FabLab Volunteer Instructor</h3>
                <p className="text-sm text-gray-600 mb-2">2023 - Present</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Teaching digital pattern drafting and sustainable garment construction</li>
                  <li>• Developing curriculum for laser cutting and CAD software training</li>
                  <li>• Mentoring students on academic and personal projects</li>
                  <li>• Coordinating sponsorship initiatives for student materials</li>
                </ul>
              </div>
            </div>

            {/* Awards */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-brand-yellow pl-4">
                Recognition
              </h2>
              <div className="space-y-2">
                <div>
                  <h3 className="font-medium text-gray-900">Sustainability Innovation Award</h3>
                  <p className="text-sm text-gray-600">UTA FabLab, 2024</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Outstanding Volunteer Educator</h3>
                  <p className="text-sm text-gray-600">Student Recognition Program, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}