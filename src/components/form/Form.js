import {Form, FormLayout, TextField, Button} from '@shopify/polaris';

function TaskForm() {
  return (
    <Form>
      <FormLayout>
        <TextField
          label='New todo'
          type='text'
          connectedRight={
            <Button>Add</Button>
          }
        />
      </FormLayout>
    </Form>
  );
}

export {TaskForm};
