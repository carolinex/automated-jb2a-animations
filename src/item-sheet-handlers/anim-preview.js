import { JB2APATREONDB } from "../animation-functions/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../animation-functions/jb2a-free-database.js";

function animPreview(item, name) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    //let itemName = item.animName.toLowerCase();
    let itemName = name;
    console.log(item);
    let color;
    let obj02;
    let tempType;
    let tempAnim;
    let spellVar;
    let preview;
    if (item.override) {
        switch (true) {
            case item.animType === 't1':
                break;
            case item.animType === 't2':
                switch (itemName) {
                    case "dagger":
                        obj02 = 'meleedagger';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "greataxe":
                        obj02 = 'greataxe';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        console.log(obj01)
                        console.log(obj02)
                        console.log(color)

                        preview = obj01[obj02][color];
                        console.log(preview)
                        break;
                    case "greatclub":
                        obj02 = 'greatclub';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "greatsword":
                        obj02 = 'greatsword';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "handaxe":
                        obj02 = 'meleehandaxe';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "lasersword":
                        obj02 = 'lasersword';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "mace":
                        obj02 = 'mace';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "maul":
                        obj02 = 'maul';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "spear":
                        obj02 = 'meleespear';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "sword":
                        obj02 = 'sword';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "rapier":
                        obj02 = 'rapier';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        //console.log(preview);
                        break;
                    default:
                        preview = "no preview";
                }

                break;
            case item.animType === 't3':
                switch (itemName) {
                    case "1hs":
                        obj02 = 'genericmelee';
                        color = '1hs';
                        if (obj01[obj02][color] === undefined) { color = '1hs' };
                        preview = obj01[obj02][color];
                        break;
                    case "1hp":
                        obj02 = 'genericmelee';
                        color = '1hp';
                        if (obj01[obj02][color] === undefined) { color = '1hp' };
                        preview = obj01[obj02][color];
                        break;
                    case "1hb":
                        obj02 = 'genericmelee';
                        color = '1hb';
                        if (obj01[obj02][color] === undefined) { color = '1hb' };
                        preview = obj01[obj02][color];
                        break;
                    case "2hs":
                        obj02 = 'genericmelee';
                        color = '2hs';
                        if (obj01[obj02][color] === undefined) { color = '2hs' };
                        preview = obj01[obj02][color];
                        break;
                    case "2hp":
                        obj02 = 'genericmelee';
                        color = '2hp';
                        if (obj01[obj02][color] === undefined) { color = '2hp' };
                        preview = obj01[obj02][color];
                        break;
                    case "2hb":
                        obj02 = 'genericmelee';
                        color = '2hb';
                        if (obj01[obj02][color] === undefined) { color = '2hb' };
                        preview = obj01[obj02][color];
                        break;
                    case "unarmedstrike":
                        obj02 = 'unarmedstrike';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        switch (true) {
                            case item.uaStrikeType === ``:
                            case item.uaStrikeType === "physical":
                                if (obj01[obj02]['physical'][color] === undefined) { color = 'blue' };
                                preview = obj01[obj02]['physical'][color]['1'];
                                break;
                            default:
                                if (obj01[obj02]['magical'][color] === undefined) { color = 'blue' };
                                preview = obj01[obj02]['magical'][color]['1'];
                        }
                        break;
                    case "flurryofblows":
                        obj02 = 'flurryofblows';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        switch (true) {
                            case item.uaStrikeType === ``:
                            case item.uaStrikeType === "physical":
                                if (obj01[obj02]['physical'][color] === undefined) { color = 'blue' };
                                preview = obj01[obj02]['physical'][color];
                                break;
                            default:
                                if (obj01[obj02]['magical'][color] === undefined) { color = 'blue' };
                                preview = obj01[obj02]['magical'][color]['1'];
                        }
                        break;
                }
                break;
            case item.animType === 't4':
                switch (itemName) {
                    case "boulder":
                        obj02 = 'boulder';
                        preview = obj01[obj02]['30'];
                        break;
                    case "javelin":
                        obj02 = 'rangejavelin';
                        preview = obj01[obj02]['30'];
                        break;
                    case "siege":
                        obj02 = 'siege';
                        preview = obj01[obj02]['30'];
                        break;
                    case "rangesling":
                        obj02 = 'rangesling';
                        preview = obj01[obj02]['15'];
                        break;
                    case "rangehammer":
                        obj02 = 'rangehammer';
                        preview = obj01[obj02]['15'];
                        break;
                    case "lasershot":
                        obj02 = 'lasershot';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color]['30'];
                        break;
                }
                break;
            case item.animType === 't5':
                switch (itemName) {
                    case "creaturebite":
                        obj02 = "creaturebite";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'red';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'red' };
                        preview = obj01[obj02][color];
                        break;
                    case "creatureclaw":
                        obj02 = "creatureclaw";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'red';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'red' };
                        preview = obj01[obj02][color];
                        break;
                }
                break;
            case item.animType === 't6':
                switch (itemName) {
                    case "disintegrate":
                        obj02 = "disintegrate";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'green';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'green' };
                        preview = obj01[obj02][color]['15'];
                        break;
                    case "eldritchblast":
                        obj02 = "eldritchblast";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'purple';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'purple' };
                        preview = obj01[obj02][color]['30'];
                        break;
                    case "firebolt":
                        obj02 = "firebolt";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'orange';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'orange' };
                        preview = obj01[obj02][color]['30'];
                        break;
                    case "magicmissile":
                        obj02 = "magicmissile";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'purple';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'purple' };
                        preview = obj01[obj02][color]['30']['1'];
                        break;
                    case "rayoffrost":
                        obj02 = "rayoffrost";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color]['15'];
                        break;
                    case "scorchingray":
                        obj02 = "scorchingray";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'orange';
                                break;
                            default:
                                color = item.color;
                        }
                        switch (true) {
                            case item.spellVar === ``:
                            case item.spellVar === 'a1':
                            case item.spellVar === '01':
                                spellVar = '01';
                                break;
                            default:
                                spellVar = '02';
                        }
                        if (obj01[obj02][spellVar][color] === undefined) { color = 'orange' };
                        switch (spellVar) {
                            case '02':
                                preview = obj01[obj02][spellVar][color]['30']['1'];
                                break;
                            default:
                                preview = obj01[obj02][spellVar][color]['30'];
                        }
                        break;
                    case "witchbolt":
                        obj02 = "witchbolt";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color]['15'];
                        break;
                    case "guidingbolt":
                        obj02 = "guidingbolt";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'blue yellow';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue yellow' };
                        preview = obj01[obj02][color]['30'];
                        break;
                    default:
                        preview = "no preview";
                }
                break;
            case item.animType === 't7':
                switch (itemName) {
                    case "curewounds":
                        obj02 = "curewounds";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color]['400'];
                        break;
                    case "generichealing":
                        obj02 = "generichealing";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        switch (true) {
                            case item.spellVar === ``:
                            case item.spellVar === 'a1':
                            case item.spellVar === '01':
                                spellVar = '01';
                                if (obj01[obj02][spellVar][color] === undefined) { color = 'blue' };
                                preview = obj01[obj02][spellVar][color]['400'];
                                break;
                            default:
                                spellVar = '02';
                                if (obj01[obj02][spellVar][color] === undefined) { color = 'green orange' };
                                preview = obj01[obj02][spellVar][color]['600'];
                        }
                        break;
                }
                break;
            case item.animType === 't8':
                obj02 = "templates";
                tempType = item.templates.tempType;
                color = item.templates.tempColor;
                tempAnim = item.templates.tempAnim;
                if (item.templates.customAnim) {
                    preview = item.templates.customPath;
                } else {
                preview = obj01[obj02][tempType][tempAnim][color];
                }
                break;
            case item.animType === 't9':
                switch (item.explodeVariant) {
                    case '01':
                        obj02 = "explosion";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'orange';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['01'][color] === undefined) { color = 'orange' };
                        preview = obj01[obj02]['01'][color];
                        break;
                    case '02':
                        obj02 = "explosion";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['02'][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02]['02'][color];
                        break;
                    case '03':
                        obj02 = "explosion";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'yellow blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['03'][color] === undefined) { color = 'yellow blue' };
                        preview = obj01[obj02]['03'][color];
                        break;
                    case '04':
                        obj02 = "explosion";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['04'][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02]['04'][color];
                        break;
                    case '05':
                        obj02 = "explosion";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'blue white';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['05'][color] === undefined) { color = 'blue white' };
                        preview = obj01[obj02]['05'][color];
                        break;
                    case '06':
                        obj02 = "explosion";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'blue white';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['06'][color] === undefined) { color = 'blue white' };
                        preview = obj01[obj02]['06'][color];
                        break;
                    case '07':
                        obj02 = "explosion";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'blue white';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['07'][color] === undefined) { color = 'blue white' };
                        preview = obj01[obj02]['07'][color];
                        break;
                    case 'shatter':
                        obj02 = "shatter";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color];
                        break;
                }
                break;
            case item.animType === 't10':
                switch (item.explodeVariant) {
                    case '01':
                        obj02 = "explosion";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'orange';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['01'][color] === undefined) { color = 'orange' };
                        preview = obj01[obj02]['01'][color];
                        break;
                    case '02':
                        obj02 = "explosion";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['02'][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02]['02'][color];
                        break;
                    case '03':
                        obj02 = "explosion";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'yellow blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['03'][color] === undefined) { color = 'yellow blue' };
                        preview = obj01[obj02]['03'][color];
                        break;
                    case '04':
                        obj02 = "explosion";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['04'][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02]['04'][color];
                        break;
                    case '05':
                        obj02 = "explosion";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'blue white';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['05'][color] === undefined) { color = 'blue white' };
                        preview = obj01[obj02]['05'][color];
                        break;
                    case '06':
                        obj02 = "explosion";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'blue white';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['06'][color] === undefined) { color = 'blue white' };
                        preview = obj01[obj02]['06'][color];
                        break;
                    case '07':
                        obj02 = "explosion";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'blue white';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['07'][color] === undefined) { color = 'blue white' };
                        preview = obj01[obj02]['07'][color];
                        break;
                    case 'shatter':
                        obj02 = "shatter";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color];
                        break;
                    case 'antilife-shell':
                        obj02 = "antilifeshell";
                        preview = obj01[obj02]['antilifeshell'];
                        break;
                    case 'thunderwave':
                        obj02 = "thunderwave";
                        switch (true) {
                            case item.explodeColor === ``:
                            case item.explodeColor === 'a1':
                            case item.explodeColor === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color]['center'];
                        break;
                }
                break;
            case item.animType === 't11':
                switch (itemName) {
                    case "calllightning":
                        obj02 = "calllightning";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color];
                        break;
                    case "darkness":
                        obj02 = "darkness";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'black';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'black' };
                        preview = obj01[obj02][color];
                        break;
                    case "fogcloud":
                        obj02 = "fogcloud";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "sleetstorm":
                        obj02 = "sleetstorm";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color];
                        break;
                    case "spiritguardians":
                        obj02 = "spiritguardians";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'yellow blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'yellow blue' };
                        preview = obj01[obj02][color];
                        break;
                    case "wallofforce":
                        obj02 = "wallofforce";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'grey';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'grey' };
                        preview = obj01[obj02][color];
                        break;
                    case "whirlwind":
                        obj02 = "whirlwind";
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'blue grey';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue grey' };
                        preview = obj01[obj02][color];
                        break;
                }
                break;
            case item.animType === 't12':
                switch (itemName) {
                    case "mistystep":
                        obj02 = 'mistystep';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02]['01'][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02]['01'][color];
                        break;
                }
                break;
            case item.animType === 't13':
                switch (item.bards.bardAnim) {
                    case "bardicinspiration":
                        obj02 = 'bardicinspiration';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'green orange';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02]['inspire'][color] === undefined) { color = 'green orange' };
                        preview = obj01[obj02]['inspire'][color];
                        break;
                    case "music":
                        obj02 = 'music';
                        switch (true) {
                            case item.color === ``:
                            case item.color === 'a1':
                            case item.color === 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color]['1'];
                        break;
                }
                break;
        }
    }
    //console.log(preview);
    if (preview === undefined) { return "no preview" } else { return preview }
}
export default animPreview;
