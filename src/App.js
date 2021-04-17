import {createContext, useState} from 'react';
import {AppProvider, Card, Page} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/dist/styles.css';

import {TaskForm} from './components/form';
import {TaskList} from './components/list';

function App() {
  const ListContext = createContext();
  const [taskList, setTaskList] = useState([]);

  return (
    <ListContext.Provider value={{taskList, setTaskList}}>
      <AppProvider i18n={enTranslations}>
        <Page title='Todo list'>
          <Card>
            <Card.Section>
              <TaskForm ListContext={ListContext}/>
            </Card.Section>
            <Card.Section title='All Todos'>
              <TaskList ListContext={ListContext}/>
            </Card.Section>
          </Card>
        </Page>
      </AppProvider>
    </ListContext.Provider>
  );
}

export default App;
