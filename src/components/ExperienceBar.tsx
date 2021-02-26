import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
	return (
		<header className={styles.experienceBar}>
			<span>Experience - 0 XP</span>
			<div>
				<div style={{ width: '50%' }} />

				<span className={styles.experienceStatus} style={{ left: '50%' }}>
					300 XP
				</span>
			</div>
			<span>Experience - 600 XP</span>
		</header>
	);
}
