import { createContext, useState, ReactNode, useEffect } from 'react'
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import { LevelUpModal } from '../components/LevelUpModal';

export const challengeContext = createContext({} as ChallengeContextData)

interface Challenge {
    type: 'body' | 'eye',
    description: string,
    amount: number,
}

interface ChallengeContextData {
    level: number;
    currentXP: number;
    challengeCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeModal: () => void;
    experienceToNextLevel: number;
}

interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
	currentXP: number;
	challengeCompleted: number;
}

export function ChallengesProvider({children, ...rest}: ChallengesProviderProps){
    const [level,setLevel] = useState(rest.level ?? 1);
    const [currentXP, setCurrentXP] = useState(rest.currentXP ?? 0);
    const [challengeCompleted, setChallengeCompleted] = useState(rest.challengeCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

    const experienceToNextLevel = Math.pow((level+1) * 4 , 2)

    useEffect(()=>{
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level))
        Cookies.set('currentXP', String(currentXP))
        Cookies.set('challengeCompleted', String(challengeCompleted))
    } , [level,currentXP,challengeCompleted])

    function levelUp(){
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    }

    function closeModal(){
        setIsLevelUpModalOpen(false)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        new Audio('/notification.mp3').play();

        setActiveChallenge(challenge);

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio', {
                body: `Valendo ${challenge.amount} XP!`
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    function completeChallenge(){
        if (!activeChallenge){
            return;
        }

        const { amount } = activeChallenge;

        let finalXP = currentXP + amount;

        if (finalXP >= experienceToNextLevel){
            finalXP = finalXP - experienceToNextLevel
            levelUp()
        } 

        setCurrentXP(finalXP);
        setActiveChallenge(null);
        setChallengeCompleted(challengeCompleted + 1);
    }

    return(
        <challengeContext.Provider value={{closeModal, experienceToNextLevel, completeChallenge, level, levelUp, challengeCompleted, resetChallenge, currentXP, startNewChallenge, activeChallenge}}>
            {children}
           {isLevelUpModalOpen && <LevelUpModal/>}
        </challengeContext.Provider>
    )
}
