const variables = {
  token : 'd55b4364b880f9fc01c1a1e4ea5f057537e38d82',
  domain : 'bit.ly',
  groupId : '',
};
export const shortenLink = async(link: string) : Promise<any> => {
 const options = {
   method: 'POST',
   headers: {
     Authorization: `Bearer ${variables.token}`,
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     long_url: link,
     domain: variables.domain,
     group_id: variables.groupId,
   }),
 };

 const response = await fetch('https://api-ssl.bitly.com/v4/shorten', options);
 return response.json();
};