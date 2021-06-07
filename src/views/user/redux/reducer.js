import constants from "./constants";

const defaultState = {
  tickets: undefined,
  loading: false,
};

export default function reducer(currentState = defaultState, action) {
  switch (action.type) {
    case constants.ADD_TICKET_REQUEST:
      return {
        ...currentState,
        loading: true,
      };
    case constants.ADD_TICKET_SUCCESS:
      console.log("action", action);
      console.log("currentState", currentState);
      return {
        ...currentState,
        tickets: [action.payload, ...currentState.tickets],
        loading: true,
        success: true,
      };
    case constants.ADD_TICKET_FAILURE:
      return {
        ...currentState,
        loading: false,
      };
    case constants.GET_TICKETS_REQUEST:
      return {
        ...currentState,
        tickets: undefined,
        loading: true,
      };
    case constants.GET_TICKETS_SUCCESS:
      return {
        ...currentState,
        tickets: action.payload,
        loading: false,
      };
    case constants.GET_TICKETS_FAILURE:
      return {
        ...currentState,
        tickets: defaultState.tickets,
        loading: false,
      };
    case constants.GET_TICKETS_BY_USER_REQUEST:
      return {
        ...currentState,
        tickets: undefined,
        loading: true,
      };
    case constants.GET_TICKETS_BY_USER_SUCCESS:
      return {
        ...currentState,
        tickets: action.payload,
        loading: false,
      };
    case constants.GET_TICKETS_BY_USER_FAILURE:
      return {
        ...currentState,
        tickets: defaultState.tickets,
        loading: false,
      };
    case constants.UPDATE_TICKET_REQUEST:
      return {
        ...currentState,
        ticket: undefined,
      };

    case constants.UPDATE_TICKET_SUCCESS:
      return {
        ...currentState,
        tickets: currentState.tickets.map((ticket) => {
          if (ticket.ticketId === action.payload.ticketId)
            return action.payload;
          else return ticket;
        }),
      };
    case constants.UPDATE_TICKET_FAILURE:
      return {
        ...currentState,
        ticket: defaultState.ticket,
      };

    case constants.DELETE_TICKET_REQUEST:
      return {
        ...currentState,
        ticket: undefined,
      };

    case constants.DELETE_TICKET_SUCCESS:
      return {
        ...currentState,
        tickets: currentState.tickets.filter((ticket) => {
          return ticket.ticketId !== action.payload;
        }),
      };
    case constants.DELETE_TICKET_FAILURE:
      return {
        ...currentState,
        ADD_TICKET_FAILURE: defaultState.ticket,
      };

    case constants.RESET_TICKET:
      return {
        ...currentState,
        loading: false,
        success: false,
      };

    default:
      return defaultState;
  }
}
