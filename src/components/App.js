import  {useEffect, useState} from 'react';
import './App.css';

function App() {
  
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchData(){
      let response = await fetch(`/search/programming`);
      setData(await response.json());
      
    }
    fetchData();
  },[]);

  return (
    <div className="App">
      
        <h1> fsdfdssd</h1>
        {console.log(data)}
      
    </div>
  );
}

export default App;
