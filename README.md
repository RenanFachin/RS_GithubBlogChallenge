<div align="center">
  <img alt="Home" title="HomePage" src="https://i.imgur.com/QT0WWWv.png">
</div>

# GitHub Blog Project

Este projeto foi desenvolvido como um desafio de um curso de React. Ele utiliza a API do GitHub para renderizar **issues de um repositório como posts de um blog**, cria uma interface de usuário para visualizar dados de perfil do GitHub, listar e filtrar issues e visualizar posts completos.

## Tecnologias Utilizadas

- ViteJS
- React
- TailwindCSS
- React Router DOM
- React Hook Form
- Axios

## Funcionalidades

- **Perfil do Usuário**: exibe informações como imagem de perfil, número de seguidores, nome e outras informações diretamente da API do GitHub.
- **Listagem de Issues**: oferece uma visualização de todas as issues de um repositório com um resumo de seu conteúdo, obtidas por meio da API do GitHub.
- **Filtro de Issues**: permite filtrar as issues listadas usando a API de busca do GitHub.
- **Visualização de Posts**: permite ler um post completo (issue) em formato de markdown renderizado para HTML.

## Configuração do Projeto

Para executar este projeto localmente, siga as etapas abaixo:

```bash
# Clone o repositório
git clone https://github.com/RenanFachin/RS_GithubBlogChallenge.git

# Acesse a pasta do projeto
# Instale as dependências
npm install

# Execute a aplicação em ambiente de desenvolvimento
npm run dev
```

## Uso da API do GitHub

Este projeto consome a seguinte API do GitHub:

- **GitHub Users API**: `https://api.github.com/users/${username}` - Obtém dados do usuário.
- **GitHub Search API**: `https://api.github.com/search/issues` - Busca e filtra issues de acordo com os parâmetros fornecidos.
- **GitHub Issues API**: `https://api.github.com/repos/${username}/${repo}/issues/${issue_number}` - Obtém os dados de uma issue específica.

## Contribuições

Contribuições, problemas e pedidos de funcionalidades são bem-vindos. Sinta-se livre para checar a página de issues caso queira contribuir.

## Autor

- Nome: Renan Fachin
- GitHub: [RenanFachin](https://github.com/RenanFachin)
- LinkedIn: [Renan Fachin](https://www.linkedin.com/in/renan-fachin/)
