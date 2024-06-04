import { CiCircleQuestion } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";

const navbarDropDowns = [
    "Vehicles",
    "Energy",
    "Charging",
    "Discover",
    "Shop"
]

const navbarRightIcons = [
    <CiCircleQuestion size={28} />,
    <TbWorld size={28} />,
    <RxAvatar size={28} />
]

export { navbarDropDowns, navbarRightIcons };