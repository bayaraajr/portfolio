"use client";

import AegisGrid from "@jay/components/grids/AegisGrid";
import BasketballGrid from "@jay/components/grids/BasketballGrid";
import ContactGrid from "@jay/components/grids/ContactGrid";
import CurrentTime from "@jay/components/grids/CurrentTime";
import EGolomt from "@jay/components/grids/EGolomt";
import InstagramStories from "@jay/components/grids/InstagramStories";
import Introduction from "@jay/components/grids/Introduction";
import LinksGrid from "@jay/components/grids/LinksGrid";
import Location from "@jay/components/grids/Location";
import SpotifyPlayer from "@jay/components/grids/Spotify";
export default function Home() {
    return (
        <div className="max-w-[1200px]">
            <div className="grid grid-cols-4 w-full gap-4">
                <Introduction />
                <CurrentTime />
                <InstagramStories />
                <EGolomt />
                <AegisGrid />
                <Location />
                <SpotifyPlayer />
                <ContactGrid />
                <BasketballGrid />
                <LinksGrid />
            </div>
        </div>
    );
}
