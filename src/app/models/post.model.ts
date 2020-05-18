export interface Post {
  id: number;
  comment: string;
  date: string;
}

export interface PostWithComments extends Post {
  comments?: CommentEmployee[];
}

export interface CommentEmployee {
  id: number;
  field: string;
  comment: string;
}
