import { Enemy } from "../types/Enemy";
import { createLine } from "../helpers/createLine";
import { EnemyLocation } from "src/types/EnemyLocation";

export const placeSecondaryBossObject = (
    codes : String[],
    location : any,
    boss : Enemy
) : void => {
    if(location.secondaryObjectLocation === undefined){
        return partyMemberReplacements(codes,location,boss)
    }
    const modifierAddress = (parseInt(location.secondaryObjectLocation?.value + "", 16) + 32).toString(16);
    const modifier =
        boss.secondaryObject?.value.length === 6 ? boss.secondaryObject?.value.substring(0, 2) : "";
        
    codes.push(createLine(location.secondaryObjectLocation?.value + "",boss.secondaryObject?.value + "",false));
    codes.push(createLine(modifierAddress,modifier,false));

    //Extra patch to make Hercules actually use Aura Sphere
    if(boss.name === "Hades (2nd Visit & Hades Paradox Cup Battle)"){
        codes.push(createLine((parseInt(location.secondaryObjectLocation?.value +"",16)+28).toString(16),"00100000",false));
    }
}


export const partyMemberReplacements = (
    codes : String[],
    location : EnemyLocation,
    boss : Enemy
) : void => {

}


export const aiFixes = (
    location : Enemy,
    boss : Enemy
) : string => {
    switch(boss.name){
        //The following function doesn't really work, will work on it at a later date -Thrug
        // case "Demyx (Hollow Bastion)":{
        //     return (
        //         createLine(location.aiLocations?.demyx + "","00000074") +
        //         createLine((parseInt(location.aiLocations?.demyx +"",16)+4).toString(16),"00000000") +
        //         createLine((parseInt(location.aiLocations?.demyx +"",16)+8).toString(16),"00000000") +
        //         createLine((parseInt(location.aiLocations?.demyx +"",16)+28).toString(16),"00000000") +
        //         createLine((parseInt(location.aiLocations?.demyx +"",16)+32).toString(16),"00000000") +
        //         + "");
        // }
        case "Twilight Thorn": {
            return "";
        }
        default: {
            return "";
        }
    }
}