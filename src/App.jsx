import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://ugkwxevcxnrglwuysiof.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVna3d4ZXZjeG5yZ2x3dXlzaW9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5MjA2NTAsImV4cCI6MjA1MDQ5NjY1MH0.qtp8r4uhtcE-5OapDDUXvEpu9y44ez5BbIUvt68zvfo");

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
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;
