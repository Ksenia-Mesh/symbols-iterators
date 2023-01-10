import Daemon from "./Daemon";
import Magician from "./Magician";
import Swordsman from "./Swordsman";
import Undead from "./Undead";
import Zombie from "./Zombie";

const lutic = new Daemon("Lutic");
const saruman = new Magician("Saruman");
const anton = new Swordsman("Anton");
const ruggy = new Undead("Ruggy");
const galya = new Zombie("Galya");

const characters = [lutic, saruman, anton, ruggy, galya];

export default characters;