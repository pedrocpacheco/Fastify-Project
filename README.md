# Fastify-Project
🦕 Basic project made using Fastify and TypeScript

## Iniciando Projeto

### Baixando Typescript 

```bash 
npm i -D typescript

npx tsc --init
```

### Transformando TS em JS

```bash
npx tsc src/nomeArquivo.ts
```

### Baixando TSX

```bash
npm install tsx -D
```
Converte o TS para JS automaticamente

### Estrutura padrão do server.ts

```javascript
import fastify from "fastify"

const app = fastify()

app.get("/hello", () => {
  return "Pedro"
})

app.listen({
  port: 3333
}).then(() => console.log("HTTP Server Running!"));
```

### Configurando o tsx
Baixando o tsx
```bash
  npm i tsx -D
```
Startando um arquivo com tsx
```bash
  npx tsx src/server.ts
```

Settando com run dev
```json
  "scripts": {
      "dev": "npx tsx watch src/server.ts"
    }
```
### Setup o eslint
Baixando o eslint
```bash
  npm i eslint @rocketseat/eslint-config -D
```

Configurando o Arquivo do Eslint
```json
  {
    "extends":[
      "@rocketseat/eslint-config/node"
    ],
    "rules": {
      "prettier/prettier": [
        "error",
        {
          "endOfLine": "auto"
        }
      ]
    }
    
  }
```

Criando npm run lint para salvar tudo direto
```json
  "lint": "eslint src --ext .ts --fix"
```