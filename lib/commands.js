const axios = require('axios').default;

const baseURL = "http://localhost:3001/folders"

// const headers = {
//   "": ""
// }

const getFolderData = async (targetRelativeFolder) => {
  let response;

  const params = {
    "path": targetRelativeFolder,
  };

  const config = {
    data: params
    // headers: headers
  }

  try {
    response = await axios.get(baseURL, config);
    console.log(JSON.stringify(response.data, null, 4))
  } catch (error) {
    if (error.response) {
      // status code that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // no response
      console.log("the request was sent but a reponse was not received from the server");
    } else {
      // error setting up the request
      console.log('Error', error.message);

    }
    console.log("\nsubmitted request:\n\n", error.config);
  }
};

module.exports = { getFolderData };