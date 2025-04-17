# GitHub Profile Avanti 

**Desafio Front-End:** Aplicação React para buscar e exibir perfis do GitHub com integração direta à API pública.  

🔗 **Preview:** [https://test-tecnico-2-hlo8.vercel.app/] 
📅 **Data:** [17/04]  

---

## **🌐 Visão Geral**  
Projeto desenvolvido para demonstrar habilidades avançadas em:  

✅ **React + TypeScript** - Componentização e tipagem estática  
✅ **Tailwind CSS** - Estilização utilitária e responsiva    
✅ **Custom Hooks** - Lógica reutilizável para fetch de dados  
✅ **Responsiva** - Adaptável de mobile a desktop  



---

## **✨ Funcionalidades Principais**  

### **🔍 Busca de usuário**  
- Pesquisa em tempo real   
- Feedback visual durante loading  
-  exibição do resultado ou do erro

### **📱 Moderna**    
- Cards responsivos  
- Transições suaves  


### **⚡ Performance**  
- Hook custom  
- Tipagem TypeScript rigorosa  
- Componentização eficiente  

---

## **🛠 Stack Tecnológica**  

| **Tecnologia** | **Aplicação** | **Badge** |
|----------------|---------------|-----------|
| React | Componentização | ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) |
| TypeScript | Tipagem estática | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) |
| Tailwind CSS | Estilização | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) |
| GitHub API | Integração | ![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=flat&logo=github&logoColor=white) |

---

## **🔥 Destaques Técnicos**  

### **useFetch Hook (TypeScript)**  
```typescript
import { useState, useEffect } from 'react'

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!url) return

        const controller = new AbortController()
        const { signal } = controller

        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try {
                const res = await fetch(url, { signal })
                if (!res.ok) throw new Error(`Error: ${res.status}`)
                const json = await res.json() as T
                setData(json)
            } catch (err) {
                if (!signal.aborted && err instanceof Error) {
                    setError(err.message)
                }
            } finally {
                if (!signal.aborted) setLoading(false)
            }
        }

        fetchData()
        return () => controller.abort()
    }, [url])

    return { data, loading, error }
}
```

### **Componente de Perfil**  
```tsx
interface ProfileCardProps {
    user: {
        avatar_url: string
        name?: string
        bio?: string
    }
}

export const ProfileCard = ({ user }: ProfileCardProps) => (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row gap-6 items-center">
            <img 
                src={user.avatar_url} 
                alt="Avatar"
                className="w-32 h-32 rounded-full border-4 border-blue-500"
            />
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-blue-600">
                    {user.name || 'Sem nome'}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {user.bio || 'Sem biografia disponível'}
                </p>
            </div>
        </div>
    </div>
)
```

---

## **📂 Estrutura do Projeto**  
```
github-finder/
├── src/
│   ├── assets/            
│   ├── components/        # Componentes React
│   │   └── SearchBar.tsx
│   ├── hooks/             # Custom Hooks
│   │   └── useFetch.ts
│   ├── types/             # Tipos TypeScript
│   │   └── dataUser.ts
│   ├── App.tsx            # Componente principal
│   └── main.tsx           # Ponto de entrada
├── public/                # Assets públicos
├── tailwind.config.js     # Config Tailwind
└── tsconfig.json          # Config TypeScript
```

---

## **🚀 Como Executar**  

1. **Clone o repositório**  
```bash
git clone https://github.com/leandromacedo117/test-tecnico-2.git
```

2. **Instale as dependências**  
```bash
npm i
```

3. **Inicie o servidor**  
```bash
npm run dev
```

4. **Acesse no navegador**  
```
http://localhost:5173
```

---

## **📌 Lições Aprendidas**  

✔ **Cancelamento de requisições** com AbortController  
✔ **Tipagem avançada** de respostas da API  
✔ **Otimização de performance** 
✔ **Design system** com Tailwind  



---

**Desenvolvido por [Leandro Macedo]**  


---
