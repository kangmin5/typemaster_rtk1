import { IArticle } from '@/types'
import React from 'react'
type Props = {
    article: IArticle
    deletePost: (id:number)=>void
}
 const Article : React.FC<Props>= ({article,deletePost}) =>  {
  return (
      <div>
          <h1>게시글</h1>
          <h1>글번호: {article.artId }</h1>
          <h3>제목: {article.title }</h3>
          <h3>내용: {article.content }</h3>
          <button onClick={() => deletePost(article.artId)}>삭제</button>
    </div>
  )
}
export default Article