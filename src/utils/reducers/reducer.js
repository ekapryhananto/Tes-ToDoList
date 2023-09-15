const initialState = {
  dataList: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        isLoggedIn: true,
        dataList: action.data,
      };
    case 'UPDATE':
      var newList = [...state.dataList];
      var findIndex = state.dataList.findIndex(value => {
        return value.id === action.data.id;
      });
      newList[findIndex] = action.data;
      return {
        ...state,
        dataList: newList,
      };
    case 'DELETE':
      var newList = [...state.dataList];
      var findIndex = state.dataList.findIndex(value => {
        return value.id === action.id;
      });
      newList.splice(findIndex, 1);
      return {
        ...state,
        dataList: newList,
      };
    default:
      return state;
  }
};
export default Reducer;
