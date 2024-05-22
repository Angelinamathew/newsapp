const GetComments = async (articleID: number) => {
  const url = `http://localhost:8318/api/comments/getComments?articleId=${articleID}`;

  try {
    const token =
      sessionStorage.getItem('jhi-authenticationToken')?.substring(1, sessionStorage.getItem('jhi-authenticationToken').length - 1) || '';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
};

export default GetComments;
