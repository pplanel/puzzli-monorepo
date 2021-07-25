export enum PlayerStates {
    Playing,
    Paused,
    Seeked,
}

export interface Room {
    roomid: string;
    roomowner?: User;
    users: any[];
    playlist?: Music[];
    nowPlaying?: {
        music?: Music;
        timecode?: number;
        lasttimecode?: number;
    };
}

export interface Music {
    title: string;
    id?: string;
    videourl?: string;
    thumbnail: {
        url: string;
        width: number;
        height: number;
    };
    channelTitle: string;
    url: string;
    requester?: User;
}

export interface User {
    id: number,
    username: string
}
