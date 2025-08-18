import { SectionHeader } from '@/components/ui/section-header'

export default function TeachingPage() {
  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeader
          title="Teaching & Unit-Based Testing Demo"
          description="Interactive learning tools and educational resources for pattern design and fabrication."
        />

        <div className="mt-16 bg-white rounded-lg border p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Khan Academy-Style Testing Interface
          </h2>
          <p className="text-gray-600 mb-6">
            Coming soon: An interactive testing interface with question navigation, 
            progress tracking, and analytics to help students practice and learn efficiently.
          </p>
          
          <div className="bg-brand-yellow-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Planned Features:</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Arrow key and on-screen navigation</li>
              <li>• Progress indicators and elapsed time tracking</li>
              <li>• Per-unit analytics and summary reports</li>
              <li>• Multiple choice and free response questions</li>
              <li>• Local storage for session persistence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}