import RNFS from 'react-native-fs';

const path = RNFS.DocumentDirectoryPath + 'components/users.json';

RNFS.readFile(path, 'utf8')
    .then(contents => {
        const data = JSON.parse(contents);
    })
    .catch(err => {
        console.log('Failed to read users.json', err);
    });