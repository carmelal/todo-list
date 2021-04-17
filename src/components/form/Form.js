import {useState, useCallback, useContext} from 'react';
import {Form, FormLayout, TextField, Button} from '@shopify/polaris';

function TaskForm({ListContext}) {
  const list = useContext(ListContext);

  const [task, setTask] = useState('');
  const handleTaskChange = useCallback((newValue) => setTask(newValue), []);

  const handleFormSubmit = useCallback((_event) => {
    if (task) {
      list.setTaskList([...list.taskList, task]);
    }
    setTask('');
  }, [task, list]);

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

export {TaskForm};
