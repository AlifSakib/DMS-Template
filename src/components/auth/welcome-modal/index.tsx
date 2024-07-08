import React from 'react';

const WelcomeModal = ({ show, onClose } : {
    show: boolean;
    onClose: () => void;
}) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-white rounded-lg shadow-lg p-6 m-4 max-w-xs w-full transform transition-transform duration-500 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
        <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
        <p>Welcome to the client page!</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Close</button>
      </div>
    </div>
  );
};

export default WelcomeModal;


// usages

{/* <WelcomeModal show={showModal} onClose={() => setShowModal(false)} /> */}