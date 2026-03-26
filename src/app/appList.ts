import { AppShowCaseProps } from "./types";

export const apps: AppShowCaseProps[] = [
  {
    description: "A classic Sudoku game written in SwiftUI + AppKit.",
    hoverLink:
      "https://apps.apple.com/app/apple-store/id6749855572?pt=127054267&ct=shortsgamestrong&mt=8",
    imageSrc: "/sudoku_classic.png",
    title: "Brain Puzzle: Sudoku Classic",
    optionalLinks: [
      {
        link: "https://apps.apple.com/app/apple-store/id6749855572?pt=127054267&ct=shortsgamestrong&mt=8",
        title: "Mac App Store",
      },
      {
        link: "https://apps.apple.com/app/apple-store/id6749855572?pt=127054267&ct=shortsgamestrong&mt=8",
        title: "App Store (iPad only, iOS coming soon)",
      },
    ],
  },
  {
    description: "Mac app for simplifying dSYM uploads.",
    hoverLink: "https://codedaddys.gumroad.com/l/bugbuddy",
    imageSrc: "/bug_buddy.png",
    title: "Bug Buddy",
    optionalLinks: [
      {
        link: "https://codedaddys.gumroad.com/l/bugbuddy",
        title: "Gumroad",
      },
      {
        link: "https://github.com/NipperInShorts/BugBuddy",
        title: "Github",
      },
    ],
  },
  {
    description: "Log your mood daily and keep tabs on your mental health.",
    hoverLink:
      "https://apps.apple.com/app/apple-store/id6683299156?pt=127054267&ct=shortsgamestrong&mt=8",
    imageSrc: "/daily_mood.png",
    title: "Mood Journal: Daily Mood Log",
    optionalLinks: [
      {
        link: "https://apps.apple.com/app/apple-store/id6683299156?pt=127054267&ct=shortsgamestrong&mt=8",
        title: "App Store",
      },
    ],
  },
  {
    description: "Log your workouts",
    hoverLink:
      "https://apps.apple.com/app/apple-store/id1629719336?pt=127054267&ct=shortsgamestrong&mt=8",
    imageSrc: "/record_recall.png",
    title: "Record Recall",
    optionalLinks: [
      {
        link: "https://apps.apple.com/app/apple-store/id1629719336?pt=127054267&ct=shortsgamestrong&mt=8",
        title: "App Store",
      },
      {
        link: "https://github.com/NipperInShorts/record-recall",
        title: "Github",
      },
    ],
  },
  {
    title: "Solidus: Percent Calculator",
    description:
      "Simple percent calculator for logging percent off and of amounts for iOS + Apple Watch + macOS",
    hoverLink:
      "https://apps.apple.com/app/apple-store/id1577127191?pt=127054267&ct=shortsgamestrong&mt=8",
    imageSrc: "/solidus.png",
    optionalLinks: [
      {
        link: "https://apps.apple.com/app/apple-store/id1577127191?pt=127054267&ct=shortsgamestrong&mt=8",
        title: "App Store",
      },
      {
        link: "https://apps.apple.com/app/apple-store/id1634868567?pt=127054267&ct=shortsgamestrong&mt=8",
        title: "Mac App Store",
      },
      {
        link: "https://github.com/NipperInShorts/solidus",
        title: "Github",
      },
    ],
  },
];
