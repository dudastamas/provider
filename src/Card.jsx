

export default function Card({name, key}) {
  return (
    <div className="bg-white rounded-lg shadow-md  m-4 w-full min-h-[200px] flex flex-col items-center justify-center">
      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <img 
          src="/placeholder-image.jpg" 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="text-[#967415] text-[30px] font-medium pb-6">{name}</p>
      </div>
    </div>
  )
}
