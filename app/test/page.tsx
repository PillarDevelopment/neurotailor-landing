'use client';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-white mb-4">Tailwind CSS Test</h1>
        <p className="text-gray-300 mb-4">If you see this styled correctly, Tailwind is working!</p>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg">
          <p className="text-white font-semibold">Gradient Box</p>
        </div>
      </div>
    </div>
  );
}