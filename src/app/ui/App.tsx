import { appStore } from '@shared/lib/state';
import { Provider } from 'react-redux';

export function App() {
  return (
    <Provider store={appStore}>
      <h1>Home Screen</h1>
    </Provider>
  );
}
