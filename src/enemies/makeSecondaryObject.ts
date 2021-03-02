import { Enemy } from "src/types/Enemy";
import { EnemyLocation } from "src/types/EnemyLocation";
import { createLine } from "../helpers/createLine";

export const makeSecondaryObject = (
    location : EnemyLocation,
    boss : Enemy
) : string => {
    //Makes sure there even is a secondary object, if not, Ignore and move on
    if(boss.secondaryObject !== undefined){
        const modifierAddress = (parseInt(location.secondaryObjectValue + "", 16) + 32).toString(16);
        const modifier =
            boss.secondaryObject.length === 6 ? boss.secondaryObject.substring(0, 2) : "";
        
        //Extra patch to make hercules use aura sphere
        const hercPatch = (boss.name === "Hades (2nd Visit & Hades Paradox Cup Battle)") ? createLine(
                (parseInt(location.secondaryObjectValue +"",16)+28).toString(16),"00100000") : "";
        
        return (
            createLine(location.secondaryObjectValue + "",boss.secondaryObject) +
            createLine(modifierAddress,modifier) +
            hercPatch
        );
    }
    return "";
}