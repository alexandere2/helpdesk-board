//src/app/components/TicketCard.jsx

'use client';
import { priorityOrder, statusOrder } from '../lib/severity';
//Displays the button and shows 
export default function TicketCard({ title, description, priority, status, assignee, updatedAt, onAdd, inQueue }) {
    return (
        <div className="text-sm text-gray-500">
            <h3 className="font-medium">{title}</h3>
        <p className="text-sm">{description}</p>
        <p className="text-sm">Priority: {priority}</p>
        <p className="text-sm">Status: {status}</p>
        <p className="text-sm text-gray-500">Updated: {new Date(updatedAt).toLocaleString()}</p>
        <button
        className="mt-2 bg blue-500 text white px-3 py-1 rounded disabled:bg-gray-400"
        onClick={onAdd}
        disabled={inQueue}>
            {inQueue ? 'In Queue' : 'Add to Queue'}
        </button>
    </div>
    );
}

