import svgPaths from "./svg-afaacmae25";
import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";
import imgAcuraLogo from "figma:asset/a28cd1e2595f356d56950c4bb8e6ef422be74fce.png";
import imgAutelLogo from "figma:asset/128d9859532f4666385693fa6a195150d8f4a35c.png";
import imgImage15 from "figma:asset/4cc26f003b054e83558e22a1b473200f80689dbc.png";
import imgTeslaLogo from "figma:asset/08737406dafe01ead0737a5315f0b7b27fbafd51.png";
import imgWallboxLogo from "figma:asset/6c85bc80d416fc9b3c63962cba57611785e9d5e6.png";
import { imgFill3 } from "./svg-1zlt3";

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

function AcuraLogo() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="AcuraLogo">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgAcuraLogo} />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <AcuraLogo />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[25px] not-italic text-[#101828] text-[18px] text-center top-0 whitespace-nowrap">Acura</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[48px] relative shrink-0 w-[114.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container4 />
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#e6f7ff] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[26px] not-italic text-[#00a0df] text-[14px] text-center top-[4.5px] whitespace-nowrap">BETA</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[83.914px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text3 />
        <Icon1 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[16px] relative size-full">
          <Container3 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function AutelLogo() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="AutelLogo">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgAutelLogo} />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <AutelLogo />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[43.633px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[22px] not-italic text-[#101828] text-[18px] text-center top-0 whitespace-nowrap">Autel</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[48px] relative shrink-0 w-[107.633px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container7 />
        <Text4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#e6f7ff] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[26px] not-italic text-[#00a0df] text-[14px] text-center top-[4.5px] whitespace-nowrap">BETA</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[83.914px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text5 />
        <Icon2 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[16px] relative size-full">
          <Container6 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="h-[31px] relative shrink-0 w-[57px]" data-name="image 15">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[52px] not-italic text-[#101828] text-[18px] text-center top-0 whitespace-nowrap">ChargePoint</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[48px] relative shrink-0 w-[168.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container10 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-8.33%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 11.6667">
              <path d={svgPaths.p324d0480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[16px] relative size-full">
          <Container9 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute contents inset-[34.91%_0]" data-name="Vector">
      <div className="absolute inset-[43.74%_87%_40.54%_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.24042 7.5432">
          <path d={svgPaths.p26df1580} fill="var(--fill-0, #579F44)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.75%_63.2%_40.84%_15.41%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2693 7.39641">
          <path d={svgPaths.p17605f00} fill="var(--fill-0, #579F44)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.75%_47.06%_34.91%_39.56%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.42049 10.2441">
          <path d={svgPaths.p2eec7b00} fill="var(--fill-0, #579F44)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.75%_0_40.58%_87.01%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.23393 7.51796">
          <path d={svgPaths.p3364f230} fill="var(--fill-0, #579F44)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.74%_31.22%_40.53%_55.01%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.61104 7.54844">
          <path d={svgPaths.p6b2b800} fill="var(--fill-0, #579F44)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.76%_20.78%_40.85%_71%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.94331 7.38406">
          <path d={svgPaths.p15f79600} fill="var(--fill-0, #579F44)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[44.02%_15.71%_40.85%_81.18%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.48959 7.26108">
          <path d={svgPaths.p39324570} fill="var(--fill-0, #579F44)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.91%_11.48%_58.64%_78.3%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.90922 3.09566">
          <path d={svgPaths.p5b7e500} fill="var(--fill-0, #579F44)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Emporia() {
  return (
    <div className="absolute contents inset-[34.91%_0]" data-name="Emporia">
      <Vector />
      <div className="absolute inset-[34.91%_11.47%_59.55%_79.13%]" data-name="Vector_2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.50845 2.65906">
          <path d={svgPaths.p16504280} fill="var(--fill-0, #B0C236)" id="Vector_2" />
        </svg>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Emporia />
    </div>
  );
}

function EmporiaLogo() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="EmporiaLogo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <EmporiaLogo />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[35px] not-italic text-[#101828] text-[18px] text-center top-0 whitespace-nowrap">Emporia</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[48px] relative shrink-0 w-[133.82px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container13 />
        <Text7 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-8.33%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 11.6667">
              <path d={svgPaths.p324d0480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[16px] relative size-full">
          <Container12 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function HondaLogo1() {
  return (
    <div className="absolute contents inset-[27.78%_15.69%_27.46%_15.08%]" data-name="Honda Logo">
      <div className="absolute inset-[64.43%_30.32%_28.13%_57.36%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-27.535px_-19.878px] mask-size-[48px_25.905px]" data-name="Fill-3" style={{ maskImage: `url('${imgFill3}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.91238 3.56903">
          <path clipRule="evenodd" d={svgPaths.p226aa200} fill="var(--fill-0, #357ABB)" fillRule="evenodd" id="Fill-3" />
        </svg>
      </div>
      <div className="absolute inset-[64.38%_15.69%_28.26%_69.07%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-33.152px_-19.856px] mask-size-[48px_25.905px]" data-name="Fill-5" style={{ maskImage: `url('${imgFill3}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.31851 3.53303">
          <path clipRule="evenodd" d={svgPaths.p19ff67f0} fill="var(--fill-0, #357ABB)" fillRule="evenodd" id="Fill-5" />
        </svg>
      </div>
      <div className="absolute inset-[64.5%_43.91%_27.98%_42.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-20.361px_-19.915px] mask-size-[48px_25.905px]" data-name="Fill-8" style={{ maskImage: `url('${imgFill3}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.56129 3.6051">
          <path clipRule="evenodd" d={svgPaths.p2c7f8b80} fill="var(--fill-0, #357ABB)" fillRule="evenodd" id="Fill-8" />
        </svg>
      </div>
      <div className="absolute inset-[63.97%_58.32%_27.46%_29.36%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-14.092px_-19.66px] mask-size-[48px_25.905px]" data-name="Fill-10" style={{ maskImage: `url('${imgFill3}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.91238 4.10979">
          <path clipRule="evenodd" d={svgPaths.pde687f0} fill="var(--fill-0, #357ABB)" fillRule="evenodd" id="Fill-10" />
        </svg>
      </div>
      <div className="absolute inset-[64.43%_70.58%_28.06%_15.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7.238px_-19.878px] mask-size-[48px_25.905px]" data-name="Fill-1" style={{ maskImage: `url('${imgFill3}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.88575 3.6051">
          <path clipRule="evenodd" d={svgPaths.p42a8900} fill="var(--fill-0, #357ABB)" fillRule="evenodd" id="Fill-1" />
        </svg>
      </div>
      <div className="absolute inset-[30.56%_38.53%_43.68%_38.94%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-18.691px_-3.62px] mask-size-[48px_25.905px]" data-name="Fill-13" style={{ maskImage: `url('${imgFill3}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8153 12.3655">
          <path clipRule="evenodd" d={svgPaths.peff7300} fill="var(--fill-0, #357ABB)" fillRule="evenodd" id="Fill-13" />
        </svg>
      </div>
      <div className="absolute inset-[27.78%_31.35%_40.53%_31.43%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-15.086px_-2.286px] mask-size-[48px_25.905px]" data-name="Fill-15" style={{ maskImage: `url('${imgFill3}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8633 15.2135">
          <path clipRule="evenodd" d={svgPaths.p686a600} fill="var(--fill-0, #357ABB)" fillRule="evenodd" id="Fill-15" />
        </svg>
      </div>
    </div>
  );
}

function Honda() {
  return (
    <div className="absolute contents inset-[27.78%_15.69%_27.46%_15.08%]" data-name="Honda">
      <HondaLogo1 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[23.02%_0]" data-name="Clip path group">
      <Honda />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function HondaLogo() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="HondaLogo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <HondaLogo />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[28px] not-italic text-[#101828] text-[18px] text-center top-0 whitespace-nowrap">Honda</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[48px] relative shrink-0 w-[119.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container16 />
        <Text8 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#e6f7ff] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[26px] not-italic text-[#00a0df] text-[14px] text-center top-[4.5px] whitespace-nowrap">BETA</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[28px] relative shrink-0 w-[83.914px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text9 />
        <Icon7 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[16px] relative size-full">
          <Container15 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function TeslaLogo() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="TeslaLogo">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgTeslaLogo} />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <TeslaLogo />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[28px] relative shrink-0 w-[44.68px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[22.5px] not-italic text-[#101828] text-[18px] text-center top-0 whitespace-nowrap">Tesla</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[48px] relative shrink-0 w-[108.68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container19 />
        <Text10 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-8.33%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 11.6667">
              <path d={svgPaths.p324d0480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[16px] relative size-full">
          <Container18 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function WallboxLogo() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="WallboxLogo">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgWallboxLogo} />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <WallboxLogo />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[33.5px] not-italic text-[#101828] text-[18px] text-center top-0 whitespace-nowrap">Wallbox</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[48px] relative shrink-0 w-[130.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container22 />
        <Text11 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#e6f7ff] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[26px] not-italic text-[#00a0df] text-[14px] text-center top-[4.5px] whitespace-nowrap">BETA</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[28px] relative shrink-0 w-[83.914px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text12 />
        <Icon9 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[16px] relative size-full">
          <Container21 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[567px] items-start left-[24px] top-[162.5px] w-[552px]" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute h-[24px] left-[211.48px] top-[777.5px] w-[177.031px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[89px] not-italic text-[#00a0df] text-[16px] text-center top-[-1px] whitespace-nowrap">My charger is not listed</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[52px] left-0 rounded-[10px] top-0 w-[552px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Search</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[52px] left-[24px] top-[86.5px] w-[552px]" data-name="Container">
      <TextInput />
      <Icon10 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[833.5px] left-[379.5px] top-[105px] w-[600px]" data-name="Main Content">
      <Button1 />
      <Container2 />
      <Button9 />
      <Container24 />
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