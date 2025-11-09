// src/app/components/Board.jsx

'use client';

import { useEffect, useState, useMemo } from 'react';
import TicketList from "./TicketList";
import StatusFilter from "./StatusFilter";
import PriorityFilter from "./PriorityFilter";
import SearchBox from "./SearchBox";
import MyQueueSummary from "./MyQueueSummary";
import StatusMessage from "./StatusMessage";

export default function Board() {
    // State
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({ status: "All", priority: "All" });
    const [search, setSearch] = useState("");
    const [queue, setQueue] = useState({});

    // Fetch Tickets
    useEffect(() => {
        let isActive = true;
        const fetchTickets = async () => {
            try {
                const res = await fetch("/api/tickets");
                if (!res.ok) throw new Error("Failed to fetch tickets");
                const data = await res.json();
                if (isActive) setTickets(data);
            } catch (err) {
                if (isActive) setError(err.message);
            } finally {
                if (isActive) setLoading(false);
            }
        };
        fetchTickets();
        return () => {
            isActive = false;
        };
    }, []);

    // Live Updates
   useEffect(() => {
    if (tickets.length === 0) return;

    const interval = setInterval(() => {
      setTickets((prevTickets) => {
        const updated = [...prevTickets];
        const randomIndex = Math.floor(Math.random() * updated.length);
        const ticket = { ...updated[randomIndex] };

        const statuses = ["Open", "In Progress", "Resolved", "Closed"];
        const priorities = ["Low", "Medium", "High", "Critical"];

        if (Math.random() < 0.5) {
          const current = statuses.indexOf(ticket.status);
          const next = Math.min(current + 1, statuses.length - 1);
          ticket.status = statuses[next];
        } else {
          const current = priorities.indexOf(ticket.priority);
          const shift = Math.random() < 0.5 ? -1 : 1;
          const next = Math.max(0, Math.min(priorities.length - 1, current + shift));
          ticket.priority = priorities[next];
        }

        ticket.updatedAt = new Date().toISOString();
        updated[randomIndex] = ticket;
        return updated;
      });
    }, Math.random() * 4000 + 6000); // every 6–10s

    return () => clearInterval(interval);
  }, [tickets]);

  // --- Step 4: Derive visibleTickets (never stored in state) ---
  const visibleTickets = useMemo(() => {
    const query = search.toLowerCase();
    return tickets.filter((t) => {
      const statusOk = filters.status === "All" || t.status === filters.status;
      const priorityOk = filters.priority === "All" || t.priority === filters.priority;
      const searchOk =
        t.title.toLowerCase().includes(query) ||
        (t.description && t.description.toLowerCase().includes(query));
      return statusOk && priorityOk && searchOk;
    });
  }, [tickets, filters, search]);

  // --- Step 5: Queue actions (functional setState) ---
  const addToQueue = (ticketId) =>
    setQueue((prev) => ({ ...prev, [ticketId]: true }));

  const removeFromQueue = (ticketId) =>
    setQueue((prev) => {
      const copy = { ...prev };
      delete copy[ticketId];
      return copy;
    });

  const clearQueue = () => setQueue({});

  // --- Step 6: Render ---
  if (loading) return <StatusMessage message="Loading tickets..." />;
  if (error) return <StatusMessage message={`Error: ${error}`} />;
  if (tickets.length === 0) return <StatusMessage message="No tickets found." />;

  return (
    <div className="p-4 space-y-4">
      {/* Filters and search (controlled) */}
      <div className="flex flex-wrap gap-3 items-center">
        <StatusFilter
          value={filters.status}
          onChange={(status) => setFilters((f) => ({ ...f, status }))}
        />
        <PriorityFilter
          value={filters.priority}
          onChange={(priority) => setFilters((f) => ({ ...f, priority }))}
        />
        <SearchBox value={search} onChange={setSearch} />
      </div>

      {/* Queue summary */}
      <MyQueueSummary
        count={Object.keys(queue).length}
        onClear={clearQueue}
      />

      {/* Ticket list */}
      <TicketList
        tickets={visibleTickets}
        onAddToQueue={addToQueue}
        onRemoveFromQueue={removeFromQueue}
        queue={queue}
      />
    </div>
  );
}
