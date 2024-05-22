// Define a function to delete bookmarks by sending a DELETE request to the server
const DeleteBookmarks = async (articleID: number, userID: number) => {
  // Define the URL of the API endpoint
  const url = 'http://localhost:8318/api/bookmarks';
  // INSERT TOKEN HERE BUT DON'T FORGET TO REMOVE IT BEFORE MERGING
  // Token used for authorization, should be provided by the backend
  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTI4Njk4MCwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1MjAwNTgwfQ.ut_iUaGPOYWn-UIQKvkb5JgZNqpIhOPkhQZCph5yKWJi3gi0VJXrxhMranhbg3q5_beZZOjRrnEWUnE6KdrECw';

  // Create the request body with article ID and user ID
  const requestBody = JSON.stringify({
    articleId: articleID,
    userId: userID,
  });

  try {
    // Send a DELETE request to the server
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`, // Include authorization token in the request header
        'Content-Type': 'application/json', // Specify content type as JSON
      },
      body: requestBody, // Pass the request body
    });

    // Check if the response is not ok (status code is not in the range 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Log the article ID and user ID for debugging purposes
    console.log(articleID);
    console.log(userID);

    // Parse the response body as JSON
    const data = await response.json();
    return data; // Return the parsed JSON data
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error('There was a problem with your fetch operation:', error);
    throw error; // Throw the error to be caught by the caller
  }
};

export default DeleteBookmarks; // Export the DeleteBookmarks function
