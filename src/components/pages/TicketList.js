import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from '../../redux/tickets/tickets';
import Tickets from './Tickets';

const TicketList = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  return (
    <div className="ticket-data">
      <h3>Why not displaying</h3>
      {tickets.map((ticket) => (
        <Tickets
          key={ticket.id}
          id={ticket.id}
          date={ticket.date}
          city={ticket.city}
        />
      ))}
    </div>
  );
};

export default TicketList;
