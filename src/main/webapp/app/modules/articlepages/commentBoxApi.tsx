const PostComments = async (articleID: number, userID: number, commentTEXT: String) => {
  const url = 'http://localhost:8318/api/comments';

  const requestBody = JSON.stringify({
    commentText: commentTEXT,
    likes: articleID,
    user_id: userID,
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
      throw new Error('Network response was not ok');
    }

    console.log(articleID);
    console.log(userID);
    console.log(commentTEXT);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
};

export default PostComments;
