 import { useContext } from 'react';
import { challengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const contextData = useContext(challengeContext)

    const hasActiveChallenge = true;

    return(
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={styles.challengeBoxActive}>
                    <header>Ganhe 400 Xp</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo Desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeButtonFail}>Falhei</button>
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