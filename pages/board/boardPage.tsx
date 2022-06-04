import AddPost from '@/components/board/AddPost'
import Article from '@/components/board/Article'
import { IArticle } from '@/types'
import { InferGetStaticPropsType } from 'next'
import React, { useState } from 'react'

export default function BoardPage({articles}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [articleList, setarticleList] = useState(articles)
    const addPost = async (e:React.FormEvent, formData:IArticle) => {
        e.preventDefault()
        const article: IArticle = {
            artId: Math.random(),
            title: formData.title,
            content: formData.content
        }
        setarticleList([article,...articleList])
    }
    const write = async () => {
        
    }
    const deletePost =async (artId:number) => {
        //filter 사용해서 문제해결
        const arr: IArticle[]=articles.filter((article:IArticle)=>(article.artId !== artId))        
       setarticleList(articles)
    }
    if(!articleList) return <h1> Loading...</h1>

    return (
    <>
            <AddPost  write={addPost} />
            
        {articleList.map((article: IArticle) => (
            <Article key={article.artId} article={article} deletePost={deletePost} />
        ))}
    </>
  )
}

export async function getStaticProps() {
    const res = await fetch(BASE_URL)
    const articles: IArticle[] = await res.json()
    return { props:{articles}}
}

const BASE_URL:string = "http://localhost:8080/articles"
