//the function is used to send a patch request(update just the likecount field)
const UpdateLikes = async (id: number, likeCOUNT: number) => {
  const url = 'http://localhost:8318/api/likes/' + id; //send the id in the url, patchmapping require it

  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzE1ODU4NzIzLCJhdXRoIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzE1NzcyMzIzfQ.hSDXOWxJW6iFvK_MfZ2eL67zkcPvSSv1h3gyr20eCQbYLEZx9WP7bqe9rKEQdhPHF2xIl0N3xagmu0-vZLCWAg';
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
