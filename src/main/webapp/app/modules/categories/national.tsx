import React, { useEffect, useState } from 'react';
import ArticleModal from '../articlepages/standardarticlepage';
import FetchArticles from '../articleapi/fetcharticles';

const National = () => {
  const [articleData, setArticleData] = useState([]);
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(null);
  const [firstHeadlineArticle, setFirstHeadlineArticle] = useState(null);

  useEffect(() => {
    FetchArticles()
      .then(data => {
        setArticleData(data);
        const firstHeadline = data.find(article => article.category === 'NATIONAL');
        setFirstHeadlineArticle(firstHeadline);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  const handleClick = index => {
    setSelectedArticleIndex(index);
  };

  const filteredArticleData = articleData.filter(article => article.category === 'NATIONAL');

  return (
    <div>
      <h1 className="category-header">National</h1> {/* Add this line */}
      <div>
        {firstHeadlineArticle && (
          <div className="headline-story" onClick={() => handleClick(0)}>
            <h2 className="headline-text">{firstHeadlineArticle.title}</h2>
            <img src={firstHeadlineArticle.urlToImage} className="headline-image"></img>
            <div className="headline-story-div">
              <p className="headline-story-text">{firstHeadlineArticle.shortDescription}</p>
            </div>
          </div>
        )}

        {filteredArticleData.map((article, index) =>
          index === 0 ? null : (
            <div key={index} className="article-box" onClick={() => handleClick(index)}>
              <h3 className="article-headline">{article.title}</h3>
              <img src={article.urlToImage} alt="" className="article-image" />
              <p className="article-short-text">{article.shortDescription}</p>
            </div>
          ),
        )}
        {selectedArticleIndex !== null && (
          <ArticleModal article={filteredArticleData[selectedArticleIndex]} onClose={() => setSelectedArticleIndex(null)} />
        )}
      </div>
    </div>
  );
};

export default National;

//Container encapsulating the WHOLE THING
//Card is a formatt(Structure)
//Row,Col used for layout
//     <Container>
//       <Card>
//         <CardHeader>
//           <h2>National and world</h2>
//         </CardHeader>
//         <CardBody>
//           <Row>
//             <Col xs="12" md="6">
//               <CardImg
//                 top
//                 width="100%"
//                 src="https://cdn.pixabay.com/photo/2017/05/19/22/36/statue-of-liberty-2327760_1280.jpg"
//                 className="world-headline"
//               />
//             </Col>
//             <Col xs="12" md="6"></Col>
//           </Row>
//           <CardText className="world-body">
//             National news covers significant events, developments, and issues within a particular country. It encompasses a wide range of
//             topics including politics, economy, society, culture, and more. National news provides citizens with important information about
//             their country, helping them stay informed about current affairs, government policies, social trends, and events that impact
//             their lives directly or indirectly. This type of news reporting plays a crucial role in shaping public opinion, promoting
//             transparency, and fostering civic engagement within a nation.
//           </CardText>
//         </CardBody>
//       </Card>
//     </Container>
//   );
// };

// export default World;
