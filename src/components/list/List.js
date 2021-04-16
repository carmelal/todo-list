import {Form, FormLayout} from '@shopify/polaris';
import {Task} from '../task';

function TaskList({taskList}) {
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
