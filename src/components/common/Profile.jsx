import React, { useState } from "react";
import { Drawer } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "./DilogBox";
import useProfile from "../../hooks/useProfile";
const Profile = ({ closeDrawer, open , data }) => {
  const {
    handleUpdateProfileImage} = useProfile()
  const [openUploadImage, setUploadImage] = useState(false);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Drawer
        placement="right"
        open={open}
        onClose={closeDrawer}
        className="p-4 overflow-auto"
      >
        <div onClick={closeDrawer}>
          <img
            src="./Mask group (2).png"
            alt=""
            className="w-10 cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
          <img src={data?.image} alt="" className="w-[120px] h-[120px] mb-4 rounded-full" />
            <img src="../tabler_edit.png" alt="" className="absolute bottom-4 right-2 cursor-pointer" onClick={()=> setUploadImage(true)} />
          </div>
          <p className="font-semibold pb-2">{data?.fullName || data?.firstName + " " + data?.lastName}</p>
          <p className="text-sm">
            <span className="text-[#0070BC]">USER ID</span> - {data?._id}
          </p>
          <div className="flex gap-2 cursor-pointer my-4">
            <img src="./Mask group (3).png" alt="" className="w-5 h-5" />
            <p className="text-[#FD575B]" onClick={()=>{ 
              sessionStorage.removeItem("token")
              navigate('/login')}}>SIGN OUT</p>
          </div>
          {/* <hr className="bg-[#00000099] w-full" /> */}
        </div>
        <div className="flex flex-col items-center gap-6">
          <div
            className="flex gap-6 cursor-pointer"
            onClick={() =>{
               navigate("/account")
               closeDrawer()
              }}
          >
            <img src="./Mask group (4).png" alt="" className="w-6 h-6" />
            <p className=" text-[#000000B2]">Manage Account</p>
          </div>
          <div
            className="flex gap-6 cursor-pointer"
            onClick={() =>{ 
              navigate("/setting")
              closeDrawer()
            }}
          >
            <img src="./Mask group (5).png" alt="" className="w-6 h-6" />
            <p className=" text-[#000000B2]">Change Settings</p>
          </div>
          <div
            className="flex gap-6 cursor-pointer"
            onClick={() => {
              navigate("/support")
              closeDrawer()
            }}
          >
            <img src="./Mask group (6).png" alt="" className="w-6 h-6" />
            <p className=" text-[#000000B2]">Support & Help</p>
          </div>
        <DialogDefault open={openUploadImage} handleOpen={setUploadImage}>
        <div className="p-6">
            <div className="flex justify-center items-center">
                <img src="../Vector (40).png" alt="" className="cursor-pointer" onClick={()=>setUploadImage(false)}/>
            </div>
            <div className="flex justify-around mt-4">
            <label id="dropzone-file" className="flex gap-2 cursor-pointer">
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) =>{
              
                  handleUpdateProfileImage(e.target.files[0])
                  setUploadImage(false)
                }
                }
              />
              <img src="../Vector (41).png" alt="" />
              <p className="underline text-black font-[500]">Browse Image</p>
            </label>
          
            <div className="flex gap-2 cursor-pointer"  onClick={()=>setUploadImage(false)}>
                <img src="../solar_gallery-bold.png" alt="" />
                <p className="underline text-black font-[500]">Open Gallery</p>
            </div>

            </div>
        </div>
      </DialogDefault>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default Profile;
