import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const Home = () => {
  const [userAddress, setUserAddress] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [output, setOutput] = useState('');
  const [contract, setContract] = useState(null);

//   useEffect(() => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const uploadContract = new ethers.Contract(contractAddress, contractAbi, provider.getSigner());
//     setContract(uploadContract);
//   }, []);

  const addUrl = async () => {
    await contract.add(userAddress, urlInput);
    setOutput('URL added successfully!');
  };

  const allowAccess = async () => {
    await contract.allow(userAddress);
    setOutput('Access allowed successfully!');
  };

  const disallowAccess = async () => {
    await contract.disallow(userAddress);
    setOutput('Access disallowed successfully!');
  };

  const displayUrls = async () => {
    try {
      const urls = await contract.display(userAddress);
      setOutput(`URLs: ${JSON.stringify(urls)}`);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const displayAccessList = async () => {
    try {
      const accessList = await contract.shareAccess();
      setOutput(`Access List: ${JSON.stringify(accessList)}`);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" p-8 bg-amber-700 bg-opacity-30 rounded-lg shadow-2xl max-w-md w-full">
        <h1 className="text-3xl mb-4 ">Access Control DApp</h1>
        <label className="block mb-2">User Address:</label>
        <input
          type="text"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
          className="w-full px-3 py-2 mb-4 rounded-md focus:outline-none outline focus:ring focus:border-blue-300"
        />
        <label className="block mb-2">URL Input:</label>
        <input
          type="file"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          className="w-full px-3 py-2 mb-4 rounded-md focus:outline-none outline focus:ring focus:border-blue-300"
        />
        <div className="space-x-2 mb-4 text-white">
          <button onClick={addUrl} className="btn bg-green-600 p-2 hover:bg-red-600 hover:shadow-xl">
            Add URL
          </button>
          <button onClick={allowAccess} className="btn bg-green-600 hover:bg-red-600 hover:shadow-xl p-2 m-2">
            Allow Access
          </button>
          <button onClick={disallowAccess} className="btn bg-green-600 hover:bg-red-600 hover:shadow-xl p-2 m-2">
            Disallow Access
          </button>
          <button onClick={displayUrls} className="btn bg-green-600 hover:bg-red-600 hover:shadow-xl p-2 m-2">
            Display URLs
          </button>
          <button onClick={displayAccessList} className="btn bg-green-600 hover:bg-red-600 hover:shadow-xl p-2 m-2">
            Display Access List
          </button>
        </div>
        <div id="output" className="text-sm italic">{output}</div>
      </div>
    </div>
  );
};

export default Home;
