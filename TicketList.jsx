//src/app/components/TicketList.jsx

'use client';
import TicketCard from "./TicketCard";

// Renders a list of 
export default function TicketList({ tickets, onAddToQueue, queue }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tickets.map((p) => (
        <li key={p.id}>
          <TicketCard
            title={p.title}
            description={p.description}
            priority={p.priority}
            status={p.status}
            updatedAt={p.updatedAt}
            onAdd={() => onAddToQueue(p.id)}
            inQueue={!!queue[p.id]}  
          />
        </li>
      ))}
    </ul>
  );
}
