export type BookId = string;
export type Genre = "fiction" | "science" | "history" | "fantasy" | "dystopian";
export type LoanStatus = "available" | "borrowed";

export interface BookOptions {
  id: BookId;
  title: string;
  author: string;
  year: number;
  genre: Genre;
}