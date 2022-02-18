import React, { useState } from "react";

const AddParent = () => {
  const [myImage, setMyImage] = useState("");
  return (
    <div className="flex h-screen w-screen flex-col  justify-between ">
      <div className="bg-primaryFG flex h-[6vh] w-screen items-center justify-start rounded-b-3xl px-4" />
      <main className="flex w-full flex-1 flex-col gap-8 px-12 pt-4">
        <div className="flex h-[90vh] w-full items-center justify-center p-24 ">
          {/* inputs collections */}
          <div className="flex flex-1 flex-col items-center justify-center  px-12">
            {/* firstName */}
            <div className="relative mb-10">
              <input
                id="firstName"
                type="text"
                className="bg-lightGray peer h-12 w-[30vw] rounded-lg px-4 py-2"
              />
              <label
                htmlFor="firstName"
                className="absolute bottom-3 left-2 font-semibold capitalize text-zinc-400 transition-all peer-focus:bottom-14"
              >
                First Name
              </label>
            </div>
            {/* lastName */}
            <div className="relative mb-10">
              <input
                id="lastName"
                type="text"
                className="bg-lightGray peer h-12 w-[30vw] rounded-lg px-4 py-2"
              />
              <label
                htmlFor="lastName"
                className="absolute bottom-3 left-2 font-semibold capitalize text-zinc-400 transition-all peer-focus:bottom-14"
              >
                Last Name
              </label>
            </div>
            {/* Massar Id */}
            <div className="relative mb-10">
              <input
                id="massarId"
                type="text"
                className="bg-lightGray peer h-12 w-[30vw] rounded-lg px-4 py-2"
              />
              <label
                htmlFor="massarId"
                className="absolute bottom-3 left-2 font-semibold capitalize text-zinc-400 transition-all peer-focus:bottom-14"
              >
                massar Id
              </label>
            </div>
            {/* Level */}
            <div className="relative mb-10">
              <input
                id="Level"
                type="text"
                className="bg-lightGray peer h-12 w-[30vw] rounded-lg px-4 py-2"
              />
              <label
                htmlFor="Level"
                className="absolute bottom-3 left-2 font-semibold capitalize text-zinc-400 transition-all peer-focus:bottom-14"
              >
                level
              </label>
            </div>
            {/* Gendre */}
            <div className="relative mb-10">
              <input
                id="Gendre"
                type="text"
                className="bg-lightGray peer h-12 w-[30vw] rounded-lg px-4 py-2"
              />
              <label
                htmlFor="Gendre"
                className="absolute bottom-3 left-2 font-semibold capitalize text-zinc-400 transition-all peer-focus:bottom-14"
              >
                Gendre
              </label>
            </div>
            <div className="relative  mb-10 flex  w-[30vw] flex-1 justify-end ">
              <input
                type="submit"
                value="Save"
                className="bg-primaryFG w-auto flex-[0.4] cursor-pointer rounded-xl py-2 text-xl font-semibold text-white transition-all hover:flex-1"
              />
            </div>
          </div>
          {/* image */}

          <div
            className={`bg-gray relative grid h-full flex-[1] place-items-center rounded-2xl  hover:opacity-90 `}
            style={
              myImage
                ? {
                    backgroundImage: `url(${myImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }
                : undefined
            }
          >
            <label for="myImage">
              <img
                src={`https://img.icons8.com/ios/100/${
                  myImage ? `ffffff` : `000000`
                }/add--v1.png`}
                alt="addIcon"
                className=" cursor-pointer transition-all duration-100 hover:rotate-90 hover:scale-110"
              />
            </label>
            <input
              type="file"
              id="myImage"
              accept="image/*"
              className="hidden"
              // value={myImage ?? undefined}
              onChange={(e) => {
                var reader = new FileReader();
                reader.onloadend = () => {
                  setMyImage(reader.result);
                  console.log(reader.result);
                };
                if (e.target.files[0]) {
                  reader.readAsDataURL(e.target.files[0]);
                }
              }}
            ></input>
            {/* </input> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddParent;
