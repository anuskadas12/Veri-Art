"use client"

export function GradientOrbs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large gradient orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-yellow-600/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 -right-20 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-1000"></div>
    </div>
  )
}
