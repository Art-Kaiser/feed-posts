import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import styles from './Loader.module.css';

export const Loader = () => {
	return (
		<div className={styles.spinWrapper}>
			<Spin
				indicator={<LoadingOutlined style={{ fontSize: 64 }} spin />}
			/>
		</div>
	);
};
