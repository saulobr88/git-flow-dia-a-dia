# Comandos Cotidianos (dia a dia)

## Sempre manter os Branches mais importantes atualizados:

Todos os dias, antes de começar a trabalhar, atualizar os principais branches do projeto. Seguir o Git Flow, na medida do possível.

### 1 - Pull master/main

```
git pull origin master
```

### 2 - Pull develop/development/dev

```
git pull origin develop
```

---

## Fluxo ao criar e trabalhar com um novo Branch

Antes de criar uma funcionalidade (_feature_) ou corrigir um erro (_bugfix_) ou fazer algum ajuste (_hotfix_), é esperado que exista uma _issue_ que descreva o trabalho que será realizado, indicando o estado atual e estado esperado após as alterações, com links e demais referências necessárias para entender o que deve ser feito e quais são os critérios de aceitação da tarefa.

Nos exemplos abaixo vamos supor que exista uma _Issue_ de número `123` que solicita algo (funcionalidade, correção de erro ou ajuste em algo que está em produção). Os passos seriam:

### 1 - Criar novo branch

```
git checkout -b 123-issue-que-foi-aberta
```

### 2 - Add e Commit no novo branch

```
git add .
git commit -m "Added command in README.md to publish project Assets"
```

### 3 - push no branch remote

```
git push origin 123-issue-que-foi-aberta
```

Neste momento o ideal seria abrir uma request de união com o ramo `develop` (em caso de funcionalidade) ou com o ramo `main`/`master` nos carros de _bugfix_/_hotfix_. No Github isso é chamado de **Pull Request**, no Gitlab e Bitbucket isso é chamado de **Merge Request**.

Ao realizar a revisão de código e ser aprovado, o merge acontece, a issue é respondida e fechada em caso de súcesso na concepção da solução.

Agora vamos supor que durante a revisão de código alterações foram solicitadas pela equipe de revisão, o desenvolvedor que está resolverndo a issue terá que alterar os códigos e subir novamente para uma nova revisão da **Request**, nesse momento existe a seguinte situação:

### 4 - Se houve mais uma atualização e quiser unir ao commit anterior

```
git add .
git commit --amend
```

### 5 - Para forçar o push:

```
git push -f origin 123-issue-que-foi-aberta
```

Os comandos em `4` e `5` são para evitar que o ramo temporário possua muitos commits, no momento de **revisão** e em momentos de **rabase** (`git rebase`), unificar commits ajuda para que exista um ponto único de atenção na inserção de códigos novos.

Ainda existe a possibilidade de uma nova situação, digamos que você foi incubido de dar continuidade em uma funcionalidade que não foi completada. O novo ramo já existe no repositório remoto e possui um commit do tipo _Work in Progress_ (WIP). O que fazer?

### 6 - Puxar um ramo remoto para o repositório local

```
git fetch <remote> <rbranch>:<lbranch>
git checkout <lbranch>
```

Aplicando ao ramo `123-issue-que-foi-aberta`

```
git fetch origin 123-issue-que-foi-aberta:123-issue-que-foi-aberta
git checkout 123-issue-que-foi-aberta
```

Com os comandos acima é feito o `fetch` do ramo remoto e criado um novo localmente, para a realização dos trabalhos. Os passos `4` e `5` se repetem após as alterações

- [Git Flow](https://jeffkreeftmeijer.com/git-flow/)
- [Git Book](https://git-scm.com/book/pt-br/v2)
- [Git Fetch Remote Branch](https://stackoverflow.com/questions/9537392/git-fetch-remote-branch)

---

## Sobre o processo de Merge / Pull Request

O merge pode ser feito pela linha de comando, porém não é uma má ideia usar a plataforma remota para isso (Github. Gitlab, Bitbucket etc.). Assim o estado e processo de todos os desenvolvedores é o mesmo.

Após um push, o desenvolvedor abre uma merge request, indicando o branch de origem para que seja feito a união dos conteúdos.

---

## Sugestão para mensagem dos commits

As plataformas Github, Bitbucket e Gitlab possuem uma funcionalidade que envolve trechos das mensagens de commit com links para issues.

Por exemplo: ao adicionar na mensagem do commit o # seguido do número da Issue.

```bash
git commit -m "Issue #17 , faz o que é descrito na Issue"
```

O Github, Bitbucket e Gitlab vão envolver o '#17' com uma ancora HTML para a Issue em questão.
Quando renderizar a página que lista os diretórios e arquivos, vai deixar algo assim:

```html
Issue <a href="/issue/17">#17</a> , faz o que é descrito na Issue
```

A ancora é o próprio servidor git que coloca no momento que renderiza a página.
