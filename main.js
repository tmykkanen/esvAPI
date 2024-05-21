// import './style.css';
async function getText(query) {
  // eslint-disable-next-line prefer-template
  const params = new URLSearchParams({
    q: query,
    'include-footnotes': false,
  }).toString();

  const url = `https://api.esv.org/v3/passage/text/?${params}`;

  const response = await fetch(url, {
    headers: {
      Authorization: 'Token 6b4647be9ffb5c6b313ea3b0cf262e4c9e06ecb4',
    },
  });
  const result = await response.json();
  // await console.log(result.passages[0]);
  return result.passages[0];
}

async function wrapper() {
  console.log(await getText('Gen 1:1'));
}

wrapper();
