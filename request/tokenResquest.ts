export const sendTokenRequest = async (firebaseToken: string) => {
  console.log('Sending Token request to server...');
  const response = await fetch(
    'http://10.50.0.50:6000/api/',
    // 'https://er6-neokaotik-server.onrender.com/api/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenId: firebaseToken }),
    },
  );

  console.log(`Token request completed.`)

  return response;
};
