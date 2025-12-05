import { useState } from "react";
import {
  User,
  EllipsisVertical,
  BellRing,
  UserX,
  UserPlus,
} from "lucide-react";

function Options() {
  return <></>;
}

function Network() {
  const [friends] = useState([
    { id: 1, name: "Jeremy13" },
    { id: 2, name: "Wade34" },
  ]);

  return (
    <>
      <div className="pt-20 pb-40  h-screen flex flex-col items-center">
        <ul className="w-full max-w-md bg-white rounded-lg shadow-md divide-y divide-gray-200">
          {/* Friends List */}
          {friends.map((friend) => (
            <li key={friend.id} className="flex items-center px-4 py-6">
              <User className={"w-7 h-7"} />
              <div className="flex-1">
                <p className="font-semibold">{friend.name}</p>
              </div>
              {/* 3 dot drop menu */}
              <button className="group relative bg-transparent p-0 focus:outline-0 hover:outline-0 border-0">
                <EllipsisVertical className={"w-7 h-7"} />
                <div
                  className="absolute top-full right-5 bg-white border-2 border-gray-300 rounded-md p-3 shadow-md
                  scale-y-0 group-focus:scale-y-100 origin-top duration-100"
                >
                  <a className="flex items-center py-2 max-w-2xl">
                    <BellRing className={"w-5 h-5 mr-2 text-blue-600"} />
                    <span className="whitespace-nowrap text-blue-600">
                      Enable Alerts
                    </span>
                  </a>
                  <a className="flex items-center py-2">
                    <UserX className={"w-5 h-5 mr-2 text-red-500"} />
                    <span className="whitespace-nowrap text-red-500">
                      Remove Friend
                    </span>
                  </a>
                </div>
              </button>
            </li>
          ))}
        </ul>
        <button className="fixed flex items-center bottom-20 right-10 bg-blue-600">
          <UserPlus className="w-7 h-7 text-white mr-3" />
          <span className="whitespace-nowrap text-white font-semibold align-middle">
            Add Friend
          </span>
        </button>
      </div>
    </>
  );
}

export default Network;
