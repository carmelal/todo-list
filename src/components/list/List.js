import {Form, FormLayout, TextStyle} from '@shopify/polaris';
import {Task} from '../task';

function TaskList({taskList}) {
  if (!taskList.length) {
    return (
      <TextStyle variation='subdued'>No todo items</TextStyle>
    );
  }

  return (
    <Form>
      <FormLayout>
        <div>
        {
          taskList.map((task) => {
            return (
              <Task task={task}/>
            );
          })
        }
        </div>
      </FormLayout>
    </Form>
  );
}

export {TaskList};
