"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import Image from "next/image"; // Import Image for logo

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-600 p-4 flex justify-between items-center text-white shadow-md">
        <div className="flex items-center gap-2">
          <Image className="text-white" src="/logo.svg" alt="EduCare Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">EduCare</h1>
        </div>
      </header>

      <main className="flex-grow">
        <section className="flex flex-col items-center justify-center py-20 bg-blue-500 text-white rounded-lg mx-4 mt-8 shadow-md">
          <h2 className="text-4xl font-extrabold mb-4">
            Empower Your Learning with EduCare
          </h2>
          <p className="text-lg mb-6 text-center max-w-2xl">
            Join thousands of students and enhance your skills with AI-Based
            Learning.
          </p>
          <Button onClick={() => {router.push('/dashboard')}}
          className="bg-white text-blue-600 px-6 py-3 hover:bg-gray-200 transition">
            Get Started
          </Button>
        </section>

        <section id="features" className="py-16 px-6">
          <h3 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Why Choose EduCare?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="p-6 bg-white rounded-lg shadow-md text-gray-700 cursor-pointer">
                <h4 className="text-xl font-bold mb-2">
                  Fast Learning for All Levels
                </h4>
                <p>
                  Customized courses designed for beginners, intermediates, and
                  experts to accelerate your learning journey.
                </p>
              </div>
              <div className="absolute hidden group-hover:block bg-white text-gray-700 p-4 mt-2 rounded-lg shadow-lg w-full">
                <p>
                  Gain access to structured courses tailored to every learning
                  level, ensuring rapid progress and mastery.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="p-6 bg-white rounded-lg shadow-md text-gray-700 cursor-pointer">
                <h4 className="text-xl font-bold mb-2">AI-Based Learning</h4>
                <p>
                  Leverage advanced AI technology to personalize your learning
                  experience and improve understanding.
                </p>
              </div>
              <div className="absolute hidden group-hover:block bg-white text-gray-700 p-4 mt-2 rounded-lg shadow-lg w-full">
                <p>
                  Our AI algorithms adapt to your progress, providing
                  personalized learning paths and targeted recommendations.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="p-6 bg-white rounded-lg shadow-md text-gray-700 cursor-pointer">
                <h4 className="text-xl font-bold mb-2">
                  Extensive Course Library
                </h4>
                <p>
                  Access a wide range of courses and topics anytime, covering
                  various subjects to suit your interests.
                </p>
              </div>
              <div className="absolute hidden group-hover:block bg-white text-gray-700 p-4 mt-2 rounded-lg shadow-lg w-full">
                <p>
                  Explore a vast library of courses across diverse subjects,
                  updated regularly to keep you ahead.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 EduCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
