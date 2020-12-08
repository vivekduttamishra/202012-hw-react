import { setTimeout } from "timers";
import { Book } from "../model/Book";

import { delay } from "./utils";

export class LocalBookService {

    private books : Book[]=[];

    constructor(){
        this._populateBooks();
    }

    private _populateBooks(){
        this.books=[
            {
                "_id": "5f4fd116c277b45acc698bce",
                "isbn": "9781393495574",
                "title": "The Accursed God",
                "author": "Vivek Dutta Mishra",
                "pages": 380,
                "price": 199,
                "rating": 4.9,
                "votes": 49,
                "description": "THE LOST EPIC ============ The story of the epic battle of Kurukshetra has been told and retold for ages. Millennia of dust, fables, imaginations — and the epic itself is lost. What remained is the story of a family feud and ambition of Kauravas and Pandavas. But why, then, was this an epic war? Why entire Aryavart plunged into this first real world-war? Why the echo of this ancient war still resonates after all those centuries? Rediscover the lost epic whose origin lies in the birth of the Kurukshetra that had tasted its first blood over a hundred years before the final Mahabharata war. Discover the complete saga of Mahabharata which goes far and beyond just Kauravas and Pandavas and their ambitions. THE ACCURSED GOD ================ Long before the epic battle, long before even the birth of Kurukshetra, a man swore on his father’s pyre to avenge against the mightiest empire, any civilization had ever seen. Between his might and near-certain destruction of the Empire, stood a warrior, who rose like a phoenix from the ashes of his seven dead brothers — taking the mantle of a fabled Accursed God. In the clash that followed, Aryavart heard several more oaths by the side of more burning pyres, until, a young king decided that no price is too high for peace. Little did he know that the price would be a war engulfing the entire Aryavart, where few would live to tell the tale. And only one man can delay the inevitable if not prevent it. He is the accursed God and even he doesn’t know that destiny is like a quicksand, the more he tries to prevent it, the faster Aryavart moves towards the ultimate catastrophe. Discover the saga of a man’s journey to that of a legendary and universally hated Accursed God, the saga of the ruthless ambitions and unfulfilled loves, endless deceits and vengeful oaths, and the saga of the battles to prevent the ultimate war. TESTIMONIALS ============= When is the last time you finished a book and discover something? Here is a gripping and intriguing take on the greatest epic of all time through the eyes of its pivotal character that leaves your mind exhilarated, adding a fresh perspective to the tale that’s known, yet unknown. Throughout the fast action-packed book, the author masterfully blends politics, war and science and blurs the gap between love and hate, peace and war, and fiction and reality. A must-read novel which will leave you wanting for more. --- Colonel Avanish, Indian Army",
                "tags": [
                    "epic",
                    "indian",
                    "mahabharata",
                    "bhishma",
                    "history"
                ],
                "series": "The Lost Epic",
                "seriesIndex": 1,
                "releaseDate": new Date("2020-01-14T18:30:00.000Z"),
                "cover": "9781393495574.jpg"
            },
            {
                "_id": "5f4fb1e86980a8fb2b76e84b",
                "isbn": "9781408855652",
                "title": "Harry Potter and the Philosopher's Stone",
                "author": "JK Rowling",
                "pages": 35,
                "price": 340,
                "rating": 4.7,
                "votes": 10192,
                "description": "Harry Potter and the Philosopher's Stone was J.K. Rowling's first novel, followed by the subsequent six titles in the Harry Potter series, as well as three books written for charity: Fantastic Beasts and Where to Find Them, Quidditch Through the Ages and The Tales of Beedle the Bard. The Harry Potter novels have now sold over 450 million copies worldwide and been translated into 78 languages.",
                "tags": [
                    "harry potter",
                    "fiction",
                    "fantasy",
                    "best-seller"
                ],
                "series": "Harry Potter",
                "seriesIndex": 1,
                "releaseDate": new Date("1997-06-25T18:30:00.000Z"),
                "cover": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FHarry-Potter-Philosophers-Stone-Rowling%2Fdp%2F1408855658&psig=AOvVaw0-TKzkVVUIGTpRqNJY4rbZ&ust=1599145505822000&source=images&cd=vfe&ved=2ahUKEwjD9eiv38rrAhXO9jgGHcvSCbkQjRx6BAgAEAc"
            },
            {
                "_id": "5f4fb4e66980a8fb2b76e84c",
                "isbn": "1408855666",
                "title": "Harry Potter and theHarry Potter and the Chamber of Secrets ",
                "author": "JK Rowling",
                "pages": 384,
                "price": 259,
                "rating": 4.7,
                "votes": 8518,
                "description": "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone . Dobby's sinister predictions seem to be coming true.",
                "tags": [
                    "harry potter",
                    "fiction",
                    "fantasy",
                    "best-seller"
                ],
                "series": "Harry Potter",
                "seriesIndex": 2,
                "releaseDate": new Date("1998-07-01T18:30:00.000Z"),
                "cover": "https://www.scholastic.com/content5/media/products/66/9780439064866_mres.jpg"
            },
            {
                "_id": "5f4fb5fc6980a8fb2b76e84d",
                "isbn": "1408855674",
                "title": "Harry Potter and the Prisoner of Azkaban ",
                "author": "JK Rowling",
                "pages": 480,
                "price": 400,
                "rating": 4.6,
                "votes": 4850,
                "description": "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.",
                "tags": [
                    "harry potter",
                    "fiction",
                    "fantasy",
                    "best-seller"
                ],
                "series": "Harry Potter",
                "seriesIndex": 3,
                "releaseDate": new Date("1999-07-08"),
                "cover": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvlebazaar.in%2FHarry-Potter-and-the-Prisoner-of-Azkaban&psig=AOvVaw0wjz31Tbzt-7AlC0U5uMRH&ust=1599146078341000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi7kMLhyusCFQAAAAAdAAAAABAI"
            },
            {
                "_id": "5f4fb70f6980a8fb2b76e84e",
                "isbn": "1408855682",
                "title": "Harry Potter and the Goblet of Fire",
                "author": "JK Rowling",
                "pages": 640,
                "price": 450,
                "rating": 4.7,
                "votes": 4503,
                "description": "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.",
                "tags": [
                    "harry potter",
                    "fiction",
                    "fantasy",
                    "best-seller"
                ],
                "series": "Harry Potter",
                "seriesIndex": 4,
                "releaseDate": new Date("2000-07-08"),
                "cover": "https://cdn11.bigcommerce.com/s-z7qq7adctg/images/stencil/500x659/products/674092/774560/btcl__84587.1522183285.jpg?c=2"
            }
        ];
    }

    // getAllBooks(): Promise<Book[]> {
        
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             resolve(this.books);
    //         },2000); //simulated delay
    //     });
    // }


    async getBooks():Promise<Book[]>{
        await delay(1000); //wait for this time. Real world there will be natural delay
        return this.books; //now please return the 
    }


    async getBookByIsbn(isbn: string): Promise<Book|undefined> {
        await delay(1000);
        return this.books.find(b=> b.isbn===isbn);
    }

    async addBook(book: Book): Promise<Book> {
        await delay(1000);
        this.books.push(book);
        return book;
    }

}