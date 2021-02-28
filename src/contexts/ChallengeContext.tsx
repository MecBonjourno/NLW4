import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json'

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
    experienceToNextLevel: number;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level,setLevel] = useState(1);
    const [currentXP, setCurrentXP] = useState(0);
    const [challengeCompleted, setChallengeCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level+1) * 4 , 2)

    function levelUp(){
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
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
        <challengeContext.Provider value={{experienceToNextLevel, completeChallenge, level, levelUp, challengeCompleted, resetChallenge, currentXP, startNewChallenge, activeChallenge}}>
            {children}
        </challengeContext.Provider>
    )
}
