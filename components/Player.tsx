"use client"

import usePlayer from "@/hooks/usePlayer";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import useSongById from "@/hooks/useGetSongById";
import PlayerContent from "./PlayerContent";

const Player = () => {
    const player = usePlayer();
    const { song } = useSongById(player.activeId)

    const songUrl = useLoadSongUrl(song!);

console.log(useSongById(player.activeId))
    if (!song || !songUrl || !player.activeId) {
        console.log("no song")
        return null
    }
    return (
        <div
            className="
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
       
      "
        >
            player
            <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
        </div>
    )
}
export default Player;