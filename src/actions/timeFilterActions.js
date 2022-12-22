export const handleCheap = () => ({
  type: 'cheap',
  payload: {
    cheap: true,
    fast: false,
    comod: false,
  },
});
export const handleFast = () => ({
  type: 'fast',
  payload: {
    cheap: false,
    fast: true,
    comod: false,
  },
});
export const handleComod = () => ({
  type: 'comod',
  payload: {
    cheap: false,
    fast: false,
    comod: true,
  },
});

export function resetTicketsOnPage() {
  return {
    type: 'SHOW_LESS_TICKETS',
  };
}
