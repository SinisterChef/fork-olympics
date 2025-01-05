import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
} from 'react-admin';

export const RecipeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" multiline rows={3} />
      <NumberInput source="prep_time" />
      <NumberInput source="cook_time" />
    </SimpleForm>
  </Edit>
); 