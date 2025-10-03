export const sendTokenRequest = async (firebaseToken: string) => {
  console.log('Sending Token request to server...');
  const response = await fetch(
    'https://er6-neokaotik-server.onrender.com/api/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenId: firebaseToken }),
    },
  );

  console.log(`Token request completed.`);

  return response;
};
