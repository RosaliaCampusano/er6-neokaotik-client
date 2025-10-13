import { URL } from '../helpers/constants';

export const sendTokenRequest = async (firebaseToken: string) => {
  console.log('Sending Token request to server...');
  const response = await fetch(/*URL.render*/'http://192.168.0.24:3000/api/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tokenId: firebaseToken }),
  });

  console.log(`Token request completed.`);

  return response;
};
