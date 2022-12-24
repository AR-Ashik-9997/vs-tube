
import { ReactNode } from "react";

export interface child{
    children:ReactNode;
}
export interface video{
    videoInfo:{
        _id:string;
        title:string;
        video_url:string;
        img_url:string;
    }[];
}
