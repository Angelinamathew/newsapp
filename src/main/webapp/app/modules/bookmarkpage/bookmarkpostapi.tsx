import { useSelector } from 'react-redux';

const PostBookmarks = async (articleID: number, userID: number) => {
  const url = 'http://localhost:8318/api/bookmarks';

  const requestBody = JSON.stringify({
    articleId: articleID,
    userId: userID,
  });

  try {
    const token =
      sessionStorage.getItem('jhi-authenticationToken')?.substring(1, sessionStorage.getItem('jhi-authenticationToken').length - 1) || '';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    if (!response.ok) {
      console.log(token);
      console.log(articleID);
      console.log(userID);
      throw new Error('Network response was not ok');
    }

    console.log(articleID);
    console.log(userID);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
};
export default PostBookmarks;
