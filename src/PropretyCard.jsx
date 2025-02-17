

export default function PropretyCard() {
  return (
    <div className="flex  flex-col md:flex-row gap-6 p-4 max-w-6xl mx-auto">
        <div className="w-full md:w-2/3 bg-gray-200 min-h-[200px] flex items-center justify-center order-last md:order-first rounded-xl">Image</div>
        <div className="w-full md:w-2/3">
            <h1 className="text-2xl font-bold mb-4">Nemes Takács</h1>
            <p className="text-gray-700 leading-relaxed text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sequi doloribus quaerat consequuntur corporis voluptatibus debitis dignissimos sapiente ad aliquid, ipsum unde nulla commodi vitae blanditiis modi quis veritatis at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sequi doloribus quaerat consequuntur corporis voluptatibus debitis dignissimos sapiente ad aliquid, ipsum unde nulla commodi vitae blanditiis modi quis veritatis at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sequi doloribus quaerat consequuntur corporis voluptatibus debitis dignissimos sapiente ad aliquid, ipsum unde nulla commodi vitae blanditiis modi quis veritatis at. </p>
        </div>
    </div>
  )
}
