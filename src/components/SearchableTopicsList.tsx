import { useState, useEffect, useRef } from "react";
import svgPaths from "../imports/svg-z4fqpabjrv";
import InitialSearchScreen from "./InitialSearchScreen";

interface PhysicsTopic {
  id: string;
  title: string;
  type: string;
  duration: string;
  isNew?: boolean;
}

// Category configuration
const categories = [
  {
    name: "Videos",
    icon: svgPaths.p2a7ab180,
    color: "#A684FF",
  },
  {
    name: "Lessons",
    icon: svgPaths.p3be06432,
    color: "#FF8904",
  },
  {
    name: "Textbook",
    icon: svgPaths.p28396300,
    color: "#FDC700",
  },
  {
    name: "Glossary",
    icon: svgPaths.p6674000,
    color: "#E12AFB",
  },
  { name: "Exam", icon: svgPaths.p281f4980, color: "#46ECD5" },
  {
    name: "Databook",
    icon: svgPaths.p11306900,
    color: "#00D492",
  },
  {
    name: "Bootcamp",
    icon: svgPaths.p319e8e00,
    color: "#2B7FFF",
  },
  {
    name: "Vocab",
    icon: svgPaths.p30739500,
    color: "#E12AFB",
    isStroke: true,
  },
  {
    name: "Flashcards",
    icon: svgPaths.p2e8e1e00,
    color: "#00BCFF",
  },
  {
    name: "Cheatsheets",
    icon: svgPaths.p25efe400,
    color: "#9AE600",
  },
];

