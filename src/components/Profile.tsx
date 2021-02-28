import { useContext } from 'react';
import { challengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
	const { level} = useContext(challengeContext);

	return (
		<div className={styles.profileContainer}>
			<img
				src='https://avatars.githubusercontent.com/u/34528662?s=460&u=78756aba83d8ac11e925b0a1c86b16ccaf5250c9&v=4'
				alt='zago'
			/>
			<div> 
				<strong>Guilherme Zago</strong>
				<p>
					{' '}
					<img src='icons/level.svg' />
					Level {level}
				</p>
			</div>
		</div>
	);
}
