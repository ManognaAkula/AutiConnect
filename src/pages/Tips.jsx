import React from "react";

const Tips = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 p-8">
      <h1 className="text-4xl font-bold text-indigo-700 text-center mb-6">
        💡 Parenting Tips for Supporting Autistic Children
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Gentle guidance, practical strategies, and loving support can make a
        world of difference. Explore these evidence-based and heart-centered
        tips to support your child’s unique journey.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Tip 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            1. Use Visual Schedules
          </h2>
          <p className="text-gray-700">
            Create daily routines with visual aids (pictures, icons, or drawings). This helps your child understand what to expect and reduces anxiety.
          </p>
        </div>

        {/* Tip 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            2. Celebrate Small Wins
          </h2>
          <p className="text-gray-700">
            Acknowledge every effort, no matter how small. This builds confidence and encourages positive behavior and learning.
          </p>
        </div>

        {/* Tip 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            3. Practice Sensory Awareness
          </h2>
          <p className="text-gray-700">
            Notice which sights, sounds, smells, or textures your child prefers or avoids. Adjust the environment to suit their sensory needs.
          </p>
        </div>

        {/* Tip 4 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            4. Use Simple, Clear Language
          </h2>
          <p className="text-gray-700">
            Use short sentences and literal words. Avoid sarcasm or abstract language. Give your child extra time to process and respond.
          </p>
        </div>

        {/* Tip 5 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            5. Create a Calm Down Space
          </h2>
          <p className="text-gray-700">
            Offer a cozy space (with soft toys or sensory items) where your child can relax if overwhelmed. This encourages emotional regulation.
          </p>
        </div>

        {/* Tip 6 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            6. Encourage Play and Social Interaction
          </h2>
          <p className="text-gray-700">
            Let your child lead the play. Use role-play, story games, and cooperative activities to build connection and social skills.
          </p>
        </div>

        {/* Tip 7 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            7. Be Consistent with Routines
          </h2>
          <p className="text-gray-700">
            Predictable routines help your child feel secure. Try to keep wake-up, meals, and bedtime consistent, even on weekends.
          </p>
        </div>

        {/* Tip 8 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            8. Take Care of Yourself Too 💙
          </h2>
          <p className="text-gray-700">
            You’re doing great. Join support groups, take breaks when needed, and celebrate your own efforts. Your well-being supports your child’s.
          </p>
        </div>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025 AutiConnect · You are not alone on this journey.
      </footer>
    </div>
  );
};

export default Tips;
