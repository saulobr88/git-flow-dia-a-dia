# Setup e outras opções

Em casos que já existem repositórios no Github, faremos a alteração do repositório remoto "origin", o novo "origin" será o Gitlab (por exemplo). 

*[O conteúdo dentro de colchetes é a descrição do que deve ser inserido]


### Passo 1: Git Setup
**Git global setup**

    git config --global user.name "[SEU USUARIO NO NOVO AMBIENTE]"
    git config --global user.email "[SEU E-MAIL]"


**Git local setup**

    git config --local user.name "[SEU USUARIO NO NOVO AMBIENTE]"
    git config --local user.email "[SEU E-MAIL]"

Ref.: https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration

`config --local` é especifico para o repositório

`config --global` é o valor usado para todos os demais momentos em que o comando git é usado.


### Passo 2: Remote set-url

    cd project_folder
    git remote add github https://github.com/OrganizacaoA/frontend
    git remote set-url origin https://gitlab.com/OrganizacaoA/frontend.git


Agora sempre que usarmos algo referente ao remote `origin` estaremos falando do Gitlab; e sempre que usarmos algo referente ao remote `github` estaremos falando sobre os repositórios no Github.

Ref.: https://docs.github.com/pt/github/using-git/changing-a-remotes-url

Os passos 3, 4 e 5 são instruções para possíveis cenários. Essas instruções podem ser encontradas na tela inicial dos repositórios nas suas respectivas plataformas (Github, Gitlab, Bitbucket etc.).

### Passo 3: Create a new repository

    git clone https://gitlab.com/OrganizacaoA/frontend.git
    cd frontend
    touch README.md
    git add README.md
    git commit -m "add README"
    git push -u origin master

### Passo 4: Push an existing folder

    cd existing_folder
    git init
    git remote add origin https://gitlab.com/OrganizacaoA/frontend.git
    git add .
    git commit -m "Initial commit"
    git push -u origin master

### Passo 5: Push an existing Git repository

    cd existing_repo
    git remote rename origin old-origin
    git remote add origin https://gitlab.com/OrganizacaoA/frontend.git
    git add .
    git push -u origin --all
    git push -u origin --tags