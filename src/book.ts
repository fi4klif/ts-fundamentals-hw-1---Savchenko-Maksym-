import type { BookId, Genre, LoanStatus, BookOptions } from "./types";

export class Book {
  id: BookId;
  title: string;
  author: string;
  year: number;
  genre: Genre;

  status: LoanStatus;
  borrowedBy: string | null;

  constructor(opts: BookOptions) {
    this.id = opts.id;
    this.title = opts.title;
    this.author = opts.author;
    this.year = opts.year;
    this.genre = opts.genre;
    this.status = "available";
    this.borrowedBy = null;
  }

  getStatus(): LoanStatus {
    return this.status;
  }

  markBorrowed(personName: string): void {
    if (this.status === "borrowed") {
      throw new Error(`Already borrowed by ${this.borrowedBy}`);
    }
    this.status = "borrowed";
    this.borrowedBy = personName;
  }

  markReturned(): void {
    if (this.status === "available") {
      throw new Error("Already available");
    }
    this.status = "available";
    this.borrowedBy = null;
  }

  getInfo(): string {
    let statusString = "[Available]";
    if (this.status === "borrowed") {
      statusString = `[Borrowed by ${this.borrowedBy}]`;
    }
    return `${this.title} — ${this.author} (${this.year}), ${this.genre} ${statusString}`;
  }
}