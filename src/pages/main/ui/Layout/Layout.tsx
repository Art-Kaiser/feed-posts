import React, { FC } from 'react';

import styles from './Layout.module.css';

interface ILayout {
	children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<main className={styles.main}>{children}</main>
		</div>
	);
};
