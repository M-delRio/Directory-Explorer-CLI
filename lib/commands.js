const axios = require('axios').default;

const baseURL = "http://localhost:3001/folders"

// const headers = {
//   "": ""
// }

const getFolderData = async (targetRelativeFolder) => {
  console.log(targetRelativeFolder);

  const params = {
    "path": targetRelativeFolder,
  };

  const config = {
    data: params
    // headers: headers
  }

  try {
    // const response = await request.get();
    const response = await axios.get(baseURL, config);

    // console.log(response.data);
    console.log(JSON.stringify(response.data, null, 4))

  } catch (error) {
    console.log(JSON.stringify(response.data, null, 4))
  }
};

module.exports = { getFolderData };