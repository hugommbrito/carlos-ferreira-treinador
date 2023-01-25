import { Routes, Route, Navigate } from 'react-router-dom'
import { Main } from '../pages/main'
import { Planos } from '../pages/planos'

export const RoutesStructure =() => {

    return (
        <Routes >
            <Route path='/' element={<Main />} />
            <Route path='/planos' element={<Planos />} />

            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}