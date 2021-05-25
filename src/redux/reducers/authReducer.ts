import types from '../types';

const initialState = {
	checking: true,
	uid: null,
};

const authReducer = (
	state = initialState,
	action: { type: string; payload?: any }
) => {
	switch (action.type) {
		case types.AUTH_SIGNIN:
			return { ...state, checking: false, uid: action.payload };
		case types.AUTH_SIGNUP:
			return { ...state, checking: false, uid: action.payload };
		case types.AUTH_CHECKING_FINISH:
			return {
				...state,
				checking: false,
			};
		case types.AUTH_LOGOUT:
			return { uid: null, checking: false };
		default:
			return state;
	}
};

export default authReducer;
