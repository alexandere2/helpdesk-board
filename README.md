# helpdesk-board

## File Structure 
### src/
### ├── app/
### │   ├── page.js                    // Server Component
### │   ├── api/
### │   │   └── tickets/route.js        // API route returning JSON
### │   └── components/
### │       ├── Board.jsx               // Parent: state, effects, lifting
### │       ├── TicketList.jsx
### │       ├── TicketCard.jsx
### │       ├── StatusFilter.jsx
### │       ├── PriorityFilter.jsx
### │       ├── SearchBox.jsx
### │       ├── MyQueueSummary.jsx
### │       └── StatusMessage.jsx
### └── app/lib/
     └── severity.js                 // small utilities (named exports)
