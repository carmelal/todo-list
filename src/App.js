import {AppProvider, Card, Page} from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/dist/styles.css';

import {TaskForm} from './components/form';
import {TaskList} from './components/list';

var taskList = [];

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title='Todo list'>
        <Card>
          <Card.Section>
            <TaskForm taskList={taskList}/>
          </Card.Section>
          <Card.Section title='All Todos'>
            <TaskList taskList={taskList}/>
          </Card.Section>
        </Card>
      </Page>
    </AppProvider>
  );
}

export default App;
