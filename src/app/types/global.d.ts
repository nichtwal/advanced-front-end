declare module '* scss'
 interface IclassNames {
    [className:string]: string;

 }
 const classNames: IclassNames
 export = classNames

 declare module "*.svg" {
   import React from "react";
   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
   export default SVG
 }