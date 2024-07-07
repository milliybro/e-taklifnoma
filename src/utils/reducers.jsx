const INITIAL_STATE = {
  loading: false,
  user: {},
  auth_modal: false,
  ui_modal_show: false,
  ui_modal_body: null,
  my_order: { currency: 2 },
  my_places: [],
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action?.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action?.payload,
      };
    case "SET_AUTH_MODAL":
      return {
        ...state,
        auth_modal: action?.payload,
      };
    case "CLEAR_ORDER": {
      return {
        ...state,
        my_order: { currency: 2 },
        my_places: [],
      };
    }
    case "SET_MY_ORDER":
      return {
        ...state,
        my_order: { ...state.my_order, ...action?.payload },
      };
    case "SET_MY_PLACES":
      let l = [],
        tt = true;
      state.my_places.forEach((sector) => {
        if (sector.section === action?.payload?.sector_id) {
          tt = false;
          let stt = true,
            seats = [];
          sector?.place?.forEach((seat) => {
            if (seat?.seat_id === action?.payload?.seat?.seat_id) {
              stt = false;
            } else {
              seats.push(seat);
            }
          });
          if (stt) {
            seats.push(action?.payload?.seat);
          }
          l.push({
            section: action?.payload?.sector_id,
            section_name: action?.payload?.sector_name,
            sector_category: action?.payload?.sector_category,
            place: seats,
          });
        } else {
          l.push(sector);
        }
      });
      if (tt) {
        l.push({
          section: action?.payload?.sector_id,
          section_name: action?.payload?.sector_name,
          sector_category: action?.payload?.sector_category,
          place: [action?.payload?.seat],
        });
      }
      return {
        ...state,
        my_places: l,
      };

    case "CLEAR_MY_PLACES":
      return {
        ...state,
        my_places: [],
      };
    case "SET_MODAL":
      return {
        ...state,
        ui_modal_show: true,
        ui_modal_body: action?.payload,
      };
    case "SET_CLOSE_MADAL":
      return {
        ...state,
        ui_modal_show: false,
        ui_modal_body: null,
      };
    default:
      return state;
  }
};
export default reducers;
