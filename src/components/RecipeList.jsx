import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
} from 'react-admin';

export const RecipeList = () => (
  <List>
    <Datagrid>
      <TextField source="title" />
      <TextField source="description" />
      <NumberField source="prep_time" />
      <NumberField source="cook_time" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
); 