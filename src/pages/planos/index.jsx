import { useEffect, useRef, useState } from "react"

import { Header } from "../../components/header"
import { Form } from "../../components/planos/form"
import { PriceCard } from "../../components/planos/priceCard"
import { TopInfo } from "../../components/planos/topInfo"
import { StyledPlanos } from "./style"

export const Planos = () => {
    const [selectedPlan, setSelectedPlan] = useState();
    const [personalDataDisplay, setPersonalDataDisplay] = useState(false);

    const myForm = useRef(null)
    const handlePlanChange = (newPlan) => {
        setSelectedPlan(newPlan)
        myForm.current.scrollIntoView()
        setPersonalDataDisplay(true)
    }
    
    useEffect(() => {
        console.log(selectedPlan);

    },[selectedPlan])

    return(
        <StyledPlanos >
            <Header />
            <TopInfo />
            <h3>Informações do Plano</h3>
            <div className="priceCards">
                <PriceCard
                    plan='Anual'
                    oldPrice='349,00'
                    currentPrice='149,00'
                    discount='57%'
                    period='1 ano'

                    radioId='radio1'
                    value='anual'
                    handleChange={handlePlanChange}
                    />
                <PriceCard
                    plan='trimestral'
                    oldPrice='349,00'
                    currentPrice='174,00'
                    discount='50%'
                    period='3 meses'
                    
                    radioId='radio2'
                    value='trimestral'
                    handleChange={handlePlanChange}
                    />
                <PriceCard
                    plan='Mensal'
                    oldPrice='349,00'
                    currentPrice='200,00'
                    discount='42%'
                    
                    radioId='radio3'
                    value='mensal'
                    handleChange={handlePlanChange}
                />
            </div>
            <Form displayPersonalData={personalDataDisplay} selectedPlan={selectedPlan} myForm={myForm} />
        </StyledPlanos>
    )
}