# MovieFinder

Uma aplicação moderna para buscar e descobrir filmes, desenvolvida com Next.js e estilizada com as cores da Netflix.

## 🎬 Sobre o Projeto

O MovieFinder é uma aplicação web que consome a API do TMDB (The Movie Database) para permitir que os usuários busquem filmes, visualizem informações detalhadas e descubram novos títulos. A interface foi inspirada no design da Netflix, oferecendo uma experiência familiar e intuitiva.

## ✨ Funcionalidades

- 🔍 **Busca de filmes** por título
- 📱 **Design responsivo** para mobile, tablet e desktop
- 🎭 **Página de detalhes** com sinopse, gêneros, avaliações e mais
- 🔥 **Filmes populares** carregados automaticamente
- ⚡ **Feedback visual** com loading e tratamento de erros
- 🎨 **Interface moderna** inspirada na Netflix
- 🖼️ **Imagens otimizadas** com Next.js Image

## 🚀 Como começar

### Pré-requisitos

- Node.js 18+ instalado
- Uma conta no [TMDB](https://www.themoviedb.org/) para obter a API key

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/moviefinder.git
cd moviefinder
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Adicione sua API key do TMDB no arquivo `.env.local`:
```env
NEXT_PUBLIC_TMDB_API_KEY=sua_api_key_aqui
```

5. Execute o projeto:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

6. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com:

```env
NEXT_PUBLIC_TMDB_API_KEY=sua_chave_da_api_tmdb
```

Para obter uma API key:
1. Crie uma conta em [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Vá para Configurações > API
3. Solicite uma API key gratuita
4. Cole a chave no arquivo `.env.local`

## 🛠️ Tecnologias Utilizadas

- **[Next.js 14](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI modernos
- **[Lucide React](https://lucide.dev/)** - Ícones
- **[TMDB API](https://www.themoviedb.org/documentation/api)** - Dados dos filmes

## 📁 Estrutura do Projeto

```
moviefinder/
├── app/
│   ├── movie/[id]/
│   │   └── page.tsx          # Página de detalhes do filme
│   ├── globals.css           # Estilos globais
│   ├── layout.tsx            # Layout principal
│   ├── loading.tsx           # Componente de loading
│   └── page.tsx              # Página inicial
├── components/
│   ├── ui/                   # Componentes shadcn/ui
│   ├── error-message.tsx     # Componente de erro
│   └── loading-spinner.tsx   # Spinner de carregamento
├── lib/
│   └── tmdb.ts              # Funções da API TMDB
├── types/
│   └── movie.ts             # Tipos TypeScript
└── README.md
```

## 🎨 Design

A aplicação utiliza uma paleta de cores inspirada na Netflix:
- **Vermelho principal**: #E50914 (Netflix Red)
- **Fundo**: Preto e cinza escuro
- **Texto**: Branco e cinza claro
- **Destaques**: Amarelo para avaliações

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Conecte seu repositório no [Vercel](https://vercel.com)
3. Configure a variável de ambiente `NEXT_PUBLIC_TMDB_API_KEY`
4. Deploy automático!

### Outras plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [TMDB](https://www.themoviedb.org/) pelos dados dos filmes
- [Netflix](https://netflix.com) pela inspiração do design
- [shadcn](https://twitter.com/shadcn) pelos componentes UI
- [Vercel](https://vercel.com) pela plataforma de deploy

---

Desenvolvido com ❤️ usando Next.js
