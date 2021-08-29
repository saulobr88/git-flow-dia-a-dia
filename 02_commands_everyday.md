# Comandos Cotidianos (dia a dia)

## Sempre manter os Branches mais importantes atualizados:

Todos os dias, antes de começar a trabalhar, atualizar os principais branches do projeto. Seguir Git Flow, na medida do possível.

### 1 - Pull master/main
```
git pull origin master
```

### 2 - Pull develop/development/dev

    git pull origin develop

---
## Fluxo ao criar e trabalhar com um novo Branch
### 1 - Criar novo branch

    git checkout -b 123-issue-que-foi-aberta

### 2 - Add e Commit no novo branch

    git commit -a -m "Added command in README.md to publish project Assets"

### 3 - push no branch remote

    git push origin 123-issue-que-foi-aberta

### 4 - Se houve mais uma atualização e quiser unir ao commit anterior

    git commit --amend

### 5 - Para forçar o push:

    git push -f origin 123-issue-que-foi-aberta

* [Git Flow](https://jeffkreeftmeijer.com/git-flow/)
* [Git Book](https://git-scm.com/book/pt-br/v2)

---
## Sobre o processo de Merge

O merge pode ser feito pela linha de comando, porém não é uma má ideia usar a plataforma remota para isso (Github. Gitlab, Bitbucket etc.). Assim o estado e processo de todos os desenvolvedores é o mesmo.

Após um push, o desenvolvedor abre uma merge request, indicando o branch de origem para que seja feito a união dos conteúdos.