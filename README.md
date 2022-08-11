<p align="center">
    <img src="img/espiral-de-fibonacci-800x531.jpg" alt="Fibonacci Espiral" />
</p>
<div align="center">
    <h1>Git (Flow) no dia a dia</h1>
</div>

## Introdução

_[Work in progress] Este documento está em construção_

Existem muitas formas de se trabalhar com git, para versionar, distribuir e organizar a linha do tempo do desenvolvimento de um projeto de software (não se limitando apenas a códigos de linguagens de programação). Dentre os fluxos de trabalho (_workflows_), podemos citar os modelos `Centralized`, `Feature Branch Workflow`, `Gitflow` e `Fork & Merge`. Cada um dos modelos possui pontos positivos e pontos negativos, conforme é descrito em [Comparing Git Workflows
](https://www.codingblocks.net/podcast/comparing-git-workflows/).

Levando em conta a minha experiência trabalhando com equipes e criando fluxos de [CI/CD](https://www.redhat.com/pt-br/topics/devops/what-cicd-pipeline), eu cheguei na conclusão que utilizar o **gitflow** é o ideial para trabalhar em equipe, com ou sem a utilização da prática de _pair programming_ e até mesmo em repositórios que só há um contribuidor (a famosa "EUquipe").

Neste sentido, um roteiro de apoio para adaptação de equipes possui função importante para alinhar o que se espera como prática de trabalho em repositórios git. [Sérgio Vieira](https://gist.github.com/sergiosvieira/8dcd5f43ba822b7cd5b7) apresenta um roteiro para adoção de um fluxo de trabalho com o git similar ao **gitflow**. Aqui eu tento trazer um fluxo simplificado, de forma que possa ser adotado por equipes de forma rápida sem grandes prejuizos de tempo e esforço.

A Figura abaixo apresenta o Diagrama original do **Gitflow**. Nos primeiros estágios de um projeto de software (primeiras _sprints_) ramos (_branches_) de _hotfixes_ e _bugfixes_ podem ser tratados como ramos de _features_, que devem possuir _issues_ registradas no repositório. O Github, Bitbucket e Gitlab possuem o recurso de abrir _issues_ nos repositórios.

<p align="center">
    <img src="img/gitflow-original.png" alt="Git flow Diagram" />
    <span>Diagrama original do Gitflow</span>
</p>

Ramos de relase de software podem ser substituidos pelos ramos _develop_ e _main_ (ou _master_). Como hoje em dia é comum haver _pipelines_ de CI/CD, uma estratégia para reduzir os passos do processo é unificar o processo de _deploy_ com algum evento nos ramos selecionados. Utilizar tags para disparar eventos de _deploy_ também é uma opção válida.

Para informações mais detalhadas, instruções e comandos git, há seções de textos com conteúdos que auxilam em tarefas comuns e situações que podem aparecer no cotidiano do desenvolvedor. O conteúdo está distribuido conforme segue.

## Seções

- [Comandos iniciais - Github](01_github-start-commands.md)
- [Comandos Cotidianos](02_commands_everyday.md)
- [Resets Hard & Soft](02.1_reset_hard_soft.md)
- [Git Stash: Conhecendo e utilizando um dos comandos mais práticos para o versionamento de seu código](https://medium.com/wooza/git-stash-conhecendo-e-utilizando-um-dos-comandos-mais-pr%C3%A1ticos-para-o-versionamento-de-seu-c%C3%B3digo-a4dab3ac70da)
- [Rebase e Merge](03_rebase_merge.md)
- [Utilização de Chaves e conexões SSH](04_ssh_keys.md)
- [Setup e outras opções](05_settings.md)

## Referências

- [Comparing Git Workflows](https://www.codingblocks.net/podcast/comparing-git-workflows/)

- [GIT WORKFLOW COMPARISONS](https://drincruz.github.io/slides/git-workflow-comparison/)

- [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

- [Utilizando o fluxo Git Flow](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04)

- [Fluxo de trabalho de Gitflow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)

- [Git How to](https://githowto.com/pt-BR)

- [Git Documentation](https://git-scm.com/doc)

- [GIT: 5 comandos que todo desenvolvedor deveria conhecer](https://blog.umbler.com/br/comandos-do-git-para-desenvolvedores/)
