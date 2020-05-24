import { User } from "../types/User";
import { UserActionType, FETCH_USER } from "../types/actions";
const defaultState: User = { user_id: "", name: "" };
const userReducer = (state = defaultState, action: UserActionType): User => {
  switch (action.type) {
    case FETCH_USER:
      return action.user;
    default:
      return state;
  }
};
export { userReducer };
