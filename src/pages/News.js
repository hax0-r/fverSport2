import React from 'react';
import '../styles/News.css';

const newsArticles = [
// Sample news artciles added for reference - CHANGE with actual content
 {
   title: '  Club Seminar Success',
   date: 'March 10, 2024',
   text: 'Our recent seminar on   strategies was a great success...',
   imageUrl: '/path-to-your-image.jpg'
 },
 {
   title: '  Club Seminar Success',
   date: 'March 10, 2024',
   text: 'Our recent seminar on   strategies was a great success...',
   imageUrl: '/path-to-your-image.jpg'
 },
 {
   title: '  Club Seminar Success',
   date: 'March 10, 2024',
   text: 'Our recent seminar on   strategies was a great success...',
   imageUrl: '/path-to-your-image.jpg'
 },
 {
   title: '  Club Seminar Success',
   date: 'March 10, 2024',
   text: 'Our recent seminar on   strategies was a great success...',
   imageUrl: '/path-to-your-image.jpg'
 },
];


const NewsArticle = ({ title, date, text, imageUrl }) => (
 <div className="news-article">
   <h2>{title}</h2>
   <p className="date">{date}</p>
   <p>{text}</p>
   {imageUrl && <img src={imageUrl} alt={title} />}
 </div>
);


const NewsPage = () => (
 <div className="news-page">
   <h1 className="news-header">NEWS</h1>
   <div className="news-container">
   {newsArticles.map((article, index) => (
     <NewsArticle key={index} {...article} />
   ))}
   </div>
 </div>
);
export default NewsPage;