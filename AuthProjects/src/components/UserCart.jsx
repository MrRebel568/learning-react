
import React from "react";
import { User, Mail, Phone, MapPin, AtSign } from "lucide-react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Header */}
      <div className="bg-gray-900 px-6 py-8 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center mb-3">
          <User size={40} className="text-gray-900" />
        </div>

        <h2 className="text-xl font-bold text-white capitalize">
          {user.name.firstname} {user.name.lastname}
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          @{user.username}
        </p>
      </div>

      {/* User Details */}
      <div className="p-6 space-y-5">

        <div className="flex items-center gap-3">
          <Mail className="text-gray-400" size={20} />
          <div>
            <p className="text-xs text-gray-400">Email Address</p>
            <p className="text-sm font-medium text-gray-800">
              {user.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="text-gray-400" size={20} />
          <div>
            <p className="text-xs text-gray-400">Phone Number</p>
            <p className="text-sm font-medium text-gray-800">
              {user.phone}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-gray-400" size={20} />
          <div>
            <p className="text-xs text-gray-400">Address</p>
            <p className="text-sm font-medium text-gray-800 capitalize">
              {user.address.number}, {user.address.street},
              {" "}{user.address.city}
            </p>
            <p className="text-xs text-gray-500">
              {user.address.zipcode}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <AtSign className="text-gray-400" size={20} />
          <div>
            <p className="text-xs text-gray-400">User ID</p>
            <p className="text-sm font-medium text-gray-800">
              #{user.id}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserCard;
