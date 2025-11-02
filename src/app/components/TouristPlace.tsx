"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { TouristPlaceProps } from "../types/TouristPlaceProps";
import { styled } from "styled-components";
import "../styles/TouristPlace.css";

const TogelButton = styled.button`
    background-color: ${(props) => (props.theme === "light" ? "#fbbf24" : "#FF7F50")};
    cursor: pointer;
    border-radius: 7px;
    padding: 6px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &:active {
        transform: scale(0.95);
    }
    &:hover {
        background-color: #feb109ff;
    }
`;

const Card = styled.div`
    background-color: ${(props) => (props.theme === "light" ? "#2eb6dfff" : "#1B3B52")};
    padding: 8px;
    border-radius: 5px;
    margin: 12px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

function TouristPlace({ placeName, countryName, description }: TouristPlaceProps) {
    const theme = useContext(ThemeContext);

    const [showContent, setShowContent] = useState(true);
    const [currentContent, setCurrentContent] = useState({ placeName, countryName, description });
    const [showDescription, setShowDescription] = useState(false);
    const [showDescriptionText, setShowDescriptionText] = useState(true);

    const textRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const descriptionTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentContent.placeName !== placeName || currentContent.countryName !== countryName) {
            setShowContent(false);
            setTimeout(() => {
                setCurrentContent((prev) => ({
                    ...prev,
                    placeName,
                    countryName,
                }));
                setShowContent(true);
            }, 300);
        }
    }, [placeName, countryName]);

    useEffect(() => {
        if (currentContent.description !== description) {
            setShowDescriptionText(false);
            setTimeout(() => {
                setCurrentContent((prev) => ({
                    ...prev,
                    description,
                }));
                setShowDescriptionText(true);
            }, 300);
        }
    }, [description]);

    return (
        <Card theme={theme}>
            <TransitionGroup>
                {showContent && (
                    <CSSTransition key="content" timeout={300} classNames="fade" nodeRef={textRef} unmountOnExit>
                        <div ref={textRef}>
                            <p className="text-lg font-semibold">{currentContent.placeName}</p>
                            <p>Країна: {currentContent.countryName}</p>
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>

            <TogelButton theme={theme} onClick={() => setShowDescription((prev) => !prev)}>
                Деталі
            </TogelButton>

            <TransitionGroup>
                {showDescription && (
                    <CSSTransition key="desc" timeout={400} classNames="scale-animation" nodeRef={descriptionRef} unmountOnExit>
                        <div ref={descriptionRef} className="scale-animation mt-2">
                            <TransitionGroup>
                                {showDescriptionText && (
                                    <CSSTransition
                                        key="desc-text"
                                        timeout={300}
                                        classNames="fade"
                                        nodeRef={descriptionTextRef}
                                        unmountOnExit
                                    >
                                        <div ref={descriptionTextRef}>
                                            <p className="text-center">{currentContent.description}</p>
                                        </div>
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </Card>
    );
}

export default TouristPlace;
