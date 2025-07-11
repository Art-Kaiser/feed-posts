import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { Descriptions, Skeleton } from 'antd';

import { userApi } from '../../../../features/user';
import { APP_TEXT } from '../../../../shared/localization';
import { IUser } from '../../../../entities/user/@x/user.interface.ts';
import { Loader } from '../../../../shared/ui';

interface IAuthor {
	userId?: number;
}
const Author: FC<IAuthor> = ({ userId }) => {
	const { data: user, isLoading } = useQuery<IUser>({
		queryKey: ['user', userId],
		queryFn: () => userApi.getUserById<IUser>(userId),
	});

	if (isLoading) {
		return <Skeleton active paragraph={{ rows: 3 }} />;
	}

	return (
		<Descriptions title={APP_TEXT.author} column={1}>
			<Descriptions.Item label={APP_TEXT.nameAuthor}>
				{user?.name ?? <Loader />}
			</Descriptions.Item>
			<Descriptions.Item label={APP_TEXT.userNameAuthor}>
				{user?.username}
			</Descriptions.Item>
			<Descriptions.Item label={APP_TEXT.emailAuthor}>
				{user?.email}
			</Descriptions.Item>
		</Descriptions>
	);
};

export default Author;
