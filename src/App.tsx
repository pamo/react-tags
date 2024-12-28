import React from 'react';
import { TagForm } from './components/Tags/TagForm';

const App: React.FC = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Tags</h1>
        <TagForm />
      </div>
    </div>
  );
};

export default App;
