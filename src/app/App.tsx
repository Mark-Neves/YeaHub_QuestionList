import './index.scss';
import { ProviderRouter } from './providers/RouterProvider';
import { StoreProvider } from './providers/StoreProvider';
import { AppRouter } from './routing';

function App() {
  return (
    <ProviderRouter>
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </ProviderRouter>
  );
}

export default App;
