import { useContext } from 'react';
import { challengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {

	const { currentXP, experienceToNextLevel  } = useContext(challengeContext);

	const percentNextLevel = Math.round(currentXP * 100) / experienceToNextLevel;

	return (
		<header className={styles.experienceBar}>
			<span>Experience - 0 XP</span>
			<div>
				<div style={{ width: `${percentNextLevel}%` }} />

				<span className={styles.experienceStatus} style={{ left: `${percentNextLevel}%` }}>
					{currentXP} XP
				</span>
			</div>
			<span>Experience - {experienceToNextLevel} XP</span>
		</header>
	);
}
