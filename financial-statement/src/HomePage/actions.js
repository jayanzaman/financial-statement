

export const SET_COMPANY = 'SET_COMPANY';

export const setCompany = (ticker) => {
  return {
    payload: ticker,
    type: SET_COMPANY
  }
}
