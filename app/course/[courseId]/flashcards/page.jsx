"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import FlashCardItem from "./_components/FlashCardItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

function Flashcard() {
  const { courseId } = useParams();

  const [flashCards, setFlashCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState();
  const [api, setApi] = useState();

  useEffect(() => {
    GetFlashCards();
  }, []);

  useEffect(() => {
    if(!api) {
        return
    }
    api.on('select', () => {
        setIsFlipped(false)
    })
  }, [api])

  const GetFlashCards = async () => {
    const result = await axios.post("/api/study-type", {
      courseId: courseId,
      studyType: "flashcard",
    });
    setFlashCards(result?.data.content);
    console.log("Flashcard", result.data);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">Flashcards</h2>
      <p>Flashcards: Ultimate Tool to Lock in Concepts!</p>

      <div className="mt-10">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {flashCards&&flashCards?.map((flashcard, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center"
              >
                <FlashCardItem
                  handleClick={handleClick}
                  isFlipped={isFlipped}
                  flashcard={flashcard}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Flashcard;
