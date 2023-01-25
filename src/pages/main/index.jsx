import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { StyledButton } from "../../styles/Button"
import { InfoSet } from "../../components/main/infoblock"
import { StyledMain } from "./style"
import { Header } from "../../components/header"

import Photo1 from "../../assets/Photo1.jpg"
import Photo2 from "../../assets/Photo2.jpg"
import Photo3 from "../../assets/Photo3.jpg"
import Photo4 from "../../assets/Photo4.jpg"
import { StepBlock } from "../../components/main/stepsBlock"
import { TextAndPic } from "../../components/main/textAndPic"
import { ProgerssBar } from "../../components/main/prograssBar"
import { PicturesBlock } from "../../components/main/pricturesBlock"
import { FinalBlock } from "../../components/main/finalBlock"
import { TopPart } from "../../components/main/topPart"

export const Main = () => {
    const navigate = useNavigate()

    const [textAndPicDisplay, setTextAndPicDisplay] = useState(false);
    const textAndPicRef = useRef(null)
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            const ratio = entry.intersectionRatio
            if(ratio > 0 ){
                console.log(entry.intersectionRatio);
                setTextAndPicDisplay(true)
            }
        })

        if(textAndPicRef.current){
            intersectionObserver.observe(textAndPicRef.current)

        }

        return () => intersectionObserver.disconnect()
    }, [textAndPicRef])

    const [stepBlockDisplay, setStepBlockDisplay] = useState(false);
    const stepBlockRef = useRef(null)
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            const ratio = entry.intersectionRatio
            if(ratio > 0 ){
                console.log(entry.intersectionRatio);
                setStepBlockDisplay(true)
            }
        })

        if(stepBlockRef.current){
            intersectionObserver.observe(stepBlockRef.current)

        }

        return () => intersectionObserver.disconnect()
    }, [stepBlockRef])

    const [progressBarDisplay, setprogressBarDisplay] = useState(false);
    const progressBarRef = useRef(null)
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            const ratio = entry.intersectionRatio
            if(ratio > 0 ){
                console.log(entry.intersectionRatio);
                setprogressBarDisplay(true)
            }
        })

        if(progressBarRef.current){
            intersectionObserver.observe(progressBarRef.current)

        }

        return () => intersectionObserver.disconnect()
    }, [progressBarRef])

    const [picturesBlockDisplay, setpicturesBlockDisplay] = useState(false);
    const picturesBlockRef = useRef(null)
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            const ratio = entry.intersectionRatio
            if(ratio > 0 ){
                console.log(entry.intersectionRatio);
                setpicturesBlockDisplay(true)
            }
        })

        if(picturesBlockRef.current){
            intersectionObserver.observe(picturesBlockRef.current)

        }

        return () => intersectionObserver.disconnect()
    }, [picturesBlockRef])

    const [finalBlockDisplay, setfinalBlockDisplay] = useState(false);
    const finalBlockRef = useRef(null)
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            const ratio = entry.intersectionRatio
            if(ratio > 0 ){
                console.log(entry.intersectionRatio);
                setfinalBlockDisplay(true)
            }
        })

        if(finalBlockRef.current){
            intersectionObserver.observe(finalBlockRef.current)

        }

        return () => intersectionObserver.disconnect()
    }, [finalBlockRef])

    return (
        <>
            <Header />
            <StyledMain  >
                <TopPart />
                <InfoSet />
                <div className="textAndPicDiv" ref={textAndPicRef}>
                    {textAndPicDisplay && 
                        <TextAndPic 
                            text=
                            "Através de uma longa trajetória no esporte de alto performance, Carlos Ferreira se consolidou no mercado com uma vasta experiência em treinar atletas de alto nível como fisiculturistas e não atletas."
                            pic={Photo1}
                            picAlt="Foto do treinador Carlos Ferreira"
                            />
                    }
                </div>
                <div className="stepBlocks" ref={stepBlockRef} >
                    {stepBlockDisplay && 
                        <StepBlock 
                        number='01'
                        title='RAIO X'
                        text='Através de uma série de perguntas sobre a sua rotina, sua forma de treino e suas preferências alimentares eu vou criar um raio x do seu dia-a-dia, e ja estarei pronto para montar seu protocolo 100% personalizado.'
                        />
                    }
                    {stepBlockDisplay && 
                        <StepBlock 
                        number='02'
                        title='EXECUÇÃO'
                        text='Com essas informações em mãos entrarei em ação preparando tudo para você em até 7 dias.'
                        />
                    }
                    {stepBlockDisplay && 
                        <StepBlock 
                        number='03'
                        title='AVALIAÇÃO'
                        text='Após 30 dias repetiremos as suas fotos de avaliação. Me mantendo atualizado sobre sua evolução, colhendo feedbacks com foco no seu objetivo'
                        />
                    }
                </div>
                <div className="progressBarDiv" ref={progressBarRef}>
                    {progressBarDisplay && 
                        <ProgerssBar />
                    }
                    {progressBarDisplay && 
                        <StyledButton onClick={() => navigate('/planos')} >COMEÇAR AGORA</StyledButton>
                    }
                </div>
                <div className="picturesBlock" ref={picturesBlockRef}>
                    {picturesBlockDisplay && 
                        < PicturesBlock 
                        pic1={Photo4}
                        pic1alt={'Treinador Carlos Ferreira dando suport a uma alunoa durante o stiff'}
                        pic2={Photo3}
                        pic2alt={'Treinador Carlos Ferreira dando suport a dois alnos durante o biceps curl com alteres e bands'}
                        pic3={Photo2}
                        pic3alt={'Treinador Carlos Ferreira dando suport a um aluno durante o bach press com alteres pesados'}
                        />
                    }
                </div>
                <div className="finalBlock" ref={finalBlockRef}>
                    {finalBlockDisplay && 
                        <FinalBlock 
                            title='Ainda está com dúvida?'
                            text='Não hesite em entrar em contato, estamos aqui pra tirar todas as suas dúvidas.' />    
                    }
                </div>
            </StyledMain>
        </>
    )
}