import Head from "next/head";
import React from "react";
import Link from "next/link";
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown';



const Home = ({posts}) => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <div className="hero">
      <h1 className="hero-title">Umut Z</h1>
      <div className="hero-social-links">
        <Link href='https://www.linkedin.com/in/umut-zengin'>
          <a className="social-link">LinkedLn</a>
          </Link>
        <Link href='https://www.instagram.com/umtzngn'>
          <a className="social-link">Instagram</a>
          </Link>
      </div>
    </div>
{posts.map(post =>(
    <div className='blog'>
      <h2 className="blog-title">
        <Link href={post.slug}>
          <a className="blog-title-link">{post.title}
            </a>
            </Link> 
      </h2>
      <div className="blog-text">
      <ReactMarkdown source={post.details} /> 
      </div>
      <div className="blog-date">{post.date}</div>
    </div>
))}

    <style jsx>{`
      .container{
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
      }

      .hero{
        text-align: center;
        margin: 96px 0 ;
      }
      
      .social-link:first-child{
        margin-right: 8px;
      }

      .hero-title{
        font-size: 48px;
      }

      .blog-date{
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px;

      }

      a{
        color:#5207F2;
        text-decoration: none;
      }

      `}</style>
      

  </div>
);


Home.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:3000/api/posts');
  const json =await res.json();
  return { posts : json.posts };
};

export default Home;
