import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { appRouter } from './routes/app-router.tsx';
import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const App = () => {
	const queryClient = new QueryClient();

	return (
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={appRouter} />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</StrictMode>
	);
};
