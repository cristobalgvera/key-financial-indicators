import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { financialIndicatorApi } from '@features/financial-indicator/api';

function render(
  ui: JSX.Element,
  {
    store = configureStore({
      reducer: {
        [financialIndicatorApi.reducerPath]: financialIndicatorApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([financialIndicatorApi.middleware]),
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
