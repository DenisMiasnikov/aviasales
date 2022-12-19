/* eslint-disable no-return-await */
/* eslint-disable no-underscore-dangle */
export default class TicketService {
  constructor() {
    this._apiBase = 'https://aviasales-test-api.kata.academy';
  }

  async getSearchId() {
    const res = await fetch(`${this._apiBase}/search`);
    if (!res.ok) {
      throw new Error(`Could not fetch, recieved ${res.status}`);
    }
    return await res.json();
  }

  async getTickets(searchId) {
    const res = await fetch(`${this._apiBase}/tickets?searchId=${searchId}`);
    if (!res.ok) {
      throw new Error(`Could not fetch, recieved ${res.status}`);
    }
    return await res.json();
  }
}

// // src=`http://pics.avs.io/99/36/${carrier}.png`
// {
//   /* <img src="http://pics.avs.io/99/36/S7.png" alt="" /> */
// }
