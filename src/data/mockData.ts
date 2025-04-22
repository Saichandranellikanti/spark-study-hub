
import { BookText, Calculator, Globe, Microscope, FileText } from "lucide-react";
import { Subject } from "@/components/common/SubjectGrid";
import { FlashcardItem } from "@/components/cards/Flashcard";
import { CheatSheetSection } from "@/components/cards/CheatSheet";
import { QuizQuestion } from "@/components/cards/Quiz";
import React from 'react';

// Subjects
export const subjectsMock: Record<string, Subject[]> = {
  flashcards: [
    {
      id: "math",
      title: "Mathematics",
      icon: React.createElement(Calculator, { className: "h-5 w-5" }),
      description: "Practice key math concepts and formulas",
      itemCount: 12,
      type: "flashcards"
    },
    {
      id: "science",
      title: "Science",
      icon: React.createElement(Microscope, { className: "h-5 w-5" }),
      description: "Master scientific principles and terminology",
      itemCount: 15,
      type: "flashcards"
    },
    {
      id: "history",
      title: "History",
      icon: React.createElement(Globe, { className: "h-5 w-5" }),
      description: "Review historical events, dates, and figures",
      itemCount: 10,
      type: "flashcards"
    }
  ],
  cheatsheets: [
    {
      id: "math",
      title: "Mathematics",
      icon: React.createElement(Calculator, { className: "h-5 w-5" }),
      description: "Essential math equations and concepts",
      itemCount: 3,
      type: "cheatsheets"
    },
    {
      id: "science",
      title: "Science",
      icon: React.createElement(Microscope, { className: "h-5 w-5" }),
      description: "Quick reference for key scientific principles",
      itemCount: 2,
      type: "cheatsheets"
    },
    {
      id: "history",
      title: "History",
      icon: React.createElement(Globe, { className: "h-5 w-5" }),
      description: "Important historical timelines and events",
      itemCount: 2,
      type: "cheatsheets"
    }
  ],
  quizzes: [
    {
      id: "math",
      title: "Mathematics",
      icon: React.createElement(Calculator, { className: "h-5 w-5" }),
      description: "Test your knowledge of mathematical concepts",
      itemCount: 10,
      type: "quizzes"
    },
    {
      id: "science",
      title: "Science",
      icon: React.createElement(Microscope, { className: "h-5 w-5" }),
      description: "Check your understanding of scientific principles",
      itemCount: 8,
      type: "quizzes"
    },
    {
      id: "history",
      title: "History",
      icon: React.createElement(Globe, { className: "h-5 w-5" }),
      description: "Challenge yourself on historical facts",
      itemCount: 12,
      type: "quizzes"
    }
  ]
};

// Flashcards
export const flashcardsMock: Record<string, FlashcardItem[]> = {
  math: [
    {
      id: "math-1",
      front: "What is the Pythagorean theorem?",
      back: "a² + b² = c², where c is the hypotenuse of a right triangle and a and b are the other two sides."
    },
    {
      id: "math-2",
      front: "What is the quadratic formula?",
      back: "For ax² + bx + c = 0, x = (-b ± √(b² - 4ac)) / 2a"
    },
    {
      id: "math-3",
      front: "What is the formula for the area of a circle?",
      back: "A = πr², where r is the radius of the circle"
    }
  ],
  science: [
    {
      id: "science-1",
      front: "What is Newton's First Law of Motion?",
      back: "An object at rest stays at rest, and an object in motion stays in motion with the same speed and direction, unless acted upon by an external force."
    },
    {
      id: "science-2",
      front: "What is the formula for photosynthesis?",
      back: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂"
    },
    {
      id: "science-3",
      front: "What is the periodic table?",
      back: "A tabular arrangement of chemical elements organized by atomic number, electron configuration, and recurring chemical properties."
    }
  ],
  history: [
    {
      id: "history-1",
      front: "When did World War II end?",
      back: "September 2, 1945, with the formal surrender of Japan"
    },
    {
      id: "history-2",
      front: "Who was the first President of the United States?",
      back: "George Washington (1789-1797)"
    },
    {
      id: "history-3",
      front: "What was the Renaissance?",
      back: "A period of European cultural, artistic, political, and scientific \"rebirth\" after the Middle Ages, roughly from the 14th to the 17th century."
    }
  ]
};

