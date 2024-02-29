import {listText} from './listText'

function convertToObjects(inputString) {

const lines = inputString.split('\n');
const resultArray = [];

for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('#EXTINF')) {
    const extinfMatch = lines[i].match(/#EXTINF:-1 tvg-id="([^"]*)" tvg-logo="([^"]*)" group-title="([^"]*)",(.*)/);
    if (extinfMatch) {
      const name = extinfMatch[4].trim();
      const logo = extinfMatch[2].trim();
      const groupTitle = extinfMatch[3].trim();

      const url = lines[i + 1].trim();

      const convertedObject = {
        name,
        tvg: {
          id: '',
          name,
          language: '',
          country: '',
          logo,
          url: '',
          rec: '',
        },
        group: {
          title: groupTitle,
        },
        http: {
          referrer: '',
          'user-agent': '',
        },
        url,
        raw: `${lines[i]}\n${lines[i + 1]}`,
        line: i + 1,
        catchup: {
          type: '',
          days: '',
          source: '',
        },
        timeshift: '',
      };

      resultArray.push(convertedObject);
    }
  }
}

return (resultArray);
}


export const getList = () => {
    return convertToObjects(listText)
}