import { lazy, Suspense, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Flex } from 'antd';

import { type IPost } from '../../../../entities/post/@x/post.interface.ts';
import { feedApi } from '../../../../features/post';

import { Loader } from '../../../../shared/ui';

const Post = lazy(() => import('../../../../entities/post'));

export const FeedPage = () => {
	const { data: posts } = useQuery<IPost[]>({
		queryKey: ['posts'],
		queryFn: () => feedApi.getAllPosts<IPost[]>(),
	});

	useEffect(() => {
		const scrollPosition = localStorage.getItem(
			'feed-posts: scroll-position'
		);

		if (!scrollPosition) return;

		window.scrollTo(0, +scrollPosition);

		localStorage.removeItem('feed-posts: scroll-position');
	}, []);

	return (
		<Flex vertical gap={20} align={'center'}>
			{posts?.map((post) => (
				<Suspense key={post.id} fallback={<Loader />}>
					<Post {...post} />
				</Suspense>
			))}
		</Flex>
	);
};
