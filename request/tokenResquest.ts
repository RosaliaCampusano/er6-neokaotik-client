export const sendTokenRequest = async (firebaseToken: string) => {
  const response = await fetch(
    //https://er6-neokaotik-server.onrender.com/api/'
    'http://10.50.0.50:6000/api/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenId: firebaseToken }),
    },
  );

  return response;
};
