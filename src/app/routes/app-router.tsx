import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { App } from '../../pages/main';
import { FeedPage } from '../../pages/feed';

import { ROUTER_PATH } from '../../shared/router';
import { Loader } from '../../shared/ui';

const PostDetail = lazy(() => import('../../pages/post'));

export const appRouter = createBrowserRouter([
	{
		path: ROUTER_PATH.MAIN,
		element: <App />,
		children: [
			{
				path: ROUTER_PATH.MAIN,
				element: <FeedPage />,
			},
			{
				path: ROUTER_PATH.POST_WITH_ID,
				element: (
					<Suspense fallback={<Loader />}>
						<PostDetail />
					</Suspense>
				),
			},
		],
	},
]);
