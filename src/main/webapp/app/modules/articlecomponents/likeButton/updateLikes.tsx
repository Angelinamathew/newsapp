//the function is used to send a patch request(update just the likecount field)
const UpdateLikes = async (id: number, likeCOUNT: number) => {
  const url = 'http://localhost:8318/api/likes/' + id; //send the id in the url, patchmapping require it

  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTY1MTAwNSwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1NTY0NjA1fQ.YJZUU1VW275dhPzaicgzRLpaV9y63w24TKxX-PW4-nYex46FW0J2oN_50uie6h_h_v-57UJbHbyDpWHBKgh2JA';

  const requestBody = JSON.stringify({
    id: id,
    likeCount: likeCOUNT,
  });

  try {
    //send the request with patch method to update the likeCount
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    console.log(likeCOUNT);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
};

export default UpdateLikes;