// Extended IBDP Physics topics (140 total)
const physicsTopics: PhysicsTopic[] = [
  // Original topics (40)
  {
    id: "1",
    title: "1.1 Measurements in physics",
    type: "Lessons",
    duration: "5 Min",
    isNew: true,
  },
  {
    id: "2",
    title: "1.2 Uncertainties and errors",
    type: "Lessons",
    duration: "7 Min",
  },
  {
    id: "3",
    title: "1.3 Vectors and scalars",
    type: "Videos",
    duration: "4 Min",
  },
  {
    id: "4",
    title: "2.1 Motion",
    type: "Lessons",
    duration: "6 Min",
  },
  {
    id: "5",
    title: "2.2 Forces",
    type: "Lessons",
    duration: "8 Min",
  },
  {
    id: "6",
    title: "2.3 Work, energy and power",
    type: "Lessons",
    duration: "5 Min",
    isNew: true,
  },
  {
    id: "7",
    title: "2.4 Momentum and impulse",
    type: "Videos",
    duration: "6 Min",
  },
  {
    id: "8",
    title: "3.1 Thermal concepts",
    type: "Lessons",
    duration: "5 Min",
  },
  {
    id: "9",
    title: "3.2 Modelling a gas",
    type: "Lessons",
    duration: "7 Min",
  },
  {
    id: "10",
    title: "4.1 Oscillations",
    type: "Videos",
    duration: "6 Min",
  },
  {
    id: "11",
    title: "4.2 Travelling waves",
    type: "Lessons",
    duration: "5 Min",
  },
  {
    id: "12",
    title: "4.3 Wave characteristics",
    type: "Lessons",
    duration: "8 Min",
  },
  {
    id: "13",
    title: "4.4 Wave behaviour",
    type: "Lessons",
    duration: "6 Min",
  },
  {
    id: "14",
    title: "4.5 Standing waves",
    type: "Videos",
    duration: "5 Min",
  },
  {
    id: "15",
    title: "5.1 Electric fields",
    type: "Lessons",
    duration: "7 Min",
  },
  {
    id: "16",
    title: "5.2 Heating effect of electric currents",
    type: "Lessons",
    duration: "6 Min",
  },
  {
    id: "17",
    title: "5.3 Electric cells",
    type: "Lessons",
    duration: "5 Min",
  },
  {
    id: "18",
    title: "5.4 Magnetic fields",
    type: "Videos",
    duration: "8 Min",
    isNew: true,
  },
  {
    id: "19",
    title: "6.1 Circular motion",
    type: "Lessons",
    duration: "6 Min",
  },
  {
    id: "20",
    title: "6.2 Newton's law of gravitation",
    type: "Lessons",
    duration: "7 Min",
  },
  {
    id: "21",
    title: "6.2.1 Gravitational fields",
    type: "Lessons",
    duration: "5 Min",
  },
  {
    id: "22",
    title: "6.2.2 Principles of Form and function",
    type: "Lessons",
    duration: "5 Min",
    isNew: true,
  },
  {
    id: "23",
    title: "6.2.3 Orbital mechanics",
    type: "Lessons",
    duration: "6 Min",
  },
  {
    id: "24",
    title: "7.1 Discrete energy and radioactivity",
    type: "Videos",
    duration: "8 Min",
  },
  {
    id: "25",
    title: "7.2 Nuclear reactions",
    type: "Lessons",
    duration: "7 Min",
  },
  {
    id: "26",
    title: "7.3 The structure of matter",
    type: "Lessons",
    duration: "6 Min",
  },
  {
    id: "27",
    title: "8.1 Energy sources",
    type: "Lessons",
    duration: "5 Min",
  },
  {
    id: "28",
    title: "8.2 Thermal energy transfer",
    type: "Lessons",
    duration: "7 Min",
  },
  {
    id: "29",
    title: "9.1 Simple harmonic motion",
    type: "Videos",
    duration: "8 Min",
  },
  {
    id: "30",
    title: "9.2 Single-slit diffraction",
    type: "Lessons",
    duration: "6 Min",
  },
  {
    id: "31",
    title: "9.3 Interference",
    type: "Lessons",
    duration: "5 Min",
  },
  {
    id: "32",
    title: "9.4 Resolution",
    type: "Lessons",
    duration: "5 Min",
  },
  {
    id: "33",
    title: "9.5 Doppler effect",
    type: "Videos",
    duration: "7 Min",
  },
  {
    id: "34",
    title: "10.1 Describing fields",
    type: "Lessons",
    duration: "6 Min",
  },
  {
    id: "35",
    title: "10.2 Fields at work",
    type: "Lessons",
    duration: "8 Min",
  },
  {
    id: "36",
    title: "11.1 Electromagnetic induction",
    type: "Videos",
    duration: "7 Min",
  },
  {
    id: "37",
    title: "11.2 Power generation and transmission",
    type: "Lessons",
    duration: "6 Min",
  },
  {
    id: "38",
    title: "11.3 Capacitance",
    type: "Lessons",
    duration: "5 Min",
  },
  {
    id: "39",
    title: "12.1 The interaction of matter with radiation",
    type: "Lessons",
    duration: "8 Min",
  },
  {
    id: "40",
    title: "12.2 Nuclear physics",
    type: "Videos",
    duration: "7 Min",
  },

  // Additional 100 topics
  {
    id: "41",
    title: "A.1 Relativity of space and time",
    type: "Textbook",
    duration: "10 Min",
  },
  {
    id: "42",
    title: "A.2 Lorentz transformations",
    type: "Lessons",
    duration: "12 Min",
    isNew: true,
  },
  {
    id: "43",
    title: "A.3 Spacetime diagrams",
    type: "Videos",
    duration: "9 Min",
  },
  {
    id: "44",
    title: "A.4 Relativistic mechanics",
    type: "Glossary",
    duration: "8 Min",
  },
  {
    id: "45",
    title: "A.5 General relativity",
    type: "Exam",
    duration: "15 Min",
  },
  {
    id: "46",
    title: "B.1 Thermal energy transfers",
    type: "Databook",
    duration: "6 Min",
  },
  {
    id: "47",
    title: "B.2 Greenhouse effect",
    type: "Predicted Paper",
    duration: "7 Min",
  },
  {
    id: "48",
    title: "B.3 Gas laws",
    type: "Bootcamp",
    duration: "11 Min",
  },
  {
    id: "49",
    title: "B.4 Thermodynamic processes",
    type: "Vocab",
    duration: "5 Min",
  },
  {
    id: "50",
    title: "B.5 Entropy and spontaneity",
    type: "Flashcards",
    duration: "9 Min",
  },
  {
    id: "51",
    title: "C.1 Introduction to imaging",
    type: "Cheatsheets",
    duration: "6 Min",
  },
  {
    id: "52",
    title: "C.2 Imaging instrumentation",
    type: "Question Bank",
    duration: "8 Min",
  },
  {
    id: "53",
    title: "C.3 Fibre optics",
    type: "Lessons",
    duration: "7 Min",
  },
  {
    id: "54",
    title: "C.4 Medical imaging",
    type: "Videos",
    duration: "10 Min",
    isNew: true,
  },
  {
    id: "55",
    title: "D.1 Stellar quantities",
    type: "Textbook",
    duration: "9 Min",
  },
  {
    id: "56",
    title: "D.2 Stellar characteristics and processes",
    type: "Glossary",
    duration: "11 Min",
  },
  {
    id: "57",
    title: "D.3 Cosmology",
    type: "Exam",
    duration: "14 Min",
  },
  {
    id: "58",
    title: "D.4 Stellar evolution",
    type: "Databook",
    duration: "8 Min",
  },
  {
    id: "59",
    title: "D.5 Galaxies and the universe",
    type: "Predicted Paper",
    duration: "12 Min",
  },
  {
    id: "60",
    title: "1.1.1 SI units and their usage",
    type: "Bootcamp",
    duration: "5 Min",
  },
  {
    id: "61",
    title: "1.1.2 Scientific notation and orders of magnitude",
    type: "Vocab",
    duration: "4 Min",
  },
  {
    id: "62",
    title: "1.2.1 Random and systematic errors",
    type: "Flashcards",
    duration: "6 Min",
  },
  {
    id: "63",
    title: "1.2.2 Absolute and percentage uncertainties",
    type: "Cheatsheets",
    duration: "7 Min",
  },
  {
    id: "64",
    title: "1.3.1 Vector addition and subtraction",
    type: "Question Bank",
    duration: "5 Min",
  },
  {
    id: "65",
    title: "1.3.2 Resolution of vectors",
    type: "Lessons",
    duration: "6 Min",
  },
  {
    id: "66",
    title: "2.1.1 Distance and displacement",
    type: "Videos",
    duration: "4 Min",
  },
  {
    id: "67",
    title: "2.1.2 Speed and velocity",
    type: "Textbook",
    duration: "5 Min",
  },
  {
    id: "68",
    title: "2.1.3 Acceleration",
    type: "Glossary",
    duration: "6 Min",
    isNew: true,
  },
  {
    id: "69",
    title: "2.1.4 Equations of motion",
    type: "Exam",
    duration: "8 Min",
  },
  {
    id: "70",
    title: "2.1.5 Graphs of motion",
    type: "Databook",
    duration: "7 Min",
  },
  {
    id: "71",
    title: "2.1.6 Projectile motion",
    type: "Predicted Paper",
    duration: "9 Min",
  },
  {
    id: "72",
    title: "2.2.1 Newton's first law",
    type: "Bootcamp",
    duration: "5 Min",
  },
  {
    id: "73",
    title: "2.2.2 Newton's second law",
    type: "Vocab",
    duration: "6 Min",
  },
  {
    id: "74",
    title: "2.2.3 Newton's third law",
    type: "Flashcards",
    duration: "5 Min",
  },
  {
    id: "75",
    title: "2.2.4 Free body diagrams",
    type: "Cheatsheets",
    duration: "7 Min",
  },
  {
    id: "76",
    title: "2.2.5 Friction and air resistance",
    type: "Question Bank",
    duration: "8 Min",
  },
  {
    id: "77",
    title: "2.3.1 Work done by forces",
    type: "Lessons",
    duration: "6 Min",
  },
  {
    id: "78",
    title: "2.3.2 Kinetic energy",
    type: "Videos",
    duration: "5 Min",
  },
  {
    id: "79",
    title: "2.3.3 Gravitational potential energy",
    type: "Textbook",
    duration: "7 Min",
  },
  {
    id: "80",
    title: "2.3.4 Elastic potential energy",
    type: "Glossary",
    duration: "6 Min",
  },
  {
    id: "81",
    title: "2.3.5 Power and efficiency",
    type: "Exam",
    duration: "8 Min",
    isNew: true,
  },
  {
    id: "82",
    title: "2.4.1 Momentum and impulse",
    type: "Databook",
    duration: "7 Min",
  },
  {
    id: "83",
    title: "2.4.2 Conservation of momentum",
    type: "Predicted Paper",
    duration: "9 Min",
  },
  {
    id: "84",
    title: "2.4.3 Elastic and inelastic collisions",
    type: "Bootcamp",
    duration: "10 Min",
  },
  {
    id: "85",
    title:
      "3.1.1 Molecular theory of solids, liquids and gases",
    type: "Vocab",
    duration: "6 Min",
  },
  {
    id: "86",
    title: "3.1.2 Temperature and absolute temperature",
    type: "Flashcards",
    duration: "5 Min",
  },
  {
    id: "87",
    title: "3.1.3 Internal energy",
    type: "Cheatsheets",
    duration: "7 Min",
  },
  {
    id: "88",
    title: "3.1.4 Specific heat capacity",
    type: "Question Bank",
    duration: "8 Min",
  },
  {
    id: "89",
    title: "3.1.5 Phase change",
    type: "Lessons",
    duration: "9 Min",
  },
  {
    id: "90",
    title: "3.2.1 Pressure and the ideal gas law",
    type: "Videos",
    duration: "7 Min",
  },
  {
    id: "91",
    title: "3.2.2 Kinetic model of an ideal gas",
    type: "Textbook",
    duration: "10 Min",
  },
  {
    id: "92",
    title: "4.1.1 Simple harmonic motion",
    type: "Glossary",
    duration: "8 Min",
    isNew: true,
  },
  {
    id: "93",
    title: "4.1.2 Time period, frequency and amplitude",
    type: "Exam",
    duration: "6 Min",
  },
  {
    id: "94",
    title: "4.1.3 Energy in SHM",
    type: "Databook",
    duration: "9 Min",
  },
  {
    id: "95",
    title: "4.2.1 Travelling waves and wave speed",
    type: "Predicted Paper",
    duration: "7 Min",
  },
  {
    id: "96",
    title: "4.2.2 Wavelength, frequency and period",
    type: "Bootcamp",
    duration: "5 Min",
  },
  {
    id: "97",
    title: "4.2.3 Transverse and longitudinal waves",
    type: "Vocab",
    duration: "6 Min",
  },
  {
    id: "98",
    title: "4.3.1 Wavefronts and rays",
    type: "Flashcards",
    duration: "5 Min",
  },
  {
    id: "99",
    title: "4.3.2 Amplitude and intensity",
    type: "Cheatsheets",
    duration: "7 Min",
  },
  {
    id: "100",
    title: "4.3.3 Superposition principle",
    type: "Question Bank",
    duration: "8 Min",
  },
  {
    id: "101",
    title: "4.4.1 Reflection and refraction",
    type: "Lessons",
    duration: "9 Min",
  },
  {
    id: "102",
    title: "4.4.2 Snell's law",
    type: "Videos",
    duration: "7 Min",
  },
  {
    id: "103",
    title: "4.4.3 Diffraction and interference",
    type: "Textbook",
    duration: "10 Min",
  },
  {
    id: "104",
    title: "4.5.1 Formation of standing waves",
    type: "Glossary",
    duration: "8 Min",
  },
  {
    id: "105",
    title: "4.5.2 Boundary conditions",
    type: "Exam",
    duration: "6 Min",
  },
  {
    id: "106",
    title: "5.1.1 Charge and electric field",
    type: "Databook",
    duration: "7 Min",
  },
  {
    id: "107",
    title: "5.1.2 Electric potential and potential difference",
    type: "Predicted Paper",
    duration: "9 Min",
    isNew: true,
  },
  {
    id: "108",
    title: "5.1.3 Coulomb's law",
    type: "Bootcamp",
    duration: "8 Min",
  },
  {
    id: "109",
    title: "5.2.1 Electric current",
    type: "Vocab",
    duration: "5 Min",
  },
  {
    id: "110",
    title: "5.2.2 Resistance and Ohm's law",
    type: "Flashcards",
    duration: "6 Min",
  },
  {
    id: "111",
    title: "5.2.3 Resistivity and conductivity",
    type: "Cheatsheets",
    duration: "7 Min",
  },
  {
    id: "112",
    title: "5.2.4 Power dissipation",
    type: "Question Bank",
    duration: "8 Min",
  },
  {
    id: "113",
    title: "5.3.1 Cells and internal resistance",
    type: "Lessons",
    duration: "9 Min",
  },
  {
    id: "114",
    title: "5.3.2 Secondary cells",
    type: "Videos",
    duration: "6 Min",
  },
  {
    id: "115",
    title: "5.4.1 Magnetic fields and forces",
    type: "Textbook",
    duration: "10 Min",
  },
  {
    id: "116",
    title: "5.4.2 Electromagnetic induction",
    type: "Glossary",
    duration: "11 Min",
  },
  {
    id: "117",
    title: "6.1.1 Period, frequency and angular velocity",
    type: "Exam",
    duration: "7 Min",
  },
  {
    id: "118",
    title: "6.1.2 Centripetal force and acceleration",
    type: "Databook",
    duration: "8 Min",
  },
  {
    id: "119",
    title: "6.2.1 Newton's law of gravitation",
    type: "Predicted Paper",
    duration: "9 Min",
  },
  {
    id: "120",
    title: "6.2.2 Gravitational field strength",
    type: "Bootcamp",
    duration: "7 Min",
    isNew: true,
  },
  {
    id: "121",
    title: "6.2.3 Gravitational potential energy",
    type: "Vocab",
    duration: "8 Min",
  },
  {
    id: "122",
    title: "7.1.1 Discrete energy levels",
    type: "Flashcards",
    duration: "6 Min",
  },
  {
    id: "123",
    title: "7.1.2 Transitions between energy levels",
    type: "Cheatsheets",
    duration: "7 Min",
  },
  {
    id: "124",
    title: "7.1.3 Radioactive decay",
    type: "Question Bank",
    duration: "10 Min",
  },
  {
    id: "125",
    title: "7.1.4 Half-life and decay constant",
    type: "Lessons",
    duration: "9 Min",
  },
  {
    id: "126",
    title: "7.2.1 The nucleus",
    type: "Videos",
    duration: "6 Min",
  },
  {
    id: "127",
    title: "7.2.2 Nuclear reactions",
    type: "Textbook",
    duration: "11 Min",
  },
  {
    id: "128",
    title: "7.2.3 Fission and fusion",
    type: "Glossary",
    duration: "10 Min",
  },
  {
    id: "129",
    title: "7.3.1 Rutherford scattering",
    type: "Exam",
    duration: "8 Min",
  },
  {
    id: "130",
    title: "7.3.2 The standard model",
    type: "Databook",
    duration: "12 Min",
    isNew: true,
  },
  {
    id: "131",
    title: "8.1.1 Energy degradation and power generation",
    type: "Predicted Paper",
    duration: "9 Min",
  },
  {
    id: "132",
    title: "8.1.2 Renewable and non-renewable resources",
    type: "Bootcamp",
    duration: "8 Min",
  },
  {
    id: "133",
    title: "8.2.1 Conduction, convection and radiation",
    type: "Vocab",
    duration: "7 Min",
  },
  {
    id: "134",
    title: "8.2.2 Black body radiation",
    type: "Flashcards",
    duration: "10 Min",
  },
  {
    id: "135",
    title: "9.1.1 SHM and energy changes",
    type: "Cheatsheets",
    duration: "8 Min",
  },
  {
    id: "136",
    title: "9.2.1 Single-slit diffraction",
    type: "Question Bank",
    duration: "9 Min",
  },
  {
    id: "137",
    title: "9.3.1 Young's double slit",
    type: "Lessons",
    duration: "10 Min",
  },
  {
    id: "138",
    title: "9.4.1 The Rayleigh criterion",
    type: "Videos",
    duration: "7 Min",
  },
  {
    id: "139",
    title: "9.5.1 The Doppler effect",
    type: "Textbook",
    duration: "11 Min",
  },
  {
    id: "140",
    title: "10.1.1 Fields and field lines",
    type: "Glossary",
    duration: "8 Min",
  },

  // Additional 5 force-related topics
  {
    id: "141",
    title: "2.2.6 Normal force and tension",
    type: "Videos",
    duration: "6 Min",
  },
  {
    id: "142",
    title: "2.2.7 Applied forces in equilibrium",
    type: "Lessons",
    duration: "7 Min",
  },
  {
    id: "143",
    title: "2.2.8 Net force and acceleration",
    type: "Textbook",
    duration: "8 Min",
    isNew: true,
  },
  {
    id: "144",
    title: "2.2.9 Force components and resolution",
    type: "Exam",
    duration: "9 Min",
  },
  {
    id: "145",
    title: "2.2.10 Contact forces and field forces",
    type: "Databook",
    duration: "6 Min",
  },
  
  // Additional force-related topics
  { id: "146", title: "2.2.11 Fundamental forces in nature", type: "Glossary", duration: "10 Min" },
  { id: "147", title: "2.2.12 Force diagrams and analysis", type: "Bootcamp", duration: "12 Min", isNew: true },
  { id: "148", title: "2.2.13 Centripetal force applications", type: "Vocab", duration: "7 Min" },
  { id: "149", title: "2.2.14 Force equilibrium problems", type: "Flashcards", duration: "5 Min" },
  { id: "150", title: "2.2.15 Gravitational force calculations", type: "Cheatsheets", duration: "8 Min" },
  { id: "151", title: "5.1.4 Electric force and Coulomb's law", type: "Videos", duration: "9 Min" },
  { id: "152", title: "5.4.3 Magnetic force on moving charges", type: "Lessons", duration: "11 Min", isNew: true },
  { id: "153", title: "6.1.3 Centripetal force in circular motion", type: "Textbook", duration: "10 Min" },
  { id: "154", title: "10.2.1 Force fields and potential energy", type: "Exam", duration: "13 Min" },
  { id: "155", title: "A.4.1 Relativistic force and momentum", type: "Databook", duration: "15 Min" },
  { id: "156", title: "Forces in biological systems", type: "Glossary", duration: "8 Min" },
  { id: "157", title: "Force measurement techniques", type: "Bootcamp", duration: "9 Min" },
  { id: "158", title: "Intermolecular forces", type: "Vocab", duration: "7 Min" },
  { id: "159", title: "Strong and weak nuclear forces", type: "Flashcards", duration: "10 Min" },
  { id: "160", title: "Force vectors in 3D space", type: "Cheatsheets", duration: "11 Min", isNew: true },
];

