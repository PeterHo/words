import path from 'path';

let constants = {
    HOME_PATH : process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
    FILES_PATH : `${path.resolve(constants.HOME_PATH, './anote/files')}`,
    DB_PATH : `${path.resolve(constants.HOME_PATH, './anote/dbs')}`,
    TMP_FILES_PATH : `${path.resolve(constants.HOME_PATH, './anote/tmp_files')}`,
    TMP_IMAGE_PATH : `${path.resolve(__dirname, '../tmp/tmp.jpeg')}`,
};

export default constants;
