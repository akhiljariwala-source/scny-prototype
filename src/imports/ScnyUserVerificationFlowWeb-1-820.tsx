import svgPaths from "./svg-92xnf3z35o";
import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";
import { imgForeground } from "./svg-40vno";

function Text() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[58px] not-italic text-[#0a0a0a] text-[18px] text-center top-0 whitespace-nowrap">SmartCharge</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[82.742px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[41.5px] not-italic text-[#0a0a0a] text-[18px] text-center top-0 whitespace-nowrap">New York</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[28px] relative shrink-0 w-[207.633px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function ImageConEdison() {
  return (
    <div className="h-[20px] relative shrink-0 w-[106.594px]" data-name="Image (Con Edison)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageConEdison} />
    </div>
  );
}

function ImageOrangeRockland() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Image (Orange & Rockland)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageOrangeRockland} />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[334.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[48px] items-center px-[16px] relative size-full">
        <ImageConEdison />
        <ImageOrangeRockland />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[72px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container1 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[105px] items-start left-0 pb-px pt-[16px] px-[379.5px] top-0 w-[1359px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute left-[24px] size-[24px] top-[32px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute contents inset-[0_0_-0.01%_0]" data-name="Layer_1">
      <div className="absolute inset-[0_0_-0.01%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[174.5px_122.906px]" data-name="Foreground" style={{ maskImage: `url('${imgForeground}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174.504 122.916">
          <path d={svgPaths.p1ef99800} fill="var(--fill-0, #0E2B2E)" id="Foreground" />
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Layer1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[122.906px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[122.906px] items-start left-[189px] top-[39px] w-[174.5px]" data-name="Layer">
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[200px] left-[24px] top-[110.5px] w-[552px]" data-name="Container">
      <Layer />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[276.31px] not-italic text-[#6a7282] text-[16px] text-center top-[-1px] whitespace-nowrap">{`We've set up your`}</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[276.02px] not-italic text-[#0e2b2e] text-[24px] text-center top-[-1px] w-[537px]">Ford Mach-E Select, Standard Range (68kWh)</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[24px] top-[342.5px] w-[552px]" data-name="Container">
      <Paragraph />
      <Heading />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] top-[-1px] whitespace-nowrap">Make</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[34.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0e2b2e] text-[16px] top-[-1px] whitespace-nowrap">Ford</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] top-[-1px] whitespace-nowrap">Model</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[60.195px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0e2b2e] text-[16px] top-[-1px] whitespace-nowrap">Mach-E</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[33.492px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] top-[-1px] whitespace-nowrap">Trim</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[252.086px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0e2b2e] text-[16px] top-[-1px] whitespace-nowrap">Select, Standard Range (68kWh)</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[120px] items-start left-[24px] top-[438.5px] w-[552px]" data-name="Container">
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[251.02px] not-italic text-[#4a5565] text-[16px] text-center top-[-1px] w-[493px]">Unfortunately, your EV is not compatible with this program. To participate in the program, please connect a compatible charging station.</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col h-[128px] items-start left-[24px] pb-px pt-[25px] px-[25px] rounded-[10px] top-[590.5px] w-[552px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#0e2b2e] h-[48px] left-[24px] rounded-[16777200px] top-[758.5px] w-[552px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[276.42px] not-italic text-[16px] text-center text-white top-[11px] whitespace-nowrap">Continue</p>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[838.5px] left-[379.5px] top-[105px] w-[600px]" data-name="Main Content">
      <Button1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container8 />
      <Button2 />
    </div>
  );
}

export default function ScnyUserVerificationFlowWeb() {
  return (
    <div className="bg-white relative size-full" data-name="SCNY user verification flow - web">
      <Header />
      <MainContent />
    </div>
  );
}