import {Form, FormLayout, TextStyle} from '@shopify/polaris';
import {Task} from '../task';

export function TaskList({taskList, setTaskList}) {
  if (!taskList.length) {
    return (
      <TextStyle variation='subdued'>No todo items</TextStyle>
    );
  }

  return (
    <Form>
      <FormLayout>
        <>
        {
          taskList.map((task, index) => {
            return (
              <Task task={task} key={index}/>
            );
          })
        }
        </>
      </FormLayout>
    </Form>
  );
}
