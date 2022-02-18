import axios from "axios";
import React, { useEffect, useState } from "react";
import WaitingBar from "./WaitingBar";
const WaitingRoom = () => {
  const [waitingList, setWaitingList] = useState([]);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `http://${window.location.hostname}:9000/waiting`
      );
      setWaitingList(await res.data);
      const res1 = await axios.get(
        `http://${window.location.hostname}:9000/students`
      );
      setStudents(await res1.data);
    })();
  }, []);
  useEffect(() => {
    console.log(waitingList);
  }, [waitingList]);

  return (
    <div className="flex h-screen w-screen flex-col gap-12 p-12">
      {waitingList?.length !== 0 ? (
        <>
          <div className="flex w-full flex-1 items-center justify-center gap-16">
            {/* Parent Image  */}
            <div className="flex flex-col items-center gap-2  xl:max-w-[30vw] ">
              <img
                src={`${waitingList[0].image}`}
                className="aspect-square w-96 rounded-md shadow-xl "
                alt={`${waitingList[0].id}-profileImg`}
              />
              <span className="text-dark text-xl font-semibold capitalize">
                {waitingList[0].firstName} {waitingList[0].lastName}
              </span>
            </div>
            {/* childreen */}
            <div className="flex  justify-center gap-8">
              {waitingList[0].childreen.map((childID) => {
                return students.map((student) => {
                  if (student.id === childID) {
                    return (
                      <div
                        className=" flex flex-col items-center gap-2"
                        key={`${childID}-childprofileimg`}
                      >
                        <img
                          src={`${student.picture}`}
                          className="aspect-square w-64 rounded-md shadow-xl "
                          alt={`${student.id}-profileImg-student`}
                        />
                        <span className="text-dark text-md font-semibold">
                          {student.firstName} {student.lastName}
                        </span>
                      </div>
                    );
                  }
                  return undefined;
                });
              })}
            </div>
          </div>
          <div className=" flex w-full justify-end">
            <span
              className="text-md decoration-primaryFG text-dark cursor-pointer font-bold capitalize underline"
              onClick={async () => {
                // const res = await axios.get(
                //   `http://${window.location.hostname}:9000/delivered`,
                //   {
                //     params: {
                //       parentId: waitingList[0].id,
                //     },
                //   }
                // );
                try {
                  setWaitingList(
                    waitingList
                      .map((item, index) => {
                        if (index !== 0) return item;
                        else return null;
                      })
                      .filter((item) => item)
                  );
                  // setWaitingList(waitingList.splice(1, waitingList.length));
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              next parent
            </span>
          </div>
          <div className="flex w-full flex-1 flex-col gap-4">
            {waitingList.length > 1 ? (
              waitingList?.map((waiting, index) => {
                if (index !== 0)
                  return (
                    <WaitingBar
                      key={`waiting-${waiting.id}-parent`}
                      {...waiting}
                    />
                  );
              })
            ) : (
              <div
                className={`text-dark  flex w-full flex-1 items-center justify-center  rounded-xl p-8 font-semibold capitalize `}
              >
                <span className="text-xl">No One Is Waiting</span>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full flex-1 items-center justify-center">
            All Done
          </div>
        </>
      )}
    </div>
  );
};

export default WaitingRoom;
