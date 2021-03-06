import { Enemy } from "../types/Enemy";
import { createLine } from "../helpers/createLine";

export const placeSecondaryBossObject = (
    codes : String[],
    location : Enemy,
    boss : Enemy
) : void => {
    //Makes sure there even is a secondary object, if not, Ignore and move on
    const modifierAddress = (parseInt(location.fixes?.secondaryObjectLocation?.value + "", 16) + 32).toString(16);
    const modifier =
        boss.fixes?.secondaryObject?.value.length === 6 ? boss.fixes?.secondaryObject?.value.substring(0, 2) : "";
    
    //Extra patch to make hercules use aura sphere
    
    codes.push(createLine(location.fixes?.secondaryObjectLocation?.value + "",boss.fixes?.secondaryObject?.value + "",false));
    codes.push(createLine(modifierAddress,modifier,false));
    if(boss.name === "Hades (2nd Visit & Hades Paradox Cup Battle)"){
        codes.push(createLine((parseInt(location.fixes?.secondaryObjectLocation?.value +"",16)+28).toString(16),"00100000",false));
    }
}
//This whole Function doesn't really work... I thought it did, then I did testing.
//I think I can get this to work, but I really don't know
// - Thrug
// export const aiFixes = (
//     location : Enemy,
//     boss : Enemy
// ) : string => {
//     switch(boss.name){
//         case "Demyx (Hollow Bastion)":{
//             return (
//                 createLine(location.aiLocations?.demyx + "","00000074") +
//                 createLine((parseInt(location.aiLocations?.demyx +"",16)+4).toString(16),"00000000") +
//                 createLine((parseInt(location.aiLocations?.demyx +"",16)+8).toString(16),"00000000") +
//                 createLine((parseInt(location.aiLocations?.demyx +"",16)+28).toString(16),"00000000") +
//                 createLine((parseInt(location.aiLocations?.demyx +"",16)+32).toString(16),"00000000") +
//                 + "");
//         }
//         default: {
//             return "";
//         }
//     }
//}