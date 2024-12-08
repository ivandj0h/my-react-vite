import React, { useEffect, useState } from "react";
import { getPost, getUser } from "@/api/api";
import { Post } from "@/interfaces/Post";
import { User } from "@/interfaces/User";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const getRandomId = () => Math.floor(Math.random() * 100) + 1;

  useEffect(() => {
    if (isOpen) {
      const fetchData = async () => {
        try {
          const randomId = getRandomId();
          const postData = await getPost(randomId);
          const userData = await getUser(postData.userId);
          setPost(postData);
          setUser(userData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [isOpen]);

  if (!isOpen || !post || !user) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="p-4">
          <img
            src={`https://via.placeholder.com/150`}
            alt="Placeholder"
            className="rounded w-full h-48 object-cover"
          />
          <div className="mt-4">
            <p className="text-sm text-gray-500">User: {user.name}</p>
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
            <p className="mt-2 font-semibold text-lg text-gray-800">$99</p>
          </div>
        </div>
        <button
          className="w-full py-2 bg-blue-500 text-white rounded-b hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
