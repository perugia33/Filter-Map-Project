
import './App.css';
import NameAddress from './NameAddress';
 
function App() {
  var array=[{
    name: "Gina",
    address:"Seattle,WA",
    occupation:"Artist"
  },{
    name: "Kimberly",
    address: "Rockville,MD",
    occupation: "Designer",
},{
    name: "Anil",
    address: "Berkley,CA",
    occupation: "Barista",
},{
    name: "Karla",
    address: "Washington,DC",
    occupation: "Educator",
},{
    name: "Lynn",
    address: "San Francisco,CA",
    occupation: "Chef",
},{
    name: "Jeremy",
    address: "Albany,NY",
    occupation: "Programmer",
},{
    name: "Kyoko",
    address: "Austin,TX",
    occupation: "Accountant",
},{
    name: "Earline",
    address: "Tacoma,WA",
    occupation: "Project Manager",
},{
    name: "Urmila",
    address: "Bellevue,WA",
    occupation: "Lawyer",

},{
    name: "Roberta",
    address: "Gig Harbor,WA",
    occupation: "Musician",
}]
var mapArray =array.map(item=> (<NameAddress name={item.name} occupation= {item.occupation} address={item.address}></NameAddress>))
console.log("Item List:", mapArray);
  return (
    <div className="App">
      {mapArray}
      
    </div>
  );
}

export default App;
