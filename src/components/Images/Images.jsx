import React from 'react';

const Images = () => {
  // Sample image URLs (replace these with your actual image URLs)
  const imageUrls = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img src={imageUrl} alt={`Image ${index + 1}`} className="w-full h-auto" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Image {index + 1}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;
