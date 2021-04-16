import {AppProvider, Card, Page} from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/dist/styles.css';

import {TaskForm} from './components/form';
import {TaskList} from './components/list';

const taskList = ['one', 'two', 'three'];
function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title='Todo List'>
        <Card>
          <Card.Section>
            <TaskForm/>
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
