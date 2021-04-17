import {useContext} from 'react';
import {Form, FormLayout, TextStyle} from '@shopify/polaris';
import {Task} from '../task';

function TaskList({ListContext}) {
  const list = useContext(ListContext);
  console.log(list);

  if (!list.taskList.length) {
    return (
      <TextStyle variation='subdued'>No todo items</TextStyle>
    );
  }

  return (
    <Form>
      <FormLayout>
        <>
        {
          list.taskList.map((task) => {
            return (
              <Task task={task} key={task}/>
            );
          })
        }
        </>
      </FormLayout>
    </Form>
  );
}

export {TaskList};
