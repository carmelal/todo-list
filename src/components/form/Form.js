import {useState, useCallback} from 'react';
import {Form, FormLayout, TextField, Button} from '@shopify/polaris';

function TaskForm(taskList) {
  const [task, setTask] = useState('');
  const handleChange = useCallback((newValue) => setTask(newValue), []);

  const handleFormSubmit = useCallback((_event) => {
    setTask('');
  }, [task]);

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormLayout>
        <TextField
          label='New todo'
          type='text'
          value={task}
          onChange={handleChange}
          connectedRight={
            <Button submit>Add</Button>
          }
        />
      </FormLayout>
    </Form>
  );
}

export {TaskForm};
