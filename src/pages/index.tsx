import Head from 'next/head';
import {GetServerSideProps} from 'next'
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengeContext';

interface HomeProps{
	level: number;
	currentXP: number;
	challengeCompleted: number;
}

export default function Home(props) {
	return (
		<ChallengesProvider level={props.level} currentXP={props.currentXP} challengeCompleted={props.challengeCompleted}>
		<div className={styles.container}>
			<Head>
				<title>Time It - Home</title>
			</Head>
			<ExperienceBar />
			<CountdownProvider>
			<section>
				<div>
					<Profile />
					<CompletedChallenges />
					<Countdown />
				</div>
				<div>
					<ChallengeBox/>
				</div>
			</section>
			</CountdownProvider>
		</div>
		</ChallengesProvider>
	);
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {

	const { level, currentXP, challengeCompleted } = ctx.req.cookies

	return {
		props: {
			level: Number(level),
			currentXP: Number(currentXP),
			challengeCompleted: Number(challengeCompleted), 
		},
	}
}
