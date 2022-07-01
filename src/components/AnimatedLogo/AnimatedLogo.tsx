import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import { useEffect, useRef } from 'react';

import LogoS from '../../assets/images/Logo3-transparent.png';

import './AnimatedLogo.style.scss';

const AnimatedLogo = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const solidLogoRef = useRef<HTMLImageElement>(null);
  const svgLogoRef = useRef<SVGSVGElement>(null);
  const outlineLogoRef = useRef<SVGPathElement>(null);
  const outlineLogoHexa1Ref = useRef<SVGPathElement>(null);
  const outlineLogoHexa2Ref = useRef<SVGPathElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) return;

    isFirstRender.current = false;
    gsap.registerPlugin(DrawSVGPlugin);

    gsap.to(bgRef.current, {
      duration: 1,
      opacity: 1,
    });
    gsap.from(outlineLogoRef.current, {
      drawSVG: 0,
      duration: 10,
      delay: 1,
    });
    gsap.from(outlineLogoHexa1Ref.current, {
      drawSVG: 0,
      duration: 4,
      delay: 1,
    });
    gsap.fromTo(
      outlineLogoHexa2Ref.current,
      {
        drawSVG: '100% 100%',
      },
      {
        drawSVG: '0% 100%',
        duration: 4,
        delay: 1,
      }
    );
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 2,
      }
    );
    gsap.to(svgLogoRef.current, {
      opacity: 0,
      delay: 4.5,
    });
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" src={LogoS} alt="Logo" ref={solidLogoRef} />
      <svg xmlns="http://www.w3.org/2000/svg" width="437" height="437" viewBox="0 0 437 437" ref={svgLogoRef}>
        <g className="svg-container">
          <path
            id="Polygon_1"
            data-name="Polygon 1"
            ref={outlineLogoHexa1Ref}
            d="M395.7,319L219.708,419,44.01,318.5,44.3,118,220.292,18l175.7,100.5Z"
          />
          <path
            id="Polygon_1_copy_2"
            data-name="Polygon 1 copy 2"
            ref={outlineLogoHexa2Ref}
            d="M386.714,313.986L219.723,409,53.009,313.511l0.277-190.5L220.277,28l166.714,95.486Z"
          />

          <path
            id="FMR"
            strokeLinejoin="round"
            ref={outlineLogoRef}
            d="M75.862,169.024v3.589a24.86,24.86,0,0,1,4.761,1.721,6.247,6.247,0,0,1,2.234,2.051,9.231,9.231,0,0,1,1.209,3.589,52.35,52.35,0,0,1,.366,7.361v63.354a49.586,49.586,0,0,1-.476,8.057,7.075,7.075,0,0,1-2.014,4.065q-1.538,1.428-6.079,2.6V269h32.52v-3.589a34.782,34.782,0,0,1-4.907-1.428,7.085,7.085,0,0,1-3.15-2.307,9.959,9.959,0,0,1-1.684-4.175,38.353,38.353,0,0,1-.513-7.031V221.759h15.088a9.838,9.838,0,0,1,5.09,1.062,8.436,8.436,0,0,1,2.966,3.589,34.831,34.831,0,0,1,2.344,7.507H130.5V203.009h-6.885a35.58,35.58,0,0,1-2.307,7.69,7.934,7.934,0,0,1-3.039,3.552,10.1,10.1,0,0,1-5.054,1.062H98.128V175.47h21.46a20.7,20.7,0,0,1,5.786.659,9.209,9.209,0,0,1,3.845,2.27,16.965,16.965,0,0,1,3.15,4.688,63.423,63.423,0,0,1,3.112,8.057h7.178v-22.12h-66.8Zm185.083,0H236.189l-28.271,71.265L182.21,169.024H156.062v3.589a24.843,24.843,0,0,1,4.761,1.721,6.249,6.249,0,0,1,2.234,2.051,9.229,9.229,0,0,1,1.209,3.589,52.483,52.483,0,0,1,.366,7.361v63.354a49.586,49.586,0,0,1-.476,8.057,7.076,7.076,0,0,1-2.014,4.065q-1.539,1.428-6.08,2.6V269H182.8v-3.589a20.608,20.608,0,0,1-4.871-1.758,6.138,6.138,0,0,1-2.27-2.2,10.056,10.056,0,0,1-1.1-3.589,55.464,55.464,0,0,1-.329-7.178V223.883q0-12.376-.33-24.1T173.2,183.6h1.245L201.4,257.354h8.423l29-72.583h1.245q-0.44,4.176-.769,15.491t-0.329,22.376v28.051a42.9,42.9,0,0,1-.586,8.5,6.776,6.776,0,0,1-2.2,3.881,15.416,15.416,0,0,1-5.786,2.344V269h30.542v-3.589a20.6,20.6,0,0,1-4.87-1.758,6.141,6.141,0,0,1-2.271-2.2,10.037,10.037,0,0,1-1.1-3.589,55.421,55.421,0,0,1-.33-7.178V187.335a49.878,49.878,0,0,1,.4-7.471,9.021,9.021,0,0,1,1.245-3.625,6.744,6.744,0,0,1,2.27-2.014,20.136,20.136,0,0,1,4.651-1.612v-3.589Zm48.12,56.543a26.608,26.608,0,0,1,5.384.4,9.876,9.876,0,0,1,3.369,1.465,14.727,14.727,0,0,1,3.442,3.7,78.569,78.569,0,0,1,4.8,8.2l6.445,12.231q2.416,4.615,4.907,9.082a86.662,86.662,0,0,0,5.274,8.35h20.288v-3.589a13.872,13.872,0,0,1-5.64-2.051,18.127,18.127,0,0,1-4.175-4.248,71.992,71.992,0,0,1-4.907-8.056l-6.592-12.012a52.616,52.616,0,0,0-7.068-10.584,21.522,21.522,0,0,0-7.653-5.236v-0.586q11.058-3.956,16.589-10.987a26.758,26.758,0,0,0,5.53-17.065q0-13.11-8.5-19.336t-25.635-6.226H278.67v3.589a24.87,24.87,0,0,1,4.761,1.721,6.249,6.249,0,0,1,2.234,2.051,9.247,9.247,0,0,1,1.208,3.589,52.326,52.326,0,0,1,.366,7.361v63.354a49.586,49.586,0,0,1-.476,8.057,7.076,7.076,0,0,1-2.014,4.065q-1.538,1.428-6.079,2.6V269h30.908v-3.589a24.679,24.679,0,0,1-4.761-1.721,6.163,6.163,0,0,1-2.2-1.978,9.375,9.375,0,0,1-1.208-3.588,51.148,51.148,0,0,1-.4-7.654v-24.9h8.056Zm2.637-50.1q8.2,0,13.037,2.417a15.854,15.854,0,0,1,7.215,7.031,25.112,25.112,0,0,1,2.38,11.572,27.9,27.9,0,0,1-2.014,11.243,17.7,17.7,0,0,1-5.383,7.141,19.1,19.1,0,0,1-7.325,3.479,47.249,47.249,0,0,1-10.327.916h-8.276V175.763q4.1-.292,10.693-0.293h0Z"
          />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLogo;