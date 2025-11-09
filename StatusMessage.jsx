//src/app/components/StatusMessage.jsx

'use client';

// loading > Error > isEmpty
export default function StatusMessage({ loading, error, isEmpty}) {
    if (loading) {
        return (
            <div className="rounded border p-3 bg-yellow-50 text-yellow-900">
                "Loading...""
            </div>  
        );
    }
    if (error) {
        return (
        <div className="rounded border p-3 bg-red-50 text-red-700">
            "Unable to load tickets."
        </div>
        );
    }
    if (isEmpty) {
        return (
            <div className="rounded border p-3 bg-50 text blue-800">
                "No tickets match your filters."
            </div>
        );
    }
    return null;
}
