import './Profile.css'
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"


export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
    <Topbar/>
    <div className="profile">
     <Sidebar/>
     <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img src={`${PF}post/3.jpeg`} className='profileCoverImg' alt="" />
                <img src={`${PF}post/7.jpeg`} className='profileUserImg' alt="" />
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>Sufyan Ahmed</h4>
                <span className='profileInfoDesc'>is so funny humble and so georgius</span>

            </div>
        </div>

        <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
        </div>       
      </div>
    </div>
 </>
  )
}
