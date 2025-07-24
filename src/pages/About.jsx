import React from "react";

const AboutAutism = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-indigo-700 text-center mb-6">
        🧩 Understanding Autism
      </h1>

      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Autism Spectrum Disorder (ASD) is a developmental condition that affects how people communicate, interact, and perceive the world. Every autistic person is unique, and they may experience strengths and challenges in different ways.
      </p>

      <div className="max-w-4xl mx-auto space-y-8 text-gray-800 text-md leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">🔍 What is Autism?</h2>
          <p>
            Autism is a **neurodevelopmental condition** that typically appears in early childhood. It affects how individuals communicate, behave, and interact socially. Autism is not an illness or a disease—it's a **different way of thinking and experiencing the world**.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">📘 Common Characteristics</h2>
          <ul className="list-disc list-inside pl-4">
            <li>Differences in verbal and non-verbal communication</li>
            <li>Repetitive behaviors or routines</li>
            <li>Sensory sensitivities (e.g., to lights, sounds, textures)</li>
            <li>Highly focused interests</li>
            <li>Unique learning styles or strengths</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">🌱 Strengths of Autistic Individuals</h2>
          <p>
            Many autistic people have amazing strengths. These may include:
          </p>
          <ul className="list-disc list-inside pl-4 mt-2">
            <li>Exceptional memory or attention to detail</li>
            <li>Strong pattern recognition or visual thinking</li>
            <li>Creative problem-solving skills</li>
            <li>Honesty and loyalty in relationships</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">🚩 Early Signs (in young children)</h2>
          <ul className="list-disc list-inside pl-4">
            <li>Delayed speech or language development</li>
            <li>Lack of eye contact or social engagement</li>
            <li>Repetitive movements like flapping or spinning</li>
            <li>Limited interest in peer play or interaction</li>
            <li>Extreme sensitivity or unusual reactions to sounds, smells, or textures</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">👪 Guidance for Parents & Caregivers</h2>
          <p>
            Early support and understanding can make a big difference. If you suspect your child may be on the spectrum:
          </p>
          <ul className="list-disc list-inside pl-4 mt-2">
            <li>Speak with a pediatrician or developmental specialist</li>
            <li>Explore early intervention services</li>
            <li>Create a structured, supportive home environment</li>
            <li>Celebrate your child's individuality and strengths</li>
            <li>Connect with other parents through support groups or online communities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">🌍 Autism is a Spectrum</h2>
          <p>
            The term "spectrum" means that no two autistic people are alike. Some may need a lot of support in daily life, while others live independently. It's important to **embrace neurodiversity** and support people with autism as individuals, not as a diagnosis.
          </p>
        </section>
      </div>

      <div className="mt-12 bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 font-semibold mb-2">
          “If you've met one person with autism, you've met one person with autism.” – Dr. Stephen Shore
        </p>
        <p className="text-sm text-gray-500">
          Every child is different. Our goal is to create a world that understands, supports, and celebrates them.
        </p>
      </div>
    </div>
  );
};

export default AboutAutism;
