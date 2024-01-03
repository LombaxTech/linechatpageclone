import { FaCamera, FaChevronLeft } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";
import { FaMicrophone } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-red-200 flex flex-col">
      {/* ナビゲーションバー */}
      <nav className="bg-slate-700 p-4 text-white flex justify-between">
        <div>
          <FaChevronLeft size={20} />
        </div>
        <h1 className="font-bold">Mike</h1>
        <div className="flex gap-4">
          <div>
            <CiPhone size={20} />
          </div>
          <div>
            <FaChevronDown size={20} />
          </div>
        </div>
      </nav>

      {/* チャット */}
      <div className="bg-blue-200 flex-1 flex flex-col">
        {/* メッセージ */}
        <div className="flex-1 flex flex-col p-4">
          <div className="bg-slate-500 w-fit text-white p-2 rounded-xl self-center mr-14">
            SUN, 10/28
          </div>

          <div className="flex items-center gap-2 self-end">
            <div className="text-xs text-white font-bold">
              <h3>Read</h3>
              <h3>9:23 AM</h3>
            </div>
            <div className="bg-green-300 w-fit px-6 py-2 rounded-lg">Hi~!</div>
          </div>

          <div className="flex items-center gap-2 self-start">
            <div className="bg-white w-fit px-6 py-2 rounded-lg">Hi~!</div>
            <div className="text-xs text-white font-bold">
              <h3>9:23 AM</h3>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end">
            <div className="text-xs text-white font-bold">
              <h3>Read</h3>
              <h3>9:23 AM</h3>
            </div>
            <div className="bg-green-300 w-fit px-6 py-2 rounded-lg">Hi~!</div>
          </div>

          <div className="flex items-center gap-2 self-start">
            <div className="bg-white w-fit px-6 py-2 rounded-lg">Hi~!</div>
            <div className="text-xs text-white font-bold">
              <h3>9:23 AM</h3>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end">
            <div className="text-xs text-white font-bold">
              <h3>Read</h3>
              <h3>9:23 AM</h3>
            </div>
            <div className="bg-green-300 w-fit px-6 py-2 rounded-lg">Hi~!</div>
          </div>

          <div className="flex items-center gap-2 self-start">
            <div className="bg-white w-fit px-6 py-2 rounded-lg">Hi~!</div>
            <div className="text-xs text-white font-bold">
              <h3>9:23 AM</h3>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end">
            <div className="text-xs text-white font-bold">
              <h3>Read</h3>
              <h3>9:23 AM</h3>
            </div>
            <div className="bg-green-300 w-fit px-6 py-2 rounded-lg">Hi~!</div>
          </div>

          <div className="flex items-center gap-2 self-start">
            <div className="bg-white w-fit px-6 py-2 rounded-lg">Hi~!</div>
            <div className="text-xs text-white font-bold">
              <h3>9:23 AM</h3>
            </div>
          </div>
        </div>

        {/* メッセージインプット */}
        <div className="p-2 bg-white items-center flex gap-4">
          <div>
            <FaPlus size={20} />
          </div>
          <div>
            <FaCamera size={20} />
          </div>
          <div>
            <GrGallery size={20} />
          </div>
          <input
            type="text"
            className="border-2 flex-1 rounded-md p-2"
            placeholder="Enter a Message"
          />
          <div>
            <FaMicrophone size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
