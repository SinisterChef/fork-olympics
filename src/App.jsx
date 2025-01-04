import { useEffect, useState } from "react";
import { supabase } from './utils/supabase';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <>
      <div className="text-3xl font-bold text-blue-500">
        Hello Tailwind!
      </div>
      <ul> 
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
