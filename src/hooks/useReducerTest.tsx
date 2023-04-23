import { useReducer } from "react";

type State = {
  name: string;
  gender: string;
  profileProp: {
    address: string;
    postalCode: string;
    city: string;
    state: string;
    country: string;
  };
  family: {
    married: boolean;
    spouseName: string;
  };
};

const initialState = {
  name: "Alarape",
  gender: "",
  profileProp: {
    address: "",
    postalCode: "",
    city: "",
    state: "",
    country: "",
  },
  family: {
    married: false,
    spouseName: "",
  },
};
type Action =
  | { type: "updateProfile"; payload: { key: string; val: string } }
  | { type: "updateProfileProp"; payload: { key: string; val: string } };

function stateReducer(state: State, action: Action) {
  switch (action.type) {
    case "updateProfile":
      const {
        payload: { key, val },
      } = action;
      return { ...state, [key]: val };

    case "updateProfileProp":
      return {
        ...state,
        profileProp: {
          ...state.profileProp,
          [key]: val,
        },
      };
    default: {
      return {
        ...state,
      };
    }
  }
}

const userReducer = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios("https://jsonplaceholder.typicode.com/posts");
  //     setData(result.data);
  //   }
  //   fetchData();
  // }, []);
  return {
    state,
    dispatch,
  };
};

export default userReducer;
