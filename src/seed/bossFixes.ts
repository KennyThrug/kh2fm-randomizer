import { Enemy } from "../types/Enemy";
import { createLine } from "../helpers/createLine";

export const placeSecondaryBossObject = (
    location : Enemy,
    boss : Enemy
) : string => {
    //Makes sure there even is a secondary object, if not, Ignore and move on
    if(boss.secondaryObject !== undefined){
        const modifierAddress = (parseInt(location.secondaryObjectLocation + "", 16) + 32).toString(16);
        const modifier =
            boss.secondaryObject.length === 6 ? boss.secondaryObject.substring(0, 2) : "";
        
        //Extra patch to make hercules use aura sphere
        const hercPatch = (boss.name === "Hades (2nd Visit & Hades Paradox Cup Battle)") ? createLine(
                (parseInt(location.secondaryObjectLocation +"",16)+28).toString(16),"00100000") : "";
        
        return (
            createLine(location.secondaryObjectLocation + "",boss.secondaryObject) +
            createLine(modifierAddress,modifier) +
            hercPatch
        );
    }
    return "";
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