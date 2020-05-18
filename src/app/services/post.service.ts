import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, PostWithComments, CommentEmployee } from '../models/post.model';
import { of } from 'rxjs/internal/observable/of';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[];
  private gotData = false;

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    if (!this.gotData) {
      return this.http.get<Post[]>('../../assets/posts.json').pipe(
        shareReplay(1),
        map( response => {
          this.gotData = true;
          this.posts = response;
          return response;
        }));
    } else {
      return of(this.posts).pipe(shareReplay(1));
    }
  }

  public addPost(post: Post): Observable<boolean> {
    post = {
      ...post,
      id: this.posts && this.posts.length ? this.posts.sort((a, b) => b.id - a.id)[0].id + 1 : 1
    };
    this.posts.push(post);
    return of(true);
  }

  public removePost(post: Post): Observable<boolean> {
    this.posts = this.posts.filter(existentPost => existentPost.id !== post.id);
    return of(true);
  }

  public updatePost(post: Post) {
    this.posts = this.posts.map(existentPost => {
      if(existentPost.id === post.id) {
        existentPost = post;
      }
      return existentPost;
    });
    return of(true);
  }

  public treatPost(post): Post {
    post.comments =  [{comment: post.comment, id: 0, field: ''} as CommentEmployee];
    if ( post.comment.indexOf('<employee') > -1) {
      const employees = post.comment.match(/<employee[\s\S]*?><\/employee>/gm);
      const texts = post.comment.split(/<employee[\s\S]*?\<\/employee>.*?/gm).join('\>').split('\>');
      post.comments = [];
      texts.forEach(text => {
        post.comments.push({comment: text, id: 0, field: ''} as CommentEmployee);
        if (employees.length) {
          let cmt = employees.shift();
          post.comments.push({
            comment: cmt,
            id: Number(cmt.match(/id=\"([^"]*)/g)[0].replace('id=\"', '')),
            field: cmt.match(/field=\"([^"]*)/g)[0].replace('field=\"', ''),
          });
        }
      });
    }
    return post;
  }
}
