const initialState = {
  username: "",
  id: "",
  img: ""
};

// ####################
// ### Action Types ###
// ####################
const UPDATE = "UPDATE";

// ######################
// ### Action Builder ###
// ######################
export function update(id, username, img) {
  return {
    type: UPDATE,
    payload: {
      id: id,
      username: username,
      img: img
    }
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}