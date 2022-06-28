export enum Status {
  available = "available",
  borrowed = "borrowed",
}

export interface Book {
  id: string;
  title: string;
  author: string;
  status: Status;
}
