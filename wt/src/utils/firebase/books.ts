import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore';
// import '@/utils/firebase/init' // Initialize FirebaseApp

export type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
};

export async function getBooks(): Promise<Book[]> {
  const books = new Array<Book>();
  const db = getFirestore();
  const booksSnapshot = await getDocs(collection(db, '/books'));

  booksSnapshot.forEach((doc) => {
    const book = doc.data() as Book;
    books.push({ ...book, id: doc.id });
  });

  return books;
}

export async function addBook(book: Book): Promise<void> {
  const db = getFirestore();
  const docRef = doc(db, 'books', book.id);
  await setDoc(
    docRef,
    {
      title: book.title,
      author: book.author,
      price: book.price,
    },
    { merge: true }
  );
}
