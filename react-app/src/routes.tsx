import Home from './pages/home';
import TopPlayers from './pages/top-players';
import CardStatistics from './pages/card-statistics';
import CardGallery from './pages/card-gallery';
import DeckBuilder from './pages/deck-builder';
import DeckLibrary from './pages/deck-library';
import About from './pages/about';
import NotFound from './pages/not-found';

// type Imports = typeof Home | typeof TopPlayers | typeof CardStatistics 
//     | typeof CardGallery | typeof DeckBuilder
//     | typeof DeckLibrary | typeof About | JSX.Element;

interface PageStrings {
    home: string;
    topPlayers: string;
    cardStatistics: string;
    cardGallery: string;
    deckBuilder: string;
    deckLibrary: string;
    about: string;
    notFound: string;
}

// interface RouteObj {
//     path: string;
//     displayName: string;
//     component: Imports;
//     exact: boolean | null;
//     noRender: boolean | null;
// }

const pathIds : PageStrings = {
    home: "home",
    topPlayers: "top-players",
    cardStatistics: "card-statistics",
    cardGallery: "card-gallery",
    deckBuilder: "deck-builder",
    deckLibrary: "deck-library",
    about: "about",
    notFound: "not-found"
}

const pathRouting : PageStrings = {
    home: "/",
    topPlayers: "/top-players",
    cardStatistics: "/statistics",
    cardGallery: "/card-gallery",
    deckBuilder: "/deck-builder",
    deckLibrary: "/deck-library",
    about: "/about",
    notFound: "/not-found"
}

const pageRoutes = {
    [pathIds.home]: {
        path: pathRouting.home,
        displayName: "Home",
        component: Home,
        exact: true
    },
    [pathIds.topPlayers]: {
        path: pathRouting.topPlayers,
        displayName: "Top Players",
        component: TopPlayers
    },
    [pathIds.cardStatistics]: {
        path: pathRouting.cardStatistics,
        displayName: "Statistics",
        component: CardStatistics
    },
    [pathIds.cardGallery]: {
        path: pathRouting.cardGallery,
        displayName: "Card Gallery",
        component: CardGallery
    },
    [pathIds.deckBuilder]: {
        path: pathRouting.deckBuilder,
        displayName: "Deck Builder",
        component: DeckBuilder
    },
    [pathIds.deckLibrary]: {
        path: pathRouting.deckLibrary,
        displayName: "Deck Library",
        component: DeckLibrary
    },
    [pathIds.about]: {
        path: pathRouting.about,
        displayName: "About",
        component: About
    },
    [pathIds.notFound]: {
        path: pathRouting.notFound,
        displayName: "Page Not Found",
        component: NotFound,
        noRender: true
    }
};

export { pageRoutes, pathIds, pathRouting };