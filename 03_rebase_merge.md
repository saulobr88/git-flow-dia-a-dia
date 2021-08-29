## Merge & Rebase

### git-merge - Join two or more development histories together

Ver os desenhos em [Git Docs Merge](https://git-scm.com/docs/git-merge)

### git-rebase - Reapply commits on top of another base tip

Ver os desenhos em [Git Docs Rebase](https://git-scm.com/docs/git-rebase)

### Introdução didática ao git rebase

[![A Better Git Workflow with Rebase](https://img.youtube.com/vi/f1wnYdLEpgI/0.jpg)](https://www.youtube.com/watch?v=f1wnYdLEpgI)

### Git How To - Explicação

#### Merge VS Rebase

O resultado do comando rebase parece muito com o do merge. O branch style atualmente contém todas as suas mudanças, além das mudanças do branch master. A árvore de commits, porém, está um pouco diferente. A árvore de commit do branch style foi reescrita para fazer o branch master parte do histórico de commits. Isso faz com que a cadeia de commits seja mais linear e legível.

#### Quando usar rebase, quando usar merge?
Não use o comando rebase …

1. Se o branch é público e compartilhado. Reescrever tais branches vai atrapalhar o trabalho de outros colegas.
2. Quando o histórico exato de commits do branch é importante (porque o comando rebase reescreve o histórico de commits).

Dadas as recomendações acima, eu prefiro usar rebase para branches locais e de curto prazo e merge para branches em repositórios públicos.

Mais em [Git How To](https://githowto.com/pt-BR/rebasing)