const FetchArticleLikes = async () => {
  const url = 'http://localhost:8318/api/likes'; //url address to access the api

  const token =
    sessionStorage.getItem('jhi-authenticationToken')?.substring(1, sessionStorage.getItem('jhi-authenticationToken').length - 1) || '';
  //used the above token to access the API
  //the code initiate a GET request to the specified URL with the token. Use Fetch() to make a HTTP request.
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //this check if the response is with OK status(200..)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    //if the response is good this parse the response body as JSON using json().
    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
};

export default FetchArticleLikes;
