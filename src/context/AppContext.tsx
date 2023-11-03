import { createContext, ReactNode, useState } from 'react'

interface contextProviderProps {
  children: ReactNode
}

export interface DecisaoType {
  autor: {
    id: string
    nome: string
  }[]
  reu: {
    id: string
    nome: string
  }[]
  pedidos: {
    id: string
    pedido: string
    parte: string
    decisao: "Aceito" | "Negado" | "Parcialmente aceito"
    motivacao: string
    consequencias: {
      id: string
      tipoConsequencia: "Nenhuma" | "Fazer" | "Proibir" | "Pagar"
      consequencia: string
    }[]
  }[]
}

interface AppContextType {
  decisao: DecisaoType
  setDecisao: (decisao: DecisaoType) => void
}

export const AppContext = createContext({} as AppContextType)

export function AppContextProvider({ children }: contextProviderProps) {
  const [decisao, setDecisao] = useState<DecisaoType>(
    {
      autor: [],
      reu: [],
      pedidos: []
    }
  )
  
  return <AppContext.Provider value={{decisao, setDecisao}}>
    {children}
  </AppContext.Provider>
}