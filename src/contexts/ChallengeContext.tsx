import { createContext, useState, ReactNode } from 'react'

export const challengeContext = createContext({} as ChallengeContextData)

interface ChallengeContextData {
    level: number;
    currentXP: number;
    challengeCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level,setLevel] = useState(1);
    const [currentXP, setCurrentXP] = useState(0);
    const [challengeCompleted, setChallengeCompleted] = useState(0);

    function levelUp(){
        setLevel(level + 1)
    }

    function startNewChallenge() {
        console.log('New Challenge')
    }

    return(
        <challengeContext.Provider value={{ level, levelUp, challengeCompleted, currentXP, startNewChallenge}}>
            {children}
        </challengeContext.Provider>
    )
}