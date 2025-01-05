import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
} from 'react-admin';

export const RecipeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" required />
      <TextInput source="description" multiline rows={3} required />
      <NumberInput source="prep_time" min={0} />
      <NumberInput source="cook_time" min={0} />
    </SimpleForm>
  </Create>
); 