import ky from 'ky';

export default ky.create({ prefixUrl: process.env.REACT_APP_API });
