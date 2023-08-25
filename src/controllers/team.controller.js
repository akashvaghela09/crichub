const { undefinedFilter } = require("../utils/utils");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const axios = require("axios");
const { config } = require("../configs/config");
const { domain } = config;

const getInternationalTeams = async (req, res) => {
  const axiosConfig = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537',
    }
  };

  try {
    // Fetch the HTML content using axios
    const response = await axios.get(`${domain}/cricket-team`, axiosConfig);

    // Create a JSDOM instance with the fetched HTML content
    const dom = new JSDOM(response.data);
    const page = dom.window.document;

    // Query for teams
    let teamsElements = page.querySelectorAll("a.cb-teams-flag-img > img");
    let teamList = [];

    teamsElements.forEach((team) => {
      let parentElement = team.parentNode;
      let parentHref = parentElement.getAttribute("href");

      let teamObj = {
        name: team.getAttribute("title"),
        flag: `${domain}${team.getAttribute("src")}`,
        src: `${domain}${parentHref}`
      };

      teamList.push(teamObj);
    });

    return teamList;
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const getTeams = async (req, res) => {

  let response = await getInternationalTeams();

  res.json({ data: response });
  return;
};

module.exports = {
  getTeams
};
