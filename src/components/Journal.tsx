import React, { useState, useEffect } from 'react';

interface JournalEntry {
    id: number;
    content: string;
    timestamp: string;
}

const Journal: React.FC = () => {
    const [entries, setEntries] = useState<JournalEntry[]>([]);
    const [newEntry, setNewEntry] = useState('');

    const createTimestamp = (): string => {
        return new Date().toLocaleString();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newEntry.trim()) {
            const entry: JournalEntry = {
                id: Date.now(),
                content: newEntry,
                timestamp: createTimestamp()
            };
            setEntries([entry, ...entries]);
            setNewEntry('');
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-5">
            <h2 className="text-2xl font-bold mb-6">My Journal</h2>
            
            <form onSubmit={handleSubmit} className="mb-8">
                <textarea
                    value={newEntry}
                    onChange={(e) => setNewEntry(e.target.value)}
                    placeholder="Write your thoughts..."
                    className="w-full min-h-[150px] p-3 mb-3 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
                <button 
                    type="submit" 
                    className="px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                    Save Entry
                </button>
            </form>

            <div className="flex flex-col gap-5">
                {entries.map((entry) => (
                    <div key={entry.id} className="p-4 border border-gray-200 rounded-md bg-gray-50">
                        <p className="mb-3 text-gray-800">{entry.content}</p>
                        <span className="text-sm text-gray-500">{entry.timestamp}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Journal;