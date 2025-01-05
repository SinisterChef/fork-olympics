import { Admin, Resource } from 'react-admin';
import { supabase } from './utils/supabase';
import supabaseDataProvider from './dataProvider/supabaseDataProvider';
import { RecipeList } from './components/RecipeList';
import { RecipeEdit } from './components/RecipeEdit';
import { RecipeCreate } from './components/RecipeCreate';

function App() {
  return (
    <Admin dataProvider={supabaseDataProvider(supabase)}>
      <Resource 
        name="recipes" 
        list={RecipeList}
        edit={RecipeEdit}
        create={RecipeCreate}
      />
    </Admin>
  );
}

export default App;
