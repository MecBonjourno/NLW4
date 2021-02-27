 import { useContext } from 'react';
import { challengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const {activeChallenge, resetChallenge} = useContext(challengeContext)

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeBoxActive}>
                    <header>Ganhe {activeChallenge.amount} Xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeButtonFail} onClick={resetChallenge}>Falhei</button>
                        <button type="button" className={styles.challengeButtonSucess}>Completei</button>
                    </footer>
                </div>
            ) : (
                <>
                <div className={styles.challengeBoxNotActive}>
                <strong>Challenge</strong>
                <p> 
                    <img src="icons/level-up.svg" />
                    Avance
                </p>
            </div>
            </>
            )
        }
        </div>
    )
}