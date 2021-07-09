
//Objetivo: pegar o input de categorias e criar fitros

const books=require("./database")

const readline=require('readline-sync')

const entry= readline.question('Deseja buscar um livro? S/N ')

if(entry.toUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis: ')
    console.log('Romance', '- Terror', '- Policial', '- Marketing e Vendas ', '- Desenvolvimento pessoal ', '- Filosofia')

    const categoryEntry= readline.question('Qual categoria você escolhe?  ')
    const retorno = books.filter(book => book.category === categoryEntry).sort((a,b) => a.name - b.name) 

    console.table(retorno)
}else{
    const booksOrder= books.sort((a,b)=>a.author - b.author)
    console.log('Esse são todos os livros disponiveis: ')
    console.table(booksOrder)
}
