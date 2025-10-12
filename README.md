# 🌐 Ajude uma ONG – Frontend

## 📑 Sumário
- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configuração e Execução](#configuração-e-execução)
- [Conexão com o Backend](#conexão-com-o-backend)
- [Autor](#autor)

<br>

## Descrição
Este projeto foi desenvolvido como parte da **Pós-Graduação em Desenvolvimento Full-Stack na PUCRS**.  
Ele representa a **parte frontend** da plataforma *Ajude uma ONG*, um site que permite que usuários **busquem e conheçam ONGs** que apoiam diferentes causas, como o resgate de animais e a preservação ambiental. Também é possível cadastrar as ONGS, colocando informações tipo: endereço, o objetivo da ONG, contato e rede sociais, e inserir imagens da ONG.
O usuário pode explorar organizações, aplicar filtros e visualizar detalhes de cada ONG.


A aplicação foi construída utilizando **Vue 3** com **Vuetify**, garantindo uma interface moderna, responsiva e acessível.
---

## Tecnologias Utilizadas
- [Vue.js 3](https://vuejs.org/) – Framework frontend  
- [Vite](https://vitejs.dev/) – Ferramenta de build e desenvolvimento  
- [Axios](https://axios-http.com/) – Requisições HTTP  
- [Vue Router](https://router.vuejs.org/) – Gerenciamento de rotas 
- [Vuetify](https://vuetifyjs.com/) – Biblioteca de componentes UI para Vue  

---

## Funcionalidades
- 🌍 **Exploração de ONGs:** visualize informações sobre organizações e suas causas.  
- 🐶 **Filtros:** busque ONGs por animais atendidos, estado e cidade.  
- 🔄 **Paginação:** navegue entre páginas de resultados.  
- 🔐 **Autenticação JWT:** sistema de login e registro de usuários.  
- 🏠 **Página “Sobre”:** apresenta o objetivo do projeto e sua importância social.  
- ⚙️ **Integração completa com o backend** do projeto [`site-ongs-backend`](https://github.com/MateusBU/site-ongs-backend).  

---

## Estrutura do Projeto
```bash
sites-ong-frontend/
├── public/                  # Arquivos estáticos
├── src/
│   ├── components/          # Componentes reutilizáveis do Vue
│   ├── view/                # Páginas principais (Home, Sobre, Detalhes da ONG, etc.)
│   │   ├── auth/           # Páginas principal de cadastro/login
│   ├── router/              # Configuração do Vue Router
│   ├── store/               # Estado global (Vuex ou Pinia)
│   ├── assets/              # Imagens e ícones
│   ├── App.vue              # Componente raiz
│   └── main.js              # Ponto de entrada do projeto
├── package.json
└── README.md
