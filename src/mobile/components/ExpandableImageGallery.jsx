import React, { useState } from 'react';

const ExpandableImageGallery = () => {
  const [expandedId, setExpandedId] = useState(1);

  const handleMouseEnter = (id) => {
    setExpandedId(id);
  };

  const handleMouseLeave = () => {
    setExpandedId(1);
  };

  return (
    <div className="flex items-center justify-center mt-6 bg-[#FAF9F8]">
      <div className="flex w-full max-w-3xl overflow-hidden rounded-xl shadow-lg gap-3 h-[40vh] ">
        <div
          className={`relative cursor-pointer transition-all duration-500 ease-in-out rounded-xl bg-[#FAF9F8] ${
            expandedId === 1 ? 'w-3/4' : 'w-[20%]'
          }`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-full overflow-hidden rounded-lg bg-[#FAF9F8]">
            <img
              src="/image1.jpg"
              alt="Anatomy Course"
              className="h-full w-full object-cover bg-[#FAF9F8]"
            />
          </div>
          <div
            className={`flex justify-between items-center absolute bottom-0 py-3 w-full bg-gradient-to-t from-black to-transparent text-white ${
              expandedId === 1 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0, 1, 1, 0.8), rgba(0, 0, 0, 0.7), transparent)',
            }}
          >
            <div className="pb-8 ">
              <h2 className="w-10 font-medium text-xl font-stolzl ml-2">
                Anatomy Course
              </h2>
            </div>
            <div className=" mb-8 font-stolzl ">
              <h2 className="text-xl ">166</h2>
              <h2 className="mr-2">Topics</h2>
            </div>
          </div>
        </div>

        <div
          className={`relative cursor-pointer transition-all duration-500 ease-in-out rounded-xl bg-[#FAF9F8] ${
            expandedId === 2 ? 'w-3/4' : 'w-[20%]'
          }`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-full overflow-hidden rounded-lg bg-[#FAF9F8]">
            <img
              src="/image2.jpg"
              alt="Pathology"
              className="h-full w-full object-cover bg-[#FAF9F8]"
            />
            {expandedId !== 2 && (
              <div className="absolute bottom-0 left-0 h-28 w-10 bg-[#060029] flex items-center justify-center mb-10">
                <p className="transform -rotate-90 text-white font-medium font-stolzl text-xl -translate-y-12">
                  Pathology
                </p>
              </div>
            )}
          </div>
          <div
            className={`flex justify-between items-center bg-[#FAF9F8] absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent text-white ${
              expandedId === 2 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0, 1, 1, 0.8), rgba(0, 0, 0, 0.7), transparent)',
            }}
          >
            <div className="pb-12">
              <h2 className="w-10 font-medium text-xl font-stolzl ml-2">
                Pathology
              </h2>
            </div>
            <div className="mr-2  font-stolzl mb-12">
              <h2 className="text-lg">166</h2>
              <h2 className="">Topics</h2>
            </div>
          </div>
        </div>

        <div
          className={`relative cursor-pointer transition-all duration-500 ease-in-out rounded-xl ${
            expandedId === 3 ? 'w-3/4' : 'w-[20%]'
          }`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-full overflow-hidden rounded-lg">
            <img
              src="/image3.jpg"
              alt="Biochemistry"
              className="h-full w-full object-cover"
            />
            {expandedId !== 3 && (
              <div className="absolute bottom-0 left-0 h-28 w-10 bg-[#060029] flex items-center justify-center mb-10">
                <p className="transform -rotate-90 text-white font-medium font-stolzl text-xl -translate-y-16">
                  Biochemistry
                </p>
              </div>
            )}
          </div>
          <div
            className={`flex justify-between items-center absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent text-white ${
              expandedId === 3 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0, 1, 1, 0.8), rgba(0, 0, 0, 0.7), transparent)',
            }}
          >
            <div className="pb-12 ">
              <h2 className="w-10 font-medium text-xl font-stolzl">
                Biochemistry
              </h2>
            </div>
            <div className=" mb-10 font-stolzl ">
              <h2 className="text-lg">166</h2>
              <h2 className="">Topics</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableImageGallery;
