# helpdesk-board

## Setup Steps: 
Open your terminal and create the project using Option A:

npx create-next-app@latest helpdesk-board
Answer the prompts exactly:

Prompt	Correct Answer
Would you like to use TypeScript?	No
Would you like to use ESLint?	Yes
Would you like to use Tailwind CSS?	Yes
Use src/ directory?	Yes
Use App Router?	Yes
Customize import alias?	No
Then:

cd helpdesk-board
npm install
npm run dev

## File Structure:
src/
├── app/
│   ├── page.js                    // Server Component
│   ├── api/
│   │   └── tickets/route.js        // API route returning JSON
│   └── components/
│       ├── Board.jsx               // Parent: state, effects, lifting
│       ├── TicketList.jsx
│       ├── TicketCard.jsx
│       ├── StatusFilter.jsx
│       ├── PriorityFilter.jsx
│       ├── SearchBox.jsx
│       ├── MyQueueSummary.jsx
│       └── StatusMessage.jsx
 └── app/lib/
     └── severity.js                 // small utilities (named exports)

## Grading Rubric (100 Pts)
Category	Points	Evidence
Project Setup & Structure	15	Next.js config and folders; app runs; README present
Components + JSX + Keys	20	Separate components, proper JSX, stable keys by id
Props + Lifting State	20	Board holds lifted state; children receive props and callbacks
State + Controlled Inputs	15	useState used; filters & search are controlled; immutable updates
Effects + Cleanup	20	Fetch on mount; interval live updates with proper cleanup
UX + Conditional Rendering	10	Loading, error, empty states; disabled buttons where appropriate
Total	100	—
Partial credit guidance (common deductions):

Array index or Math.random() used for keys: −5
Missing cleanup in live update effect: −10
Direct state mutation: −5 to −10
Filters not controlled: −8
No API fetch or route misplaced: −20
App doesn’t run: −15 minimum

