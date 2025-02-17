import Card from "./Card";




export default function CityListing() {
let cities = [
    {
        id: 1,
        name: "NewYork"    
    },
    {
        id: 2,
        name: "Paris"    
    },
    {
        id: 3,
        name: "NewYork"    
    },
    {
        id: 4,
        name: "Paris"    
    },
    {
        id: 5,
        name: "NewYork"    
    },
    {
        id: 6,
        name: "Paris"    
    }
   
]
   
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        {
            cities.map(city => <Card key={city.id} name={city.name}/>)
        }
    </div>
  )
}
