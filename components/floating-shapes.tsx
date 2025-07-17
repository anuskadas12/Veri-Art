"use client"

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-lg rotate-45 animate-float-medium"></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full animate-pulse-slow"></div>

      {/* Additional smaller shapes */}
      <div className="absolute top-1/3 left-1/5 w-16 h-16 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-1/3 right-1/5 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg rotate-12 animate-float-fast"></div>
      <div className="absolute top-3/4 left-3/4 w-12 h-12 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full animate-float-slow"></div>
    </div>
  )
}
