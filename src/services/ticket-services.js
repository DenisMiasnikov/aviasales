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
    const data = await res.json();
    return data;
  }

  async getTickets(searchId) {
    const res = await fetch(`${this._apiBase}/tickets?searchId=${searchId}`);
    if (!res.ok) {
      throw new Error(`Could not fetch, recieved ${res.status}`);
    }
    const data = await res.json();
    return data;
  }
}
