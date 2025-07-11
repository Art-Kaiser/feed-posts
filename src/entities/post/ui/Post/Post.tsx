import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'antd';

import { IPost } from '../../@x/post.interface.ts';

import { ROUTER_PATH } from '../../../../shared/router';
import { LIMIT_TEXT_LENGTH } from '../../../../shared/config';
import { APP_TEXT } from '../../../../shared/localization';

import styles from './Post.module.css';

const Post: FC<IPost> = ({ id, title, body }) => {
	const navigate = useNavigate();

	const prepareText =
		body.length > LIMIT_TEXT_LENGTH
			? `${body.substring(0, LIMIT_TEXT_LENGTH)}...`
			: body;

	const handleClickToView = (): void => {
		localStorage.setItem(
			'feed-posts: scroll-position',
			String(window.pageYOffset)
		);

		navigate(`${ROUTER_PATH.POST}/${id}`);
	};

	return (
		<Card
			title={<p className={styles.postTitle}>{`№${id} ${title}`}</p>}
			extra={
				<Button onClick={handleClickToView} type='primary'>
					{APP_TEXT.buttonView}
				</Button>
			}
			style={{ width: '100%' }}
		>
			<p>{prepareText}</p>
		</Card>
	);
};

export default Post;
