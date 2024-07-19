### README.md

# Lista de Pratos Favoritos

Este é um projeto simples de uma aplicação em React que permite ao usuário criar uma lista dos seus pratos favoritos e atribuir uma nota a cada prato. O objetivo é demonstrar a utilização de estados, hooks e manipulação de formulários em React.

## Tema

O tema do projeto é uma lista de pratos favoritos onde o usuário pode adicionar o nome do prato e uma nota para cada um. A lista de pratos é exibida logo abaixo dos campos de entrada.

## Instalação

Siga as instruções abaixo para instalar e executar a aplicação localmente.

### Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (geralmente vem junto com o Node.js)

### Passos para instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/lista-de-pratos.git
   cd lista-de-pratos
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie a aplicação:**

   ```bash
   npm start
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## Uso

1. Abra a aplicação em seu navegador.
2. Insira o nome de um prato no campo "Nome do prato".
3. Insira uma nota no campo "Nota".
4. Clique no botão "Adicionar Prato" para adicionar o prato à lista.
5. Os pratos adicionados serão exibidos na lista abaixo dos campos de entrada.

## Componentes

### ListDishes

Este é o componente principal da aplicação. Ele gerencia o estado dos pratos, o nome do prato e a nota do prato. Ele também lida com a adição de novos pratos à lista.

- **Estados:**
  - `pratos`: Um array que armazena os pratos adicionados e suas respectivas notas.
  - `prato`: Uma string que representa o nome do prato atual sendo adicionado.
  - `nota`: Uma string que representa a nota do prato atual sendo adicionado.

- **Funções:**
  - `adicionarPrato`: Uma função que adiciona um novo prato à lista se ambos os campos (`prato` e `nota`) estiverem preenchidos. Após adicionar, limpa os campos de entrada.

- **Renderização:**
  - Um título.
  - Dois campos de entrada: um para o nome do prato e outro para a nota.
  - Um botão para adicionar o prato à lista. O botão é desabilitado se algum dos campos estiver vazio.
  - Uma lista que exibe os pratos adicionados e suas respectivas notas.

## Estilos

Os estilos da aplicação são definidos no arquivo `ListDishes.css`, que é importado no componente `ListDishes`. Este arquivo contém estilos básicos para o layout e formatação da aplicação.

---

Este projeto é uma excelente maneira de aprender e praticar conceitos básicos de React, como gerenciamento de estado com hooks, renderização condicional e manipulação de formulários. Sinta-se à vontade para modificar e expandir a aplicação conforme necessário.