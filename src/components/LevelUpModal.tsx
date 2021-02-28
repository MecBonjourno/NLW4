import { useContext } from 'react'
import { challengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal(){
    const { level, closeModal } = useContext(challengeContext)

    return(
        <div className={styles.overlay}>
          <div className={styles.container}>
            <header>{level}</header>
            <strong>Level Up, congrats</strong>
            <p>Passou de nivel bro</p>

            <button type="button" onClick={closeModal}>
                <img src="/icons/close.svg" />
            </button>
           </div>
        </div>
    )
}