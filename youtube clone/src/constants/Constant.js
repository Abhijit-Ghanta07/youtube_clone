import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { RiCommunityFill, RiPlayListFill } from "react-icons/ri";

const catagories = [
  { name: "home", icon: <AiFillHome />, type: "new" },
  {
    name: "explore",
    icon: <MdExplore />,
    type: "explore",
  },
  {
    name: "channel",
    icon: <GrChannel />,
    type: "channel",
  },
  {
    name: "playlist",
    icon: <RiPlayListFill />,
    type: "playlist",
  },
  {
    name: "commiunity",
    icon: <RiCommunityFill />,
    type: "commiunity",
  },
];

export default catagories;
