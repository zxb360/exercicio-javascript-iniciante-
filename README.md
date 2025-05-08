# 🧠 Exercícios de Strings com Testes Automatizados (Node.js + Jest)

Este projeto contém **5 desafios com manipulação de strings** em JavaScript, acompanhados de **testes automatizados com Jest**.

Cada função representa um requisito específico e está descrita logo **acima do seu respectivo código**, para facilitar a compreensão.

---

## 📁 Estrutura do Projeto


---

## 🚀 Como Executar Localmente

### 1. Instale o Node.js com NVM (Node Version Manager)

Se ainda não tem o Node.js instalado, recomendamos usar o [NVM](https://github.com/nvm-sh/nvm):

```bash

# Instalar NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Carregar o NVM (reinicie o terminal se necessário)
source ~/.bashrc

# Instalar e usar uma versão do Node
nvm install --lts          "EU USO A V18.20 --LTS"
OU PODEM VISITAR ESSE SITE: https://www.treinaweb.com.br/blog/instalando-e-gerenciando-varias-versoes-do-node-js-com-nvm

2. Clone o repositório
git clone esse repositorio.
no terminal vá até o diretório exercicio_string
cd exercicio_strings
OU
faça um fork

3. Inicialize o projeto: 
Se o arquivo package.json estiver no diretório provavelmente não precise.

npm init -y

4. Instale o Jest para rodar os testes

npm install jest

5. Configure o package.json
Edite o package.json e faça duas alterações:

Adicione o script de testes:

"scripts": {
  "test": "jest"
}

Defina o tipo de módulo para permitir import/export no final do objeto:
"type": "module"

✅ Rodando os Testes
npm test

⚠️ Observações Importantes
Não altere os nomes das funções ou os arquivos de teste, pois o Jest depende disso para funcionar corretamente.

Cada função possui um comentário explicativo acima, com a descrição do exercício.

Todas as funções estão no arquivo index.js.

✨ Dicas e Sugestões
Comente seu código para deixar sua lógica clara.

Rode os testes com frequência enquanto desenvolve.

Tente resolver cada função sem consultar as soluções, como forma de treino.

📚 Tecnologias
JavaScript ES6+

Node.js

Jest

🧑‍💻 Autor
Feito por Jaeder de Carvalho Azevedo
Contato: https://linkedin.com/in/jaeder-azevedo | GitHub: @zxb360

📜 Licença
Este projeto está licenciado sob a MIT [License].
MIT License

Copyright (c) 2025 Jaeder de Carvalho Azevedo