// Cheat Sheets
export const cheatSheetsMock: Record<string, {
  title: string;
  description: string;
  sections: CheatSheetSection[];
}> = {
  math: {
    title: "Mathematics Cheat Sheet",
    description: "Essential formulas and concepts for mathematics",
    sections: [
      {
        id: "math-cs-1",
        title: "Algebra Basics",
        content: 
`• Linear equation: ax + b = c
• Quadratic formula: x = (-b ± √(b² - 4ac)) / 2a
• Difference of squares: a² - b² = (a + b)(a - b)
• Perfect square trinomial: a² + 2ab + b² = (a + b)²
• FOIL Method: (a + b)(c + d) = ac + ad + bc + bd`
      },
      {
        id: "math-cs-2",
        title: "Geometry Formulas",
        content: 
`• Area of a rectangle: A = l × w
• Area of a triangle: A = (1/2) × b × h
• Area of a circle: A = πr²
• Circumference of a circle: C = 2πr
• Volume of a cube: V = s³
• Volume of a sphere: V = (4/3)πr³
• Pythagorean theorem: a² + b² = c²`
      },
      {
        id: "math-cs-3",
        title: "Trigonometry",
        content: 
`• Sine: sin(θ) = opposite / hypotenuse
• Cosine: cos(θ) = adjacent / hypotenuse
• Tangent: tan(θ) = opposite / adjacent
• Sine law: a/sin(A) = b/sin(B) = c/sin(C)
• Cosine law: c² = a² + b² - 2ab·cos(C)
• Pythagorean identity: sin²(θ) + cos²(θ) = 1`
      }
    ]
  },
  science: {
    title: "Science Cheat Sheet",
    description: "Key concepts and formulas for science",
    sections: [
      {
        id: "science-cs-1",
        title: "Physics Laws",
        content: 
`• Newton's First Law: An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.
• Newton's Second Law: F = ma (Force equals mass times acceleration)
• Newton's Third Law: For every action, there is an equal and opposite reaction.
• Law of Conservation of Energy: Energy cannot be created or destroyed, only transformed from one form to another.
• Ohm's Law: V = IR (Voltage equals current times resistance)`
      },
      {
        id: "science-cs-2",
        title: "Chemistry Basics",
        content: 
`• Periodic Table Organization: Elements are arranged by increasing atomic number.
• Atomic Structure: Atoms consist of protons, neutrons, and electrons.
• Chemical Bonding: Ionic, Covalent, and Metallic bonds.
• pH Scale: 0-14, with 7 being neutral, below 7 acidic, above 7 basic.
• Gas Laws:
  - Boyle's Law: P₁V₁ = P₂V₂ (at constant temperature)
  - Charles's Law: V₁/T₁ = V₂/T₂ (at constant pressure)
  - Ideal Gas Law: PV = nRT`
      }
    ]
  },
  history: {
    title: "History Cheat Sheet",
    description: "Important dates, events, and figures in history",
    sections: [
      {
        id: "history-cs-1",
        title: "Major Historical Periods",
        content: 
`• Ancient History (3000 BCE - 500 CE)
  - Ancient Egypt (3100 BCE - 332 BCE)
  - Ancient Greece (800 BCE - 146 BCE)
  - Roman Empire (27 BCE - 476 CE)

• Middle Ages (500 - 1500)
  - Early Middle Ages (500 - 1000)
  - High Middle Ages (1000 - 1300)
  - Late Middle Ages (1300 - 1500)

• Renaissance and Reformation (1300 - 1600)

• Age of Exploration (1400 - 1700)

• Industrial Revolution (1760 - 1840)

• Modern Era (1800 - Present)
  - World War I (1914 - 1918)
  - World War II (1939 - 1945)
  - Cold War (1945 - 1991)`
      },
      {
        id: "history-cs-2",
        title: "Key Historical Figures",
        content: 
`• Alexander the Great (356 - 323 BCE): Created one of the largest empires of the ancient world.

• Julius Caesar (100 - 44 BCE): Roman general and statesman who played a critical role in the events that led to the demise of the Roman Republic.

• Charlemagne (742 - 814): King of the Franks who united much of Western Europe during the Middle Ages.

• Leonardo da Vinci (1452 - 1519): Renaissance polymath whose areas of interest included invention, painting, sculpture, architecture, science, music, mathematics, and more.

• Christopher Columbus (1451 - 1506): Explorer who completed four voyages across the Atlantic Ocean, opening the way for European exploration and colonization of the Americas.

• Napoleon Bonaparte (1769 - 1821): French statesman and military leader who rose to prominence during the French Revolution.

• Abraham Lincoln (1809 - 1865): American statesman and lawyer who served as the 16th president of the United States, leading the nation through the Civil War.

• Winston Churchill (1874 - 1965): British statesman, officer, and writer who served as Prime Minister of the United Kingdom from 1940 to 1945, during World War II.`
      }
    ]
  }
};

// Quizzes
export const quizzesMock: Record<string, {
  title: string;
  questions: QuizQuestion[];
}> = {
  math: {
    title: "Mathematics Quiz",
    questions: [
      {
        id: "math-q1",
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.14", "3.16", "3.12", "3.18"],
        correctAnswer: 0,
        explanation: "The value of π is approximately 3.14159, which rounds to 3.14 when expressed to two decimal places."
      },
      {
        id: "math-q2",
        question: "Which of the following is the Pythagorean theorem?",
        options: ["a + b = c", "a² - b² = c²", "a² + b² = c²", "a × b = c"],
        correctAnswer: 2,
        explanation: "The Pythagorean theorem states that in a right triangle, the square of the length of the hypotenuse (c) is equal to the sum of squares of the other two sides (a and b)."
      }
    ]
  },
  science: {
    title: "Science Quiz",
    questions: [
      {
        id: "science-q1",
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gl", "Au", "Ag"],
        correctAnswer: 2,
        explanation: "The chemical symbol for gold is Au, derived from its Latin name 'aurum'."
      },
      {
        id: "science-q2",
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
        explanation: "Mars is known as the Red Planet due to the reddish appearance given by iron oxide prevalent on its surface."
      }
    ]
  },
  history: {
    title: "History Quiz",
    questions: [
      {
        id: "history-q1",
        question: "In which year did Christopher Columbus first reach the Americas?",
        options: ["1492", "1498", "1500", "1510"],
        correctAnswer: 0,
        explanation: "Christopher Columbus first reached the Americas in 1492, specifically landing in the Bahamas on October 12."
      },
      {
        id: "history-q2",
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Jane Goodall", "Dorothy Hodgkin"],
        correctAnswer: 0,
        explanation: "Marie Curie was the first woman to win a Nobel Prize. She won the Nobel Prize in Physics in 1903 and later in Chemistry in 1911."
      }
    ]
  }
};

// User Progress
export const userProgressMock = {
  flashcardsCompleted: 27,
  quizzesCompleted: 8,
  averageScore: 78,
  streak: 5,
  recentActivity: [
    { type: "flashcard", subject: "Science", date: "2023-04-21", score: null },
    { type: "quiz", subject: "Mathematics", date: "2023-04-20", score: 80 },
    { type: "cheatsheet", subject: "History", date: "2023-04-18", score: null }
  ]
};