function HighlightedText({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  if (!highlight.trim()) {
    return <>{text}</>;
  }

  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} className="bg-[#f0b100] opacity-42">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

export default function SearchableTopicsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [initialHeight, setInitialHeight] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure initial height when component mounts
  useEffect(() => {
    if (containerRef.current && initialHeight === null) {
      const height = containerRef.current.scrollHeight;
      setInitialHeight(height);
    }
  }, [initialHeight]);

  // Recalculate height when showAllFeatures changes
  useEffect(() => {
    if (containerRef.current && !hasStartedTyping) {
      // Give time for the DOM to update before measuring
      const timeoutId = setTimeout(() => {
        if (containerRef.current) {
          const height = containerRef.current.scrollHeight;
          setInitialHeight(height);
        }
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [showAllFeatures, hasStartedTyping]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'l' || e.key === 'L') {
        setIsVisible(true);
        setAnimationKey(prev => prev + 1); // Force re-animation
      } else if (e.key === 'p' || e.key === 'P') {
        setIsVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const filteredTopics = physicsTopics.filter((topic) => {
    const matchesSearch = topic.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(topic.type);
    return matchesSearch && matchesCategory;
  });

  // Count topics by category based on search query
  const getCategoryCount = (categoryName: string) => {
    return physicsTopics.filter((topic) => {
      const matchesSearch = topic.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory = topic.type === categoryName;
      return matchesSearch && matchesCategory;
    }).length;
  };

  // Get filtered categories (only those with results)
  const filteredCategories = categories.filter(
    (category) => getCategoryCount(category.name) > 0,
  );

  const handleSearchHistoryClick = (searchTerm: string) => {
    setSearchQuery(searchTerm);
    setHasStartedTyping(true);
  };

  return (
    <div 
      ref={containerRef}
      key={animationKey}
      className="bg-white content-stretch flex flex-col items-start pb-0 pt-[24.363px] px-0 relative rounded-[24.363px]"
      style={{
        animation: isVisible ? "containerEntrance 450ms cubic-bezier(0.62, 0.61, 0.02, 1) both" : "containerExit 450ms cubic-bezier(0.62, 0.61, 0.02, 1) both",
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        boxShadow: '0px 48px 128px 0px rgba(0,0,0,0.1)',
        transition: 'height 450ms cubic-bezier(0.62, 0.61, 0.02, 1), width 450ms cubic-bezier(0.62, 0.61, 0.02, 1)',
        height: hasStartedTyping && searchQuery !== "" ? '670px' : 'auto',
        width: !hasStartedTyping && showAllFeatures ? '585px' : '585px',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes containerEntrance {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes containerExit {
          from {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          to {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-15px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateX(0);
            max-height: 150px;
          }
        }
        
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {/* Search Bar */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex items-start pb-[24.363px] pt-0 px-[24.363px] relative w-full">
          <div className="bg-[#f7f7f9] flex-[1_0_0] min-h-px min-w-px relative rounded-[380.2965px]">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[12.1815px] items-center pl-[18.273px] pr-[12.1815px] py-[12.1815px] relative w-full">
                <div className="content-stretch flex gap-[3.045px] items-center relative shrink-0">
                  <p className="css-ew64yg font-['Manrope:Bold',sans-serif] font-bold leading-[1.2] opacity-60 relative shrink-0 text-[#171c1d] text-[15.2265px] tracking-[-0.53295px]">
                    Physics
                  </p>
                  <div
                    className="relative shrink-0 size-[18.273px] cursor-pointer"
                    data-name="ChevronDown"
                  >
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 12.1816 12.1816"
                    >
                      <g id="ChevronDown" opacity="0.6">
                        <path
                          clipRule="evenodd"
                          d={svgPaths.p2646e280}
                          fill="var(--fill-0, black)"
                          fillRule="evenodd"
                          id="Vector"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="bg-[#d9d9d9] h-full shrink-0 w-[1.269px]" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
                  <div className="content-stretch flex gap-[3.045px] items-center relative flex-1">
                    <div
                      className="relative shrink-0 size-[17.13px]"
                      data-name="SearchOutline"
                    >
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 11.4203 11.4203"
                      >
                        <g id="SearchOutline">
                          <path
                            d={svgPaths.p14840090}
                            id="Vector"
                            stroke="var(--stroke-0, #636364)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.14131"
                          />
                        </g>
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setHasStartedTyping(true);
                      }}
                      placeholder="Search topics..."
                      className="css-ew64yg font-['Manrope:Bold',sans-serif] font-bold leading-[1.2] opacity-60 flex-1 text-[15.2265px] text-black tracking-[-0.53295px] bg-transparent border-none outline-none placeholder:opacity-60"
                    />
                  </div>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="flex items-center justify-center shrink-0 cursor-pointer"
                    >
                      <div
                        className="relative shrink-0 size-[18.273px]"
                        data-name="X"
                      >
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 12 12"
                        >
                          <path
                            clipRule="evenodd"
                            d={svgPaths.p7ec0780}
                            fill="var(--fill-0, #636364)"
                            fillRule="evenodd"
                            id="Vector"
                          />
                        </svg>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#efeff5] h-[1px] shrink-0 w-full" />

      {/* Conditionally Render Initial Screen or Results */}
      {!hasStartedTyping || searchQuery === "" ? (
        <InitialSearchScreen 
          showAllFeatures={showAllFeatures} 
          setShowAllFeatures={setShowAllFeatures}
          onSearchHistoryClick={handleSearchHistoryClick}
        />
      ) : (
        <div className="content-stretch flex flex-col items-start relative flex-1 w-full">
          <div className="content-stretch flex items-start relative h-full w-full">
            {/* Left Sidebar with Categories */}
            <div className="content-stretch flex flex-col items-start pb-0 pt-[24.363px] px-0 relative shrink-0 h-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-[200px]">
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    {filteredCategories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() =>
                          setSelectedCategories(
                            selectedCategories.includes(category.name)
                              ? selectedCategories.filter(
                                  (cat) => cat !== category.name,
                                )
                              : selectedCategories.length < 3
                              ? [...selectedCategories, category.name]
                              : selectedCategories,
                          )
                        }
                        className={`relative shrink-0 w-full transition-all cursor-pointer ${ 
                          selectedCategories.includes(category.name)
                            ? "bg-[#f7f7f9]"
                            : ""
                        }`}
                        style={{
                          transitionTimingFunction:
                            "cubic-bezier(0.62, 0.61, 0.02, 1)",
                          transitionDuration: "450ms",
                        }}
                      >
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center justify-between px-[24.363px] py-[12.1815px] relative w-full">
                            <div className="content-stretch flex gap-[12.1815px] items-center relative shrink-0">
                              {/* Checkbox */}
                              <div className="relative shrink-0 size-[15px] flex items-center justify-center">
                                <div className={`size-full rounded-[3px] border-[1.5px] flex items-center justify-center transition-all ${
                                  selectedCategories.includes(category.name)
                                    ? "bg-[#171c1d] border-[#171c1d]"
                                    : "bg-white border-[#d9d9d9]"
                                }`}>
                                  {selectedCategories.includes(category.name) && (
                                    <svg
                                      className="size-[10px]"
                                      viewBox="0 0 10 10"
                                      fill="none"
                                    >
                                      <path
                                        d="M1.5 5L4 7.5L8.5 2.5"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  )}
                                </div>
                              </div>
                              
                              <div
                                className="relative shrink-0 size-[20px]"
                                data-name="Vector"
                              >
                                {category.isStroke ? (
                                  <svg
                                    className="block size-full"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 12.5 10.5"
                                  >
                                    <path
                                      d={category.icon}
                                      stroke={category.color}
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      id="Vector"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    className="block size-full"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 10 10"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d={category.icon}
                                      fill={`var(--fill-0, ${category.color})`}
                                      fillRule="evenodd"
                                      id="Vector"
                                    />
                                  </svg>
                                )}
                              </div>
                              <p className="css-ew64yg font-['Manrope:Bold',sans-serif] font-bold leading-[1.2] opacity-90 relative shrink-0 text-[#171c1d] text-[12.1815px] tracking-[-0.42626px]">
                                {category.name}
                              </p>
                            </div>
                            <p className="css-ew64yg font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.2] opacity-60 relative shrink-0 text-[#171c1d] text-[12.1815px] tracking-[-0.42626px]">
                              {getCategoryCount(category.name)}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="relative self-stretch shrink-0 w-0">
              <div className="absolute inset-[0_-1.53px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 1.01514 394.018"
                >
                  <path
                    d="M0.507569 0V394.018"
                    id="Vector 1334"
                    stroke="var(--stroke-0, #EFEFF5)"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
            </div>

            {/* Results Section */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px pb-0 pt-[24.363px] px-0 relative self-stretch w-full">
              <div className="content-stretch flex flex-col gap-[3.045px] items-start relative shrink-0 w-full">
                {/* Results Header */}
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[24.363px] py-[9.1365px] relative w-full">
                      <p className="css-ew64yg font-['Manrope:Bold',sans-serif] font-bold leading-[1.2] opacity-60 relative shrink-0 text-[15.2265px] text-black tracking-[-0.53295px]">
                        {filteredTopics.length} Results
                      </p>
                      <div className="content-stretch flex gap-[4.5675px] items-center relative shrink-0">
                        <p className="css-ew64yg font-['Manrope:Bold',sans-serif] font-bold leading-[1.2] opacity-60 relative shrink-0 text-[#171c1d] text-[9.1365px] tracking-[-0.31977px]">
                          Sort by Latest
                        </p>
                        <div
                          className="relative shrink-0 size-[11.421px]"
                          data-name="ChevronDown"
                        >
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 7.61353 7.61353"
                          >
                            <g id="ChevronDown" opacity="0.6">
                              <path
                                clipRule="evenodd"
                                d={svgPaths.p7c9ec00}
                                fill="var(--fill-0, black)"
                                fillRule="evenodd"
                                id="Vector"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results List */}
                <div className="w-full max-h-[445px] overflow-y-auto">
                  {filteredTopics.map((topic, index) => (
                    <div
                      key={`${topic.id}-${searchQuery}`}
                      style={{
                        animation:
                          "fadeSlideIn 450ms cubic-bezier(0.62, 0.61, 0.02, 1)",
                        animationFillMode: "both",
                        animationDelay: `${index * 20}ms`,
                      }}
                    >
                      <div className="relative shrink-0 w-full">
                        <div className="flex flex-row items-center size-full cursor-pointer hover:bg-[#f7f7f9] transition-colors duration-300">
                          <div className="content-stretch flex items-center justify-between px-[24.363px] py-[18.273px] relative w-full">
                            <div className="content-stretch flex flex-col gap-[9.1365px] items-start relative shrink-0">
                              <p className="css-ew64yg font-['Manrope:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[12.1815px] text-black tracking-[-0.42626px]">
                                <HighlightedText
                                  text={topic.title}
                                  highlight={searchQuery}
                                />
                              </p>
                              <div className="content-stretch flex gap-[6.852px] items-start relative shrink-0">
                                <p className="css-ew64yg font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.2] opacity-60 relative shrink-0 text-[#171c1d] text-[12.1815px] tracking-[-0.42626px]">
                                  {topic.type}
                                </p>
                                <div className="content-stretch flex items-center px-0 py-[3.045px] relative self-stretch shrink-0">
                                  <div className="bg-[#747778] h-full shrink-0 w-[1px]" />
                                </div>
                                <p className="css-ew64yg font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.2] opacity-60 relative shrink-0 text-[#171c1d] text-[12.1815px] tracking-[-0.42626px]">
                                  {topic.duration}
                                </p>
                              </div>
                            </div>
                            {topic.isNew && (
                              <div className="bg-[#00a63e] content-stretch flex items-center justify-center px-[4.5675px] py-[3.045px] relative rounded-[3.045px] shrink-0">
                                <p className="css-ew64yg font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12.1815px] text-white tracking-[-0.24363px]">
                                  NEW
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      {index < filteredTopics.length - 1 && (
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="h-[3.425px] relative shrink-0 w-full">
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 331.915 2.28302"
                            >
                              <g id="Frame 2147230229">
                                <path
                                  d="M0 1.14151H331.915"
                                  id="Vector 1335"
                                  stroke="var(--stroke-0, #EFEFF5)"
                                  strokeDasharray="4.575 4.575"
                                  strokeWidth="1.523"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="content-stretch flex gap-[12.1815px] items-center justify-center pb-[18.273px] pt-[24.363px] px-0 relative shrink-0 w-full">
                <p className="css-ew64yg font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.2] opacity-60 relative shrink-0 text-[#171c1d] text-[12.1815px] tracking-[-0.42626px]">
                  Showing 1-{Math.min(filteredTopics.length, 10)}{" "}
                  of {filteredTopics.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}