//src/app/components/MyQueueSummary.jsx

'use client';
export default function MyQueueSummary({ queue, tickets = [], onRemove, onClear }) {
  if (!Array.isArray(tickets)) tickets = [];

  const titleById = new Map(tickets.map(t => [t.id, t.title]));
  const statusById = new Map(tickets.map(t => [t.id, t.status]));

  const queuedTickets = Object.entries(queue || {}).map(([id]) => ({
    id,
    title: titleById.get(id) || "Unknown",
    status: statusById.get(id) || "Unknown",
  }));

  return (
    <div>
      <h2>My Queue ({queuedTickets.length})</h2>
      <ul>
        {queuedTickets.map(ticket => (
          <li key={ticket.id}>
            {ticket.title} — {ticket.status}
            <button onClick={() => onRemove(ticket.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {queuedTickets.length > 0 && (
        <button onClick={onClear}>Clear Queue</button>
      )}
    </div>
  );
}
