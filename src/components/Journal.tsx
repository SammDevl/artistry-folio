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
            <div className="gt-panel">
                <h2 className="gt-title text-3xl mb-6">My Journal</h2>
                
                <form onSubmit={handleSubmit} className="mb-8">
                    <textarea
                        value={newEntry}
                        onChange={(e) => setNewEntry(e.target.value)}
                        placeholder="Write your thoughts..."
                        className="w-full min-h-[150px] p-3 mb-3 border-2 border-black rounded-md resize-y focus:outline-none bg-[#E6D8B8] text-black font-semibold shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-black/50"
                    />
                    <button 
                        type="submit" 
                        className="gt-button"
                    >
                        Save Entry
                    </button>
                </form>
    
                <div className="flex flex-col gap-5">
                    {entries.map((entry) => (
                        <div key={entry.id} className="p-4 border-2 border-black rounded-md bg-[#E6D8B8] text-black shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
                            <p className="mb-3 font-semibold text-lg">{entry.content}</p>
                            <span className="text-sm font-bold opacity-75">{entry.timestamp}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Journal;