import constants from "./constants";

const defaultState = {
  ticket: undefined,
  tickets: undefined,
  loading: false,
};

export default function reducer(currentState = defaultState, action) {
  console.log("at the begining action", action);
  console.log("at the begining - currentState", currentState);
  switch (action.type) {
    case constants.ADD_TICKET_REQUEST:
      return {
        ...currentState,
        loading: true,
      };
    case constants.ADD_TICKET_SUCCESS:
      console.log("ADD_TICKET_SUCCESS - action", action);
      console.log("ADD_TICKET_SUCCESS - currentState", currentState);
      return {
        ...currentState,
        tickets: action.payload,
        loading: true,
      };
    case constants.ADD_TICKET_FAILURE:
      console.log("ADD_TICKET_FAILURE - action", action);
      console.log("ADD_TICKET_FAILURE - currentState", currentState);
      return {
        ...currentState,
        loading: false,
      };
    case constants.GET_TICKET_REQUEST:
      console.log("GET_TICKET_REQUEST action", action);
      console.log("GET_TICKET_REQUEST currentState", currentState);
      return {
        ...currentState,
        ticket: undefined,
        loading: true,
      };
    case constants.GET_TICKET_SUCCESS:
      console.log("GET_TICKET_SUCCESS action", action);
      console.log("GET_TICKET_SUCCESS currentState", currentState);
      return {
        ...currentState,
        ticket: action.payload,
        loading: true,
      };
    case constants.GET_TICKET_FAILURE:
      return {
        ...currentState,
        ticket: defaultState.tickets,
        loading: false,
      };
    case constants.GET_TICKETS_REQUEST:
      console.log("GET_TICKETS_REQUEST action", action);
      console.log("GET_TICKETS_REQUEST currentState", currentState);
      return {
        ...currentState,
        tickets: undefined,
        loading: true,
      };
    case constants.GET_TICKETS_SUCCESS:
      console.log("GET_TICKETS_SUCCESS action", action);
      console.log("GET_TICKETS_SUCCESS currentState", currentState);
      return {
        ...currentState,
        tickets: action.payload,
        loading: true,
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
        ticket: currentState.ticket,
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
