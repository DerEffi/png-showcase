import APP0, { DensityUnit, ThumbnailFormat } from "../models/app0"
import DQT from "../models/dqt";
import Marker from "../models/marker"
import { sanitize } from "./formatter";

export function renderAPP0(marker: Marker<APP0>): JSX.Element {
    if(marker.content === undefined || !(marker.content instanceof APP0))
        return <></>

    return(
        <>
            ID: {sanitize(marker.content.identifier)} Version {marker.content.identifier === "JFIF" ? marker.content.version : ""}<br/>
            Density: {marker.content.densityX} x {marker.content.densityY} {DensityUnit[marker.content.densityUnits]}<br/>
            Thumbnail: {marker.content.thumbnail.width} x {marker.content.thumbnail.height} px ({ThumbnailFormat[marker.content.thumbnail.format]})
        </>
    );
}

export function renderCOM(marker: Marker<string>): JSX.Element {
    if(marker.content === undefined || (typeof marker.content !== "string"))
        return <></>

    return(
        <>
            {sanitize(marker.content)}  
        </>
    );
}

export function renderDQT(marker: Marker<DQT>): JSX.Element {
    if(marker.content === undefined || !(marker.content instanceof DQT) || marker.content.values.length !== 64)
        return <></>

    return(
        <>
            Precision: {marker.content.hasWords ? "words" : "bytes"} <br/>
            Destination: {marker.content.destination}<br/>
            <br/>
            <table>
                <tr><td>{marker.content.values[0]}</td><td>{marker.content.values[1]}</td><td>{marker.content.values[5]}</td><td>{marker.content.values[6]}</td><td>{marker.content.values[14]}</td><td>{marker.content.values[15]}</td><td>{marker.content.values[27]}</td><td>{marker.content.values[28]}</td>
                </tr>
                <tr><td>{marker.content.values[2]}</td><td>{marker.content.values[4]}</td><td>{marker.content.values[7]}</td><td>{marker.content.values[13]}</td><td>{marker.content.values[16]}</td><td>{marker.content.values[26]}</td><td>{marker.content.values[29]}</td><td>{marker.content.values[42]}</td>
                </tr>
                <tr><td>{marker.content.values[3]}</td><td>{marker.content.values[8]}</td><td>{marker.content.values[12]}</td><td>{marker.content.values[17]}</td><td>{marker.content.values[25]}</td><td>{marker.content.values[30]}</td><td>{marker.content.values[41]}</td><td>{marker.content.values[43]}</td>
                </tr>
                <tr><td>{marker.content.values[9]}</td><td>{marker.content.values[11]}</td><td>{marker.content.values[18]}</td><td>{marker.content.values[24]}</td><td>{marker.content.values[31]}</td><td>{marker.content.values[40]}</td><td>{marker.content.values[44]}</td><td>{marker.content.values[53]}</td>
                </tr>
                <tr><td>{marker.content.values[10]}</td><td>{marker.content.values[19]}</td><td>{marker.content.values[23]}</td><td>{marker.content.values[32]}</td><td>{marker.content.values[39]}</td><td>{marker.content.values[45]}</td><td>{marker.content.values[52]}</td><td>{marker.content.values[54]}</td>
                </tr>
                <tr><td>{marker.content.values[20]}</td><td>{marker.content.values[22]}</td><td>{marker.content.values[33]}</td><td>{marker.content.values[38]}</td><td>{marker.content.values[46]}</td><td>{marker.content.values[51]}</td><td>{marker.content.values[55]}</td><td>{marker.content.values[60]}</td>
                </tr>
                <tr><td>{marker.content.values[21]}</td><td>{marker.content.values[34]}</td><td>{marker.content.values[37]}</td><td>{marker.content.values[47]}</td><td>{marker.content.values[50]}</td><td>{marker.content.values[56]}</td><td>{marker.content.values[59]}</td><td>{marker.content.values[61]}</td>
                </tr>
                <tr><td>{marker.content.values[35]}</td><td>{marker.content.values[36]}</td><td>{marker.content.values[48]}</td><td>{marker.content.values[49]}</td><td>{marker.content.values[57]}</td><td>{marker.content.values[58]}</td><td>{marker.content.values[62]}</td><td>{marker.content.values[63]}</td>
                </tr>
            </table>
        </>
    );
}