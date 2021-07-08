const books=require("./database")

//Objetivo: pegar o input de categorias

const readline=require('readline-sync')

const enrtry= readline.question('Deseja buscar um livro? S/N ')

if(enrtry.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis:')
    console.log('Romance', '- Terror', '- Policial')

    const entradaCategoria=readline.question('Qual categoria você escolhe?')
    const retorno = books.filter(book => book.category === entradaCategoria)

    console.table(retorno)
}else{
    const booksOrder= books.sort((a,b)=>a.pages -b.pages)
    console.log('Esse são todos os livros disponiveis: ')
    console.table(booksOrder)
}
