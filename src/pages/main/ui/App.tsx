import { Outlet } from 'react-router-dom';

import { Layout } from './Layout/Layout.tsx';

import './App.css';

export const App = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
};
