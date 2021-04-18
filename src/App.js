import {useState} from 'react';
import {AppProvider, Card, Page, VisuallyHidden, Heading} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/dist/styles.css';

import {TaskForm} from './components/form';
import {TaskList} from './components/list';

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <AppProvider i18n={enTranslations}>
      <Page title='Todo list'>
        <Card>
          <VisuallyHidden>
            <Heading>Todo list</Heading>
          </VisuallyHidden>
          <Card.Section>
            <VisuallyHidden>
              <Heading>Add new todo</Heading>
            </VisuallyHidden>
            <TaskForm taskList={taskList} setTaskList={setTaskList}/>
          </Card.Section>
          <Card.Section title='All Todos'>
            <TaskList taskList={taskList} setTaskList={setTaskList}/>
          </Card.Section>
        </Card>
      </Page>
    </AppProvider>
  );
}

export default App;
