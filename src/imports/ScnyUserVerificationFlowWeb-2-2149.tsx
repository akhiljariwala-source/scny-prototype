import svgPaths from "./svg-j0agq9hco0";
import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";

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
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[185.016px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[93px] not-italic text-[#0a0a0a] text-[20px] text-center top-[-0.5px] whitespace-nowrap">2/2 Verify eligibility</p>
      </div>
    </div>
  );
}

function Container4() {
  return <div className="h-0 shrink-0 w-[24px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Heading1 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return <div className="bg-[#00a0df] h-[8px] rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px] w-[443px]">Click here to learn more about the SmartCharge New York program</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#4fbeeb] h-[80px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <Text2 />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[30px]">Create an account</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1px] whitespace-nowrap">What is your electric utility?</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#0e2b2e] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[91.45px] not-italic text-[16px] text-center text-white top-[11px] whitespace-nowrap">Con Edison</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[91.79px] not-italic text-[#4a5565] text-[16px] text-center top-[11px] whitespace-nowrap">{`O&R`}</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[90.86px] not-italic text-[#4a5565] text-[16px] text-center top-[11px] whitespace-nowrap">Other</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[52px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[2px] pr-[2.008px] py-[2px] relative size-full">
          <Button3 />
          <Button4 />
          <Button5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#0e2b2e] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[552px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1px] whitespace-nowrap">Utility Account Number (optional)</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[40px] left-[4px] top-[92px] w-[548px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] w-[529px]">Your 11-digit utility account number as it appears on your bill. If you plan to participate using your home charger, you must provide a utility account number.</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[52px] left-0 rounded-[10px] top-[32px] w-[552px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">00000-00000-0</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[132px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <Paragraph1 />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1px] whitespace-nowrap">What kind of utility account do you have?</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#0e2b2e] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[137.65px] not-italic text-[16px] text-center text-white top-[11px] whitespace-nowrap">Residential</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[137.98px] not-italic text-[#4a5565] text-[16px] text-center top-[11px] whitespace-nowrap">Business</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[52px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Button6 />
        <Button7 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#0e2b2e] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container10 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[285.164px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1px] whitespace-nowrap">Are you on a Time of Use (TOU) rate?</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.15%_37.83%_45.83%_37.88%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-17.15%_-16.66%_-17.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.52523 6.67062">
            <path d={svgPaths.p3f45e600} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Button8 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#0e2b2e] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[137.11px] not-italic text-[16px] text-center text-white top-[11px] whitespace-nowrap">No</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[137.13px] not-italic text-[#4a5565] text-[16px] text-center top-[11px] whitespace-nowrap">Yes</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[52px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Button9 />
        <Button10 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#0e2b2e] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1px] w-[478px]">Are the vehicles you plan to enroll in the program registered as Passenger or Commercial vehicles?</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#0e2b2e] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[137.98px] not-italic text-[16px] text-center text-white top-[11px] whitespace-nowrap">Passenger</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[137.26px] not-italic text-[#4a5565] text-[16px] text-center top-[11px] whitespace-nowrap">Commercial</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[52px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Button11 />
        <Button12 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#0e2b2e] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[108px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Container15 />
    </div>
  );
}

function Checkbox() {
  return <div className="absolute h-[20px] left-0 top-[4px] w-[17.695px]" data-name="Checkbox" />;
}

function Label4() {
  return (
    <div className="absolute h-[40px] left-[29.7px] top-0 w-[522.305px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[513px]">
        <span className="leading-[20px]">{`I have read and agree to the SmartCharge New York `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] text-[#4a9ee0] underline">Participation Agreement</span>
        <span className="leading-[20px]">{` (Required).`}</span>
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Checkbox />
      <Label4 />
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#d1d5dc] h-[48px] relative rounded-[16777200px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[276.42px] not-italic text-[#6a7282] text-[16px] text-center top-[11px] whitespace-nowrap">Continue</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[716px] items-start relative shrink-0 w-full" data-name="Form">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container11 />
      <Container14 />
      <Container16 />
      <Button13 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[808px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
      <Form />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[1100px] items-start left-[379.5px] pt-[48px] px-[24px] top-[105px] w-[600px]" data-name="Main Content">
      <Container2 />
      <Button2 />
      <Container6 />
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