import { useContext } from 'react';
import { challengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
	const { challengeCompleted } = useContext(challengeContext);

	return (
		<div className={styles.completedChallengesContainer}>
			<span>Completed Challenges</span>
			<span>{challengeCompleted}</span>
		</div>
	);
}
