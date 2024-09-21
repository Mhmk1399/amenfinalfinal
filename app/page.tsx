"use client";
// pages/index.js
import { useState } from "react";
import ShoesSelection from "../components/shoes-selection";
import ShirtSelection from "../components/shirt-selection";
import PantsSelection from "../components/pants-selection";
import LayerSelection from "../components/layer-selection";
import ImageButton from "../components/image-button"
import data from "@/lib/data";


type Selection =
  | "Casual T-shirt"
  | "Button-up Shirt"
  | "Graphic Tee"
  | "Jeans"
  | "Chinos"
  | "Joggers"
  | "Sneakers"
  | "Loafers"
  | "Boots"
  | "Hoodie"
  | "Blazer"
  | "Denim Jacket";

type Selections = {
  shirt: Selection | null;
  pants: Selection | null;
  shoes: Selection | null;
  layer: Selection | null;
};

export default function Home() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<Selections>({
    shirt: null,
    pants: null,
    shoes: null,
    layer: null,
  });

  const handleSelection = (category: keyof Selections, item: Selection) => {
    setSelections((prev) => ({ ...prev, [category]: item }));
    setStep(step + 1);
  };

  const getMBTIResult = () => {
    const mbtiType = getMBTI(selections);
    return mbtiType;
  };

  // Display different sections based on the current step
  if (step === 1) {
    return (
      <ShirtSelection
        onSelect={(shirt: Selection) => handleSelection("shirt", shirt)}
      />
    );
  } else if (step === 2) {
    return (
      <PantsSelection
        onSelect={(pants: Selection) => handleSelection("pants", pants)}
      />
    );
  } else if (step === 3) {
    return (
      <ShoesSelection
        onSelect={(shoes: Selection) => handleSelection("shoes", shoes)}
      />
    );
  } else if (step === 4) {
    return (
      <LayerSelection
        onSelect={(layer: Selection) => handleSelection("layer", layer)}
      />
    );
  } else {
    const mbtiType = getMBTIResult();
    return <CelebrityResult mbtiType={mbtiType} selections={selections} />;
  }
}

// Reusable component for image buttons with Tailwind styles

<ImageButton
  src={""}
  alt={""}
  onClick={function (): void {
    throw new Error("Function not implemented.");
  }}
  className={""}
/>;

// Shirt selection step
<ShirtSelection
  onSelect={function (
   
  ): void {
    throw new Error("Function not implemented.");
  }}
/>;

// Pants selection step

<PantsSelection
  onSelect={function (): void {
    throw new Error("Function not implemented.");
  }}
/>;

// Shoes selection step

<ShoesSelection
  onSelect={function (): void {
    throw new Error("Function not implemented.");
  }}
/>;

// Layer selection step

<LayerSelection
  onSelect={function (): void {
    throw new Error("Function not implemented.");
  }}
/>;

// Display the final result based on MBTI type

const getCelebrity = (mbtiType: string): string => {
  // Convert mbtiType to lowercase to match the data keys
  const typeKey = mbtiType.toLowerCase() as keyof typeof data[number];

  // Loop through the dataset to find the matching type
  for (const entry of data) {
    if (entry[typeKey]) {
      const { names } = entry[typeKey];
      const randomIndex = Math.floor(Math.random() * names.length);
      return names[randomIndex];
    }
  }

  return "A Mystery Celebrity"; // Fallback if no match is found
};
  
  // Usage in your component
  function CelebrityResult({
    mbtiType,
    
  }: {
    mbtiType: string;
    selections: Selections;
  }) {
    const celebrity = getCelebrity(mbtiType);
    const mbtiTypeKey = mbtiType.toLowerCase() as keyof typeof data[number];
    const mbtiData = data.find((entry) => entry[mbtiTypeKey]);
  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-custom-gradient-one p-6 space-y-6">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-black-700 hover:text-yellow-400 text-center mt-6 transition duration-300 ease-in-out">
          mbti تایپ شخصیتی شما طبق
        </h2>
      
        {/* MBTI Type Info */}
        <span className="text-xl font-bold text-black-700 hover:scale-105 transition-transform duration-700 ease-in-out my-4 border-2 border-lime-500 rounded-full px-6 py-3 bg-yellow-500 shadow-md">
          {mbtiData && mbtiData[mbtiTypeKey] ? mbtiData[mbtiTypeKey].typeinfo : ''}
        </span>
      
        {/* Celebrity Name */}
        <span className="text-xl font-bold hover:scale-110 transition-transform duration-700 ease-in-out my-2 border-double border-4 rounded-full px-5 py-3 bg-white text-gray-900 shadow-lg">
          `{celebrity}`
        </span>
      
        {/* Description */}
        <p className="text-base text-white-900 text-center max-w-2xl border-b-2 border-gray-300 pb-4">
          {mbtiData && mbtiData[mbtiTypeKey] ? mbtiData[mbtiTypeKey].description : ''}
        </p>
      
        {/* Celebrity Image */}
        {mbtiData && mbtiData[mbtiTypeKey] && mbtiData[mbtiTypeKey].imagesurls && (
          <img
            src={mbtiData[mbtiTypeKey].imagesurls[0]}
            alt={celebrity}
            className="w-48 h-48 object-cover rounded-full border-4 border-lime-500 shadow-lg"
          />
        )}
      
        {/* Call to Action Button */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 w-full text-center">
          <a
            className="text-lg font-semibold hover:bg-custom-gradient-two text-yellow-400 border-2 border-yellow-400 rounded-full px-6 py-3 transition-all hover:scale-105 duration-700 shadow-md"
            href="#"
          >
            برای دریافت جایزه همین ها جواب تستو استوری کن و پیج AMEN فالو کن
          </a>
        </div>
      </div>
      
    );
  }// Logic to calculate MBTI type based on selections
const getMBTI = (selections: Selections): string => {
  const traits = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  // Add logging to track trait values
  console.log("Initial Trait Values:", traits);

  if (selections.shirt === "Casual T-shirt") traits.E++, traits.S++, traits.P++;
  if (selections.shirt === "Button-up Shirt")
    traits.I++, traits.J++, traits.T++;
  if (selections.shirt === "Graphic Tee") traits.E++, traits.N++, traits.F++;

  if (selections.pants === "Jeans") traits.E++, traits.S++, traits.P++;
  if (selections.pants === "Chinos") traits.I++, traits.J++, traits.T++;
  if (selections.pants === "Joggers") traits.I++, traits.N++, traits.F++;

  if (selections.shoes === "Sneakers") traits.E++, traits.S++, traits.P++;
  if (selections.shoes === "Loafers") traits.I++, traits.J++, traits.T++;
  if (selections.shoes === "Boots") traits.I++, traits.N++, traits.F++;

  if (selections.layer === "Hoodie") traits.E++, traits.S++, traits.P++;
  if (selections.layer === "Blazer") traits.I++, traits.J++, traits.T++;
  if (selections.layer === "Denim Jacket") traits.E++, traits.N++, traits.F++;

  console.log("Final Trait Values:", traits);

  const mbtiType =
    (traits.E >= traits.I ? "E" : "I") +
    (traits.S >= traits.N ? "S" : "N") +
    (traits.T >= traits.F ? "T" : "F") +
    (traits.J >= traits.P ? "J" : "P");
  console.log("Calculated MBTI Type:", mbtiType);
  return mbtiType;
};

// Logic to map MBTI type to a celebrity

{
  /* <GetCelebrity /> */
}
