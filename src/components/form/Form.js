import {useState, useCallback} from 'react';
import {Form, FormLayout, TextField, Button} from '@shopify/polaris';

export function TaskForm({taskList, setTaskList}) {
  const [task, setTask] = useState('');
  const handleTaskChange = useCallback((newValue) => setTask(newValue), []);

  const handleFormSubmit = useCallback((_event) => {
    if (task) {
      setTaskList([...taskList, task]);
    }
    setTask('');
  }, [task, taskList, setTaskList]);

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormLayout>
        <TextField
          autoFocus
          label='New todo'
          type='text'
          value={task}
          onChange={handleTaskChange}
          connectedRight={
            <Button submit>Add</Button>
          }
        />
      </FormLayout>
    </Form>
  );
}
