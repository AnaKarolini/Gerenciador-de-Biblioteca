# Gerenciador de Biblioteca 
## Repositorio destinado ao projeto Integrador dos instegrantes:

* ALEXSANDRA OLIVEIRA DE JESUS
* ANA KAROLINI BLOEMER NOTH
* GUSTAVO FERNANDES COSTA
* KAUE OSMAR BORNHOFEN
* MARCELO DE OLIVEIRA SILVA
* TACIO DE PAULO CAVALCANTI FARIAS
* THALITA PEREIRA ALFONSO 

# Descrição 

Desenvolver um aplicativo de gerenciamento de biblioteca intuitivo e eficiente, que permita aos usuários realizar operações como cadastro de livros, empréstimo, reserva, geração de relatórios e administração de usuários de forma fácil e segura.

# Telas

# Diagramas

|          Gerenciador de Biblioteca         |
----------------------------------------------
|                                            |
|                Classes                     |
|                                            |
----------------------------------------------
|                Pessoa                      |
----------------------------------------------
| - id: int                                  |
| - nome: string                             |
| - endereco: string                         |
| - telefone: string                         |
----------------------------------------------
                   /\
                   |
                   |
----------------------------------------------
|                                            |
|               Livro                        |
|                                            |
----------------------------------------------
| - id: int                                  |
| - titulo: string                           |
| - autor: string                            |
| - editora: string                          |
| - anoPublicacao: int                       |
----------------------------------------------
                   /\
                   |
                   |
----------------------------------------------
|                                            |
|              Funcionario                   |
|                                            |
----------------------------------------------
| - id: int                                  |
| - nome: string                             |
| - cargo: string                            |
| - salario: double                          |
----------------------------------------------
                   /\
                   |
                   |
----------------------------------------------
|                                            |
|              Emprestimo                    |
|                                            |
----------------------------------------------
| - id: int                                  |
| - livro: Livro                             |
| - pessoa: Pessoa                           |
| - dataEmprestimo: Date                     |
| - dataDevolucao: Date                      |
----------------------------------------------

#Telas HTML 
