import React from "react";

const Telehealth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-50 to-indigo-100 p-8">
      <h1 className="text-4xl font-bold text-indigo-700 text-center mb-6">
        📞 Telehealth Support
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Access professional care and therapy from the comfort of your home. Our
        team is here to support you and your child with personalized virtual
        sessions.
      </p>

      {/* Services Overview */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "🎧 Speech & Language Therapy",
            desc: "Certified therapists available for language development, communication skills, and augmentative tools.",
          },
          {
            title: "🧠 Behavioral Therapy (ABA)",
            desc: "Work with autism specialists trained in behavior modification, daily routine building, and emotional support.",
          },
          {
            title: "👨‍👩‍👧 Parent Coaching",
            desc: "We guide parents on techniques to manage meltdowns, sleep routines, and build emotional bonding.",
          },
        ].map((service, i) => (
          <div
            key={i}
            className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-indigo-600 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </section>

      {/* Appointment Form */}
      <section className="bg-white max-w-3xl mx-auto p-8 rounded-xl shadow-md mb-12">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
          📅 Book a Virtual Appointment
        </h2>
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Parent/Guardian Name"
            className="border p-3 rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded-lg"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-3 rounded-lg"
            required
          />
          <select className="border p-3 rounded-lg" required>
            <option value="">Select Service</option>
            <option value="speech">Speech & Language Therapy</option>
            <option value="behavioral">Behavioral Therapy (ABA)</option>
            <option value="parenting">Parent Coaching</option>
          </select>
          <input
            type="date"
            className="border p-3 rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold"
          >
            Book Appointment
          </button>
        </form>
      </section>

      {/* Therapist Team Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">
          🧑‍⚕️ Meet Our Experts
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Dr. Daniel",
              spec: "Speech & Language Pathologist",
            },
            {
              name: "Mr. Alex",
              spec: "Behavioral Therapist (ABA)",
            },
            {
              name: "Dr. Josh",
              spec: "Family & Parenting Coach",
            },
          ].map((doc, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition"
            >
              <img
                src={`https://i.pravatar.cc/150?img=${i + 12}`}
                alt={doc.name}
                className="rounded-full w-24 h-24 mx-auto mb-3"
              />
              <h3 className="font-semibold text-indigo-600">{doc.name}</h3>
              <p className="text-sm text-gray-600">{doc.spec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency / Support */}
      <div className="bg-indigo-50 rounded-xl max-w-4xl mx-auto p-6 text-center shadow-sm">
        <p className="text-md text-gray-800 mb-2">
          ⚠️ In case of urgent support, call our 24x7 helpline:
        </p>
        <h3 className="text-xl font-bold text-indigo-700">
          📞 +91-9876543210
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Or email: <a className="underline" href="mailto:support@auticonnect.org">support@auticonnect.org</a>
        </p>
      </div>
    </div>
  );
};

export default Telehealth;
