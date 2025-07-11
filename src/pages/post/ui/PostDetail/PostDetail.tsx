import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button, Card, Flex, Skeleton } from 'antd';

import Author from '../Author/Author.tsx';
import type { IPost } from '../../../../entities/post/@x/post.interface.ts';
import { feedApi } from '../../../../features/post';
import { ROUTER_PATH } from '../../../../shared/router';
import { APP_TEXT } from '../../../../shared/localization';

const PostDetail = () => {
	const { postId } = useParams();
	const navigate = useNavigate();

	const { data: post, isLoading } = useQuery<IPost>({
		queryKey: ['post', postId],
		queryFn: () => feedApi.getPostById<IPost>(postId),
	});
	console.log('isLoading: ', isLoading);

	return (
		<Flex vertical justify={'center'} style={{ height: '90vh' }}>
			<Card>
				<Flex vertical gap={20}>
					{isLoading ? (
						<Skeleton active paragraph={{ rows: 3 }} />
					) : (
						<p>{post?.body}</p>
					)}
					{post?.userId && <Author userId={post?.userId} />}
					<Button
						style={{ width: 100 }}
						onClick={() => navigate(ROUTER_PATH.MAIN)}
						type='dashed'
					>
						{APP_TEXT.buttonBack}
					</Button>
				</Flex>
			</Card>
		</Flex>
	);
};

export default PostDetail;
