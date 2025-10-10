import { AppShowCaseProps } from "./types";

export const apps: AppShowCaseProps[] = [
  {
    description: "A classic Sudoku game written in SwiftUI + AppKit.",
    hoverLink:
      "https://apps.apple.com/us/app/brain-puzzle-sudoku-classic/id6749855572?mt=12 Brain Puzzle: Sudoku Classic",
    imageSrc: "/sudoku_classic.png",
    title: "Brain Puzzle: Sudoku Classic",
    optionalLinks: [
      {
        link: "https://apps.apple.com/us/app/brain-puzzle-sudoku-classic/id6749855572?mt: 12",
        title: "Mac App Store",
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
      "https://apps.apple.com/us/app/mood-journal-daily-mood-log/id6683299156",
    imageSrc: "/daily_mood.png",
    title: "Mood Journal: Daily Mood Log",
    optionalLinks: [
      {
        link: "https://apps.apple.com/us/app/mood-journal-daily-mood-log/id6683299156",
        title: "App Store",
      },
    ],
  },
  {
    description: "Log your workouts",
    hoverLink:
      "https://apps.apple.com/us/app/record-recall-log-your-bests/id1629719336",
    imageSrc: "/record_recall.png",
    title: "Record Recall",
    optionalLinks: [
      {
        link: "https://apps.apple.com/us/app/record-recall-log-your-bests/id1629719336",
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
      "https://apps.apple.com/us/app/percent-calculator-off-of/id1577127191",
    imageSrc: "/solidus.png",
    optionalLinks: [
      {
        link: "https://apps.apple.com/us/app/percent-calculator-off-of/id1577127191 Percent Calculator: Off Of",
        title: "App Store",
      },
      {
        link: "https://apps.apple.com/us/app/percent-calculator-off-and-of/id1634868567?mt=12 Percent Calculator: Off and Of",
        title: "Mac App Store",
      },
      {
        link: "https://github.com/NipperInShorts/solidus",
        title: "Github",
      },
    ],
  },
];
