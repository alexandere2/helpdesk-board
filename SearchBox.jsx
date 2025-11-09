//src/app/components/SearchBox.jsx

'user client';

export default function SearchBox ({ value, onChange }) {
    return (
        <label className="block">
            <span className="text-sm font-medium">Search</span>
            <input 
            type="string"
            className="mt-1 w-full rounded border px-3 py-2"
            placeholder="Search for title or description..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
    />
    </label>
    );
}
