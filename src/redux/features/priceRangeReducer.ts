// priceRangeReducer.ts
export interface PriceRangeState {
  min: number;
  max: number;
}

const initialState: PriceRangeState = {
  min: 0,
  max: 1000,
};

const priceRangeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_PRICE_RANGE":
      return {
        ...state,
        min: action.payload.min,
        max: action.payload.max,
      };
    default:
      return state;
  }
};

export default priceRangeReducer;
