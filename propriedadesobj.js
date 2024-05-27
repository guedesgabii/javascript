function createBook (title, author, pages){
    const book = {
            bookTitle = title,
            bookAuthor = author,
            bookPages = pages,
            printBook: function (){
                console.log('printing....')
            }
        
        }
        return book
    }
}

const book1 = createBook ('atomic', 'james', 306)
const book2 = createBook('think, napolean',4)

book1.color = 'white'

console.log(book1)